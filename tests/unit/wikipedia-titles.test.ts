import { describe, expect, it, vi } from 'vitest';
import { missingWikipediaTitles } from '@/lib/verify/wikipedia-titles';

interface PageShape {
  title: string;
  missing?: string;
  invalid?: string;
}

function mediaWikiResponse(pages: PageShape[]) {
  return {
    ok: true,
    json: async () => ({
      batchcomplete: true,
      query: { pages: Object.fromEntries(pages.map((page, index) => [String(index + 1), page])) },
    }),
  } as unknown as Response;
}

describe('missingWikipediaTitles', () => {
  it('reports only titles whose pages are missing', async () => {
    const fetchMock = vi.fn(async () =>
      mediaWikiResponse([
        { title: 'Photosynthesis' },
        { title: 'Definitely Not A Real Article XYZ', missing: '' },
      ]),
    );

    const missing = await missingWikipediaTitles(
      ['Photosynthesis', 'Definitely Not A Real Article XYZ'],
      fetchMock as unknown as typeof fetch,
    );

    expect(missing).toEqual(['Definitely Not A Real Article XYZ']);
  });

  it('batches more than 50 titles into multiple official API requests', async () => {
    const calls: string[] = [];
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = new URL(String(input));
      calls.push(url.toString());
      const titles = decodeURIComponent(url.searchParams.get('titles') ?? '').split('|');
      return mediaWikiResponse(titles.map((title) => ({ title })));
    });

    const titles = Array.from({ length: 120 }, (_, index) => `Topic ${index}`);
    const missing = await missingWikipediaTitles(titles, fetchMock as unknown as typeof fetch);

    expect(calls).toHaveLength(3);
    expect(calls[0]).toContain('action=query');
    expect(calls[0]).toContain('format=json');
    expect(calls[0]).toContain('titles=');
    expect(missing).toEqual([]);
  });

  it('treats pages flagged invalid by the API as missing', async () => {
    const fetchMock = vi.fn(async () => mediaWikiResponse([{ title: '<>', invalid: '' }]));

    const missing = await missingWikipediaTitles(['<>'], fetchMock as unknown as typeof fetch);
    expect(missing).toEqual(['<>']);
  });
});
