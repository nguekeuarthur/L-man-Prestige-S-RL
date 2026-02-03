import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

const MAX_BYTES = 20 * 1024 * 1024; // 20MB

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const firstName = String(form.get('firstName') || '');
    const lastName = String(form.get('lastName') || '');
    const email = String(form.get('email') || '');
    const phone = String(form.get('phone') || '');
    const address = String(form.get('address') || '');
    const city = String(form.get('city') || '');

    const idFile = form.get('idFile') as File | null;
    const poursuitesFile = form.get('poursuitesFile') as File | null;
    const salairesFile1 = form.get('salairesFile1') as File | null;
    const salairesFile2 = form.get('salairesFile2') as File | null;
    const salairesFile3 = form.get('salairesFile3') as File | null;

    if (!idFile || !poursuitesFile || !salairesFile1 || !salairesFile2 || !salairesFile3) {
      return NextResponse.json({ ok: false, message: 'Tous les documents sont requis' }, { status: 400 });
    }

    // Validate sizes
    for (const f of [idFile, poursuitesFile, salairesFile1, salairesFile2, salairesFile3]) {
      if ((f as any).size > MAX_BYTES) {
        return NextResponse.json({ ok: false, message: 'Chaque fichier doit être inférieur à 20MB' }, { status: 400 });
      }
    }

    const timestamp = Date.now();
    const uploadsDir = path.join(process.cwd(), 'data', 'relocations');
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    async function saveFile(file: File, prefix: string) {
      const name = `${timestamp}-${prefix}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const dest = path.join(uploadsDir, name);
      const buf = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(dest, buf);
      return name;
    }

    const savedId = await saveFile(idFile, 'id');
    const savedP = await saveFile(poursuitesFile, 'poursuites');
    const savedS1 = await saveFile(salairesFile1, 'salaires1');
    const savedS2 = await saveFile(salairesFile2, 'salaires2');
    const savedS3 = await saveFile(salairesFile3, 'salaires3');

    const record = {
      id: timestamp,
      createdAt: new Date().toISOString(),
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      files: { id: savedId, poursuites: savedP, salaires: [savedS1, savedS2, savedS3] }
    };

    const logFile = path.join(process.cwd(), 'data', 'relocations.log');
    fs.appendFileSync(logFile, JSON.stringify(record) + '\n');

    return NextResponse.json({ ok: true, message: 'Demande reçue' });
  } catch (err) {
    console.error('Error in /api/relocation:', err);
    return NextResponse.json({ ok: false, message: 'Erreur serveur' }, { status: 500 });
  }
}
