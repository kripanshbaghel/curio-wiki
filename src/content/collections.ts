import { z } from 'zod';
import { collectionSchema, parseContent } from './schema';
import type { Collection } from './types';

/** Seed dataset. Task 16 expands this to 5–6 curated collections. */
const rawCollections: unknown[] = [
  {
    slug: 'motion-and-forces',
    title: 'Motion and forces',
    description: 'How things move: Newton’s laws, swinging pendulums, and the equations behind them.',
    topicSlugs: ['newtons-laws-of-motion', 'simple-pendulum'],
  },
  {
    slug: 'life-and-reactions',
    title: 'Life and reactions',
    description: 'Plants making sugar from light, and acids meeting bases in everyday kitchen chemistry.',
    topicSlugs: ['photosynthesis', 'acid-base-reaction'],
  },
];

export const collections: Collection[] = parseContent(
  z.array(collectionSchema),
  rawCollections,
  'collections',
);

export function getCollection(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}
