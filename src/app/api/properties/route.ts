import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const city = url.searchParams.get('city') || '';
    const budget = url.searchParams.get('budget') || '';
    const rooms = url.searchParams.get('rooms') || '';

    const dataPath = path.join(process.cwd(), 'src', 'data', 'properties.json');
    if (!fs.existsSync(dataPath)) return NextResponse.json([]);
    const raw = fs.readFileSync(dataPath, 'utf8');
    const items = JSON.parse(raw);

    let results = items;
    if (city) {
      const c = city.toLowerCase();
      results = results.filter((i: any) => (i.location || '').toLowerCase().includes(c) || (i.title || '').toLowerCase().includes(c));
    }
    if (rooms) {
      const r = Number(rooms);
      if (!isNaN(r)) results = results.filter((i: any) => Number(i.rooms) >= r);
    }
    if (budget) {
      // naive numeric parse of price strings
      const b = Number(budget.replace(/[^0-9]/g, ''));
      if (!isNaN(b) && b > 0) {
        results = results.filter((i: any) => {
          const p = Number(String(i.price || '').replace(/[^0-9]/g, ''));
          return !isNaN(p) && p <= b;
        });
      }
    }

    return NextResponse.json(results);
  } catch (e) {
    console.error('Error reading properties', e);
    return NextResponse.json([]);
  }
}
