import { afterEach, describe, expect, it, vi } from 'vitest';
import { __clearCacheForTests } from '@/lib/cache';
import { isSafeExternalUrl, searchWeb } from '@/lib/adapters/web';
import { ProviderError } from '@/lib/errors';

function jsonResponse(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...headers },
  });
}

const tavilyFixture = {
  query: 'volcano experiment for kids',
  response_time: 1.2,
  results: [
    {
      title: 'Safe Volcano Experiments',
      url: 'https://example.org/volcano',
      content: 'Baking soda and vinegar <strong>volcano</strong> models are classic.',
      score: 0.9,
    },
    {
      title: 'Unsafe link',
      url: 'javascript:alert(1)',
      content: 'should be dropped',
      score: 0.5,
    },
  ],
};

const braveFixture = {
  web: {
    results: [
      {
        title: 'NASA Climate <strong>Evidence</strong>',
        url: 'https://www.nasa.gov/climate-evidence/',
        description: 'Evidence from <strong>climate</strong> observations.',
      },
      { title: 'No url entry', description: 'dropped' },
    ],
  },
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  __clearCacheForTests();
});

describe('isSafeExternalUrl', () => {
  it('accepts plain http and https URLs', () => {
    expect(isSafeExternalUrl('https://example.org/path?x=1')).toBe(true);
    expect(isSafeExternalUrl('http://example.org')).toBe(true);
  });

  it('rejects non-http protocols', () => {
    expect(isSafeExternalUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeExternalUrl('data:text/html,x')).toBe(false);
    expect(isSafeExternalUrl('ftp://example.org/file')).toBe(false);
  });

  it('rejects relative URLs and URLs with credentials', () => {
    expect(isSafeExternalUrl('/local/path')).toBe(false);
    expect(isSafeExternalUrl('https://user:pass@example.org/')).toBe(false);
  });
});

describe('searchWeb', () => {
  it('throws a config ProviderError when no provider key is set and never calls the network', async () => {
    vi.stubEnv('TAVILY_API_KEY', '');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const err = await searchWeb('volcano experiment').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('config');
    expect((err as ProviderError).provider).toBe('web');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('queries Tavily with Bearer auth and normalizes results, stripping tags and dropping unsafe URLs', async () => {
    vi.stubEnv('TAVILY_API_KEY', 'tvly-test');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(tavilyFixture));
    vi.stubGlobal('fetch', fetchMock);

    const results = await searchWeb('volcano experiment for kids', { maxResults: 5 });

    expect(results).toEqual([
      {
        title: 'Safe Volcano Experiments',
        url: 'https://example.org/volcano',
        snippet: 'Baking soda and vinegar volcano models are classic.',
        domain: 'example.org',
      },
    ]);

    const [requestUrl, requestInit] = fetchMock.mock.calls[0] as [URL, RequestInit];
    expect(String(requestUrl)).toBe('https://api.tavily.com/search');
    expect((requestInit.headers as Record<string, string>).Authorization).toBe('Bearer tvly-test');
    const body = JSON.parse(String(requestInit.body)) as Record<string, unknown>;
    expect(body.query).toBe('volcano experiment for kids');
    expect(body.max_results).toBe(5);
    expect(body.include_answer).toBe(false);
  });

  it('prefers Tavily when both provider keys are set', async () => {
    vi.stubEnv('TAVILY_API_KEY', 'tvly-test');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', 'BSA-test');
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ results: [] }));
    vi.stubGlobal('fetch', fetchMock);

    await searchWeb('photosynthesis');
    expect(String(fetchMock.mock.calls[0][0])).toContain('api.tavily.com');
  });

  it('falls back to Brave when only BRAVE_SEARCH_API_KEY is set', async () => {
    vi.stubEnv('TAVILY_API_KEY', '');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', 'BSA-test');
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(braveFixture));
    vi.stubGlobal('fetch', fetchMock);

    const results = await searchWeb('climate evidence', { maxResults: 3 });

    expect(results).toEqual([
      {
        title: 'NASA Climate Evidence',
        url: 'https://www.nasa.gov/climate-evidence/',
        snippet: 'Evidence from climate observations.',
        domain: 'nasa.gov',
      },
    ]);

    const [requestUrl, requestInit] = fetchMock.mock.calls[0] as [URL, RequestInit];
    expect(String(requestUrl)).toContain('api.search.brave.com/res/v1/web/search');
    expect(String(requestUrl)).toContain('count=3');
    expect((requestInit.headers as Record<string, string>)['X-Subscription-Token']).toBe('BSA-test');
  });

  it('returns an empty array when Tavily reports no results', async () => {
    vi.stubEnv('TAVILY_API_KEY', 'tvly-test');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(jsonResponse({ query: 'x', results: [] })));
    await expect(searchWeb('zzz-no-results-web')).resolves.toEqual([]);
  });

  it('classifies Tavily 401 as an auth error', async () => {
    vi.stubEnv('TAVILY_API_KEY', 'bad-key');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(jsonResponse({ detail: { error: 'Unauthorized' } }, 401)));

    const err = await searchWeb('volcano').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('auth');
  });

  it('classifies Tavily 429 as a retryable rate_limited error', async () => {
    vi.stubEnv('TAVILY_API_KEY', 'tvly-test');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(jsonResponse({ detail: { error: 'Too many requests' } }, 429)),
    );

    const err = await searchWeb('volcano').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('rate_limited');
    expect((err as ProviderError).retryable).toBe(true);
  });

  it('classifies Tavily 432 plan-limit as a non-retryable quota error', async () => {
    vi.stubEnv('TAVILY_API_KEY', 'tvly-test');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(jsonResponse({ detail: { error: 'Plan limit exceeded' } }, 432)),
    );

    const err = await searchWeb('volcano').catch((e: unknown) => e);
    expect((err as ProviderError).code).toBe('quota');
    expect((err as ProviderError).retryable).toBe(false);
  });

  it('classifies network timeouts as a network error', async () => {
    vi.stubEnv('TAVILY_API_KEY', 'tvly-test');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new DOMException('The operation was aborted.', 'AbortError')),
    );

    const err = await searchWeb('volcano').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('network');
    expect((err as ProviderError).retryable).toBe(true);
  });
});
