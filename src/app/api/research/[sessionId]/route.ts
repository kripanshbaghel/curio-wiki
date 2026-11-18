import { NextResponse } from 'next/server';
import { getResearch, finishResearch } from '@/lib/research';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> },
): Promise<Response> {
  const { sessionId } = await params;
  const data = getResearch(sessionId);
  if (!data) {
    return NextResponse.json({ error: { code: 'not_found', message: 'Research data not found or expired.' } }, { status: 404 });
  }
  return NextResponse.json({ ok: true, data });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> },
): Promise<Response> {
  const { sessionId } = await params;
  const removed = finishResearch(sessionId);
  if (!removed) {
    return NextResponse.json({ error: { code: 'not_found', message: 'Research data not found.' } }, { status: 404 });
  }
  return NextResponse.json({ ok: true, sessionId });
}
