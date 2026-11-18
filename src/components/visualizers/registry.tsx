'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ConceptVisualizer } from '@/components/visualizers/workspace';
import type { VisualizerMeta } from '@/content/visualizers';
import type { VisualizerSpec } from '@/lib/visualizers/types';

/**
 * One lazy loader per visualizer. The metadata in `src/content/visualizers.ts`
 * is the source of truth for routes and subject grouping; this map is the
 * bridge from a metadata slug to its implementation. Keep the two lists in
 * sync — `tests/unit/visualizer-registry.test.ts` asserts that every slug has
 * a loader and every loader has metadata.
 */
export const SPEC_LOADERS: Record<string, () => Promise<VisualizerSpec>> = {
  /* Physics */
  'gravity-and-motion': () => import('./specs/physics/gravity-and-motion').then((module) => module.default),
  'projectile-motion': () => import('./specs/physics/projectile-motion').then((module) => module.default),
  'wave-interference': () => import('./specs/physics/wave-interference').then((module) => module.default),
  'newtons-laws': () => import('./specs/physics/newtons-laws').then((module) => module.default),
  'electric-circuits': () => import('./specs/physics/electric-circuits').then((module) => module.default),

  /* Chemistry */
  'atomic-structure': () => import('./specs/chemistry/atomic-structure').then((module) => module.default),
  'electron-shells': () => import('./specs/chemistry/electron-shells').then((module) => module.default),
  'molecular-bonding': () => import('./specs/chemistry/molecular-bonding').then((module) => module.default),
  'states-of-matter': () => import('./specs/chemistry/states-of-matter').then((module) => module.default),
  'chemical-reactions': () => import('./specs/chemistry/chemical-reactions').then((module) => module.default),

  /* Biology */
  'cell-structure': () => import('./specs/biology/cell-structure').then((module) => module.default),
  'human-heart': () => import('./specs/biology/human-heart').then((module) => module.default),
  'respiratory-system': () => import('./specs/biology/respiratory-system').then((module) => module.default),
  photosynthesis: () => import('./specs/biology/photosynthesis').then((module) => module.default),
  'dna-structure': () => import('./specs/biology/dna-structure').then((module) => module.default),

  /* Mathematics */
  'function-grapher': () => import('./specs/mathematics/function-grapher').then((module) => module.default),
  'geometry-explorer': () => import('./specs/mathematics/geometry-explorer').then((module) => module.default),
  'trigonometry-visualizer': () => import('./specs/mathematics/trigonometry-visualizer').then((module) => module.default),
  'probability-simulator': () => import('./specs/mathematics/probability-simulator').then((module) => module.default),
  '3d-geometry': () => import('./specs/mathematics/3d-geometry').then((module) => module.default),

  /* Technology */
  'logic-gates': () => import('./specs/technology/logic-gates').then((module) => module.default),
  'binary-number-system': () => import('./specs/technology/binary-number-system').then((module) => module.default),
  'cpu-architecture': () => import('./specs/technology/cpu-architecture').then((module) => module.default),
  'computer-memory': () => import('./specs/technology/computer-memory').then((module) => module.default),
  'computer-networking': () => import('./specs/technology/computer-networking').then((module) => module.default),

  /* Engineering */
  'bridge-structures': () => import('./specs/engineering/bridge-structures').then((module) => module.default),
  gears: () => import('./specs/engineering/gears').then((module) => module.default),
  hydraulics: () => import('./specs/engineering/hydraulics').then((module) => module.default),
  'simple-machines': () => import('./specs/engineering/simple-machines').then((module) => module.default),
  'structural-loads': () => import('./specs/engineering/structural-loads').then((module) => module.default),
};

function VisualizerSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-busy="true" aria-label="Loading visualizer">
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <div className="h-5 w-24 rounded bg-surface-muted" />
        <div className="h-9 w-64 max-w-full rounded bg-surface-muted" />
        <div className="h-4 w-full max-w-2xl rounded bg-surface-muted" />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="viz-stage relative flex aspect-[1.6] items-center justify-center overflow-hidden rounded-[1.25rem] border border-border">
          <p className="text-sm text-viz-muted">Loading instrument…</p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <div className="h-4 w-20 rounded bg-surface-muted" />
          <div className="mt-4 space-y-3">
            {[0, 1, 2].map((row) => (
              <div key={row} className="h-8 rounded bg-surface-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualizerClient({ meta }: { meta: VisualizerMeta }) {
  const [spec, setSpec] = useState<VisualizerSpec | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setSpec(null);
    setFailed(false);
    const load = SPEC_LOADERS[meta.slug];
    if (!load) {
      setFailed(true);
      return () => {
        cancelled = true;
      };
    }
    load()
      .then((loaded) => {
        if (!cancelled) setSpec(loaded);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [meta.slug]);

  if (failed) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8">
        <p className="text-sm font-semibold text-foreground">This visualizer could not be loaded.</p>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          The instrument failed to start, but the rest of CurioWiki is still available. Return to the
          visualizer index or try the page again.
        </p>
        <Link
          href="/visualizers"
          className="mt-4 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Back to all visualizers
        </Link>
      </div>
    );
  }

  if (!spec) return <VisualizerSkeleton />;

  return <ConceptVisualizer meta={meta} spec={spec} />;
}
