'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { SimulationCanvas } from '@/components/visualizers/core/simulation-canvas';
import { usePrefersReducedMotion } from '@/components/visualizers/core/use-visualizer';
import { pendulumPeriod } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { dot, label, line, prepare } from '@/components/visualizers/core/draw';
import type { Params } from '@/lib/visualizers/types';
import { cn } from '@/lib/cn';

const GRAVITY = 9.81;
const AMPLITUDE_DEG = 24;

/**
 * Landing-page instrument: a real simple pendulum. The readout is computed from
 * T = 2π√(L/g); the swing is scaled for legibility, not measured from the
 * drawing. When the visitor prefers reduced motion the pendulum starts paused
 * on a representative frame instead of animating.
 */
export function HeroInstrument() {
  const reduced = usePrefersReducedMotion();
  const [length, setLength] = useState(1.2);
  const [running, setRunning] = useState(true);
  const timeRef = useRef(3.4);

  const period = pendulumPeriod(length, GRAVITY);
  const frequency = 1 / period;
  const paused = reduced || !running;

  const draw = (
    ctx: CanvasRenderingContext2D,
    params: Params,
    t: number,
    view: { width: number; height: number; dpr: number },
  ) => {
    prepare(ctx, view.width, view.height);
    const metres = typeof params.length === 'number' ? params.length : length;
    const currentPeriod = pendulumPeriod(metres, GRAVITY);
    const omega = (Math.PI * 2) / currentPeriod;
    const angle = ((AMPLITUDE_DEG * Math.PI) / 180) * Math.cos(omega * t);

    const pivot = { x: view.width / 2, y: 46 };
    const maxLength = Math.min(view.height - 150, view.width * 0.38);
    const pixels = maxLength * (0.45 + (metres / 4) * 0.55);
    const bob = {
      x: pivot.x + Math.sin(angle) * pixels,
      y: pivot.y + Math.cos(angle) * pixels,
    };

    // Support beam and pivot.
    line(ctx, view.width * 0.2, pivot.y - 18, view.width * 0.8, pivot.y - 18, CANVAS_COLORS.hairline, 4);
    for (let notch = 0; notch < 13; notch += 1) {
      const x = view.width * 0.22 + notch * (view.width * 0.56) / 12;
      line(ctx, x, pivot.y - 24, x - 6, pivot.y - 34, 'rgba(200, 215, 240, 0.18)', 1);
    }
    dot(ctx, pivot.x, pivot.y, 6, CANVAS_COLORS.stage, false);
    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.ink;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(pivot.x, pivot.y, 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Swing guide and amplitude marks.
    const guideRadius = pixels + 26;
    ctx.save();
    ctx.strokeStyle = 'rgba(200, 215, 240, 0.14)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.arc(pivot.x, pivot.y, guideRadius, Math.PI / 2 - 0.42, Math.PI / 2 + 0.42);
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = 'rgba(246, 196, 83, 0.28)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(
      pivot.x,
      pivot.y,
      guideRadius,
      Math.PI / 2 - (AMPLITUDE_DEG * Math.PI) / 180,
      Math.PI / 2 + (AMPLITUDE_DEG * Math.PI) / 180,
    );
    ctx.stroke();
    ctx.restore();

    // String, bob, and a velocity tick.
    line(ctx, pivot.x, pivot.y, bob.x, bob.y, CANVAS_COLORS.ink, 1.8);
    dot(ctx, bob.x, bob.y, 18, 'rgba(246, 196, 83, 0.14)', false);
    dot(ctx, bob.x, bob.y, 12, CANVAS_COLORS.mathematics, true);
    const velocity = -Math.sin(omega * t);
    line(
      ctx,
      bob.x,
      bob.y,
      bob.x + Math.cos(angle) * velocity * 22,
      bob.y - Math.sin(angle) * velocity * 22,
      CANVAS_COLORS.physics,
      2,
    );

    // Scale ticks along the string.
    const marks = Math.min(4, Math.max(1, Math.round(metres / 0.5)));
    for (let mark = 1; mark <= marks; mark += 1) {
      const fraction = mark / (marks + 0.4);
      const x = pivot.x + Math.sin(angle) * pixels * fraction;
      const y = pivot.y + Math.cos(angle) * pixels * fraction;
      line(ctx, x - 4, y, x + 4, y, CANVAS_COLORS.muted, 1);
    }

    label(ctx, 'pivot', pivot.x + 12, pivot.y + 4, { color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, `${metres.toFixed(1)} m`, pivot.x + 14, pivot.y + pixels * 0.5, {
      color: CANVAS_COLORS.muted,
      size: 9,
      mono: true,
    });
    label(ctx, 'bob', bob.x + 20, bob.y + 3, { color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, `T = ${currentPeriod.toFixed(2)} s`, view.width - 16, view.height - 18, {
      align: 'right',
      color: CANVAS_COLORS.mathematics,
      size: 10,
      weight: 600,
      mono: true,
    });
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Interactive concept visualizers
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          Instruments, not illustrations.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          Thirty working benches across six subjects. Change a parameter, watch the drawing respond,
          and read the same calculation that drives it — assumptions included.
        </p>
        <dl className="mt-7 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-card border border-border bg-border">
          <div className="bg-surface px-3 py-3">
            <dt className="text-xs text-muted-foreground">Instruments</dt>
            <dd className="numeric mt-1 text-xl font-semibold text-foreground">30</dd>
          </div>
          <div className="bg-surface px-3 py-3">
            <dt className="text-xs text-muted-foreground">Subjects</dt>
            <dd className="numeric mt-1 text-xl font-semibold text-foreground">6</dd>
          </div>
          <div className="bg-surface px-3 py-3">
            <dt className="text-xs text-muted-foreground">Per subject</dt>
            <dd className="numeric mt-1 text-xl font-semibold text-foreground">5</dd>
          </div>
        </dl>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="#instrument-index"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Open the instrument index
            <ArrowRight aria-hidden className="size-4" />
          </Link>
          <Link
            href="/visualizers/physics"
            className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-muted"
          >
            Start with physics
          </Link>
        </div>
      </div>

      <figure className="viz-stage viz-enter overflow-hidden rounded-[1.25rem] border border-border bg-viz-stage shadow-card">
        <div className="flex items-center justify-between gap-3 border-b border-viz-hairline px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className={cn('size-1.5 rounded-full', paused ? 'bg-viz-muted' : 'bg-viz-mathematics')}
            />
            <span className="text-xs font-medium text-viz-muted">
              {paused ? 'Paused · live readout' : 'Pendulum · running'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setRunning((value) => !value)}
            disabled={reduced}
            aria-label={running ? 'Pause pendulum' : 'Play pendulum'}
            className="inline-flex h-7 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-viz-muted hover:bg-white/5 hover:text-viz-ink disabled:cursor-not-allowed disabled:opacity-50"
          >
            {running && !reduced ? (
              <Pause aria-hidden className="size-3.5" />
            ) : (
              <Play aria-hidden className="size-3.5" />
            )}
            {reduced ? 'Reduced motion' : running ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="relative bg-viz-stage" style={{ aspectRatio: 1.5 }}>
          <SimulationCanvas
            draw={draw}
            params={{ length }}
            running={!paused}
            speed={1}
            timeRef={timeRef}
            label="A simple pendulum swinging beneath a support, with its length and period labelled"
          />
        </div>
        <div className="border-t border-viz-hairline px-4 py-3">
          <div className="flex items-baseline justify-between gap-3">
            <label htmlFor="hero-length" className="text-xs font-medium text-viz-ink">
              String length
            </label>
            <span className="numeric text-xs text-viz-muted">{length.toFixed(2)} m</span>
          </div>
          <input
            id="hero-length"
            type="range"
            min={0.2}
            max={3}
            step={0.05}
            value={length}
            onChange={(event) => setLength(Number(event.target.value))}
            aria-valuetext={`${length.toFixed(2)} metres`}
            className="viz-range mt-1"
            style={
              {
                '--viz-progress': `${((length - 0.2) / 2.8) * 100}%`,
                '--primary': 'var(--viz-mathematics)',
                '--border': 'rgba(200, 215, 240, 0.2)',
              } as React.CSSProperties
            }
          />
          <div className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-1 text-[11px] text-viz-muted">
            <span>
              Period <span className="numeric text-viz-ink">{period.toFixed(2)} s</span>
            </span>
            <span>
              Frequency <span className="numeric text-viz-ink">{frequency.toFixed(2)} Hz</span>
            </span>
            <span>
              Gravity <span className="numeric text-viz-ink">9.81 m/s²</span>
            </span>
          </div>
          <p className="mt-2 text-[11px] leading-5 text-viz-muted">
            Small-angle model: T = 2π√(L/g). Mass does not appear because, for a simple pendulum, it
            cancels out. The drawn arc is a guide; the period is the calculated value.
          </p>
        </div>
      </figure>
    </section>
  );
}
