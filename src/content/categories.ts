import type { SubjectKey } from './types';

/**
 * Category taxonomy for the curated library. Every topic's `category` must
 * belong to its subject's set — enforced by the Zod schema at module load.
 * Category ids are stable slugs (safe for URLs and filters).
 */
export const SUBJECT_CATEGORIES: Record<SubjectKey, readonly string[]> = {
  physics: [
    'mechanics',
    'motion-and-forces',
    'energy',
    'gravity',
    'fluids-and-buoyancy',
    'waves-and-sound',
    'optics',
    'electricity-and-magnetism',
    'thermodynamics',
    'modern-physics',
    'astronomy',
  ],
  chemistry: [
    'atomic-structure',
    'periodic-table',
    'chemical-bonding',
    'reactions',
    'acids-and-bases',
    'solutions',
    'stoichiometry',
    'organic-chemistry',
    'electrochemistry',
    'thermochemistry',
  ],
  biology: [
    'cells',
    'genetics',
    'evolution',
    'ecology',
    'human-biology',
    'microorganisms',
    'plants',
    'anatomy-and-physiology',
    'molecular-biology',
  ],
  mathematics: [
    'arithmetic',
    'algebra',
    'geometry',
    'trigonometry',
    'calculus',
    'probability',
    'statistics',
    'number-theory',
    'vectors-and-matrices',
    'discrete-mathematics',
  ],
  technology: [
    'computer-hardware',
    'operating-systems',
    'programming',
    'algorithms',
    'databases',
    'networks',
    'cybersecurity',
    'artificial-intelligence',
    'robotics',
    'electronics',
  ],
  engineering: [
    'mechanical-engineering',
    'electrical-engineering',
    'civil-engineering',
    'chemical-engineering',
    'aerospace-engineering',
    'biomedical-engineering',
    'materials',
    'structures',
    'circuits',
    'design-principles',
  ],
};

export function isCategoryForSubject(subject: SubjectKey, category: string): boolean {
  return SUBJECT_CATEGORIES[subject].includes(category);
}

/** Human-readable label for a category slug (e.g. `fluids-and-buoyancy` → `Fluids and buoyancy`). */
export function categoryLabel(category: string): string {
  const words = category.replace(/-/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}
