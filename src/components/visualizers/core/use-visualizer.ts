'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Params, VisualizerSpec } from '@/lib/visualizers/types';
import { defaultsFor } from '@/lib/visualizers/types';

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, []);

  return reduced;
}

export interface UseVisualizerResult {
  params: Params;
  setParam: (id: string, value: Params[string]) => void;
  reset: () => void;
  running: boolean;
  setRunning: (value: boolean) => void;
  toggleRunning: () => void;
  speed: number;
  setSpeed: (value: number) => void;
  step: () => void;
  timeRef: React.RefObject<number>;
  sample: number;
  reducedMotion: boolean;
}

export function useVisualizer(spec: VisualizerSpec): UseVisualizerResult {
  const defaults = useMemo(() => defaultsFor(spec.controls), [spec]);
  const [params, setParams] = useState<Params>(defaults);
  const [running, setRunningState] = useState(false);
  const [speed, setSpeed] = useState(spec.defaultSpeed ?? 1);
  const [sample, setSample] = useState(0);
  const timeRef = useRef(0);
  const reducedMotion = usePrefersReducedMotion();
  const animated = spec.animated !== false;
  const autoPlay = spec.autoPlay !== false;

  useEffect(() => {
    setParams(defaults);
    setSpeed(spec.defaultSpeed ?? 1);
    timeRef.current = 0;
    setRunningState(animated && autoPlay && !reducedMotion);
  }, [defaults, spec.defaultSpeed, animated, autoPlay, reducedMotion]);

  useEffect(() => {
    if (!running || !animated) return;
    const id = window.setInterval(() => setSample((value) => value + 1), 120);
    return () => window.clearInterval(id);
  }, [running, animated]);

  const setParam = useCallback((id: string, value: Params[string]) => {
    setParams((current) => ({ ...current, [id]: value }));
    setSample((value) => value + 1);
  }, []);

  const setRunning = useCallback((value: boolean) => {
    setRunningState(value);
    setSample((current) => current + 1);
  }, []);

  const toggleRunning = useCallback(() => {
    setRunningState((current) => !current);
    setSample((current) => current + 1);
  }, []);

  const reset = useCallback(() => {
    timeRef.current = 0;
    setParams(defaults);
    setSpeed(spec.defaultSpeed ?? 1);
    setRunningState(animated && autoPlay && !reducedMotion);
    setSample((value) => value + 1);
  }, [defaults, animated, autoPlay, reducedMotion, spec.defaultSpeed]);

  const step = useCallback(() => {
    if (!animated) return;
    setRunningState(false);
    timeRef.current += 1 / 30;
    setSample((value) => value + 1);
  }, [animated]);

  return {
    params,
    setParam,
    reset,
    running,
    setRunning,
    toggleRunning,
    speed,
    setSpeed,
    step,
    timeRef,
    sample,
    reducedMotion,
  };
}
