import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ['firstName', 'lastName', 'email', 'phone', 'city', 'privacy'];
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

    const record = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      firstName: String(body.firstName).trim(),
      lastName: String(body.lastName).trim(),
      email,
      phone: String(body.phone).trim(),
      minRooms: body.minRooms ? String(body.minRooms).trim() : '',
      maxBudget: body.maxBudget ? String(body.maxBudget).trim() : '',
      city: String(body.city).trim(),
      moveDate: body.moveDate || '',
      description: String(body.description || '').trim(),
      privacy: Boolean(body.privacy)
    };

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    const file = path.join(dataDir, 'relocation-searches.log');
    fs.appendFileSync(file, JSON.stringify(record) + '\n');

    // Log to console for debugging
    console.log('New relocation search request received:', record);

    return NextResponse.json({ ok: true, message: 'Demande reçue' });
  } catch (err) {
    console.error('Error in /api/relocation-search:', err);
    return NextResponse.json({ ok: false, message: 'Server error' }, { status: 500 });
  }
}
