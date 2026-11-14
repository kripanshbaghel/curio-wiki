const WIKI_API = 'https://en.wikipedia.org/w/api.php';
const BATCH_SIZE = 50;

interface MediaWikiPage {
  title?: string;
  missing?: string;
  invalid?: string;
}

interface MediaWikiResponse {
  query?: {
    pages?: Record<string, MediaWikiPage>;
    normalized?: Array<{ from: string; to: string }>;
    redirects?: Array<{ from: string; to: string }>;
  };
}

function normalizeTitle(title: string): string {
  return title.replace(/_/g, ' ').toLowerCase();
}

/**
 * Checks article titles against the official MediaWiki API (`action=query`).
 * Returns the titles that do not resolve to an article in batches of 50
 * (the API's documented limit for `titles=`). Used by the content batches so
 * no fabricated Wikipedia links ship.
 */
export async function missingWikipediaTitles(
  titles: string[],
  fetchImpl: typeof fetch = fetch,
): Promise<string[]> {
  const missing: string[] = [];

  for (let index = 0; index < titles.length; index += BATCH_SIZE) {
    const batch = titles.slice(index, index + BATCH_SIZE);
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      redirects: '1',
      titles: batch.join('|'),
    });

    const response = await fetchImpl(`${WIKI_API}?${params.toString()}`, {
      headers: { 'User-Agent': 'CurioWiki/1.0 (curated-title verification)' },
    });
    if (!response.ok) {
      throw new Error(`Wikipedia API responded ${response.status} for a title batch`);
    }

    const data = (await response.json()) as MediaWikiResponse;
    const pages = Object.values(data.query?.pages ?? {});
    const byTitle = new Map<string, MediaWikiPage>();
    for (const page of pages) {
      if (page.title) byTitle.set(normalizeTitle(page.title), page);
    }

    // `normalized` (e.g. case/whitespace fixes) and `redirects` both map a
    // requested title to the article it resolves to — apply them before lookup.
    const aliases = new Map<string, string>();
    for (const entry of [...(data.query?.normalized ?? []), ...(data.query?.redirects ?? [])]) {
      aliases.set(normalizeTitle(entry.from), normalizeTitle(entry.to));
    }

    for (const title of batch) {
      let key = normalizeTitle(title);
      for (let hop = 0; hop < 3 && aliases.has(key); hop += 1) {
        key = aliases.get(key) as string;
      }
      const page = byTitle.get(key);
      const resolves = page !== undefined && page.missing === undefined && page.invalid === undefined;
      if (!resolves) missing.push(title);
    }
  }

  return missing;
}
