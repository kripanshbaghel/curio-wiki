'use client';

import { useEffect, useRef, useState } from 'react';
import type { Params, Viewport } from '@/lib/visualizers/types';

interface Props {
  draw: (ctx: CanvasRenderingContext2D, params: Params, t: number, view: Viewport) => void;
  params: Params;
  running: boolean;
  speed: number;
  timeRef: React.RefObject<number>;
  label: string;
  className?: string;
}

export function SimulationCanvas({ draw, params, running, speed, timeRef, label, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  const speedRef = useRef(speed);
  const drawOnceRef = useRef<() => void>(() => {});
  const [failed, setFailed] = useState(false);

  paramsRef.current = params;
  speedRef.current = speed;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setFailed(true);
      return;
    }

    let frame = 0;
    let last = 0;
    let width = 0;
    let height = 0;
    let canvasDpr = 1;
    let stopped = false;

    const paint = () => {
      if (!width || !height) return;
      try {
        draw(ctx, paramsRef.current, timeRef.current ?? 0, {
          width,
          height,
          dpr: canvasDpr,
        });
      } catch {
        setFailed(true);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvasDpr = Math.min(2, window.devicePixelRatio || 1);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * canvasDpr);
      canvas.height = Math.round(height * canvasDpr);
      ctx.setTransform(canvasDpr, 0, 0, canvasDpr, 0, 0);
      paint();
    };

    const loop = (now: number) => {
      if (stopped) return;
      const delta = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      timeRef.current = (timeRef.current ?? 0) + delta * speedRef.current;
      paint();
      frame = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (stopped || frame) return;
      last = 0;
      frame = window.requestAnimationFrame(loop);
    };

    const stop = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    drawOnceRef.current = paint;
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let visible = true;
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && running && !document.hidden) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    intersection.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible && running) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    if (running) start();

    return () => {
      stopped = true;
      stop();
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [draw, running, timeRef]);

  useEffect(() => {
    drawOnceRef.current();
  }, [params, speed]);

  if (failed) {
    return (
      <div className="flex h-full items-center justify-center px-6 text-center text-sm text-viz-muted">
        This visualizer could not start in your browser. The measurements and explanation below
        are still available.
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      className={className ?? 'absolute inset-0 size-full'}
    />
  );
}
