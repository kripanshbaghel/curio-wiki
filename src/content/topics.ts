import { z } from 'zod';
import { parseContent, topicSchema } from './schema';
import type { Topic } from './types';

/**
 * Seed dataset. Task 16 expands this to the full curated catalog (≥18 topics).
 * Parsed at module load so invalid content fails the build immediately.
 */
const rawTopics: unknown[] = [
  {
    slug: 'newtons-laws-of-motion',
    title: "Newton's laws of motion",
    subject: 'physics',
    summary:
      "Newton's three laws describe how force, mass, and motion relate: objects keep their velocity unless a net force acts, force equals mass times acceleration, and forces always come in equal and opposite pairs.",
    aliases: ['newtonian mechanics', 'laws of motion'],
    keyConcepts: [
      {
        term: 'Inertia',
        definition:
          'An object resists changes to its state of motion; it keeps its velocity unless a net force acts on it (first law).',
      },
      {
        term: 'Net force',
        definition:
          'The vector sum of all forces on an object; only a net force changes an object’s velocity.',
      },
      {
        term: 'Action and reaction',
        definition:
          'When one body exerts a force on a second, the second exerts an equal and opposite force back (third law).',
      },
    ],
    equations: [
      {
        label: "Newton's second law",
        latex: 'F = ma',
        variables: [
          { symbol: 'F', meaning: 'net force on the object (newtons)' },
          { symbol: 'm', meaning: 'mass of the object (kilograms)' },
          { symbol: 'a', meaning: 'acceleration (metres per second squared)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['simple-pendulum-period'],
    wikipediaTitle: "Newton's laws of motion",
    collectionSlugs: [],
  },
  {
    slug: 'simple-pendulum',
    title: 'Simple pendulum',
    subject: 'physics',
    summary:
      'A simple pendulum is a mass swinging on the end of a string. Its period depends mainly on the length of the string and on gravity — not on the mass or how wide it swings (for small angles).',
    aliases: ['pendulum', 'pendulum motion'],
    keyConcepts: [
      {
        term: 'Period',
        definition: 'The time the pendulum takes to complete one full back-and-forth swing.',
      },
      {
        term: 'Amplitude',
        definition: 'The angle or distance the pendulum is released from; small angles keep the motion simple.',
      },
    ],
    equations: [
      {
        label: 'Period of a simple pendulum (small angles)',
        latex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}',
        variables: [
          { symbol: 'T', meaning: 'period of one swing (seconds)' },
          { symbol: 'L', meaning: 'length from pivot to centre of mass (metres)' },
          { symbol: 'g', meaning: 'gravitational field strength (≈ 9.8 m/s² on Earth)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['simple-pendulum-period'],
    wikipediaTitle: 'Pendulum',
    collectionSlugs: [],
  },
  {
    slug: 'photosynthesis',
    title: 'Photosynthesis',
    subject: 'biology',
    summary:
      'Photosynthesis is the process plants, algae, and some bacteria use to capture light energy and turn water and carbon dioxide into glucose, releasing oxygen as a by-product.',
    aliases: ['plant photosynthesis'],
    keyConcepts: [
      {
        term: 'Chlorophyll',
        definition: 'The green pigment in chloroplasts that absorbs light energy, mostly red and blue light.',
      },
      {
        term: 'Glucose',
        definition: 'The sugar produced during photosynthesis; it stores chemical energy for the plant.',
      },
    ],
    equations: [
      {
        label: 'Overall photosynthesis equation',
        latex: '6\\mathrm{CO}_2 + 6\\mathrm{H}_2\\mathrm{O} + \\text{light} \\rightarrow \\mathrm{C}_6\\mathrm{H}_{12}\\mathrm{O}_6 + 6\\mathrm{O}_2',
        variables: [
          { symbol: 'CO₂', meaning: 'carbon dioxide taken in from the air' },
          { symbol: 'H₂O', meaning: 'water absorbed by the roots' },
          { symbol: 'C₆H₁₂O₆', meaning: 'glucose produced' },
          { symbol: 'O₂', meaning: 'oxygen released' },
        ],
      },
    ],
    relatedExperimentSlugs: ['leaf-starch-test'],
    wikipediaTitle: 'Photosynthesis',
    collectionSlugs: [],
  },
  {
    slug: 'acid-base-reaction',
    title: 'Acid–base reaction',
    subject: 'chemistry',
    summary:
      'Acid–base reactions transfer protons between substances. When an acid meets a base they neutralize each other; if a carbonate is present the reaction also releases carbon dioxide gas.',
    aliases: ['neutralization', 'vinegar and baking soda'],
    keyConcepts: [
      {
        term: 'Acid',
        definition: 'A substance that donates protons (H⁺) in solution, turning indicators like litmus red.',
      },
      {
        term: 'Base',
        definition: 'A substance that accepts protons (or produces OH⁻ in water), turning indicators like litmus blue.',
      },
      {
        term: 'Neutralization',
        definition: 'The reaction of an acid with a base to form water and a salt.',
      },
    ],
    equations: [
      {
        label: 'Vinegar (acetic acid) and baking soda (sodium hydrogencarbonate)',
        latex: '\\mathrm{CH}_3\\mathrm{COOH} + \\mathrm{NaHCO}_3 \\rightarrow \\mathrm{CH}_3\\mathrm{COONa} + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2',
        variables: [
          { symbol: 'CH₃COOH', meaning: 'acetic acid (in vinegar)' },
          { symbol: 'NaHCO₃', meaning: 'sodium hydrogencarbonate (baking soda)' },
          { symbol: 'CO₂', meaning: 'carbon dioxide gas (the bubbles)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['vinegar-volcano'],
    wikipediaTitle: 'Acid–base reaction',
    collectionSlugs: [],
  },
];

export const topics: Topic[] = parseContent(z.array(topicSchema), rawTopics, 'topics');

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
