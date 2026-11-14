import { z } from 'zod';
import { isCategoryForSubject } from './categories';
import { SUBJECT_KEYS } from './types';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const FORBIDDEN_HAZARD_TERMS = [
  'mercury',
  'chlorine gas',
  'gunpowder',
  'thermite',
  'cyanide',
  'sodium metal',
  'potassium metal',
  'nitroglycerin',
  'hydrogen peroxide >6%',
  'explosive charge',
  'lead dust',
] as const;

const FLAME_TERMS = ['open flame', 'open fire', 'bunsen burner'] as const;

export function isSafeHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export const slugSchema = z.string().regex(slugPattern, {
  message: 'must be a lowercase kebab-case slug',
});

export const subjectSchema = z.enum(SUBJECT_KEYS);

export const sourceLinkSchema = z.object({
  label: z.string().trim().min(1),
  url: z
    .string()
    .trim()
    .refine(isSafeHttpUrl, { message: 'must be an http(s) URL' }),
});

const text = (max: number) => z.string().trim().min(1).max(max);
const stringArray = (maxItems: number) =>
  z.array(z.string().trim().min(1)).min(1).max(maxItems);

export const experimentSchema = z
  .object({
    slug: slugSchema,
    title: text(120),
    subject: subjectSchema,
    topic: text(80),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    supervision: z.enum(['none', 'adult-required', 'teacher-led']),
    objective: text(400),
    concept: text(400),
    materials: stringArray(30),
    procedure: stringArray(20),
    observations: stringArray(20),
    explanation: text(2000),
    safety: z.array(z.string().trim().min(1)).min(1, 'every experiment needs at least one safety note').max(10),
    durationMinutes: z.number().int().min(0).max(600).nullable(),
    relatedVideoQueries: z.array(z.string().trim().min(1)).max(10),
    sources: z.array(sourceLinkSchema).min(1),
    featured: z.boolean(),
  })
  .superRefine((exp, ctx) => {
    const corpus: Array<[string, string]> = [
      ['title', exp.title],
      ['procedure', exp.procedure.join(' ')],
      ['materials', exp.materials.join(' ')],
      ['explanation', exp.explanation],
      ['observations', exp.observations.join(' ')],
      ['safety', exp.safety.join(' ')],
      ['objective', exp.objective],
      ['concept', exp.concept],
    ];

    for (const [field, value] of corpus) {
      const lower = value.toLowerCase();
      for (const term of FORBIDDEN_HAZARD_TERMS) {
        if (lower.includes(term)) {
          ctx.addIssue({
            code: 'custom',
            path: [field],
            message: `forbidden hazardous term "${term}"`,
          });
        }
      }
      const mentionsFlame = FLAME_TERMS.some((f) => lower.includes(f));
      if (mentionsFlame && lower.includes('without supervision')) {
        ctx.addIssue({
          code: 'custom',
          path: [field],
          message: 'flame work must not be described as done without supervision',
        });
      }
    }
  });

export const topicSchema = z
  .object({
    slug: slugSchema,
    title: text(120),
    subject: subjectSchema,
    category: slugSchema,
    summary: text(400),
    aliases: z.array(z.string().trim().min(1)).max(10),
    keyConcepts: z
      .array(z.object({ term: text(80), definition: text(400) }))
      .min(1)
      .max(12),
    equations: z
      .array(
        z.object({
          label: text(120),
          latex: text(300),
          variables: z.array(z.object({ symbol: text(20), meaning: text(80) })).max(12),
        }),
      )
      .max(8),
    relatedExperimentSlugs: z.array(slugSchema).max(12),
    relatedSlugs: z.array(slugSchema).max(12),
    wikipediaTitle: text(200).refine(
      (v) => !v.includes('://') && !v.includes('/'),
      { message: 'must be a Wikipedia article title, not a URL or path' },
    ),
    collectionSlugs: z.array(slugSchema).max(12),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    sources: z.array(sourceLinkSchema).min(1).max(6).optional(),
  })
  .superRefine((topic, ctx) => {
    if (!isCategoryForSubject(topic.subject, topic.category)) {
      ctx.addIssue({
        code: 'custom',
        path: ['category'],
        message: `"${topic.category}" is not a ${topic.subject} category`,
      });
    }
  });

export const subjectSchemaRecord = z.object({
  slug: subjectSchema,
  name: text(40),
  description: text(200),
  icon: z.enum(['atom', 'flask', 'leaf', 'sigma', 'cpu', 'wrench']),
  accent: subjectSchema,
});

export const collectionSchema = z.object({
  slug: slugSchema,
  title: text(80),
  description: text(240),
  topicSlugs: z.array(slugSchema).min(1).max(20),
});

export function parseContent<S extends z.ZodType>(
  schema: S,
  data: unknown,
  name: string,
): z.infer<S> {
  const result = schema.safeParse(data);
  if (result.success) return result.data;
  const lines = result.error.issues.map((issue) => {
    const path = issue.path.length ? `[${issue.path.join('.')}]` : '';
    return `${name}${path}: ${issue.message}`;
  });
  throw new Error(
    `Invalid ${name} content (${result.error.issues.length} issue(s)):\n${lines.join('\n')}`,
  );
}
