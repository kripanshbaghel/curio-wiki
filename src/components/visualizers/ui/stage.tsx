'use client';

import { Maximize2, Pause, Play, RotateCcw, SkipForward } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SimulationCanvas } from '@/components/visualizers/core/simulation-canvas';
import type { Params, Viewport } from '@/lib/visualizers/types';
import { cn } from '@/lib/cn';

const SPEEDS = [0.25, 0.5, 1, 2] as const;

export function VisualizerToolbar({
  animated,
  running,
  speed,
  onToggle,
  onStep,
  onReset,
  onSpeed,
}: {
  animated: boolean;
  running: boolean;
  speed: number;
  onToggle: () => void;
  onStep: () => void;
  onReset: () => void;
  onSpeed: (value: number) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {animated ? (
        <>
          <button
            type="button"
            onClick={onToggle}
            aria-label={running ? 'Pause simulation' : 'Play simulation'}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-xs font-medium text-foreground hover:bg-surface-muted"
          >
            {running ? <Pause aria-hidden className="size-3.5" /> : <Play aria-hidden className="size-3.5" />}
            {running ? 'Pause' : 'Play'}
          </button>
          <button
            type="button"
            onClick={onStep}
            aria-label="Advance one step"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-xs font-medium text-foreground hover:bg-surface-muted"
          >
            <SkipForward aria-hidden className="size-3.5" />
            Step
          </button>
          <label className="ml-1 inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2 text-xs text-muted-foreground">
            <span>Speed</span>
            <select
              aria-label="Animation speed"
              className="numeric bg-transparent text-xs font-medium text-foreground focus-visible:outline-none"
              value={speed}
              onChange={(event) => onSpeed(Number(event.target.value))}
            >
              {SPEEDS.map((option) => (
                <option key={option} value={option}>
                  {option}×
                </option>
              ))}
            </select>
          </label>
        </>
      ) : null}
      <button
        type="button"
        onClick={onReset}
        className="inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium text-muted-foreground hover:bg-surface-muted hover:text-foreground"
      >
        <RotateCcw aria-hidden className="size-3.5" />
        Reset
      </button>
    </div>
  );
}

export function InstrumentStage({
  draw,
  params,
  running,
  speed,
  timeRef,
  label,
  hint,
  accent,
  aspect,
}: {
  draw: (ctx: CanvasRenderingContext2D, params: Params, t: number, view: Viewport) => void;
  params: Params;
  running: boolean;
  speed: number;
  timeRef: React.RefObject<number>;
  label: string;
  hint?: string;
  accent: 'physics' | 'chemistry' | 'biology' | 'mathematics' | 'technology' | 'engineering';
  aspect: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (wrapRef.current) await wrapRef.current.requestFullscreen();
    } catch {
      // Fullscreen support is optional; the stage stays usable without it.
    }
  }

  const accentClass = {
    physics: 'bg-viz-physics',
    chemistry: 'bg-viz-chemistry',
    biology: 'bg-viz-biology',
    mathematics: 'bg-viz-mathematics',
    technology: 'bg-viz-technology',
    engineering: 'bg-viz-engineering',
  }[accent];

  return (
    <figure className="viz-stage viz-enter overflow-hidden rounded-[1.25rem] border border-border bg-viz-stage shadow-card">
      <div className="flex items-center justify-between gap-3 border-b border-viz-hairline px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span aria-hidden className={cn('size-1.5 rounded-full', running ? accentClass : 'bg-viz-muted')} />
          <span className="text-xs font-medium text-viz-muted">
            {running ? 'Model running' : 'Model paused'}
          </span>
          <span aria-hidden className="h-3 w-px bg-viz-hairline" />
          <span className="truncate text-xs text-viz-muted">{label}</span>
        </div>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          className="rounded-md p-1.5 text-viz-muted hover:bg-white/5 hover:text-viz-ink"
        >
          <Maximize2 aria-hidden className="size-4" />
        </button>
      </div>
      <div ref={wrapRef} data-viz-canvas className="relative bg-viz-stage" style={{ aspectRatio: aspect }}>
        <SimulationCanvas
          draw={draw}
          params={params}
          running={running}
          speed={speed}
          timeRef={timeRef}
          label={label}
        />
      </div>
      {hint ? (
        <figcaption className="border-t border-viz-hairline px-4 py-2 text-[11px] leading-5 text-viz-muted">
          {hint}
        </figcaption>
      ) : null}
    </figure>
  );
}
