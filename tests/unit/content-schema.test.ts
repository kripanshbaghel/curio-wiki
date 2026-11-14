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
  category: 'mechanics',
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
  relatedSlugs: ['simple-pendulum'],
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

  it('rejects a category outside the subject taxonomy', () => {
    const result = topicSchema.safeParse({
      ...validTopic,
      subject: 'physics',
      category: 'organic-chemistry',
    });
    expect(result.success).toBe(false);
  });

  it('requires category and relatedSlugs on every topic', () => {
    expect(topicSchema.safeParse({ ...validTopic, category: undefined }).success).toBe(false);
    expect(topicSchema.safeParse({ ...validTopic, relatedSlugs: undefined }).success).toBe(false);
  });

  it('rejects malformed related topic slugs', () => {
    expect(
      topicSchema.safeParse({ ...validTopic, relatedSlugs: ['Not A Slug'] }).success,
    ).toBe(false);
  });

  it('accepts optional difficulty and reputable sources', () => {
    const parsed = topicSchema.safeParse({
      ...validTopic,
      difficulty: 'advanced',
      sources: [
        { label: 'Newton’s laws of motion — Wikipedia', url: 'https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion' },
        { label: 'OpenStax University Physics', url: 'https://openstax.org/books/university-physics-volume-1' },
      ],
    });
    expect(parsed.success).toBe(true);
  });

  it('rejects javascript: sources on topics', () => {
    expect(
      topicSchema.safeParse({
        ...validTopic,
        sources: [{ label: 'bad', url: 'javascript:alert(1)' }],
      }).success,
    ).toBe(false);
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

import { collections } from '@/content/collections';
import { SUBJECT_CATEGORIES } from '@/content/categories';
import { experiments } from '@/content/experiments';
import { subjects } from '@/content/subjects';
import { topics } from '@/content/topics';
import { SUBJECT_KEYS } from '@/content/types';

describe('curated content catalog', () => {
  it('has all 6 subjects', () => {
    expect(subjects).toHaveLength(SUBJECT_KEYS.length);
    expect(subjects.map((subject) => subject.slug).sort()).toEqual([...SUBJECT_KEYS].sort());
  });

  it('has at least 18 topics with unique slugs', () => {
    expect(topics.length).toBeGreaterThanOrEqual(18);
    const slugs = topics.map((topic) => topic.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has at least 50 physics topics', () => {
    expect(topics.filter((topic) => topic.subject === 'physics').length).toBeGreaterThanOrEqual(50);
  });

  it('covers every physics category with at least one topic', () => {
    for (const category of SUBJECT_CATEGORIES.physics) {
      expect(
        topics.some((topic) => topic.subject === 'physics' && topic.category === category),
        category,
      ).toBe(true);
    }
  });

  it('has globally unique titles and aliases (case-insensitive)', () => {
    const titles = topics.map((topic) => topic.title.toLowerCase());
    expect(new Set(titles).size).toBe(titles.length);
    const aliases = topics.flatMap((topic) => topic.aliases.map((alias) => alias.toLowerCase()));
    expect(new Set(aliases).size).toBe(aliases.length);
  });

  it('every relatedSlug resolves to a topic', () => {
    const slugs = new Set(topics.map((topic) => topic.slug));
    for (const topic of topics) {
      for (const related of topic.relatedSlugs) {
        expect(slugs.has(related), `${topic.slug} → ${related}`).toBe(true);
      }
      expect(topic.relatedSlugs).not.toContain(topic.slug);
    }
  });

  it('every topic carries sourced attribution', () => {
    for (const topic of topics) {
      expect(topic.sources && topic.sources.length, topic.slug).toBeGreaterThan(0);
      const wikipedia = topic.sources!.filter((source) => source.url.includes('wikipedia.org'));
      expect(wikipedia.length, `${topic.slug} needs a Wikipedia source`).toBeGreaterThan(0);
      const other = topic.sources!.filter((source) => !source.url.includes('wikipedia.org'));
      expect(other.length, `${topic.slug} needs a non-Wikipedia reference`).toBeGreaterThan(0);
    }
  });

  it('has at least 15 experiments with unique slugs', () => {
    expect(experiments.length).toBeGreaterThanOrEqual(15);
    const slugs = experiments.map((experiment) => experiment.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has 5–6 collections with unique slugs', () => {
    expect(collections.length).toBeGreaterThanOrEqual(5);
    expect(collections.length).toBeLessThanOrEqual(6);
    const slugs = collections.map((collection) => collection.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('every topic cross-reference resolves', () => {
    const experimentSlugs = new Set(experiments.map((experiment) => experiment.slug));
    const collectionSlugs = new Set(collections.map((collection) => collection.slug));
    for (const topic of topics) {
      for (const slug of topic.relatedExperimentSlugs) {
        expect(experimentSlugs.has(slug), `topic ${topic.slug} → experiment ${slug}`).toBe(true);
      }
      for (const slug of topic.collectionSlugs) {
        expect(collectionSlugs.has(slug), `topic ${topic.slug} → collection ${slug}`).toBe(true);
      }
    }
  });

  it('every collection references existing topics', () => {
    const topicSlugs = new Set(topics.map((topic) => topic.slug));
    for (const collection of collections) {
      expect(collection.topicSlugs.length).toBeGreaterThan(0);
      for (const slug of collection.topicSlugs) {
        expect(topicSlugs.has(slug), `collection ${collection.slug} → topic ${slug}`).toBe(true);
      }
    }
  });

  it("every experiment's topic exists", () => {
    const topicSlugs = new Set(topics.map((topic) => topic.slug));
    for (const experiment of experiments) {
      expect(topicSlugs.has(experiment.topic), `experiment ${experiment.slug} → ${experiment.topic}`).toBe(
        true,
      );
    }
  });

  it('every topic has a real-looking Wikipedia title and at least one key concept', () => {
    for (const topic of topics) {
      expect(topic.wikipediaTitle.length).toBeGreaterThan(0);
      expect(topic.wikipediaTitle).not.toMatch(/:\/\//);
      expect(topic.keyConcepts.length).toBeGreaterThan(0);
    }
  });

  it('spot-checks accurate equations', () => {
    const newton = topics.find((topic) => topic.slug === 'newtons-laws-of-motion');
    expect(newton?.equations[0]?.latex).toContain('ma');

    const idealGas = topics.find((topic) => topic.slug === 'states-of-matter');
    expect(idealGas?.equations.some((equation) => /PV\s*=\s*nRT/i.test(equation.latex))).toBe(true);

    const quadratic = topics.find((topic) => topic.slug === 'quadratic-equations');
    expect(
      quadratic?.equations.some((equation) => equation.latex.includes('\\sqrt{b^2 - 4ac}')),
    ).toBe(true);
  });

  it('every experiment carries safety notes and a source', () => {
    for (const experiment of experiments) {
      expect(experiment.safety.length).toBeGreaterThan(0);
      expect(experiment.sources.length).toBeGreaterThan(0);
      for (const source of experiment.sources) {
        expect(source.url.startsWith('https://') || source.url.startsWith('http://')).toBe(true);
      }
    }
  });
});