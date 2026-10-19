export const SUBJECT_KEYS = [
  'physics',
  'chemistry',
  'biology',
  'mathematics',
  'technology',
  'engineering',
] as const;

export type SubjectKey = (typeof SUBJECT_KEYS)[number];

export type SubjectIcon =
  | 'atom'
  | 'flask'
  | 'leaf'
  | 'sigma'
  | 'cpu'
  | 'wrench';

export interface Subject {
  slug: SubjectKey;
  name: string;
  description: string;
  icon: SubjectIcon;
  accent: SubjectKey;
}

export interface KeyConcept {
  term: string;
  definition: string;
}

export interface EquationVariable {
  symbol: string;
  meaning: string;
}

export interface Equation {
  label: string;
  latex: string;
  variables: EquationVariable[];
}

export interface Topic {
  slug: string;
  title: string;
  subject: SubjectKey;
  summary: string;
  aliases: string[];
  keyConcepts: KeyConcept[];
  equations: Equation[];
  relatedExperimentSlugs: string[];
  wikipediaTitle: string;
  collectionSlugs: string[];
}

export type ExperimentLevel = 'beginner' | 'intermediate' | 'advanced';
export type ExperimentSupervision = 'none' | 'adult-required' | 'teacher-led';

export interface SourceLink {
  label: string;
  url: string;
}

export interface Experiment {
  slug: string;
  title: string;
  subject: SubjectKey;
  topic: string;
  level: ExperimentLevel;
  supervision: ExperimentSupervision;
  objective: string;
  concept: string;
  materials: string[];
  procedure: string[];
  observations: string[];
  explanation: string;
  safety: string[];
  durationMinutes: number | null;
  relatedVideoQueries: string[];
  sources: SourceLink[];
  featured: boolean;
}

export interface Collection {
  slug: string;
  title: string;
  description: string;
  topicSlugs: string[];
}
