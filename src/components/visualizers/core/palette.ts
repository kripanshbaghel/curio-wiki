/**
 * Canvas palette. Mirrors the --viz-* tokens in globals.css because canvas
 * drawing calls cannot resolve CSS custom properties. Keep in sync.
 */
export const CANVAS_COLORS = {
  stage: '#0d121b',
  raised: '#141b26',
  ink: '#e8edf7',
  muted: '#93a0b5',
  grid: 'rgba(200, 215, 240, 0.08)',
  hairline: 'rgba(200, 215, 240, 0.16)',
  physics: '#7aa7ff',
  chemistry: '#b79cff',
  biology: '#6ee7a0',
  mathematics: '#f6c453',
  technology: '#4fe0c8',
  engineering: '#ff8fa3',
  warn: '#ffb86b',
  danger: '#ff7b7b',
  white: '#ffffff',
} as const;

export type CanvasAccent = 'physics' | 'chemistry' | 'biology' | 'mathematics' | 'technology' | 'engineering';

export function accentColor(accent: CanvasAccent | string): string {
  return CANVAS_COLORS[accent as CanvasAccent] ?? CANVAS_COLORS.ink;
}
