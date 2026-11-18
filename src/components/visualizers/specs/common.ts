import type { SourceLink } from '@/content/types';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { label, line } from '@/components/visualizers/core/draw';

export const SOURCES = {
  physics: {
    label: 'OpenStax College Physics 2e',
    url: 'https://openstax.org/books/college-physics-2e',
  },
  physicsUniversity: {
    label: 'OpenStax University Physics, Volume 1',
    url: 'https://openstax.org/books/university-physics-volume-1',
  },
  chemistry: {
    label: 'OpenStax Chemistry 2e',
    url: 'https://openstax.org/books/chemistry-2e',
  },
  biology: {
    label: 'OpenStax Biology 2e',
    url: 'https://openstax.org/books/biology-2e',
  },
  anatomy: {
    label: 'OpenStax Anatomy and Physiology 2e',
    url: 'https://openstax.org/books/anatomy-and-physiology-2e',
  },
  algebra: {
    label: 'OpenStax Algebra and Trigonometry 2e',
    url: 'https://openstax.org/books/algebra-and-trigonometry-2e',
  },
  calculus: {
    label: 'OpenStax Calculus Volume 1',
    url: 'https://openstax.org/books/calculus-volume-1',
  },
  logic: {
    label: 'Logic gate — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Logic_gate',
  },
  binary: {
    label: 'Binary number — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Binary_number',
  },
  cpu: {
    label: 'Central processing unit — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Central_processing_unit',
  },
  memory: {
    label: 'Memory hierarchy — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Memory_hierarchy',
  },
  network: {
    label: 'Computer network — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Computer_network',
  },
  bridge: {
    label: 'Bridge — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Bridge',
  },
  gear: {
    label: 'Gear — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Gear',
  },
  hydraulics: {
    label: 'Hydraulics — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Hydraulics',
  },
  machines: {
    label: 'Simple machine — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Simple_machine',
  },
  beam: {
    label: 'Bending moment — Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Bending_moment',
  },
} satisfies Record<string, SourceLink>;

export function source(label: string, url: string): SourceLink {
  return { label, url };
}

export function drawTitle(
  ctx: CanvasRenderingContext2D,
  width: number,
  text: string,
  color = CANVAS_COLORS.ink,
): void {
  label(ctx, text, 16, 18, { color, size: 11, weight: 600 });
}

export function drawLegend(
  ctx: CanvasRenderingContext2D,
  width: number,
  items: Array<{ text: string; color: string }>,
  y = 18,
): void {
  let x = width - 16;
  for (const item of [...items].reverse()) {
    label(ctx, item.text, x, y, { color: CANVAS_COLORS.muted, align: 'right', size: 10 });
    const textWidth = ctx.measureText(item.text).width;
    line(ctx, x - textWidth - 18, y, x - textWidth - 8, y, item.color, 3);
    x -= textWidth + 30;
  }
}

export function drawHudValue(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  heading: string,
  value: string,
  color = CANVAS_COLORS.ink,
): void {
  label(ctx, heading, x, y, { color: CANVAS_COLORS.muted, size: 10 });
  label(ctx, value, x, y + 16, { color, size: 16, weight: 600 });
}
