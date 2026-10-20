---
name: symmetrical-ui-accessibility
description: Build CurioWiki UI that stays visually symmetric across the six subjects and accessible — design tokens, shared components, focus states, labels, and responsive rules.
---

# Symmetrical UI & Accessibility

## Symmetry rules

- Six subjects carry accent tokens `--c-physics … --c-engineering` (mapped to `text-physics`, `bg-physics`, …). Use a literal class map (e.g. `{ physics: 'text-physics', … }`) — dynamic class strings are erased by Tailwind and will not render.
- Grids must stay even: use the `equal-cards` utility (`grid-auto-rows: 1fr`) or `h-full` flex cards so sibling cards match heights; wrap page widths in the `Container` component (Tailwind's `container` utility is intentionally not used).
- Reuse the shared kit in `src/components/ui` (`Button`, `Input`, `Badge`, `Card`, `EmptyState`, `ErrorState`, `SectionHeader`, `Container`, `Skeleton`) instead of one-off markup — same radii (`rounded-card`), borders (`border-border`), shadows (`shadow-card`).
- Dark mode: only semantic tokens (`background`, `foreground`, `surface`, `muted-foreground`, `danger`, `success`, `ring`), never raw colors. Theme script in the root layout must stay (prevents FOUC).
- Every source-bearing surface (search results, wiki panel, videos, resources, experiments) gets the same treatment: header, grid, honest empty/error state — sections must not be styled differently for the same status.

## Accessibility rules

- Every input has a real `<label htmlFor>`; every icon-only button/link has `aria-label`; decorative icons get `aria-hidden`.
- Interactive state uses `aria-pressed` (toggles), `role="alert"` (form errors), `role="search"` (search forms), `aria-expanded` (mobile nav).
- Visible focus: rely on the global `:focus-visible` ring token; never `outline: none` without a replacement.
- Iframes: descriptive `title`, `loading="lazy"`; external links `target="_blank" rel="noopener noreferrer"`.
- Heading order is hierarchical per page (h1 once, then h2 sections via `SectionHeader`).
- Check 375 px: hamburger visible, desktop nav hidden, no horizontal scroll (`documentElement.scrollWidth <= innerWidth`).

## Verification

Component tests with Testing Library (`tests/unit/*.test.tsx`), `npm run lint`, and a dev-server check of light + dark themes.
