# Interactive Concept Visualizers — Implementation Plan

**Date:** 2026-11-18
**Design:** `docs/superpowers/specs/2026-11-18-interactive-concept-visualizers-design.md`

## Baseline (recorded before changes)

- `npx tsc --noEmit` — pass
- `npx eslint .` — pass
- `npx vitest run` — 26 files / 175 tests pass
- `npm run build` — pass
- Backup: `/tmp/opencode/curiowiki-backup/worktree.patch`, `untracked.tar.gz`

## Phase 1 — Content registry and contracts

1. Add visualizer metadata schema + 30 entries (five per subject) and helpers:
   `getVisualizer`, `visualizersBySubject`, `visualizersForTopic`.
2. Map each visualizer to real topic slugs (validated against `topics`).
3. Add shared types (`VisualizerSpec`, controls, metrics, tables), pure formula/data
   modules, and unit tests for calculations and registry integrity.

## Phase 2 — Design system and shell

1. Add stage/color tokens, numeric utility, range/track styling, reduced-motion CSS.
2. Build shared UI: stage, toolbar, control panel, slider with number field, segmented
   control, toggle, readout strip, explanation, experiment, model note, header, workspace.
3. Build canvas runtime: DPR resize, rAF delta time, offscreen/hidden pause, reduced motion,
   reset/step/speed, safe draw fallback.
4. Build the landing page with a live hero pendulum and subject index; subject pages;
   workspace route; breadcrumbs; metadata; 404s.
5. Add “Visualizers” to desktop/mobile/footer navigation.

## Phase 3 — Physics and Mathematics (10)

Physics: gravity and motion, projectile motion, wave interference, Newton’s laws, electric
circuits.
Mathematics: function grapher, geometry explorer, trigonometry visualizer, probability
simulator, 3D geometry.

Each spec: real controls, derived metrics, dynamic explanation, experiment, assumptions,
source. Validate with typecheck + tests after the batch.

## Phase 4 — Chemistry and Biology (10)

Chemistry: atomic structure, electron shells, molecular bonding, states of matter, chemical
reactions.
Biology: cell structure, human heart, respiratory system, photosynthesis, DNA structure.

Validate batch.

## Phase 5 — Technology and Engineering (10)

Technology: logic gates, binary numbers, CPU architecture, computer memory, networking.
Engineering: bridge structures, gears, hydraulics, simple machines, structural loads.

Validate batch.

## Phase 6 — Integration

1. Topic-page callout for mapped topics only.
2. Subject-page link to the subject visualizer bench.
3. Nav/footer links; internal links audit.
4. Preserve `/learn`, auth, saved items, search, research routes.

## Phase 7 — QA and documentation

1. Unit tests: formulas, registry, controls, metadata.
2. E2E: landing, subject, workspace interaction, pause/reset, topic callout, 375 px overflow.
3. Full gate: `tsc`, `eslint`, `vitest`, `build`, visualizer Playwright spec.
4. Architecture doc: how to add a visualizer.
5. Dev-server visual review in light/dark at desktop and mobile.

## Risks / mitigations

- Bundle size → lazy per-spec imports, shared helpers, no chart/3D dependencies.
- Canvas accessibility → labelled stage, DOM readouts, text explanation, keyboard controls.
- Scientific overclaim → assumptions + sources + deterministic formulas + tests.
- Existing user changes → additive edits only; inspect diffs before touching shared pages.
