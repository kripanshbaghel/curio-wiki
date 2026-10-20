import { z } from 'zod';
import { parseContent, topicSchema } from './schema';
import { bioTechEngTopicSeeds } from './topics-bio-tech-eng';
import { physicalMathTopicSeeds } from './topics-physical-math';
import type { Topic } from './types';

/**
 * Curated topic catalog, aggregated from subject-owned seed files.
 * Parsed at module load so invalid content fails the build immediately.
 */
const rawTopics: unknown[] = [...physicalMathTopicSeeds, ...bioTechEngTopicSeeds];

export const topics: Topic[] = parseContent(z.array(topicSchema), rawTopics, 'topics');

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
