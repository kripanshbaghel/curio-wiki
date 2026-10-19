import { ProviderError, type SourceErrorCode } from '@/lib/errors';
import { checkRateLimit } from '@/lib/ratelimit';
import { runUnifiedSearch } from '@/lib/search/orchestrator';
import { SearchResponseSchema } from '@/lib/search/schema';
import { SOURCE_IDS, type SearchResponse, type SourceId } from '@/lib/search/types';

function jsonResponse(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...headers },
  });
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function parseOnly(raw: string | null): SourceId[] | undefined {
  if (!raw) return undefined;
  const ids = raw
    .split(',')
    .map((part) => part.trim())
    .filter((part): part is SourceId => (SOURCE_IDS as readonly string[]).includes(part));
  return ids.length > 0 ? ids : undefined;
}

function allSourcesError(
  query: string | null,
  error: { code: SourceErrorCode; message: string; retryable: boolean },
): SearchResponse {
  const section = (id: SourceId) => ({ id, status: 'error' as const, error });
  return {
    query,
    results: {
      experiments: section('experiments'),
      related: section('related'),
      wikipedia: section('wikipedia'),
      wikipediaSummary: section('wikipediaSummary'),
      wikipediaRelated: section('wikipediaRelated'),
      youtube: section('youtube'),
      web: section('web'),
    },
  };
}

export async function GET(request: Request): Promise<Response> {
  const limit = checkRateLimit(clientIp(request));
  if (!limit.ok) {
    return jsonResponse(
      { error: { code: 'rate_limited' } },
      429,
      { 'retry-after': String(limit.retryAfterSeconds ?? 60) },
    );
  }

  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const only = parseOnly(url.searchParams.get('only'));

  if (q === null) {
    return jsonResponse({ error: { code: 'invalid_query', reason: 'empty' } }, 400);
  }

  let response: SearchResponse;
  try {
    response = await runUnifiedSearch(q, { only });
  } catch (error) {
    // Provider/config failures must degrade into honest error sections, never a 500.
    if (error instanceof ProviderError) {
      response = allSourcesError(null, {
        code: error.code,
        message: error.message,
        retryable: error.retryable,
      });
    } else {
      throw error;
    }
  }

  if (response.invalid) {
    return jsonResponse({ error: { code: 'invalid_query', reason: response.invalid } }, 400);
  }

  const parsed = SearchResponseSchema.safeParse(response);
  if (!parsed.success) {
    console.error('search response failed schema validation', parsed.error.issues.slice(0, 5));
    return jsonResponse({ error: { code: 'internal' } }, 500);
  }

  return jsonResponse(response, 200, { 'cache-control': 'private, max-age=0' });
}

export function POST(): Response {
  return jsonResponse(
    { error: { code: 'method_not_allowed' } },
    405,
    { allow: 'GET' },
  );
}
