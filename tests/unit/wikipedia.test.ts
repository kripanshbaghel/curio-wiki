import { afterEach, describe, expect, it, vi } from 'vitest';
import { __clearCacheForTests } from '@/lib/cache';
import {
  getRelatedWikipedia,
  getWikipediaSummary,
  parseActionSearch,
  searchWikipedia,
} from '@/lib/adapters/wikipedia';
import { ProviderError } from '@/lib/errors';

const restSearchFixture = {
  pages: [
    {
      id: 38930,
      key: 'Jupiter',
      title: 'Jupiter',
      excerpt: '<span class="searchmatch">Jupiter</span> is the fifth planet from the Sun',
      matched_title: null,
      description: 'Fifth planet from the Sun',
      thumbnail: {
        mimetype: 'image/png',
        width: 60,
        height: 54,
        duration: null,
        url: '//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Jupiter_new.jpg/60px-Jupiter_new.jpg',
      },
    },
    {
      id: 123,
      key: 'Jupiter (mythology)',
      title: 'Jupiter (mythology)',
      excerpt: 'Jupiter was the king of the gods in <span class="searchmatch">Roman</span> religion',
      matched_title: null,
      description: null,
      thumbnail: null,
    },
  ],
};

const summaryFixture = {
  type: 'standard',
  title: 'Photosynthesis',
  displaytitle: 'Photosynthesis',
  pageid: 18347,
  description: 'Process by which green plants convert light into chemical energy',
  extract: 'Photosynthesis is a process used by plants to convert light energy into chemical energy.',
  content_urls: {
    desktop: { page: 'https://en.wikipedia.org/wiki/Photosynthesis' },
    mobile: { page: 'https://en.m.wikipedia.org/wiki/Photosynthesis' },
  },
  thumbnail: { source: 'https://upload.wikimedia.org/x/leaf.png', width: 100, height: 80 },
};

function jsonResponse(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...headers },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  __clearCacheForTests();
});

describe('searchWikipedia', () => {
  it('parses live-shaped REST search results with excerpt and thumbnail fixes', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(restSearchFixture));
    vi.stubGlobal('fetch', fetchMock);

    const results = await searchWikipedia('jupiter');

    expect(results).toHaveLength(2);
    expect(results[0]).toEqual({
      title: 'Jupiter',
      key: 'Jupiter',
      url: 'https://en.wikipedia.org/wiki/Jupiter',
      description: 'Fifth planet from the Sun',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Jupiter_new.jpg/60px-Jupiter_new.jpg',
      excerpt: 'Jupiter is the fifth planet from the Sun',
    });
    expect(results[1].thumbnailUrl).toBeNull();
    expect(results[1].description).toBeNull();
    expect(String(fetchMock.mock.calls[0][0])).toContain('/w/rest.php/v1/search/page');
  });

  it('tolerates missing optional fields', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        jsonResponse({
          pages: [{ id: 1, key: 'X', title: 'X', excerpt: 'plain excerpt' }],
        }),
      ),
    );
    const results = await searchWikipedia('x');
    expect(results).toHaveLength(1);
    expect(results[0].description).toBeNull();
    expect(results[0].thumbnailUrl).toBeNull();
    expect(results[0].url).toBe('https://en.wikipedia.org/wiki/X');
  });

  it('throws a retryable rate_limited ProviderError on HTTP 429', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('You are making too many requests to the API', {
          status: 429,
          headers: { 'retry-after': '30' },
        }),
      ),
    );
    const err = await searchWikipedia('thermodynamics').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('rate_limited');
    expect((err as ProviderError).provider).toBe('wikipedia');
    expect((err as ProviderError).retryable).toBe(true);
  });

  it('throws invalid_response when the payload does not match the schema', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(jsonResponse({ unexpected: true })));
    const err = await searchWikipedia('entropy').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('invalid_response');
  });
});

describe('getWikipediaSummary', () => {
  it('returns a normalized summary', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(jsonResponse(summaryFixture)));
    const summary = await getWikipediaSummary('Photosynthesis');
    expect(summary).not.toBeNull();
    expect(summary?.title).toBe('Photosynthesis');
    expect(summary?.extract).toContain('Photosynthesis is a process');
    expect(summary?.thumbnailUrl).toBe('https://upload.wikimedia.org/x/leaf.png');
    expect(summary?.pageUrl).toBe('https://en.wikipedia.org/wiki/Photosynthesis');
    expect(summary?.license).toBe('CC BY-SA 4.0');
  });

  it('returns null when the summary is missing a thumbnail', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(jsonResponse({ ...summaryFixture, thumbnail: undefined })),
    );
    const summary = await getWikipediaSummary('Photosynthesis');
    expect(summary?.thumbnailUrl).toBeNull();
  });

  it('returns null on a missing article (HTTP 404)', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(jsonResponse({ status: 404, type: 'Internal error' }, 404)),
    );
    await expect(getWikipediaSummary('Xyzzy no article')).resolves.toBeNull();
  });
});

describe('getRelatedWikipedia', () => {
  it('uses the morelike search and parses action api results', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      jsonResponse({
        query: {
          searchinfo: { totalhits: 2 },
          search: [
            { ns: 0, title: 'Classical mechanics', pageid: 24378, snippet: 'Classical <span class="searchmatch">mechanics</span>' },
            { ns: 0, title: 'Mass', pageid: 21848, snippet: 'mass' },
          ],
        },
      }),
    );
    vi.stubGlobal('fetch', fetchMock);
    const related = await getRelatedWikipedia('Jupiter', 3);
    expect(related.map((r) => r.title)).toEqual(['Classical mechanics', 'Mass']);
    expect(related[0].excerpt).toBe('Classical mechanics');
    expect(String(fetchMock.mock.calls[0][0])).toContain('morelike%3AJupiter');
    expect(String(fetchMock.mock.calls[0][0])).toContain('formatversion=2');
  });

  it('returns an empty array when the related query fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('server error', { status: 500 })),
    );
    await expect(getRelatedWikipedia('Jupiter')).resolves.toEqual([]);
  });

  it('returns an empty array when the action api reports an error payload', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        jsonResponse({
          error: { code: 'missingparam', info: 'The "srsearch" parameter must be set.' },
        }),
      ),
    );
    await expect(getRelatedWikipedia('Jupiter')).resolves.toEqual([]);
  });
});

describe('parseActionSearch', () => {
  it('throws a ProviderError when the action api returns an error object', () => {
    let message = '';
    try {
      parseActionSearch({
        error: { code: 'missingparam', info: 'The "srsearch" parameter must be set.' },
      });
    } catch (e) {
      message = e instanceof Error ? e.message : String(e);
    }
    expect(message).toContain('missingparam');
  });

  it('throws invalid_response on schema mismatch', () => {
    expect(() => parseActionSearch({ query: { nope: true } })).toThrow(ProviderError);
  });
});
