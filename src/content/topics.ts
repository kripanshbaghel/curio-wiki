import { z } from 'zod';
import { parseContent, topicSchema } from './schema';
import { collections } from './collections';
import { SUBJECT_CATEGORIES } from './categories';
import { SUBJECT_KEYS, type SubjectKey } from './types';
import { biologyTopicSeeds } from './topics-biology';
import { chemistryTopicSeeds } from './topics-chemistry';
import { engineeringTopicSeeds } from './topics-engineering';
import { mathematicsTopicSeeds } from './topics-mathematics';
import { physicsTopicSeeds } from './topics-physics';
import { technologyTopicSeeds } from './topics-technology';
import type { Topic } from './types';

/**
 * Curated topic catalog, aggregated from subject-owned seed files.
 * Parsed at module load so invalid content fails the build immediately.
 */
const rawTopics: unknown[] = [
  ...physicsTopicSeeds,
  ...chemistryTopicSeeds,
  ...biologyTopicSeeds,
  ...mathematicsTopicSeeds,
  ...technologyTopicSeeds,
  ...engineeringTopicSeeds,
];

export const topics: Topic[] = parseContent(z.array(topicSchema), rawTopics, 'topics');

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

/** All category slugs across subjects, de-duplicated and sorted (for filter UIs). */
export const ALL_CATEGORY_SLUGS: readonly string[] = [
  ...new Set(SUBJECT_KEYS.flatMap((subject) => SUBJECT_CATEGORIES[subject])),
].sort();

/** Rows per page in topic listings. */
export const TOPIC_PAGE_SIZE = 24;

export interface TopicsQuery {
  subject?: SubjectKey;
  category?: string;
  q?: string;
  collection?: string;
  page?: number;
  pageSize?: number;
}

export interface TopicsPageResult {
  items: Topic[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function subjectOrder(subject: SubjectKey): number {
  return SUBJECT_KEYS.indexOf(subject);
}

/**
 * Server-side library query used by every listing surface: filters by
 * subject/category/collection/text, sorts deterministically, and slices one
 * page. The full library never reaches the browser.
 */
export function getTopicsPage(query: TopicsQuery = {}): TopicsPageResult {
  const pageSize = Math.trunc(clamp(query.pageSize ?? TOPIC_PAGE_SIZE, 1, 100));

  let filtered = topics;
  if (query.subject) {
    filtered = filtered.filter((topic) => topic.subject === query.subject);
  }
  if (query.category) {
    filtered = filtered.filter((topic) => topic.category === query.category);
  }
  if (query.collection) {
    const collection = collections.find((entry) => entry.slug === query.collection);
    const members = new Set(collection?.topicSlugs ?? []);
    filtered = filtered.filter((topic) => members.has(topic.slug));
  }

  const text = query.q?.trim().toLowerCase();
  if (text) {
    filtered = filtered.filter(
      (topic) =>
        topic.title.toLowerCase().includes(text) ||
        topic.aliases.some((alias) => alias.toLowerCase().includes(text)) ||
        topic.category.toLowerCase().includes(text),
    );
  }

  const sorted = [...filtered].sort(
    (a, b) => subjectOrder(a.subject) - subjectOrder(b.subject) || a.title.localeCompare(b.title),
  );

  const total = sorted.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const requestedPage = Number.isFinite(query.page) ? Math.trunc(query.page as number) : 1;
  const page = clamp(requestedPage, 1, pageCount);
  const start = (page - 1) * pageSize;

  return { items: sorted.slice(start, start + pageSize), total, page, pageCount, pageSize };
}
