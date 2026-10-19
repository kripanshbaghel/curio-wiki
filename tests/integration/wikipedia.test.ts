import { afterEach, describe, expect, it, vi } from 'vitest';
import { __clearCacheForTests } from '@/lib/cache';
import {
  getRelatedWikipedia,
  getWikipediaSummary,
  searchWikipedia,
} from '@/lib/adapters/wikipedia';

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  __clearCacheForTests();
});

describe('wikipedia adapter integration flow', () => {
  it('searches, fetches a summary and finds related topics for "Newton\'s laws"', async () => {
    const fetchMock = vi.fn(async (input: string | URL | Request) => {
      const url = String(input);
      if (url.includes('/w/rest.php/v1/search/page') && !url.includes('morelike')) {
        return jsonResponse({
          pages: [
            {
              id: 29767,
              key: "Newton's laws of motion",
              title: "Newton's laws of motion",
              excerpt:
                '<span class="searchmatch">Newton\'s laws of motion</span> are three basic laws',
              matched_title: null,
              description: 'Three laws describing the motion of bodies',
              thumbnail: {
                mimetype: 'image/jpeg',
                width: 60,
                height: 76,
                duration: null,
                url: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Newtonslaws.jpg/60px-Newtonslaws.jpg',
              },
            },
            {
              id: 1,
              key: 'Newton mechanics',
              title: 'Newton mechanics',
              excerpt: 'Classical mechanics based on <span class="searchmatch">Newton</span>',
              matched_title: null,
              description: null,
              thumbnail: null,
            },
          ],
        });
      }
      if (url.includes('/api/rest_v1/page/summary/')) {
        return jsonResponse({
          type: 'standard',
          title: "Newton's laws of motion",
          pageid: 29767,
          extract: "Newton's laws of motion describe the motion of a body.",
          description: 'Three laws',
          content_urls: {
            desktop: { page: "https://en.wikipedia.org/wiki/Newton's_laws_of_motion" },
            mobile: { page: "https://en.m.wikipedia.org/wiki/Newton's_laws_of_motion" },
          },
          thumbnail: {
            source: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Newtonslaws.jpg',
            width: 300,
            height: 380,
          },
        });
      }
      if (url.includes('morelike%3A')) {
        return jsonResponse({
          query: {
            searchinfo: { totalhits: 2 },
            search: [
              { ns: 0, title: 'Classical mechanics', pageid: 24378, snippet: 'mechanics' },
              { ns: 0, title: 'Mass', pageid: 21848, snippet: 'mass' },
            ],
          },
        });
      }
      throw new Error(`unexpected url: ${url}`);
    });
    vi.stubGlobal('fetch', fetchMock);

    const search = await searchWikipedia("Newton's laws");
    expect(search.length).toBeGreaterThanOrEqual(2);
    expect(search[0].key).toBe("Newton's laws of motion");
    expect(search[0].url).toBe(
      `https://en.wikipedia.org/wiki/${encodeURIComponent("Newton's laws of motion")}`,
    );

    const summary = await getWikipediaSummary(search[0].key);
    expect(summary?.extract).toContain('describe the motion');
    expect(summary?.thumbnailUrl).toContain('https://');

    const related = await getRelatedWikipedia("Newton's laws of motion", 3);
    expect(related.map((r) => r.title)).toEqual(['Classical mechanics', 'Mass']);
  });
});
