# Interactive visualizers — architecture and extension guide

**Status:** shipped 2026-11-18. 30 visualizers, five per subject.
**Design:** `docs/superpowers/specs/2026-11-18-interactive-concept-visualizers-design.md`
**Plan:** `docs/superpowers/plans/2026-11-18-interactive-concept-visualizers.md`

## Routes

| Route | Purpose |
|---|---|
| `/visualizers` | Landing page: live pendulum hero + grouped instrument index (rows, not cards). |
| `/visualizers/[subject]` | One subject bench: five instruments, readable descriptions, no card wall. |
| `/visualizers/[subject]/[slug]` | Workspace: stage, control rail, readouts, explanation, experiment, assumptions, related topics, previous/next. |
| `/topics/[slug]` | Mapped topics gain an additive "Explore interactively" callout. |
| `/subjects/[slug]` | Additive "Interactive visualizers" band listing that subject's five benches. |

Breadcrumbs, `generateStaticParams`, 404s, metadata and previous/next navigation are
implemented in the route files. The header, mobile menu and footer link to `/visualizers`.

## File map

```
src/content/visualizers.ts                  Metadata for all 30 (source of truth).
src/components/visualizers/
  hero-instrument.tsx                       Landing live pendulum (own canvas loop).
  registry.tsx                              30 lazy loaders + VisualizerClient (loading/error).
  workspace.tsx                             Shared workspace layout.
  core/
    palette.ts                              Canvas colours mirrored from --viz-* tokens.
    draw.ts                                 Canvas primitives + 3D projection helpers.
    use-visualizer.ts                       Params, run state, speed, reset, reduced motion.
    simulation-canvas.tsx                   Resize, rAF, visibility, cleanup, error fallback.
  ui/
    controls.tsx                            Slider, select, segment, toggle, reset.
    stage.tsx                               Stage chrome, toolbar, fullscreen.
    panels.tsx                              Readouts, explanation, experiment + table, assumptions.
  specs/<subject>/<slug>.ts                 One VisualizerSpec per instrument.
src/lib/visualizers/
  types.ts                                  Spec/control/metric/experiment types + helpers.
  formulas.ts                               Pure deterministic calculations (unit-tested).
  data.ts                                   Reference data: molecules, reactions, DNA, organelles.
src/app/visualizers/...                     Routes.
src/components/topic/visualizer-callout.tsx Topic → visualizer bridge.
```

## Spec contract

Every file in `specs/` default-exports a `VisualizerSpec`:

- `accent`: must match the metadata subject. Drives stage trace and explanation rail.
- `draw(ctx, params, t, view)`: synchronous canvas drawing. `t` is simulated seconds.
- `controls`: labelled sliders/selects/segments/toggles. `when(params)` hides irrelevant fields.
- `metrics(params, t)`: 5–6 measured values; appears as the readout strip.
- `explanation(params, t)`: a headline naming what changed and one short paragraph of why.
- `experiment`: a question, three steps and an expected result (options are `<details>`).
- `assumptions` and `sources`: always present; shown under "Model and assumptions".
- `table(params, t)`: optional data table shown inside the experiment panel.
- `animated`, `autoPlay`, `defaultSpeed`, `aspect`, `stageLabel`, `stageHint`: presentation.

All calculations belong in `formulas.ts` (or another pure module), not in `draw`. That keeps
the model unit-testable and prevents the drawing from silently disagreeing with the readouts.

## Adding a visualizer

1. Add a metadata entry to `src/content/visualizers.ts` with a unique slug, subject, level,
   summary/description and at least one **existing** topic slug.
2. Create `src/components/visualizers/specs/<subject>/<slug>.ts` exporting a spec.
   Import calculation helpers from `@/lib/visualizers/formulas`; add new pure helpers there.
3. Register the lazy loader in `registry.tsx`. The registry test fails if metadata and loaders
   drift apart.
4. Run the gate below. The registry test also verifies five-per-subject counts, topic
   resolution, required spec fields and slider ranges.
5. Add invariant tests for any new formula (boundaries, monotonicity, conservation, units).

No route files change: subject and workspace pages are generated from metadata.

## Rules that keep the benches honest

- Never present a relative index (deflection, utilisation, hit rate) as a measurement.
- State every approximation in `assumptions`; name the missing physics rather than implying it.
- A control must change a readout or the drawing. No decorative sliders.
- Label units. Use `formatNumber` for display and keep raw numbers in metrics only where useful.
- Use seeded randomness (`mulberry32`) so a run is reproducible; never `Math.random()`.
- Canvas animation must stop when paused, offscreen or the document is hidden; the shared
  runtime already does this. Reduced motion starts paused on a meaningful frame.
- Canvas is `role="img"` with a descriptive label; controls are native inputs with labels,
  visible focus and keyboard support. The stage is not the only way to get the result —
  readouts, explanation and tables duplicate it in text.
- The stage stays dark in both themes for contrast; page chrome uses semantic tokens only.

## Verification

```bash
npx tsc --noEmit
npx eslint .
npx vitest run
npm run build
npx playwright test e2e/visualizers.spec.ts
```

Targeted unit tests:

- `tests/unit/visualizer-registry.test.ts` — metadata/loader sync, five per subject, topic
  mapping, every spec loads and declares the required fields.
- `tests/unit/visualizer-formulas.test.ts` — calculation invariants.
- `tests/unit/visualizer-controls.test.tsx` — accessible controls, numeric commits, conditional
  fields, reset.
- `e2e/visualizers.spec.ts` — index, subject page, workspace interaction, topic callout,
  375 px overflow.
