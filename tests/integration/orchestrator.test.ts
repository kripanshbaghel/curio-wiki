import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ProviderError } from '@/lib/errors';
import { runUnifiedSearch } from '@/lib/search/orchestrator';
import type { WikipediaSearchItem, WikipediaSummary } from '@/lib/adapters/wikipedia';
import type { YouTubeVideo } from '@/lib/adapters/youtube';
import type { WebSearchResult } from '@/lib/adapters/web';
import { searchWikipedia, getWikipediaSummary, getRelatedWikipedia } from '@/lib/adapters/wikipedia';
import { searchYouTube } from '@/lib/adapters/youtube';
import { searchWeb } from '@/lib/adapters/web';

vi.mock('@/lib/adapters/wikipedia', () => ({
  searchWikipedia: vi.fn(),
  getWikipediaSummary: vi.fn(),
  getRelatedWikipedia: vi.fn(),
}));
vi.mock('@/lib/adapters/youtube', () => ({ searchYouTube: vi.fn() }));
vi.mock('@/lib/adapters/web', () => ({ searchWeb: vi.fn() }));

const mockSearchWikipedia = vi.mocked(searchWikipedia);
const mockGetWikipediaSummary = vi.mocked(getWikipediaSummary);
const mockGetRelatedWikipedia = vi.mocked(getRelatedWikipedia);
const mockSearchYouTube = vi.mocked(searchYouTube);
const mockSearchWeb = vi.mocked(searchWeb);

const wikiItem: WikipediaSearchItem = {
  title: 'Pendulum',
  key: 'Pendulum',
  url: 'https://en.wikipedia.org/wiki/Pendulum',
  description: 'Mechanical device',
  thumbnailUrl: null,
  excerpt: 'A pendulum is a weight suspended from a pivot.',
};

const wikiSummary: WikipediaSummary = {
  title: 'Pendulum',
  extract: 'A pendulum is a weight suspended from a pivot so that it can swing freely.',
  description: 'Mechanical device',
  thumbnailUrl: null,
  pageUrl: 'https://en.wikipedia.org/wiki/Pendulum',
  mobileUrl: null,
  type: 'standard',
  license: 'CC BY-SA 4.0',
};

const ytVideo: YouTubeVideo = {
  id: 'abc123def45',
  title: 'Pendulum experiment',
  channelTitle: 'Physics Lab',
  thumbnailUrl: null,
  url: 'https://www.youtube.com/watch?v=abc123def45',
  embedUrl: 'https://www.youtube-nocookie.com/embed/abc123def45',
  description: 'Demo',
  publishedAt: null,
  duration: 'PT5M',
  embeddable: true,
  available: true,
};

const webResult: WebSearchResult = {
  title: 'Pendulum science',
  url: 'https://example.org/pendulum',
  snippet: 'All about pendulums.',
  domain: 'example.org',
};

beforeEach(() => {
  mockSearchWikipedia.mockResolvedValue([wikiItem]);
  mockGetWikipediaSummary.mockResolvedValue(wikiSummary);
  mockGetRelatedWikipedia.mockResolvedValue([wikiItem]);
  mockSearchYouTube.mockResolvedValue([ytVideo]);
  mockSearchWeb.mockResolvedValue([webResult]);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('runUnifiedSearch', () => {
  it('returns all sources ok for a valid query, matching local topic and experiments', async () => {
    const res = await runUnifiedSearch('  pendulum  ');

    expect(res.query).toBe('pendulum');
    expect(res.invalid).toBeUndefined();
    expect(res.results.topic?.matchedBy).toBe('alias');
    expect(res.results.topic?.topic.slug).toBe('simple-pendulum');
    expect(res.results.experiments.status).toBe('ok');
    if (res.results.experiments.status === 'ok') {
      expect(res.results.experiments.data[0]?.slug).toBe('simple-pendulum-period');
      expect(res.results.experiments.data.length).toBeLessThanOrEqual(6);
    }
    expect(res.results.related.status).toBe('ok');
    if (res.results.related.status === 'ok') {
      expect(res.results.related.data.length).toBeGreaterThanOrEqual(1);
      expect(res.results.related.data.some((t) => t.slug === 'simple-pendulum')).toBe(false);
    }
    expect(res.results.wikipedia?.status).toBe('ok');
    expect(res.results.wikipediaSummary?.status).toBe('ok');
    if (res.results.wikipediaSummary?.status === 'ok') {
      expect(res.results.wikipediaSummary.data?.title).toBe('Pendulum');
    }
    expect(res.results.wikipediaRelated?.status).toBe('ok');
    expect(res.results.youtube?.status).toBe('ok');
    expect(res.results.web?.status).toBe('ok');
    expect(mockGetWikipediaSummary).toHaveBeenCalledWith('Pendulum');
    expect(mockGetRelatedWikipedia).toHaveBeenCalledWith('Pendulum', 5);
  });

  it('matches a topic by exact title', async () => {
    const res = await runUnifiedSearch("Newton's laws of motion");
    expect(res.results.topic?.matchedBy).toBe('title');
    expect(res.results.topic?.topic.slug).toBe('newtons-laws-of-motion');
  });

  it('keeps wikipedia ok while youtube fails with a classified config error', async () => {
    mockSearchYouTube.mockRejectedValue(
      new ProviderError('youtube', 'config', 'YouTube key missing'),
    );

    const res = await runUnifiedSearch('pendulum');

    expect(res.results.youtube).toEqual({
      id: 'youtube',
      status: 'error',
      error: { code: 'config', message: 'YouTube key missing', retryable: false },
    });
    expect(res.results.wikipedia?.status).toBe('ok');
    expect(res.results.web?.status).toBe('ok');
  });

  it('propagates a quota ProviderError as a non-retryable classified web error', async () => {
    mockSearchWeb.mockRejectedValue(
      new ProviderError('web', 'quota', 'Plan limit exceeded', { retryable: false }),
    );

    const res = await runUnifiedSearch('photosynthesis');

    expect(res.results.web).toEqual({
      id: 'web',
      status: 'error',
      error: { code: 'quota', message: 'Plan limit exceeded', retryable: false },
    });
    expect(res.results.wikipedia?.status).toBe('ok');
  });

  it('runs only the requested sources when only is provided', async () => {
    const res = await runUnifiedSearch('pendulum', { only: ['web'] });

    expect(mockSearchWikipedia).not.toHaveBeenCalled();
    expect(mockGetWikipediaSummary).not.toHaveBeenCalled();
    expect(mockGetRelatedWikipedia).not.toHaveBeenCalled();
    expect(mockSearchYouTube).not.toHaveBeenCalled();
    expect(mockSearchWeb).toHaveBeenCalledTimes(1);
    expect(res.results.wikipedia).toBeUndefined();
    expect(res.results.youtube).toBeUndefined();
    expect(res.results.web?.status).toBe('ok');
    expect(res.results.experiments.status).toBe('ok');
  });

  it('rejects invalid queries without calling any adapter', async () => {
    const empty = await runUnifiedSearch('');
    expect(empty.invalid).toBe('empty');
    expect(empty.query).toBeNull();

    const notString = await runUnifiedSearch(42);
    expect(notString.invalid).toBe('invalid');

    const tooShort = await runUnifiedSearch('a');
    expect(tooShort.invalid).toBe('too_short');

    const tooLong = await runUnifiedSearch('x'.repeat(201));
    expect(tooLong.invalid).toBe('too_long');

    expect(mockSearchWikipedia).not.toHaveBeenCalled();
    expect(mockGetWikipediaSummary).not.toHaveBeenCalled();
    expect(mockGetRelatedWikipedia).not.toHaveBeenCalled();
    expect(mockSearchYouTube).not.toHaveBeenCalled();
    expect(mockSearchWeb).not.toHaveBeenCalled();
  });

  it('falls back to error sections when the wikipedia search itself fails', async () => {
    mockSearchWikipedia.mockRejectedValue(
      new ProviderError('wikipedia', 'rate_limited', 'HTTP 429', { retryable: true }),
    );

    const res = await runUnifiedSearch('pendulum');

    expect(res.results.wikipedia?.status).toBe('error');
    expect(res.results.wikipediaSummary?.status).toBe('error');
    expect(res.results.wikipediaRelated?.status).toBe('error');
    expect(mockGetWikipediaSummary).not.toHaveBeenCalled();
  });
});
