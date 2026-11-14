import { describe, expect, it } from 'vitest';
import { collections } from '@/content/collections';
import { SUBJECT_KEYS } from '@/content/types';
import { getTopicsPage, TOPIC_PAGE_SIZE, topics } from '@/content/topics';

describe('getTopicsPage', () => {
  it('slices pages deterministically without overlap', () => {
    const page1 = getTopicsPage({ page: 1, pageSize: 5 });
    const page2 = getTopicsPage({ page: 2, pageSize: 5 });

    expect(page1.pageSize).toBe(5);
    expect(page1.items).toHaveLength(5);
    expect(page2.items).toHaveLength(5);
    const page1Slugs = new Set(page1.items.map((topic) => topic.slug));
    expect(page2.items.some((topic) => page1Slugs.has(topic.slug))).toBe(false);
    expect(page1.total).toBe(topics.length);
    expect(page1.pageCount).toBe(Math.ceil(topics.length / 5));
  });

  it('clamps out-of-range and invalid page numbers to the last page', () => {
    const pageSize = 5;
    const clamped = getTopicsPage({ page: 999, pageSize });
    const last = getTopicsPage({ page: getTopicsPage({ pageSize }).pageCount, pageSize });
    expect(clamped.page).toBe(last.page);
    expect(getTopicsPage({ page: 0, pageSize }).page).toBe(1);
    expect(getTopicsPage({ page: -3, pageSize }).page).toBe(1);
  });

  it('filters by subject and category together', () => {
    const mechanics = getTopicsPage({ subject: 'physics', category: 'mechanics', pageSize: 100 });
    expect(mechanics.items.length).toBeGreaterThan(0);
    for (const topic of mechanics.items) {
      expect(topic.subject).toBe('physics');
      expect(topic.category).toBe('mechanics');
    }
  });

  it('searches titles, aliases and categories case-insensitively', () => {
    const byAlias = getTopicsPage({ q: 'Newtonian mechanics', pageSize: 100 });
    expect(byAlias.items.some((topic) => topic.slug === 'newtons-laws-of-motion')).toBe(true);

    const byTitle = getTopicsPage({ q: 'PHOTOSYNTH', pageSize: 100 });
    expect(byTitle.items.map((topic) => topic.slug)).toContain('photosynthesis');

    const byCategory = getTopicsPage({ q: 'mechanics', pageSize: 100 });
    expect(byCategory.items.every((topic) => topic.category.includes('mechanics'))).toBe(true);
  });

  it('returns an empty page (not a crash) for unknown filters', () => {
    const result = getTopicsPage({ category: 'not-a-real-category' });
    expect(result.items).toEqual([]);
    expect(result.total).toBe(0);
    expect(result.page).toBe(1);
    expect(result.pageCount).toBe(1);
  });

  it('filters by collection membership', () => {
    const collection = collections[0];
    const result = getTopicsPage({ collection: collection.slug, pageSize: 100 });
    expect(result.total).toBe(collection.topicSlugs.length);
    const returned = new Set(result.items.map((topic) => topic.slug));
    for (const slug of collection.topicSlugs) expect(returned.has(slug)).toBe(true);
  });

  it('sorts by subject order then title', () => {
    const result = getTopicsPage({ pageSize: 100 });
    const order = new Map(SUBJECT_KEYS.map((key, index) => [key, index]));
    for (let index = 1; index < result.items.length; index += 1) {
      const previous = result.items[index - 1];
      const current = result.items[index];
      const previousSubject = order.get(previous.subject) ?? 0;
      const currentSubject = order.get(current.subject) ?? 0;
      expect(previousSubject <= currentSubject).toBe(true);
      if (previousSubject === currentSubject) {
        expect(previous.title.localeCompare(current.title) <= 0).toBe(true);
      }
    }
  });

  it('defaults to the shared page size', () => {
    expect(getTopicsPage().pageSize).toBe(TOPIC_PAGE_SIZE);
  });
});
