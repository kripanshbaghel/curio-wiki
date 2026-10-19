import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ProviderError } from '@/lib/errors';
import { resetRateLimiterForTests } from '@/lib/ratelimit';
import { runUnifiedSearch } from '@/lib/search/orchestrator';
import type { SearchResponse } from '@/lib/search/types';
import { GET, POST } from '@/app/api/search/route';

vi.mock('@/lib/search/orchestrator', () => ({
  runUnifiedSearch: vi.fn(),
}));

const mockRunUnifiedSearch = vi.mocked(runUnifiedSearch);

const validResponse: SearchResponse = {
  query: 'pendulum',
  results: {
    experiments: { id: 'experiments', status: 'ok', data: [] },
    related: { id: 'related', status: 'ok', data: [] },
    wikipedia: { id: 'wikipedia', status: 'ok', data: [] },
  },
};

function searchRequest(queryString: string, headers: Record<string, string> = {}): Request {
  return new Request(`http://localhost/api/search?${queryString}`, { headers });
}

beforeEach(() => {
  resetRateLimiterForTests();
  mockRunUnifiedSearch.mockReset();
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('GET /api/search', () => {
  it('returns 200 with the SearchResponse and no-store caching headers', async () => {
    mockRunUnifiedSearch.mockResolvedValue(validResponse);

    const res = await GET(searchRequest('q=pendulum'));

    expect(res.status).toBe(200);
    expect(res.headers.get('cache-control')).toBe('private, max-age=0');
    expect(await res.json()).toEqual(validResponse);
    expect(mockRunUnifiedSearch).toHaveBeenCalledWith('pendulum', { only: undefined });
  });

  it('returns 400 invalid_query for an invalid query', async () => {
    mockRunUnifiedSearch.mockResolvedValue({
      query: null,
      invalid: 'empty',
      results: {
        experiments: { id: 'experiments', status: 'ok', data: [] },
        related: { id: 'related', status: 'ok', data: [] },
      },
    });

    const res = await GET(searchRequest('q='));

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      error: { code: 'invalid_query', reason: 'empty' },
    });
  });

  it('parses only into SourceIds, dropping unknown ids', async () => {
    mockRunUnifiedSearch.mockResolvedValue(validResponse);

    await GET(searchRequest('q=pendulum&only=web,notasource'));

    expect(mockRunUnifiedSearch).toHaveBeenCalledWith('pendulum', { only: ['web'] });
  });

  it('maps missing q to an invalid_query empty reason without calling the orchestrator', async () => {
    const res = await GET(searchRequest('x=1'));

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      error: { code: 'invalid_query', reason: 'empty' },
    });
    expect(mockRunUnifiedSearch).not.toHaveBeenCalled();
  });

  it('never 500s on provider failures: orchestrator ProviderError becomes 200 with error sections', async () => {
    mockRunUnifiedSearch.mockRejectedValue(
      new ProviderError('youtube', 'quota', 'YouTube quota exhausted', { retryable: false }),
    );

    const res = await GET(searchRequest('q=pendulum'));

    expect(res.status).toBe(200);
    const body = (await res.json()) as SearchResponse;
    expect(body.results.youtube).toEqual({
      id: 'youtube',
      status: 'error',
      error: { code: 'quota', message: 'YouTube quota exhausted', retryable: false },
    });
    expect(body.results.wikipedia?.status).toBe('error');
  });

  it('rate limits after 30 requests per minute with Retry-After', async () => {
    mockRunUnifiedSearch.mockResolvedValue(validResponse);

    for (let i = 0; i < 30; i += 1) {
      const ok = await GET(searchRequest('q=pendulum', { 'x-forwarded-for': '203.0.113.9' }));
      expect(ok.status).toBe(200);
    }

    const limited = await GET(searchRequest('q=pendulum', { 'x-forwarded-for': '203.0.113.9' }));
    expect(limited.status).toBe(429);
    expect(limited.headers.get('retry-after')).toBeTruthy();
    expect(await limited.json()).toEqual({ error: { code: 'rate_limited' } });
  });

  it('tracks rate limits per IP', async () => {
    mockRunUnifiedSearch.mockResolvedValue(validResponse);
    for (let i = 0; i < 30; i += 1) {
      await GET(searchRequest('q=pendulum', { 'x-forwarded-for': '203.0.113.9' }));
    }
    const other = await GET(searchRequest('q=pendulum', { 'x-forwarded-for': '198.51.100.7' }));
    expect(other.status).toBe(200);
  });

  it('rejects non-GET methods with 405 and Allow header', async () => {
    const res = await POST();
    expect(res.status).toBe(405);
    expect(res.headers.get('allow')).toBe('GET');
  });
});
