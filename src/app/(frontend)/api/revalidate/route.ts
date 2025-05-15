import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.MY_SECRET_SANITY_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // Revalidate the specific path(s)
  revalidatePath('/');

  return NextResponse.json({ revalidated: true });
}
