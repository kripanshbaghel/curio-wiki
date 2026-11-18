import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { evaluateFunction, numericDerivative, type FunctionFamily } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, map, plotArea, prepare, ticks } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'mathematics',
  aspect: 1.65,
  animated: false,
  stageLabel: 'A function curve on a coordinate plane with an inspection point',
  stageHint: 'Drag a, b, c or the inspection x. The point and slope are evaluated from the same expression that draws the curve.',
  controls: [
    { kind: 'select', id: 'family', label: 'Function family', defaultValue: 'quadratic', options: [
      { value: 'quadratic', label: 'Quadratic' },
      { value: 'sine', label: 'Sine' },
      { value: 'cubic', label: 'Cubic' },
      { value: 'exponential', label: 'Exponential' },
      { value: 'absolute', label: 'Absolute value' },
    ] },
    { kind: 'slider', id: 'a', label: 'a', min: -2, max: 2, step: 0.1, defaultValue: 1 },
    { kind: 'slider', id: 'b', label: 'b', min: -3, max: 3, step: 0.1, defaultValue: 1 },
    { kind: 'slider', id: 'c', label: 'c', min: -5, max: 5, step: 0.5, defaultValue: 0 },
    { kind: 'slider', id: 'x', label: 'Inspect x', min: -6, max: 6, step: 0.1, defaultValue: 1 },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const family = str(params, 'family') as FunctionFamily;
    const a = num(params, 'a');
    const b = num(params, 'b');
    const c = num(params, 'c');
    const inspect = num(params, 'x');
    const area = plotArea(view.width, view.height, 44, 30);
    const toX = (value: number) => map(value, -6, 6, area.x, area.x + area.width);
    const toY = (value: number) => map(value, -12, 12, area.y + area.height, area.y);

    line(ctx, area.x, toY(0), area.x + area.width, toY(0), CANVAS_COLORS.hairline, 1);
    line(ctx, toX(0), area.y, toX(0), area.y + area.height, CANVAS_COLORS.hairline, 1);
    ticks(ctx, area, ['−6', '−3', '0', '3', '6'], ['−12', '−6', '0', '6', '12']);
    label(ctx, 'x', area.x + area.width, toY(0) + 14, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
    label(ctx, 'y', toX(0) + 8, area.y, { color: CANVAS_COLORS.muted, size: 10 });

    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.mathematics;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    let started = false;
    for (let index = 0; index <= 480; index += 1) {
      const x = -6 + (index / 480) * 12;
      const y = evaluateFunction(family, a, b, c, x);
      if (!Number.isFinite(y) || y < -14 || y > 14) {
        started = false;
        continue;
      }
      const px = toX(x);
      const py = toY(y);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();
    ctx.restore();

    const y = evaluateFunction(family, a, b, c, inspect);
    if (Number.isFinite(y)) {
      const px = toX(inspect);
      const py = toY(Math.max(-12, Math.min(12, y)));
      line(ctx, px, py, px, toY(0), CANVAS_COLORS.hairline, 1, [3, 3]);
      dot(ctx, px, py, 6, CANVAS_COLORS.mathematics, true);
      const slope = numericDerivative(family, a, b, c, inspect);
      const tangentEnd = inspect + 1;
      line(ctx, px, py, toX(tangentEnd), toY(y + slope), CANVAS_COLORS.technology, 1.5, [5, 4]);
      label(ctx, `(${inspect.toFixed(1)}, ${y.toFixed(2)})`, px + 10, py - 12, { color: CANVAS_COLORS.ink, size: 11, weight: 600 });
    }

    drawTitle(ctx, view.width, `${family} · a=${a.toFixed(1)} b=${b.toFixed(1)} c=${c.toFixed(1)}`);
    label(ctx, 'dashed line shows the local tangent', view.width - 16, view.height - 16, { align: 'right', color: CANVAS_COLORS.muted, size: 9 });
    cornerNote(ctx, view.width, view.height, 'Real-valued functions · numeric slope');
  },
  metrics(params) {
    const family = str(params, 'family') as FunctionFamily;
    const a = num(params, 'a');
    const b = num(params, 'b');
    const c = num(params, 'c');
    const x = num(params, 'x');
    const y = evaluateFunction(family, a, b, c, x);
    const slope = numericDerivative(family, a, b, c, x);
    const atZero = evaluateFunction(family, a, b, c, 0);
    const slopeAtZero = numericDerivative(family, a, b, c, 0);
    return [
      { label: 'Inspect x', value: formatNumber(x, 1) },
      { label: 'f(x)', value: Number.isFinite(y) ? formatNumber(y, 2) : 'undefined' },
      { label: 'Local slope', value: Number.isFinite(slope) ? formatNumber(slope, 2) : 'undefined' },
      { label: 'f(0)', value: Number.isFinite(atZero) ? formatNumber(atZero, 2) : 'undefined' },
      { label: 'Slope at 0', value: Number.isFinite(slopeAtZero) ? formatNumber(slopeAtZero, 2) : 'undefined' },
      { label: 'Family', value: `${family[0].toUpperCase()}${family.slice(1)}` },
    ];
  },
  explanation(params) {
    const family = str(params, 'family') as FunctionFamily;
    const a = num(params, 'a');
    const b = num(params, 'b');
    const c = num(params, 'c');
    const x = num(params, 'x');
    const y = evaluateFunction(family, a, b, c, x);
    const slope = numericDerivative(family, a, b, c, x);
    return {
      headline: 'Each parameter transforms the same base curve.',
      body: `At x = ${x.toFixed(1)}, f(x) = ${Number.isFinite(y) ? y.toFixed(2) : 'undefined'} and the local slope is ${Number.isFinite(slope) ? slope.toFixed(2) : 'undefined'}. In this ${family} family, a changes vertical scale or reflection, b changes horizontal rate, and c shifts the curve vertically.`,
    };
  },
  experiment: {
    question: 'How does changing the sign of a transform the quadratic?',
    steps: [
      'Choose the quadratic family and set a = 1, b = 0, c = 0.',
      'Note whether the parabola opens upward or downward.',
      'Change a to −1 and compare the curve.',
    ],
    expected: 'The parabola reflects across the x-axis. Positive a opens upward; negative a opens downward.',
  },
  assumptions: [
    'Functions are evaluated over the real numbers; points outside the display range are clipped.',
    'The slope is a symmetric numeric estimate, not a symbolic derivative.',
    'The viewing window is fixed at −6 to 6 horizontally and −12 to 12 vertically.',
  ],
  sources: [SOURCES.algebra, { label: 'Graph of a function — Wikipedia', url: 'https://en.wikipedia.org/wiki/Graph_of_a_function' }],
};

export default spec;
