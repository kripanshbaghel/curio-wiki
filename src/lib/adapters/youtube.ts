import { cachedFetch } from '@/lib/cache';
import { getServerEnv } from '@/lib/config/env';
import { ProviderError } from '@/lib/errors';
import { fetchWithPolicy } from '@/lib/http';
import {
  searchListResponseSchema,
  videoListResponseSchema,
  type VideoListResource,
} from './youtube.schemas';

const SEARCH_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';
const VIDEOS_ENDPOINT = 'https://www.googleapis.com/youtube/v3/videos';

/** YouTube Data API video ids are exactly 11 URL-safe characters. */
const VIDEO_ID_RE = /^[\w-]{11}$/;

/** YouTube policies allow storing API data for at most 30 days; 6h is quota-friendly. */
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

const THUMB_ORDER = ['maxres', 'standard', 'high', 'medium', 'default'] as const;

export interface YouTubeVideo {
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string | null;
  url: string;
  embedUrl: string;
  description: string;
  publishedAt: string | null;
  duration: string | null;
  embeddable: boolean;
  available: boolean;
}

function requireKey(): string {
  const key = getServerEnv().YOUTUBE_API_KEY;
  if (!key) {
    throw new ProviderError(
      'youtube',
      'config',
      'YouTube Data API is not configured (YOUTUBE_API_KEY is set). See docs/setup.md.',
    );
  }
  return key;
}

function watchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

function embedUrlFor(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

function pickThumbnail(
  thumbnails: Partial<Record<(typeof THUMB_ORDER)[number], { url: string }>>,
): string | null {
  for (const key of THUMB_ORDER) {
    const entry = thumbnails[key];
    if (entry?.url) return entry.url;
  }
  return null;
}

function videoFromResource(resource: VideoListResource): YouTubeVideo {
  const snippet = resource.snippet;
  return {
    id: resource.id,
    title: snippet?.title ?? '',
    channelTitle: snippet?.channelTitle ?? '',
    thumbnailUrl: pickThumbnail(snippet?.thumbnails ?? {}),
    url: watchUrl(resource.id),
    embedUrl: embedUrlFor(resource.id),
    description: snippet?.description ?? '',
    publishedAt: snippet?.publishedAt ?? null,
    duration: resource.contentDetails?.duration ?? null,
    embeddable: resource.status?.embeddable ?? false,
    available: (resource.status?.privacyStatus ?? 'public') !== 'private',
  };
}

/**
 * Educational video search via YouTube Data API v3.
 * `search.list` (100 calls/day quota bucket) plus one batched `videos.list`
 * (1 unit) to verify availability and embeddability.
 */
export async function searchYouTube(
  query: string,
  opts: { maxResults?: number } = {},
): Promise<YouTubeVideo[]> {
  const key = requireKey();
  const maxResults = Math.min(Math.max(opts.maxResults ?? 8, 1), 12);

  return cachedFetch(
    `youtube:search:${query}:${maxResults}`,
    async () => {
      const url = new URL(SEARCH_ENDPOINT);
      url.searchParams.set('part', 'snippet');
      url.searchParams.set('q', query);
      url.searchParams.set('type', 'video');
      url.searchParams.set('videoEmbeddable', 'true');
      url.searchParams.set('safeSearch', 'strict');
      url.searchParams.set('order', 'relevance');
      url.searchParams.set('maxResults', String(maxResults));

      const body = await fetchWithPolicy(
        url,
        { headers: { 'X-Goog-Api-Key': key } },
        { provider: 'youtube', timeoutMs: 8000 },
      );
      const parsed = searchListResponseSchema.safeParse(body);
      if (!parsed.success) {
        throw new ProviderError(
          'youtube',
          'invalid_response',
          `YouTube search payload invalid: ${parsed.error.issues[0]?.message ?? 'schema mismatch'}`,
        );
      }

      const items = parsed.data.items.filter(
        (item) => item.id.videoId && VIDEO_ID_RE.test(item.id.videoId),
      );
      if (items.length === 0) return [];

      let videosById = new Map<string, VideoListResource>();
      let videosListOk = false;
      try {
        const videosUrl = new URL(VIDEOS_ENDPOINT);
        videosUrl.searchParams.set('part', 'snippet,status,contentDetails');
        videosUrl.searchParams.set('id', items.map((item) => item.id.videoId).join(','));
        const videosBody = await fetchWithPolicy(
          videosUrl,
          { headers: { 'X-Goog-Api-Key': key } },
          { provider: 'youtube', timeoutMs: 8000 },
        );
        const videosParsed = videoListResponseSchema.safeParse(videosBody);
        if (videosParsed.success) {
          videosById = new Map(videosParsed.data.items.map((video) => [video.id, video]));
          videosListOk = true;
        }
      } catch {
        // Enrichment is optional: search.list results are already live and embeddable-filtered.
        videosListOk = false;
      }

      return items.map((item) => {
        const id = item.id.videoId as string;
        const meta = videosById.get(id);
        const snippet = item.snippet;
        return {
          id,
          title: snippet.title,
          channelTitle: snippet.channelTitle,
          thumbnailUrl: pickThumbnail(snippet.thumbnails),
          url: watchUrl(id),
          embedUrl: embedUrlFor(id),
          description: snippet.description,
          publishedAt: snippet.publishedAt ?? null,
          duration: meta?.contentDetails?.duration ?? null,
          embeddable: meta ? (meta.status?.embeddable ?? true) : true,
          available: videosListOk
            ? meta
              ? (meta.status?.privacyStatus ?? 'public') !== 'private'
              : false
            : true,
        } satisfies YouTubeVideo;
      });
    },
    { ttlMs: CACHE_TTL_MS },
  );
}

/** Fetches metadata for specific video ids (used by /videos/[id]). */
export async function getYouTubeVideos(ids: string[]): Promise<YouTubeVideo[]> {
  const key = requireKey();
  const clean = ids.filter((id) => VIDEO_ID_RE.test(id)).slice(0, 50);
  if (clean.length === 0) return [];

  return cachedFetch(
    `youtube:videos:${clean.join(',')}`,
    async () => {
      const url = new URL(VIDEOS_ENDPOINT);
      url.searchParams.set('part', 'snippet,status,contentDetails');
      url.searchParams.set('id', clean.join(','));
      const body = await fetchWithPolicy(
        url,
        { headers: { 'X-Goog-Api-Key': key } },
        { provider: 'youtube', timeoutMs: 8000 },
      );
      const parsed = videoListResponseSchema.safeParse(body);
      if (!parsed.success) {
        throw new ProviderError(
          'youtube',
          'invalid_response',
          `YouTube videos payload invalid: ${parsed.error.issues[0]?.message ?? 'schema mismatch'}`,
        );
      }
      return parsed.data.items.map(videoFromResource);
    },
    { ttlMs: CACHE_TTL_MS },
  );
}
