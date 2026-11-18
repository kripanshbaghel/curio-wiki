'use client';

import { Badge } from '@/components/ui/badge';
import { ControlPanel } from '@/components/visualizers/ui/controls';
import { ExperimentPanel, ExplanationPanel, ModelNote, ReadoutStrip } from '@/components/visualizers/ui/panels';
import { InstrumentStage, VisualizerToolbar } from '@/components/visualizers/ui/stage';
import { useVisualizer } from '@/components/visualizers/core/use-visualizer';
import type { VisualizerMeta } from '@/content/visualizers';
import type { VisualizerSpec } from '@/lib/visualizers/types';

const LEVEL_LABEL = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export function ConceptVisualizer({ meta, spec }: { meta: VisualizerMeta; spec: VisualizerSpec }) {
  const visualizer = useVisualizer(spec);
  const t = visualizer.timeRef.current ?? 0;
  const metrics = spec.metrics(visualizer.params, t);
  const explanation = spec.explanation(visualizer.params, t);
  const table = spec.table?.(visualizer.params);
  const animated = spec.animated !== false;

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <Badge>{meta.subject}</Badge>
            <Badge accent>{LEVEL_LABEL[meta.level]}</Badge>
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {meta.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            {meta.description}
          </p>
        </div>
        <div className="shrink-0">
          <VisualizerToolbar
            animated={animated}
            running={visualizer.running}
            speed={visualizer.speed}
            onToggle={visualizer.toggleRunning}
            onStep={visualizer.step}
            onReset={visualizer.reset}
            onSpeed={visualizer.setSpeed}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
        <div className="min-w-0 lg:col-start-1">
          <InstrumentStage
            draw={spec.draw}
            params={visualizer.params}
            running={visualizer.running}
            speed={visualizer.speed}
            timeRef={visualizer.timeRef}
            label={spec.stageLabel}
            hint={spec.stageHint}
            accent={spec.accent}
            aspect={spec.aspect ?? 1.6}
          />
        </div>

        <aside className="lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:sticky lg:top-20 lg:self-start">
          <ControlPanel
            controls={spec.controls}
            params={visualizer.params}
            onChange={visualizer.setParam}
            onReset={visualizer.reset}
          />
        </aside>

        <div className="lg:col-start-1">
          <ReadoutStrip metrics={metrics} />
        </div>

        <div className="lg:col-start-1">
          <ExplanationPanel
            headline={explanation.headline}
            body={explanation.body}
            accent={meta.subject}
          />
        </div>

        <div className="lg:col-start-1">
          <ExperimentPanel experiment={spec.experiment} table={table} />
        </div>

        <div className="lg:col-start-1">
          <ModelNote assumptions={spec.assumptions} sources={spec.sources} />
        </div>
      </div>
    </div>
  );
}
