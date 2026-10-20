import { z } from 'zod';
import { experimentSchema, parseContent } from './schema';
import { handsOnExperimentSeeds } from './experiments-hands-on';
import { labExperimentSeeds } from './experiments-lab';
import type { Experiment } from './types';

/**
 * Curated experiment catalog, aggregated from owner seed files.
 * Parsed at module load so invalid content fails the build immediately.
 */
const rawExperiments: unknown[] = [...handsOnExperimentSeeds, ...labExperimentSeeds];

export const experiments: Experiment[] = parseContent(
  z.array(experimentSchema),
  rawExperiments,
  'experiments',
);

export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((experiment) => experiment.slug === slug);
}
