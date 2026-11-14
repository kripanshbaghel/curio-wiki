import { z } from 'zod';
import { parseContent, topicSchema } from './schema';
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
