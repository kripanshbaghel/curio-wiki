import { CANVAS_COLORS } from './palette';

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function map(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  if (inMax === inMin) return outMin;
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}

export function prepare(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = CANVAS_COLORS.stage;
  ctx.fillRect(0, 0, width, height);

  const spacing = width < 420 ? 24 : 32;
  ctx.strokeStyle = CANVAS_COLORS.grid;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0.5; x < width; x += spacing) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }
  for (let y = 0.5; y < height; y += spacing) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.stroke();
}

export function plotArea(
  width: number,
  height: number,
  padX = 44,
  padY = 32,
): Rect {
  return {
    x: padX,
    y: padY,
    width: Math.max(10, width - padX * 2),
    height: Math.max(10, height - padY * 2),
  };
}

export function panel(
  ctx: CanvasRenderingContext2D,
  rect: Rect,
  fill: string = CANVAS_COLORS.raised,
  stroke: string = CANVAS_COLORS.hairline,
): void {
  ctx.beginPath();
  roundRectPath(ctx, rect.x, rect.y, rect.width, rect.height, 10);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1;
  ctx.stroke();
}

export function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function label(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  options: {
    color?: string;
    align?: CanvasTextAlign;
    baseline?: CanvasTextBaseline;
    size?: number;
    weight?: number;
    mono?: boolean;
  } = {},
): void {
  ctx.fillStyle = options.color ?? CANVAS_COLORS.ink;
  ctx.textAlign = options.align ?? 'left';
  ctx.textBaseline = options.baseline ?? 'middle';
  ctx.font = `${options.weight ?? 500} ${options.size ?? 12}px ${
    options.mono ? 'ui-monospace, SFMono-Regular, Menlo, monospace' : 'Inter Variable, ui-sans-serif, system-ui, sans-serif'
  }`;
  ctx.fillText(text, x, y);
}

export function line(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string = CANVAS_COLORS.hairline,
  width = 1,
  dash: number[] = [],
): void {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash(dash);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

export function arrow(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string = CANVAS_COLORS.ink,
  width = 2,
  head = 7,
): void {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 6), y2 - head * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 6), y2 - head * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export function dot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
  glow = false,
): void {
  ctx.save();
  if (glow) {
    ctx.shadowColor = color;
    ctx.shadowBlur = 14;
  }
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function ring(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
  width = 1,
  dash: number[] = [],
): void {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash(dash);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

export function wavePath(
  ctx: CanvasRenderingContext2D,
  area: Rect,
  fn: (x: number) => number,
  color: string,
  width = 2,
  dash: number[] = [],
): void {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash(dash);
  ctx.beginPath();
  const steps = Math.max(60, Math.floor(area.width / 2));
  for (let index = 0; index <= steps; index += 1) {
    const x = area.x + (index / steps) * area.width;
    const y = area.y + area.height - fn(index / steps) * area.height;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();
}

export function ticks(
  ctx: CanvasRenderingContext2D,
  area: Rect,
  xTicks: string[],
  yTicks: string[],
): void {
  ctx.save();
  ctx.strokeStyle = CANVAS_COLORS.hairline;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let index = 0; index < xTicks.length; index += 1) {
    const x = area.x + (index / Math.max(1, xTicks.length - 1)) * area.width;
    ctx.moveTo(x, area.y + area.height);
    ctx.lineTo(x, area.y + area.height + 4);
  }
  for (let index = 0; index < yTicks.length; index += 1) {
    const y = area.y + (index / Math.max(1, yTicks.length - 1)) * area.height;
    ctx.moveTo(area.x - 4, y);
    ctx.lineTo(area.x, y);
  }
  ctx.stroke();
  ctx.restore();
}

export function cornerNote(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  text: string,
  color = CANVAS_COLORS.muted,
): void {
  label(ctx, text, width - 14, height - 14, {
    color,
    align: 'right',
    baseline: 'bottom',
    size: 10,
    weight: 500,
  });
}

export function shorten(value: number, digits = 1): string {
  if (!Number.isFinite(value)) return '—';
  const absolute = Math.abs(value);
  if (absolute >= 1e9) return `${(value / 1e9).toFixed(1)}G`;
  if (absolute >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  if (absolute >= 1e3) return `${(value / 1e3).toFixed(1)}k`;
  return value.toFixed(digits);
}

export interface Projected {
  x: number;
  y: number;
  depth: number;
}

/** Orthographic-style 3D projection with light perspective foreshortening. */
export function project3D(
  point: [number, number, number],
  yawDeg: number,
  pitchDeg: number,
  scale: number,
  center: Point,
): Projected {
  const yaw = (yawDeg * Math.PI) / 180;
  const pitch = (pitchDeg * Math.PI) / 180;
  const [x, y, z] = point;
  const cosYaw = Math.cos(yaw);
  const sinYaw = Math.sin(yaw);
  const x1 = x * cosYaw - z * sinYaw;
  const z1 = x * sinYaw + z * cosYaw;
  const cosPitch = Math.cos(pitch);
  const sinPitch = Math.sin(pitch);
  const y1 = y * cosPitch - z1 * sinPitch;
  const z2 = y * sinPitch + z1 * cosPitch;
  const perspective = 1 / (1 + z2 * 0.08);
  return {
    x: center.x + x1 * scale * perspective,
    y: center.y - y1 * scale * perspective,
    depth: z2,
  };
}

export function polyline3D(
  ctx: CanvasRenderingContext2D,
  points: Array<[number, number, number]>,
  yaw: number,
  pitch: number,
  scale: number,
  center: Point,
  color: string,
  width = 2,
  closed = false,
): void {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  points.forEach((point, index) => {
    const projected = project3D(point, yaw, pitch, scale, center);
    if (index === 0) ctx.moveTo(projected.x, projected.y);
    else ctx.lineTo(projected.x, projected.y);
  });
  if (closed) ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
