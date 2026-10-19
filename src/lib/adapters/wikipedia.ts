import { cachedFetch } from '@/lib/cache';
import { ProviderError } from '@/lib/errors';
import { fetchWithPolicy } from '@/lib/http';
import {
  actionErrorResponseSchema,
  actionSearchResponseSchema,
  pcsSummarySchema,
  restSearchResponseSchema,
  type ActionSearchItem,
} from './wikipedia.schemas';

const EN_WIKI = 'https://en.wikipedia.org';

/**
 * Wikimedia requires a descriptive User-Agent with contact information.
 * See https://foundation.wikimedia.org/wiki/Policy:Wikimedia_Foundation_User-Agent_policy
 */
const WIKI_USER_AGENT =
  'CurioWiki/1.0 (https://github.com/curiowiki/curiowiki; contact@curiowiki.example)';

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

export interface WikipediaSearchItem {
  title: string;
  key: string;
  url: string;
  description: string | null;
  thumbnailUrl: string | null;
  excerpt: string;
}

export interface WikipediaSummary {
  title: string;
  extract: string;
  description: string | null;
  thumbnailUrl: string | null;
  pageUrl: string;
  mobileUrl: string | null;
  type: string;
  license: 'CC BY-SA 4.0';
}

function wikiHeaders(): Record<string, string> {
  return {
    'User-Agent': WIKI_USER_AGENT,
    'Api-User-Agent': WIKI_USER_AGENT,
  };
}

function normalizeThumbnailUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('//')) return `https:${url}`;
  if (url.startsWith('http://')) return `https://${url.slice('http://'.length)}`;
  return url;
}

function stripSearchMatchMarkup(text: string): string {
  return text.replace(/<\/?span[^>]*>/g, '');
}

function articleUrl(key: string): string {
  return `${EN_WIKI}/wiki/${encodeURIComponent(key)}`;
}

export async function searchWikipedia(
  query: string,
  opts: { limit?: number } = {},
): Promise<WikipediaSearchItem[]> {
  const limit = Math.min(Math.max(opts.limit ?? 6, 1), 20);
  const data = await cachedFetch(
    `wikipedia:search:${query}:${limit}`,
    async () => {
      const url = new URL(`${EN_WIKI}/w/rest.php/v1/search/page`);
      url.searchParams.set('q', query);
      url.searchParams.set('limit', String(limit));
      const body = await fetchWithPolicy(
        url,
        { headers: wikiHeaders() },
        { provider: 'wikipedia', timeoutMs: 8000 },
      );
      const parsed = restSearchResponseSchema.safeParse(body);
      if (!parsed.success) {
        throw new ProviderError(
          'wikipedia',
          'invalid_response',
          `Wikipedia search payload invalid: ${parsed.error.issues[0]?.message ?? 'schema mismatch'}`,
        );
      }
      return parsed.data;
    },
    { ttlMs: CACHE_TTL_MS },
  );

  return data.pages.map((page) => ({
    title: page.title,
    key: page.key,
    url: articleUrl(page.key),
    description: page.description ?? null,
    thumbnailUrl: normalizeThumbnailUrl(page.thumbnail?.url),
    excerpt: stripSearchMatchMarkup(page.excerpt),
  }));
}

export async function getWikipediaSummary(
  title: string,
): Promise<WikipediaSummary | null> {
  try {
    const data = await cachedFetch(
      `wikipedia:summary:${title}`,
      async () => {
        const url = `${EN_WIKI}/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
        const body = await fetchWithPolicy(
          url,
          { headers: wikiHeaders() },
          { provider: 'wikipedia', timeoutMs: 8000 },
        );
        const parsed = pcsSummarySchema.safeParse(body);
        if (!parsed.success) {
          throw new ProviderError(
            'wikipedia',
            'invalid_response',
            `Wikipedia summary payload invalid: ${parsed.error.issues[0]?.message ?? 'schema mismatch'}`,
          );
        }
        return parsed.data;
      },
      { ttlMs: CACHE_TTL_MS },
    );

    return {
      title: data.title,
      extract: data.extract,
      description: data.description ?? null,
      thumbnailUrl: normalizeThumbnailUrl(data.thumbnail?.source),
      pageUrl:
        data.content_urls?.desktop?.page ?? articleUrl(data.title),
      mobileUrl: data.content_urls?.mobile?.page ?? null,
      type: data.type ?? 'standard',
      license: 'CC BY-SA 4.0',
    };
  } catch (error) {
    if (error instanceof ProviderError && error.code === 'not_found') {
      return null;
    }
    throw error;
  }
}

/** Parses an Action API `list=search` payload; throws ProviderError on api/schema errors. */
export function parseActionSearch(body: unknown): ActionSearchItem[] {
  const apiError = actionErrorResponseSchema.safeParse(body);
  if (apiError.success) {
    const { code, info } = apiError.data.error;
    throw new ProviderError(
      'wikipedia',
      'unknown',
      `Wikipedia action api error ${code}${info ? `: ${info}` : ''}`,
    );
  }
  const parsed = actionSearchResponseSchema.safeParse(body);
  if (!parsed.success) {
    throw new ProviderError(
      'wikipedia',
      'invalid_response',
      `Wikipedia action api payload invalid: ${parsed.error.issues[0]?.message ?? 'schema mismatch'}`,
    );
  }
  return parsed.data.query.search;
}

/**
 * Related topics via CirrusSearch `morelike:` (the only official approximation —
 * no dedicated related-topics endpoint exists). Never throws: returns [] on failure.
 */
export async function getRelatedWikipedia(
  queryTitle: string,
  limit = 5,
): Promise<WikipediaSearchItem[]> {
  try {
    const items = await cachedFetch(
      `wikipedia:related:${queryTitle}:${limit}`,
      async () => {
        const url = new URL(`${EN_WIKI}/w/api.php`);
        url.searchParams.set('action', 'query');
        url.searchParams.set('list', 'search');
        url.searchParams.set('srsearch', `morelike:${queryTitle}`);
        url.searchParams.set('srlimit', String(limit));
        url.searchParams.set('format', 'json');
        url.searchParams.set('formatversion', '2');
        const body = await fetchWithPolicy(
          url,
          { headers: wikiHeaders() },
          { provider: 'wikipedia', timeoutMs: 8000 },
        );
        return parseActionSearch(body);
      },
      { ttlMs: CACHE_TTL_MS },
    );

    return items.map((item) => ({
      title: item.title,
      key: item.title,
      url: articleUrl(item.title),
      description: null,
      thumbnailUrl: null,
      excerpt: stripSearchMatchMarkup(item.snippet ?? item.title),
    }));
  } catch {
    return [];
  }
}
