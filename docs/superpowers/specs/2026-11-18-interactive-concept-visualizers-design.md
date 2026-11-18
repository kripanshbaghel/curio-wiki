# Interactive Concept Visualizers — Design

**Date:** 2026-11-18
**Status:** Approved by direct user instruction (30 visualizers, five per subject, phased build).
**Related:** `2026-10-19-curio-wiki-design.md` (this work supersedes its “no simulations” non-goal).

## 1. Intent

Turn CurioWiki from a reading-first library into a place where a learner can change a
parameter and watch the concept respond — without replacing the existing library, auth,
search, saved items, or APIs.

The system has two entry points:

1. A dedicated `/visualizers` section with subject pages and workspaces.
2. Contextual “Explore interactively” links on curated topic pages that have a matching
   visualizer.

## 2. Goals

- 30 working visualizers, five per subject, each with real deterministic calculations.
- A shared workspace: stage, controls, live measurements, dynamic explanation, experiment
  prompts, assumptions and sources.
- A distinctive visual identity that extends CurioWiki rather than replacing it.
- Responsive, keyboard-accessible, reduced-motion-aware, honest about simplified models.
- A registry-driven architecture so adding a visualizer is data + one draw function.
- No new runtime dependencies. Canvas/SVG, React, KaTeX (already present), lucide (already
  present).

## 3. Non-goals / anti-goals

- No PhET assets, branding, or layout copying.
- No fake data, decorative controls, or invented measurements.
- No second auth system, database, search stack, or progress store.
- No rewrite of existing pages beyond additive navigation and topic cross-links.
- No Three.js / React Three Fiber: the 3D geometry visualizer uses a lightweight canvas
  projection. This keeps the bundle small and the model inspectable.
- No claim that a teaching model is engineering design software. Assumptions are visible.

## 4. Design direction — “The Bench”

Visualizers behave like scientific instruments, not content cards.

- **The signature:** every simulation sits on a dark instrument stage, like an oscilloscope
  display, in both light and dark themes. The page chrome keeps CurioWiki’s existing tokens.
  This gives simulations stable contrast and makes subject accents luminous.
- **Typography:** Inter Variable stays. Readouts use tabular figures; no decorative
  monospace labels or all-caps eyebrows.
- **Structure:** the landing page opens with a live mini-instrument, then a grouped
  instrument index (hairline rows per subject), not a wall of identical cards.
- **Workspace:** the stage dominates. A compact control rail sits beside it on desktop and
  below it on mobile. Measurements, explanation, experiment and assumptions follow.
- **Color:** existing semantic tokens + fixed stage tokens and six lighter stage accents.
  Subject color appears as a trace/rail, never as a gradient wash.
- **Motion:** one entrance reveal; motion afterwards answers a user action. The animation
  loop pauses when the tab is hidden or the stage is offscreen. Reduced motion starts paused
  with a meaningful static frame.
- **Copy:** plain, active voice. Controls name the quantity and unit. Explanations say what
  changed and why, in one short paragraph.

## 5. Token additions

```css
--viz-stage: #0d121b;        /* display glass, both themes */
--viz-stage-raised: #141b26;
--viz-ink: #e8edf7;
--viz-muted: #93a0b5;
--viz-grid: rgb(200 215 240 / 0.08);
--viz-hairline: rgb(200 215 240 / 0.16);
--viz-physics: #7aa7ff;
--viz-chemistry: #b79cff;
--viz-biology: #6ee7a0;
--viz-mathematics: #f6c453;
--viz-technology: #4fe0c8;
--viz-engineering: #ff8fa3;
```

Mapped through `@theme inline` as `bg-viz-stage`, `text-viz-ink`, `text-viz-physics`, etc.
A `.numeric` utility applies `font-variant-numeric: tabular-nums`.

Canvas code uses a mirrored `CANVAS_COLORS` constant because canvas cannot resolve CSS
variables in drawing calls. The constants are documented next to the tokens.

## 6. Routes

| Route | Purpose |
|---|---|
| `/visualizers` | Landing, live hero instrument, subject index, model honesty note |
| `/visualizers/[subject]` | Subject bench: featured instrument + all five |
| `/visualizers/[subject]/[slug]` | Workspace |
| `/topics/[slug]` | Additive “Explore interactively” callout when mapped |
| `/subjects/[slug]` | Additive link to that subject’s visualizers |

Navigation: “Visualizers” added to desktop, mobile, and footer nav. Existing links stay.

## 7. Architecture

```
src/content/visualizers.ts               metadata registry + Zod + helpers
src/lib/visualizers/
  types.ts                               spec, controls, metrics, experiment
  formulas.ts                            pure calculation functions (tested)
  data.ts                                element, molecule, reaction, machine data
src/components/visualizers/
  core/
    canvas.ts                            DPR/resize/rAF + visibility + reduced motion
    draw.ts                              grid, axes, arrows, labels, waves, 3D projection
    palette.ts                           canvas palette mirroring CSS tokens
    use-visualizer.ts                    params, clock, play/pause/step/reset/speed
  ui/
    stage.tsx, control-panel.tsx, readout.tsx, explanation.tsx,
    experiment.tsx, model-note.tsx, toolbar.tsx, header.tsx
  workspace.tsx                          shared responsive layout
  registry.tsx                           30 lazy spec loaders
  hero-instrument.tsx                    landing live pendulum
  callout.tsx                            topic-page integration
  specs/{physics,chemistry,biology,mathematics,technology,engineering}/*.ts
src/app/visualizers/...                  pages
```

A **spec** is data + a pure draw function:

- `controls`, `metrics`, `explanation`, `experiment`, `assumptions`, `sources`
- `draw(ctx, params, t, view)` is deterministic and stateless. Time is the only evolving
  input. This makes pause, reset, step and tests predictable.
- `autoPlay`, `aspect`, `table` are optional.

Metadata stays in `src/content/visualizers.ts`; runtime code stays in specs. Registry maps
slug → `next/dynamic` import so only the opened instrument’s code loads.

## 8. Scientific rules

- Closed-form calculations where possible (projectile, free fall, waves, Ohm’s law,
  hydraulics, beam reactions, geometry).
- Deterministic pseudo-randomness (seeded) for probability and packet loss; the seed and
  trial index are inputs, so results are reproducible.
- Every visualizer names its assumptions and at least one source.
- Simplified models are labelled in the workspace and in the explanation.
- Invalid/undefined cases are handled (tan at 90°, zero mass, zero area, zero resistance,
  division by zero, no-friction net force).
- Displayed measurements are derived from the same parameter object passed to the draw
  function.

## 9. Preservation and risks

- Existing dirty files from the user’s research work are not rewritten. New visualizer code
  is additive. Existing routes are only touched for additive navigation and topic/subject
  cross-links.
- `/learn` and `/api/research/*` remain untouched.
- No schema change to topics/experiments. Mapping lives in `visualizers.ts` and is validated
  against real topic slugs in tests.
- Risk: 30 canvases could bloat bundles. Mitigation: lazy registry, one mounted canvas,
  no chart dependency, shared helpers.
- Risk: canvas artwork is inaccessible. Mitigation: `role="img"` label, visible readouts,
  text explanation, keyboard controls, no color-only meaning.
- Risk: educational overclaim. Mitigation: assumptions list + source links + “teaching
  model” note on every workspace.

## 10. Definition of done

- 30 visualizers render, animate or respond, and show correct values.
- All six subject pages and the landing page are complete and responsive at 375 px.
- Topic pages with mappings show the callout; unmapped topics are unchanged.
- `npx tsc --noEmit`, `npx eslint .`, `npx vitest run`, `npm run build`, and the visualizer
  Playwright spec pass.
- Architecture doc explains how to add a visualizer.
