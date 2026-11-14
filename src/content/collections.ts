import { z } from 'zod';
import { collectionSchema, parseContent } from './schema';
import type { Collection } from './types';

/** Curated collection seeds (5–6 entries). Owned by content agent A. */
const rawCollections: unknown[] = [
  {
    slug: 'motion-and-forces',
    title: 'Motion and forces',
    description:
      'How things move and interact: Newton’s laws, swinging pendulums, energy and work, waves, sound, and light.',
    topicSlugs: [
      'newtons-laws-of-motion',
      'simple-pendulum',
      'work-energy-theorem',
      'waves-and-sound',
      'refraction-and-snells-law',
    ],
  },
  {
    slug: 'life-and-reactions',
    title: 'Life and reactions',
    description: 'Plants making sugar from light, and acids meeting bases in everyday kitchen chemistry.',
    topicSlugs: ['photosynthesis', 'acid-base-reaction'],
  },
  {
    slug: 'matter-and-chemistry',
    title: 'Matter and chemistry',
    description:
      'What atoms and bonds are made of, how matter changes state, and the reactions between acids and bases.',
    topicSlugs: ['atomic-structure', 'chemical-bonding', 'states-of-matter', 'acid-base-reaction'],
  },
  {
    slug: 'mathematics-toolkit',
    title: 'Mathematics toolkit',
    description:
      'Core algebra and reasoning tools: solving quadratic equations, trigonometric ratios, and everyday probability.',
    topicSlugs: ['quadratic-equations', 'trigonometry-basics', 'probability-basics'],
  },
  {
    slug: 'living-systems',
    title: 'Living systems',
    description:
      'From cells and DNA to circulatory systems and ecosystems — the ideas that explain how living things are built and how they interact.',
    topicSlugs: ['cell-biology', 'genetics-basics', 'human-circulatory-system', 'ecology-and-ecosystems'],
  },
  {
    slug: 'technology-and-design',
    title: 'Technology and design',
    description:
      'How engineered and digital systems work: computer hardware, programming algorithms, simple machines, and electric circuits.',
    topicSlugs: ['computer-hardware-basics', 'programming-algorithms', 'simple-machines', 'electric-circuits'],
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
