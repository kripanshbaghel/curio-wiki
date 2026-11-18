import { NextResponse } from 'next/server';
import { cleanupExpiredResearch, getResearchStats } from '@/lib/research';

export async function POST(): Promise<Response> {
  const removed = cleanupExpiredResearch();
  const stats = getResearchStats();
  return NextResponse.json({ ok: true, removed, ...stats });
}
