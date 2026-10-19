import { describe, expect, it } from 'vitest';
import { experimentSchema, parseContent, topicSchema } from '@/content/schema';
import type { Experiment, Topic } from '@/content/types';

const validExperiment: Experiment = {
  slug: 'simple-electric-motor',
  title: 'Simple electric motor',
  subject: 'physics',
  topic: 'Electromagnetism',
  level: 'intermediate',
  supervision: 'adult-required',
  objective: 'Build a minimal DC motor and observe how magnetic forces turn current-carrying wire.',
  concept: 'Force on a current-carrying conductor in a magnetic field.',
  materials: ['battery', 'magnet', 'copper wire', 'pliers'],
  procedure: ['Shape the wire into a coil', 'Connect the coil to the battery'],
  observations: ['The coil spins when current flows'],
  explanation: 'The magnetic field exerts a force on the coil, producing torque.',
  safety: ['Adult supervision required when using pliers'],
  durationMinutes: 30,
  relatedVideoQueries: ['simple electric motor demonstration'],
  sources: [{ label: 'Wire motor background', url: 'https://en.wikipedia.org/wiki/Electric_motor' }],
  featured: true,
};

const validTopic: Topic = {
  slug: 'newtons-second-law',
  title: "Newton's second law",
  subject: 'physics',
  summary: 'The acceleration of an object is proportional to the net force acting on it.',
  aliases: ['F = ma', 'second law of motion'],
  keyConcepts: [{ term: 'Net force', definition: 'Vector sum of all forces on an object.' }],
  equations: [
    {
      label: "Newton's second law",
      latex: 'F = ma',
      variables: [
        { symbol: 'F', meaning: 'net force (N)' },
        { symbol: 'm', meaning: 'mass (kg)' },
        { symbol: 'a', meaning: 'acceleration (m/s^2)' },
      ],
    },
  ],
  relatedExperimentSlugs: ['inclined-plane'],
  wikipediaTitle: "Newton's laws of motion",
  collectionSlugs: ['forces-and-motion'],
};

describe('content schema safety and validation', () => {
  it('accepts a valid experiment', () => {
    expect(experimentSchema.safeParse(validExperiment).success).toBe(true);
  });

  it('content schemas reject experiment without safety', () => {
    const result = experimentSchema.safeParse({ ...validExperiment, safety: [] });
    expect(result.success).toBe(false);
  });

  it('content schemas reject forbidden hazardous terms', () => {
    const result = experimentSchema.safeParse({
      ...validExperiment,
      procedure: ['Heat a small amount of mercury in the tube'],
    });
    expect(result.success).toBe(false);
  });

  it('rejects flame work described as done without supervision', () => {
    const result = experimentSchema.safeParse({
      ...validExperiment,
      procedure: ['Heat the wire over an open flame without supervision'],
    });
    expect(result.success).toBe(false);
  });

  it('content schemas reject bad wikipediaTitle/url', () => {
    expect(
      topicSchema.safeParse({ ...validTopic, wikipediaTitle: '' }).success,
    ).toBe(false);
    expect(
      topicSchema.safeParse({ ...validTopic, wikipediaTitle: 'https://example.com' }).success,
    ).toBe(false);
    expect(
      experimentSchema.safeParse({
        ...validExperiment,
        sources: [{ label: 'bad', url: 'javascript:alert(1)' }],
      }).success,
    ).toBe(false);
  });

  it('accepts a valid topic', () => {
    expect(topicSchema.safeParse(validTopic).success).toBe(true);
  });

  it('parseContent aggregates multiple errors', () => {
    const schema = experimentSchema.array();
    const broken = [
      { ...validExperiment, slug: 'Bad Slug!', safety: [] },
      { ...validExperiment, slug: 'also bad slug', durationMinutes: -5 },
    ];
    let message = '';
    try {
      parseContent(schema, broken, 'experiments');
    } catch (e) {
      message = e instanceof Error ? e.message : String(e);
    }
    expect(message).toContain('experiments');
    expect(message).toContain('0');
    expect(message).toContain('1');
  });
});
