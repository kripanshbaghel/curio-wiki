import { afterEach, describe, expect, it, vi } from 'vitest';
import { __clearCacheForTests } from '@/lib/cache';
import { getYouTubeVideos, searchYouTube } from '@/lib/adapters/youtube';
import { ProviderError } from '@/lib/errors';

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

const searchFixture = {
  kind: 'youtube#searchListResponse',
  pageInfo: { totalResults: 2, resultsPerPage: 2 },
  items: [
    {
      kind: 'youtube#searchResult',
      id: { kind: 'youtube#video', videoId: 'abc123def45' },
      snippet: {
        publishedAt: '2024-01-01T00:00:00Z',
        channelId: 'UC123',
        title: 'Simple Electric Motor',
        description: 'Build a motor from a battery and wire.',
        thumbnails: {
          default: { url: 'https://i.ytimg.com/vi/abc123def45/default.jpg' },
          medium: { url: 'https://i.ytimg.com/vi/abc123def45/mqdefault.jpg' },
          high: { url: 'https://i.ytimg.com/vi/abc123def45/hqdefault.jpg' },
        },
        channelTitle: 'Science for Students',
        liveBroadcastContent: 'none',
      },
    },
    {
      kind: 'youtube#searchResult',
      id: { kind: 'youtube#video' },
      snippet: {
        title: 'Malformed result without video id',
        thumbnails: {},
        channelTitle: 'Someone',
      },
    },
  ],
};

const videosFixture = {
  kind: 'youtube#videoListResponse',
  items: [
    {
      id: 'abc123def45',
      snippet: {
        publishedAt: '2024-01-01T00:00:00Z',
        title: 'Simple Electric Motor',
        channelTitle: 'Science for Students',
        description: 'Build a motor.',
        thumbnails: { high: { url: 'https://i.ytimg.com/vi/abc123def45/hqdefault.jpg' } },
      },
      status: { privacyStatus: 'public', embeddable: true, uploadStatus: 'processed' },
      contentDetails: { duration: 'PT4M13S' },
    },
  ],
};

function googleError(status: number, reason: string) {
  return jsonResponse(
    { error: { code: status, message: reason, errors: [{ domain: 'youtube', reason }] } },
    status,
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  __clearCacheForTests();
});

describe('searchYouTube', () => {
  it('throws a config ProviderError when the API key is missing and never calls the network', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', '');
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const err = await searchYouTube('electric motor').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('config');
    expect((err as ProviderError).provider).toBe('youtube');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('searches and enriches with videos.list, mapping one consistent video', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    const fetchMock = vi.fn(async (input: string | URL | Request, _init?: RequestInit) => {
      const url = String(input);
      if (url.includes('/youtube/v3/search')) return jsonResponse(searchFixture);
      if (url.includes('/youtube/v3/videos')) return jsonResponse(videosFixture);
      throw new Error(`unexpected url ${url}`);
    });
    vi.stubGlobal('fetch', fetchMock);

    const videos = await searchYouTube('electric motor experiment', { maxResults: 5 });

    expect(videos).toHaveLength(1);
    expect(videos[0]).toEqual({
      id: 'abc123def45',
      title: 'Simple Electric Motor',
      channelTitle: 'Science for Students',
      thumbnailUrl: 'https://i.ytimg.com/vi/abc123def45/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=abc123def45',
      embedUrl: 'https://www.youtube-nocookie.com/embed/abc123def45',
      description: 'Build a motor from a battery and wire.',
      publishedAt: '2024-01-01T00:00:00Z',
      duration: 'PT4M13S',
      embeddable: true,
      available: true,
    });
    expect(fetchMock.mock.calls[1][0].toString()).toContain('abc123def45');
    const searchHeaders = fetchMock.mock.calls[0][1]?.headers as Record<string, string>;
    expect(searchHeaders['X-Goog-Api-Key']).toBe('test-key');
  });

  it('falls back to medium thumbnail when high is missing', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    const noHigh = {
      ...searchFixture,
      items: [
        {
          ...searchFixture.items[0],
          snippet: {
            ...searchFixture.items[0].snippet,
            thumbnails: {
              default: { url: 'https://i.ytimg.com/vi/abc123def45/default.jpg' },
              medium: { url: 'https://i.ytimg.com/vi/abc123def45/mqdefault.jpg' },
            },
          },
        },
      ],
    };
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input);
        return url.includes('/youtube/v3/search')
          ? jsonResponse(noHigh)
          : jsonResponse({ items: [] });
      }),
    );

    const videos = await searchYouTube('motor');
    expect(videos[0].thumbnailUrl).toBe('https://i.ytimg.com/vi/abc123def45/mqdefault.jpg');
    expect(videos[0].embeddable).toBe(true);
    expect(videos[0].duration).toBeNull();
  });

  it('filters search items that are missing a video id', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string | URL | Request) =>
        String(input).includes('/youtube/v3/search')
          ? jsonResponse(searchFixture)
          : jsonResponse({ items: [] }),
      ),
    );
    const videos = await searchYouTube('motor');
    expect(videos).toHaveLength(1);
    expect(videos[0].id).toBe('abc123def45');
  });

  it('returns an empty array for empty results', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ kind: 'youtube#searchListResponse', items: [] }));
    vi.stubGlobal('fetch', fetchMock);
    await expect(searchYouTube('zzz-no-results-here')).resolves.toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('classifies quotaExceeded as a non-retryable quota error', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(googleError(403, 'quotaExceeded')));
    const err = await searchYouTube('motor').catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('quota');
    expect((err as ProviderError).retryable).toBe(false);
  });

  it('classifies keyInvalid as an auth error', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'bad-key');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(googleError(400, 'keyInvalid')));
    const err = await searchYouTube('motor').catch((e: unknown) => e);
    expect((err as ProviderError).code).toBe('auth');
  });

  it('classifies accessNotConfigured as an auth error', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(googleError(403, 'accessNotConfigured')));
    const err = await searchYouTube('motor').catch((e: unknown) => e);
    expect((err as ProviderError).code).toBe('auth');
  });
});

describe('getYouTubeVideos', () => {
  it('throws a config error when the key is missing', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', '');
    vi.stubGlobal('fetch', vi.fn());
    const err = await getYouTubeVideos(['abc123def45']).catch((e: unknown) => e);
    expect((err as ProviderError).code).toBe('config');
  });

  it('returns metadata for a known id', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(videosFixture));
    vi.stubGlobal('fetch', fetchMock);
    const videos = await getYouTubeVideos(['abc123def45']);
    expect(videos).toHaveLength(1);
    expect(videos[0].duration).toBe('PT4M13S');
    expect(videos[0].embeddable).toBe(true);
    expect(String(fetchMock.mock.calls[0][0])).toContain('/youtube/v3/videos');
  });

  it('returns an empty array for unknown ids', async () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'test-key');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(jsonResponse({ items: [] })));
    await expect(getYouTubeVideos(['zzzzzzzzzzz'])).resolves.toEqual([]);
  });
});
