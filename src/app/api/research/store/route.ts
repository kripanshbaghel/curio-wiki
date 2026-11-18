import { NextResponse } from 'next/server';
import { storeResearch, type ResearchData } from '@/lib/research';

function jsonBody(request: Request): Promise<unknown> {
  return request.json().catch(() => null);
}

function isString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

export async function POST(request: Request): Promise<Response> {
  const body = (await jsonBody(request)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: { code: 'invalid_body', message: 'Request body must be JSON.' } }, { status: 400 });
  }

  const sessionId = body.sessionId;
  const data = body.data;

  if (!isString(sessionId)) {
    return NextResponse.json({ error: { code: 'invalid_session', message: 'sessionId is required.' } }, { status: 400 });
  }

  if (!data || typeof data !== 'object') {
    return NextResponse.json({ error: { code: 'invalid_data', message: 'data is required.' } }, { status: 400 });
  }

  const researchData = data as ResearchData;
  if (!isString(researchData.query)) {
    return NextResponse.json({ error: { code: 'invalid_query', message: 'data.query is required.' } }, { status: 400 });
  }

  storeResearch(sessionId, researchData);

  return NextResponse.json({ ok: true, sessionId });
}
