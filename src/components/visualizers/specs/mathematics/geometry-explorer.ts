import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { geometry, type Shape } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'mathematics',
  aspect: 1.6,
  animated: false,
  stageLabel: 'A scaled geometric shape with dimension labels and live area and perimeter',
  stageHint: 'The drawing is scaled to fit the stage; the measurements use the real dimensions in centimetres.',
  controls: [
    { kind: 'select', id: 'shape', label: 'Shape', defaultValue: 'rectangle', options: [
      { value: 'rectangle', label: 'Rectangle' },
      { value: 'triangle', label: 'Triangle' },
      { value: 'circle', label: 'Circle' },
      { value: 'trapezoid', label: 'Trapezoid' },
    ] },
    { kind: 'slider', id: 'width', label: 'Width', min: 1, max: 20, step: 0.5, defaultValue: 8, unit: 'cm', when: (p) => str(p, 'shape') !== 'circle' },
    { kind: 'slider', id: 'height', label: 'Height', min: 1, max: 20, step: 0.5, defaultValue: 5, unit: 'cm', when: (p) => str(p, 'shape') !== 'circle' },
    { kind: 'slider', id: 'radius', label: 'Radius', min: 1, max: 10, step: 0.5, defaultValue: 4, unit: 'cm', when: (p) => str(p, 'shape') === 'circle' },
    { kind: 'slider', id: 'top', label: 'Top base', min: 0, max: 20, step: 0.5, defaultValue: 4, unit: 'cm', when: (p) => str(p, 'shape') === 'trapezoid' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const shape = str(params, 'shape') as Shape;
    const width = num(params, 'width');
    const height = num(params, 'height');
    const radius = num(params, 'radius');
    const top = num(params, 'top');
    const scale = Math.min((view.width - 150) / Math.max(1, shape === 'circle' ? radius * 2 : Math.max(width, top)), (view.height - 100) / Math.max(1, shape === 'circle' ? radius * 2 : height));
    const cx = view.width / 2;
    const cy = view.height / 2 + 8;

    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.mathematics;
    ctx.fillStyle = 'rgba(246, 196, 83, 0.12)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    if (shape === 'rectangle') {
      const w = width * scale;
      const h = height * scale;
      ctx.rect(cx - w / 2, cy - h / 2, w, h);
      label(ctx, `${width} cm`, cx, cy + h / 2 + 16, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
      label(ctx, `${height} cm`, cx + w / 2 + 8, cy, { color: CANVAS_COLORS.muted, size: 10 });
    } else if (shape === 'triangle') {
      const w = width * scale;
      const h = height * scale;
      ctx.moveTo(cx, cy - h / 2);
      ctx.lineTo(cx + w / 2, cy + h / 2);
      ctx.lineTo(cx - w / 2, cy + h / 2);
      ctx.closePath();
      label(ctx, `${width} cm`, cx, cy + h / 2 + 16, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
      label(ctx, `${height} cm`, cx + 8, cy, { color: CANVAS_COLORS.muted, size: 10 });
    } else if (shape === 'circle') {
      const r = radius * scale;
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      line(ctx, cx, cy, cx + r, cy, CANVAS_COLORS.mathematics, 1, [4, 4]);
      label(ctx, `${radius} cm`, cx + r / 2, cy - 10, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
    } else {
      const w = width * scale;
      const ht = top * scale;
      const h = height * scale;
      ctx.moveTo(cx - w / 2, cy + h / 2);
      ctx.lineTo(cx + w / 2, cy + h / 2);
      ctx.lineTo(cx + ht / 2, cy - h / 2);
      ctx.lineTo(cx - ht / 2, cy - h / 2);
      ctx.closePath();
      label(ctx, `bottom ${width} cm`, cx, cy + h / 2 + 16, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
      label(ctx, `top ${top} cm`, cx, cy - h / 2 - 10, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
      label(ctx, `${height} cm`, cx + w / 2 + 8, cy, { color: CANVAS_COLORS.muted, size: 10 });
    }
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    const result = geometry(shape, width, height, radius, top);
    drawTitle(ctx, view.width, `${shape[0].toUpperCase()}${shape.slice(1)} · area ${result.area.toFixed(1)} cm²`);
    label(ctx, `perimeter ${result.perimeter.toFixed(1)} cm`, view.width - 16, 18, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
    cornerNote(ctx, view.width, view.height, 'Scaled drawing · real dimensions');
  },
  metrics(params) {
    const shape = str(params, 'shape') as Shape;
    const result = geometry(shape, num(params, 'width'), num(params, 'height'), num(params, 'radius'), num(params, 'top'));
    return [
      { label: 'Area', value: formatNumber(result.area, 1), unit: 'cm²' },
      { label: 'Perimeter', value: formatNumber(result.perimeter, 1), unit: 'cm' },
      { label: 'Shape', value: `${shape[0].toUpperCase()}${shape.slice(1)}` },
      { label: 'Auxiliary', value: formatNumber(result.extra, 1), unit: 'cm' },
      { label: 'Width', value: formatNumber(num(params, 'width'), 1), unit: 'cm' },
      { label: 'Height', value: formatNumber(num(params, 'height'), 1), unit: 'cm' },
    ];
  },
  explanation(params) {
    const shape = str(params, 'shape') as Shape;
    const width = num(params, 'width');
    const height = num(params, 'height');
    const radius = num(params, 'radius');
    const top = num(params, 'top');
    const result = geometry(shape, width, height, radius, top);
    const formula = shape === 'rectangle' ? `A = w × h = ${width} × ${height}` : shape === 'triangle' ? `A = ½ × w × h = ½ × ${width} × ${height}` : shape === 'circle' ? `A = πr² = π × ${radius}²` : `A = ½ × (bottom + top) × h = ½ × (${width} + ${top}) × ${height}`;
    return {
      headline: 'Area counts square units; perimeter counts the boundary.',
      body: `${formula} = ${result.area.toFixed(1)} cm². The boundary is ${result.perimeter.toFixed(1)} cm. Scaling every length by a factor k multiplies area by k², not by k.`,
    };
  },
  experiment: {
    question: 'Double the radius of a circle. What happens to its area?',
    steps: ['Choose the circle and set the radius to 3 cm.', 'Note the area.', 'Change the radius to 6 cm and compare.'],
    expected: 'The area becomes four times larger, because area depends on radius squared.',
  },
  assumptions: [
    'Shapes are ideal Euclidean figures drawn to scale on a flat plane.',
    'Dimensions are in centimetres; area and perimeter use consistent units.',
    'The triangle height is perpendicular to its base.',
  ],
  sources: [SOURCES.algebra, { label: 'Area — Wikipedia', url: 'https://en.wikipedia.org/wiki/Area' }],
};

export default spec;
