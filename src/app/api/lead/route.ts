import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
// Lazy import nodemailer when SMTP is configured
let nodemailer: any = null;
try { nodemailer = require('nodemailer'); } catch (e) { nodemailer = null; }

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ['firstName', 'lastName', 'email', 'phone', 'service', 'description', 'privacy'];
    for (const f of required) {
      if (body[f] === undefined || body[f] === null || body[f] === '') {
        return NextResponse.json({ ok: false, message: `Missing ${f}` }, { status: 400 });
      }
    }

    // basic email validation
    const email = String(body.email || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, message: 'Invalid email' }, { status: 400 });
    }

    const lead = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      firstName: String(body.firstName).trim(),
      lastName: String(body.lastName).trim(),
      email,
      phone: String(body.phone).trim(),
      service: String(body.service).trim(),
      address: body.address ? String(body.address).trim() : '',
      city: body.city ? String(body.city).trim() : '',
      date: body.date || '',
      description: String(body.description).trim(),
      privacy: Boolean(body.privacy)
    };

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    const file = path.join(dataDir, 'leads.log');
    fs.appendFileSync(file, JSON.stringify(lead) + '\n');

    // If SMTP env vars are provided, attempt to send an email
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const leadsTo = process.env.LEADS_TO;
    const leadsFrom = process.env.LEADS_FROM || `no-reply@${process.env.NEXT_PUBLIC_SITE_DOMAIN || 'localhost'}`;

    if (nodemailer && smtpHost && smtpPort && smtpUser && smtpPass && leadsTo) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(smtpPort),
          secure: Number(smtpPort) === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        // Build styled HTML email with company colors
        const accent = '#C5A059';
        const bg = '#051622';
        const mailHtmlHeader = `
          <div style="background:${bg};padding:20px;border-radius:8px;color:#fff;font-family:Arial,Helvetica,sans-serif;">
            <h1 style="margin:0;color:${accent};">Léman Prestige</h1>
            <p style="margin:4px 0 0;color:#ddd;font-size:14px">Nouvelle demande de devis</p>
          </div>
        `;

        const detailsHtml = `
          <div style="padding:18px 0;font-family:Arial,Helvetica,sans-serif;color:#222;">
            <h2 style="color:${bg};margin:0 0 8px;">Détails du lead</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333;">
              <tr><td style="padding:6px 0;font-weight:600;width:140px;">Service</td><td style="padding:6px 0;">${lead.service}</td></tr>
              <tr><td style="padding:6px 0;font-weight:600;">Nom</td><td style="padding:6px 0;">${lead.firstName} ${lead.lastName}</td></tr>
              <tr><td style="padding:6px 0;font-weight:600;">Email</td><td style="padding:6px 0;">${lead.email}</td></tr>
              <tr><td style="padding:6px 0;font-weight:600;">Téléphone</td><td style="padding:6px 0;">${lead.phone}</td></tr>
              <tr><td style="padding:6px 0;font-weight:600;">Adresse</td><td style="padding:6px 0;">${lead.address || '-'} ${lead.city || ''}</td></tr>
              <tr><td style="padding:6px 0;font-weight:600;">Date souhaitée</td><td style="padding:6px 0;">${lead.date || '-'}</td></tr>
            </table>
            <div style="margin-top:12px;padding:12px;background:#f7f7f7;border-radius:6px;color:#111;">
              <strong>Message :</strong>
              <div style="margin-top:6px;white-space:pre-wrap;">${lead.description.replace(/\n/g, '<br/>')}</div>
            </div>
          </div>
        `;

        // If a date is provided, create an .ics and Google Calendar link
        let attachments: any[] = [];
        let calendarLinkHtml = '';
        if (lead.date) {
          try {
            // default event time: 10:00 - 11:00 local time
            const startLocal = new Date(`${lead.date}T10:00:00`);
            const endLocal = new Date(`${lead.date}T11:00:00`);
            const dtStart = startLocal.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
            const dtEnd = endLocal.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

            const icsLines = [
              'BEGIN:VCALENDAR',
              'VERSION:2.0',
              'PRODID:-//Leman Prestige//EN',
              'CALSCALE:GREGORIAN',
              'BEGIN:VEVENT',
              `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
              `DTSTART:${dtStart}`,
              `DTEND:${dtEnd}`,
              `SUMMARY:RDV - ${lead.service} - Léman Prestige`,
              `DESCRIPTION:${(lead.description || '').replace(/\n/g, '\\n')}`,
              `LOCATION:${(lead.address || '')} ${(lead.city || '')}`,
              'END:VEVENT',
              'END:VCALENDAR'
            ];

            const icsContent = icsLines.join('\r\n');
            attachments.push({ filename: 'lemanprestige-event.ics', content: icsContent, contentType: 'text/calendar' });

            // Google Calendar link
            const gStart = dtStart.replace(/Z$/, 'Z');
            const gEnd = dtEnd.replace(/Z$/, 'Z');
            const gcalHref = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('RDV - ' + lead.service + ' - Léman Prestige')}&dates=${gStart}/${gEnd}&details=${encodeURIComponent(lead.description || '')}&location=${encodeURIComponent((lead.address || '') + ' ' + (lead.city || ''))}&sf=true&output=xml`;

            calendarLinkHtml = `<p style="margin-top:12px"><a href="${gcalHref}" style="display:inline-block;padding:10px 14px;background:${accent};color:#051622;border-radius:6px;text-decoration:none;font-weight:600">Ajouter à Google Calendar</a> <span style="margin-left:8px;color:#777;font-size:13px">(.ics attaché)</span></p>`;
          } catch (e) {
            console.error('Error creating calendar attachment', e);
          }
        }

        const mailHtml = `
          ${mailHtmlHeader}
          <div style="padding:18px 0 0 0;">
            ${detailsHtml}
            ${calendarLinkHtml}
            <p style="color:#666;font-size:13px;margin-top:14px">Ce message a été généré automatiquement par Léman Prestige.</p>
          </div>
        `;

        await transporter.sendMail({
          from: leadsFrom,
          to: leadsTo,
          subject: `Nouveau lead: ${lead.service} - ${lead.firstName} ${lead.lastName}`,
          html: mailHtml,
          text: `${lead.service}\n${lead.firstName} ${lead.lastName}\n${lead.email}\n${lead.phone}\n${lead.city}\n${lead.date}\n\n${lead.description}`,
          attachments
        });

        console.log('Lead email sent to', leadsTo);
      } catch (emailErr) {
        console.error('Failed to send lead email:', emailErr);
      }
    } else {
      // No SMTP configured — log to console only
      console.log('New lead received (no SMTP):', lead);
    }

    return NextResponse.json({ ok: true, message: 'Lead saved' });
  } catch (err) {
    console.error('Error in /api/lead:', err);
    return NextResponse.json({ ok: false, message: 'Server error' }, { status: 500 });
  }
}
