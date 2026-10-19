import { z } from 'zod';
import { parseContent, subjectSchemaRecord } from './schema';
import type { Subject } from './types';

/** Seed dataset. Task 16 expands/refreshes this with final copy. */
const rawSubjects: unknown[] = [
  {
    slug: 'physics',
    name: 'Physics',
    description: 'Motion, forces, energy, electricity, and the rules the universe runs on.',
    icon: 'atom',
    accent: 'physics',
  },
  {
    slug: 'chemistry',
    name: 'Chemistry',
    description: 'Atoms, molecules, reactions, and what matter is made of.',
    icon: 'flask',
    accent: 'chemistry',
  },
  {
    slug: 'biology',
    name: 'Biology',
    description: 'Living things, cells, ecosystems, and how life works.',
    icon: 'leaf',
    accent: 'biology',
  },
  {
    slug: 'mathematics',
    name: 'Mathematics',
    description: 'Numbers, patterns, equations, and the language of science.',
    icon: 'sigma',
    accent: 'mathematics',
  },
  {
    slug: 'technology',
    name: 'Technology',
    description: 'Computers, circuits, code, and the tools we build.',
    icon: 'cpu',
    accent: 'technology',
  },
  {
    slug: 'engineering',
    name: 'Engineering',
    description: 'Designing, building, and testing things that solve real problems.',
    icon: 'wrench',
    accent: 'engineering',
  },
];

export const subjects: Subject[] = parseContent(
  z.array(subjectSchemaRecord),
  rawSubjects,
  'subjects',
);

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((subject) => subject.slug === slug);
}
