import { cachedFetch } from '@/lib/cache';
import { getServerEnv } from '@/lib/config/env';
import { ProviderError } from '@/lib/errors';
import { fetchWithPolicy } from '@/lib/http';
import { braveSearchResponseSchema, tavilySearchResponseSchema } from './web.schemas';

const TAVILY_ENDPOINT = 'https://api.tavily.com/search';
const BRAVE_ENDPOINT = 'https://api.search.brave.com/res/v1/web/search';

/** Search providers bill per request — cache aggressively (1 hour). */
const CACHE_TTL_MS = 60 * 60 * 1000;

export interface WebSearchResult {
  title: string;
  url: string;
  snippet: string;
  domain: string;
}

/** Only absolute http(s) URLs without embedded credentials are allowed out of the app. */
export function isSafeExternalUrl(raw: string): boolean {
  try {
    const url = new URL(raw);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    if (url.username || url.password) return false;
    return true;
  } catch {
    return false;
  }
}

function stripHtml(text: string): string {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function domainOf(url: string): string {
  return new URL(url).hostname.replace(/^www\./, '');
}

function clampMaxResults(value: number | undefined): number {
  return Math.min(Math.max(value ?? 8, 1), 10);
}

function normalize(
  items: Array<{ title: string; url?: string; content: string }>,
): WebSearchResult[] {
  const results: WebSearchResult[] = [];
  for (const item of items) {
    if (!item.url || !isSafeExternalUrl(item.url)) continue;
    results.push({
      title: stripHtml(item.title),
      url: item.url,
      snippet: stripHtml(item.content),
      domain: domainOf(item.url),
    });
  }
  return results;
}

async function tavilySearch(query: string, maxResults: number, key: string): Promise<WebSearchResult[]> {
  const body = await fetchWithPolicy(
    TAVILY_ENDPOINT,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        max_results: maxResults,
        include_answer: false,
        include_raw_content: false,
        search_depth: 'basic',
        safe_search: true,
      }),
    },
    { provider: 'web', timeoutMs: 8000 },
  );
  const parsed = tavilySearchResponseSchema.safeParse(body);
  if (!parsed.success) {
    throw new ProviderError(
      'web',
      'invalid_response',
      `Tavily payload invalid: ${parsed.error.issues[0]?.message ?? 'schema mismatch'}`,
    );
  }
  return normalize(
    parsed.data.results.map((result) => ({
      title: result.title,
      url: result.url,
      content: result.content,
    })),
  );
}

async function braveSearch(query: string, maxResults: number, key: string): Promise<WebSearchResult[]> {
  const url = new URL(BRAVE_ENDPOINT);
  url.searchParams.set('q', query);
  url.searchParams.set('count', String(maxResults));
  const body = await fetchWithPolicy(
    url,
    {
      headers: {
        'X-Subscription-Token': key,
        Accept: 'application/json',
      },
    },
    { provider: 'web', timeoutMs: 8000 },
  );
  const parsed = braveSearchResponseSchema.safeParse(body);
  if (!parsed.success) {
    throw new ProviderError(
      'web',
      'invalid_response',
      `Brave payload invalid: ${parsed.error.issues[0]?.message ?? 'schema mismatch'}`,
    );
  }
  return normalize(
    (parsed.data.web?.results ?? []).map((result) => ({
      title: result.title,
      url: result.url,
      content: result.description,
    })),
  );
}

/**
 * General web search for further reading.
 * Prefers Tavily (card-free free tier); falls back to Brave when only its key is set.
 * Never exposes API keys to the browser — call from server code only.
 */
export async function searchWeb(
  query: string,
  opts: { maxResults?: number } = {},
): Promise<WebSearchResult[]> {
  const env = getServerEnv();
  const maxResults = clampMaxResults(opts.maxResults);

  let provider: 'tavily' | 'brave';
  let key: string;
  if (env.TAVILY_API_KEY) {
    provider = 'tavily';
    key = env.TAVILY_API_KEY;
  } else if (env.BRAVE_SEARCH_API_KEY) {
    provider = 'brave';
    key = env.BRAVE_SEARCH_API_KEY;
  } else {
    throw new ProviderError(
      'web',
      'config',
      'Web search is not configured (set TAVILY_API_KEY, or BRAVE_SEARCH_API_KEY). See docs/setup.md.',
    );
  }

  return cachedFetch(
    `web:${provider}:${query}:${maxResults}`,
    async () =>
      provider === 'tavily'
        ? tavilySearch(query, maxResults, key)
        : braveSearch(query, maxResults, key),
    { ttlMs: CACHE_TTL_MS },
  );
}
