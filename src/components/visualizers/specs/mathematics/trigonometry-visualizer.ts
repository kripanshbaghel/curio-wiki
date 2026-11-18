import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { trigonometry } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { dot, label, line, panel, prepare, wavePath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'mathematics',
  aspect: 1.7,
  animated: false,
  stageLabel: 'A unit circle with an angle, a right triangle and linked sine and cosine traces',
  stageHint: 'The point on the circle has coordinates (cos θ, sin θ). The right-hand traces show those values over a full turn.',
  controls: [
    { kind: 'slider', id: 'angle', label: 'Angle', min: 0, max: 360, step: 1, defaultValue: 45, unit: '°' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const angle = num(params, 'angle');
    const trig = trigonometry(angle);
    const circleRadius = Math.min(view.height * 0.3, view.width * 0.17);
    const cx = view.width * 0.2;
    const cy = view.height * 0.52;
    const px = cx + circleRadius * trig.cos;
    const py = cy - circleRadius * trig.sin;

    line(ctx, cx - circleRadius - 26, cy, cx + circleRadius + 26, cy, CANVAS_COLORS.hairline, 1);
    line(ctx, cx, cy - circleRadius - 26, cx, cy + circleRadius + 26, CANVAS_COLORS.hairline, 1);
    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.mathematics;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, circleRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    line(ctx, cx, cy, px, cy, CANVAS_COLORS.technology, 1.5);
    line(ctx, px, cy, px, py, CANVAS_COLORS.biology, 1.5);
    line(ctx, cx, cy, px, py, CANVAS_COLORS.ink, 2);
    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.mathematics;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, -trig.radians, true);
    ctx.stroke();
    ctx.restore();
    dot(ctx, px, py, 6, CANVAS_COLORS.mathematics, true);
    label(ctx, `(${trig.cos.toFixed(2)}, ${trig.sin.toFixed(2)})`, px + 10, py - 10, { color: CANVAS_COLORS.ink, size: 10, weight: 600 });
    label(ctx, `θ ${angle.toFixed(0)}°`, cx + 30, cy - 20, { color: CANVAS_COLORS.mathematics, size: 11, weight: 600 });
    label(ctx, 'cos', (cx + px) / 2, cy + 12, { align: 'center', color: CANVAS_COLORS.technology, size: 9 });
    label(ctx, 'sin', px + 6, (cy + py) / 2, { color: CANVAS_COLORS.biology, size: 9 });

    const plot = { x: view.width * 0.42, y: view.height * 0.16, width: view.width * 0.52, height: view.height * 0.66 };
    panel(ctx, plot, CANVAS_COLORS.raised);
    line(ctx, plot.x, plot.y + plot.height / 2, plot.x + plot.width, plot.y + plot.height / 2, CANVAS_COLORS.hairline, 1);
    const sine = (u: number) => 0.5 + 0.38 * Math.sin(u * Math.PI * 2 - Math.PI / 2);
    const cosine = (u: number) => 0.5 + 0.38 * Math.cos(u * Math.PI * 2 - Math.PI / 2);
    wavePath(ctx, plot, sine, CANVAS_COLORS.biology, 2);
    wavePath(ctx, plot, cosine, CANVAS_COLORS.technology, 2, [5, 4]);
    const markerX = plot.x + (trig.normalized / 360) * plot.width;
    line(ctx, markerX, plot.y, markerX, plot.y + plot.height, CANVAS_COLORS.mathematics, 1.5, [3, 3]);
    dot(ctx, markerX, plot.y + (1 - (trig.sin * 0.38 + 0.5)) * plot.height, 4, CANVAS_COLORS.biology);
    dot(ctx, markerX, plot.y + (1 - (trig.cos * 0.38 + 0.5)) * plot.height, 4, CANVAS_COLORS.technology);
    label(ctx, 'sin θ', plot.x + 8, plot.y + 10, { color: CANVAS_COLORS.biology, size: 10, weight: 600 });
    label(ctx, 'cos θ', plot.x + 62, plot.y + 10, { color: CANVAS_COLORS.technology, size: 10, weight: 600 });
    label(ctx, '0°', plot.x, plot.y + plot.height + 12, { color: CANVAS_COLORS.muted, size: 9 });
    label(ctx, '360°', plot.x + plot.width, plot.y + plot.height + 12, { align: 'right', color: CANVAS_COLORS.muted, size: 9 });

    drawTitle(ctx, view.width, `Unit circle · quadrant ${trig.quadrant}`);
    label(ctx, `tan θ ${trig.tan === null ? 'undefined' : trig.tan.toFixed(2)}`, view.width - 16, 18, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
  },
  metrics(params) {
    const trig = trigonometry(num(params, 'angle'));
    return [
      { label: 'sin θ', value: formatNumber(trig.sin, 3) },
      { label: 'cos θ', value: formatNumber(trig.cos, 3) },
      { label: 'tan θ', value: trig.tan === null ? 'undefined' : formatNumber(trig.tan, 3) },
      { label: 'Quadrant', value: trig.quadrant },
      { label: 'Radians', value: formatNumber(trig.radians, 3), unit: 'rad' },
      { label: 'Reference angle', value: `${formatNumber(Math.min(trig.normalized % 90, 90 - (trig.normalized % 90)), 0)}°` },
    ];
  },
  explanation(params) {
    const angle = num(params, 'angle');
    const trig = trigonometry(angle);
    if (trig.tan === null) {
      return {
        headline: 'Tangent is undefined at this angle.',
        body: `At ${angle.toFixed(0)}° the point is on the vertical axis, so cos θ = 0. Tangent is sin θ / cos θ, and division by zero is undefined.`,
      };
    }
    const sign = trig.sin >= 0 ? 'positive' : 'negative';
    const cosineSign = trig.cos >= 0 ? 'positive' : 'negative';
    return {
      headline: `Sine is ${sign}; cosine is ${cosineSign}.`,
      body: `A ${angle.toFixed(0)}° angle places the point in quadrant ${trig.quadrant}. Its coordinates are (${trig.cos.toFixed(3)}, ${trig.sin.toFixed(3)}), so tan θ = ${trig.tan.toFixed(3)}. The signs repeat every full turn.`,
    };
  },
  experiment: {
    question: 'At 135°, what signs do sine and cosine have?',
    steps: ['Set the angle to 135°.', 'Read the coordinates on the unit circle.', 'Confirm the signs in the readout.'],
    expected: 'Sine is positive and cosine is negative: the point is in quadrant II, at approximately (−0.707, 0.707).',
  },
  assumptions: [
    'Angles are measured counter-clockwise from the positive x-axis in degrees.',
    'The circle has radius 1, so coordinates equal cosine and sine.',
    'Tangent is reported as undefined when cosine is zero.',
  ],
  sources: [SOURCES.algebra, { label: 'Unit circle — Wikipedia', url: 'https://en.wikipedia.org/wiki/Unit_circle' }],
};

export default spec;
