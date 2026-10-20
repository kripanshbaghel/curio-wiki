---
name: experiment-content-safety
description: Author or review CurioWiki topic/experiment content so it passes the Zod content schema, teaches accurately, and keeps safety warnings honest and prominent.
---

# Experiment Content Safety

All curated content lives in `src/content/*` and is validated at module load by `parseContent` (see `src/content/schema.ts`). Invalid content fails tests and the build — this is intentional.

## Hard schema rules (rejected automatically)

- Forbidden terms anywhere in experiment title/objective/concept/materials/procedure/observations/explanation/safety: mercury, chlorine gas, gunpowder, thermite, cyanide, sodium metal, potassium metal, nitroglycerin, hydrogen peroxide >6%, explosive charge, lead dust.
- Flame terms ('open flame', 'open fire', 'bunsen burner') may never appear alongside 'without supervision'. Flame/alcohol/heat work must say who supervises.
- Every experiment needs ≥1 safety note and ≥1 http(s) source; slugs are lowercase kebab-case; `wikipediaTitle` is an article title (no URL, no slash).
- Text limits: objective/concept/keyConcept definitions ≤400 chars, summary ≤400, explanation ≤2000, materials ≤30, procedure ≤20 steps.

## Editorial rules (review by hand)

- Supervision must be honest: `adult-required` for heat, knives, boiling water; `teacher-led` for classroom kits; `none` only for genuinely harmless steps. `SafetyNotice` always renders on the detail page and shows a prominent banner for adult-required/teacher-led.
- Materials = common home/classroom items; no school-lab chemicals beyond kitchen/pharmacy staples (vinegar, baking soda, iodine solution with gloves, rubbing alcohol with adult hot-water bath only).
- Procedure steps are imperative, numbered in the UI, and each observable outcome appears in `observations`. The `explanation` teaches the actual science — accurate equations only (KaTeX, e.g. `PV = nRT`, `F = ma`; escape backslashes in TS strings).
- British English to match existing entries ("metres", "colour").
- Every topic's `relatedExperimentSlugs` and `collectionSlugs` must resolve; every experiment's `topic` must be an existing topic slug (enforced by `tests/unit/content-schema.test.ts`).

## Verification

```bash
npx vitest run tests/unit/content-schema.test.ts
npx tsc --noEmit
npx eslint src/content --max-warnings=0
npm run build   # parseContent runs at build
```
