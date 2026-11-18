import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { projectile, projectileAt } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, map, plotArea, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'physics',
  aspect: 1.7,
  autoPlay: true,
  stageLabel: 'A projectile arcing from a launch point to the ground',
  stageHint: 'The dashed path is the whole flight; the solid path is where the projectile has already been.',
  controls: [
    { kind: 'slider', id: 'angle', label: 'Launch angle', min: 5, max: 85, step: 1, defaultValue: 45, unit: '°' },
    { kind: 'slider', id: 'speed', label: 'Launch speed', min: 5, max: 40, step: 1, defaultValue: 20, unit: 'm/s' },
    { kind: 'slider', id: 'gravity', label: 'Gravity', min: 1.6, max: 24.8, step: 0.1, defaultValue: 9.8, unit: 'm/s²' },
    { kind: 'slider', id: 'startHeight', label: 'Launch height', min: 0, max: 20, step: 1, defaultValue: 0, unit: 'm' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const angle = num(params, 'angle');
    const speed = num(params, 'speed');
    const gravity = num(params, 'gravity');
    const startHeight = num(params, 'startHeight');
    const result = projectile(angle, speed, gravity, startHeight);
    const time = Math.min(t, result.flightTime);
    const current = projectileAt(time, result, startHeight, gravity);

    const area = plotArea(view.width, view.height, 54, 34);
    const xMax = Math.max(1, result.range * 1.12);
    const yMax = Math.max(1, result.maxHeight * 1.18);
    const groundY = area.y + area.height - 8;
    const toX = (value: number) => map(value, 0, xMax, area.x, area.x + area.width);
    const toY = (value: number) => map(value, 0, yMax, groundY, area.y + 6);

    line(ctx, area.x, groundY, area.x + area.width, groundY, CANVAS_COLORS.ink, 2);

    const trail = (until: number, color: string, width: number, dash: number[] = []) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.setLineDash(dash);
      ctx.beginPath();
      const steps = 80;
      for (let index = 0; index <= steps; index += 1) {
        const sampleTime = (until / steps) * index;
        const point = projectileAt(sampleTime, result, startHeight, gravity);
        const x = toX(point.x);
        const y = toY(point.y);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    };

    trail(result.flightTime, CANVAS_COLORS.hairline, 1.5, [4, 4]);
    trail(Math.max(0.0001, time), CANVAS_COLORS.physics, 2.5);

    const ballX = toX(current.x);
    const ballY = toY(current.y);
    dot(ctx, ballX, ballY, 8, CANVAS_COLORS.physics, true);

    const scale = 2.2;
    arrow(ctx, ballX, ballY, ballX + result.vx * scale, ballY, CANVAS_COLORS.mathematics, 2, 6);
    arrow(ctx, ballX, ballY, ballX, ballY - current.vy * scale, CANVAS_COLORS.technology, 2, 6);
    label(ctx, 'vx', ballX + result.vx * scale + 6, ballY, { color: CANVAS_COLORS.mathematics, size: 10 });
    label(ctx, 'vy', ballX + 6, ballY - current.vy * scale - 4, { color: CANVAS_COLORS.technology, size: 10 });

    dot(ctx, toX(result.range), groundY, 3, CANVAS_COLORS.mathematics);
    label(ctx, `range ${formatNumber(result.range, 1)} m`, toX(result.range), groundY + 14, {
      color: CANVAS_COLORS.mathematics,
      align: 'center',
      size: 10,
    });
    if (result.apexTime > 0) {
      const apex = projectileAt(result.apexTime, result, startHeight, gravity);
      line(ctx, toX(apex.x), toY(result.maxHeight), toX(apex.x), groundY, CANVAS_COLORS.technology, 1, [3, 4]);
      label(ctx, `apex ${formatNumber(result.maxHeight, 1)} m`, toX(apex.x) + 6, toY(result.maxHeight) - 8, {
        color: CANVAS_COLORS.technology,
        size: 10,
      });
    }

    label(ctx, `${formatNumber(angle, 0)}°`, area.x + 8, groundY - 12, {
      color: CANVAS_COLORS.muted,
      size: 11,
      weight: 600,
    });
    drawTitle(ctx, view.width, `Launch ${formatNumber(speed, 0)} m/s at ${formatNumber(angle, 0)}°`);
    label(ctx, `g ${formatNumber(gravity, 1)} m/s²`, view.width - 16, 18, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 10,
    });
    cornerNote(ctx, view.width, view.height, 'No drag · flat ground');
  },
  metrics(params, t) {
    const result = projectile(num(params, 'angle'), num(params, 'speed'), num(params, 'gravity'), num(params, 'startHeight'));
    const time = Math.min(t, result.flightTime);
    const current = projectileAt(time, result, num(params, 'startHeight'), num(params, 'gravity'));
    return [
      { label: 'Height', value: formatNumber(current.y, 1), unit: 'm' },
      { label: 'Horizontal speed', value: formatNumber(result.vx, 1), unit: 'm/s' },
      { label: 'Vertical speed', value: formatNumber(current.vy, 1), unit: 'm/s' },
      { label: 'Speed', value: formatNumber(Math.hypot(result.vx, current.vy), 1), unit: 'm/s' },
      { label: 'Range', value: formatNumber(result.range, 1), unit: 'm' },
      { label: 'Flight time', value: formatNumber(result.flightTime, 2), unit: 's' },
    ];
  },
  explanation(params, t) {
    const angle = num(params, 'angle');
    const result = projectile(angle, num(params, 'speed'), num(params, 'gravity'), num(params, 'startHeight'));
    const time = Math.min(t, result.flightTime);
    const current = projectileAt(time, result, num(params, 'startHeight'), num(params, 'gravity'));
    if (angle < 40) {
      return {
        headline: 'A shallow launch spends more speed horizontally.',
        body: `At ${angle.toFixed(0)}° the horizontal component (${result.vx.toFixed(1)} m/s) is larger than the vertical one, so the projectile covers ground quickly but stays low. On level ground, range peaks near 45°.`,
      };
    }
    if (angle > 50) {
      return {
        headline: 'A steep launch spends more speed climbing.',
        body: `At ${angle.toFixed(0)}° the vertical component is larger, so the projectile stays airborne longer but moves forward more slowly. It reaches ${result.maxHeight.toFixed(1)} m before falling back.`,
      };
    }
    return {
      headline: 'The horizontal and vertical motions are independent.',
      body: `The horizontal velocity stays ${current.x >= 0 ? result.vx.toFixed(1) : '0'} m/s because no horizontal force acts. Vertically, gravity changes the velocity by ${num(params, 'gravity').toFixed(1)} m/s every second.`,
    };
  },
  experiment: {
    question: 'With speed fixed at 20 m/s, which launch angle gives the greatest range on level ground?',
    steps: [
      'Keep launch speed at 20 m/s and launch height at 0 m.',
      'Try 30°, 45° and 60° and note the range each time.',
      'Compare the flight times as well as the ranges.',
    ],
    expected: '45° gives the greatest range on level ground. 30° and 60° are symmetric in range, but 60° stays airborne longer.',
  },
  assumptions: [
    'Air resistance is ignored, so horizontal velocity stays constant.',
    'The ground is flat and gravity is uniform.',
    'The projectile is a point mass launched from a single point.',
  ],
  sources: [SOURCES.physics, SOURCES.physicsUniversity],
};

export default spec;
