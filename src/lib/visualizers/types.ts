import type { SubjectKey } from '@/content/types';
import type { SourceLink } from '@/content/types';

export type ParamValue = number | string | boolean;
export type Params = Record<string, ParamValue>;

export interface Viewport {
  width: number;
  height: number;
  dpr: number;
}

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  hint?: string;
}

interface ControlBase {
  id: string;
  label: string;
  hint?: string;
  /** Hide a control when it does not apply to the current mode. */
  when?: (params: Params) => boolean;
}

export interface SliderControl extends ControlBase {
  kind: 'slider';
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit?: string;
}

export interface SelectControl extends ControlBase {
  kind: 'select';
  options: Array<{ value: string; label: string }>;
  defaultValue: string;
}

export interface ToggleControl extends ControlBase {
  kind: 'toggle';
  defaultValue: boolean;
  onLabel?: string;
  offLabel?: string;
}

export interface SegmentControl extends ControlBase {
  kind: 'segment';
  options: Array<{ value: string; label: string }>;
  defaultValue: string;
}

export type Control = SliderControl | SelectControl | ToggleControl | SegmentControl;

export interface DataTable {
  caption?: string;
  headers: string[];
  rows: Array<{ cells: string[]; highlight?: boolean }>;
}

export interface Experiment {
  question: string;
  steps: string[];
  expected: string;
}

export interface VisualizerSpec {
  controls: Control[];
  /** Canvas aspect ratio; width / height. Defaults to 1.6. */
  aspect?: number;
  animated?: boolean;
  autoPlay?: boolean;
  defaultSpeed?: number;
  speedRange?: [number, number];
  stageLabel: string;
  stageHint?: string;
  accent: SubjectKey;
  draw: (ctx: CanvasRenderingContext2D, params: Params, t: number, view: Viewport) => void;
  metrics: (params: Params, t: number) => Metric[];
  explanation: (params: Params, t: number) => { headline: string; body: string };
  experiment: Experiment;
  assumptions: string[];
  sources: SourceLink[];
  table?: (params: Params) => DataTable | undefined;
}

export function defaultsFor(controls: Control[]): Params {
  const params: Params = {};
  for (const control of controls) params[control.id] = control.defaultValue;
  return params;
}

export function num(params: Params, id: string): number {
  const value = params[id];
  return typeof value === 'number' ? value : 0;
}

export function str(params: Params, id: string): string {
  const value = params[id];
  return typeof value === 'string' ? value : '';
}

export function bool(params: Params, id: string): boolean {
  return params[id] === true;
}

export function formatNumber(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return '—';
  return value.toFixed(digits);
}
