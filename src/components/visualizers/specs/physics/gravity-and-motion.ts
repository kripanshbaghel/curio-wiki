import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { freeFall, freeFallAt } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, map, plotArea, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle, source } from '../common';

const spec: VisualizerSpec = {
  accent: 'physics',
  aspect: 1.7,
  autoPlay: true,
  stageLabel: 'A ball falling from a measured height under adjustable gravity',
  stageHint: 'The ball is released from rest unless you add a downward initial velocity. Drag gravity, mass or height.',
  controls: [
    { kind: 'slider', id: 'gravity', label: 'Gravity', min: 1.6, max: 24.8, step: 0.1, defaultValue: 9.8, unit: 'm/s²' },
    { kind: 'slider', id: 'mass', label: 'Mass', min: 0.5, max: 20, step: 0.5, defaultValue: 2, unit: 'kg' },
    { kind: 'slider', id: 'initialVelocity', label: 'Release speed', min: 0, max: 20, step: 1, defaultValue: 0, unit: 'm/s', hint: 'Downward speed at release.' },
    { kind: 'slider', id: 'height', label: 'Drop height', min: 5, max: 100, step: 5, defaultValue: 45, unit: 'm' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const gravity = num(params, 'gravity');
    const mass = num(params, 'mass');
    const v0 = num(params, 'initialVelocity');
    const dropHeight = num(params, 'height');
    const fall = freeFall(dropHeight, gravity, v0);
    const time = Math.min(t, fall.impactTime);
    const position = freeFallAt(time, dropHeight, gravity, v0);

    const area = plotArea(view.width, view.height, 58, 34);
    const groundY = area.y + area.height - 8;
    const topY = area.y + 6;
    const ballX = area.x + area.width * 0.52;
    const toY = (value: number) => map(value, 0, dropHeight + 4, groundY, topY);

    line(ctx, area.x, groundY, area.x + area.width, groundY, CANVAS_COLORS.ink, 2);
    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.hairline;
    ctx.lineWidth = 1;
    for (let x = area.x; x < area.x + area.width; x += 14) {
      ctx.beginPath();
      ctx.moveTo(x, groundY);
      ctx.lineTo(x + 7, groundY + 7);
      ctx.stroke();
    }
    ctx.restore();

    line(ctx, area.x + 18, topY, area.x + 18, groundY, CANVAS_COLORS.hairline, 1);
    for (let index = 0; index <= 4; index += 1) {
      const value = (dropHeight / 4) * index;
      const y = toY(value);
      line(ctx, area.x + 13, y, area.x + 18, y, CANVAS_COLORS.hairline, 1);
      label(ctx, `${Math.round(value)} m`, area.x + 23, y, { color: CANVAS_COLORS.muted, size: 9 });
    }

    const trailSteps = 12;
    for (let index = 0; index <= trailSteps; index += 1) {
      const trailTime = (time / trailSteps) * index;
      const trail = freeFallAt(trailTime, dropHeight, gravity, v0);
      dot(ctx, ballX, toY(trail.height), 2, CANVAS_COLORS.hairline, false);
    }

    const ballY = toY(position.height);
    dot(ctx, ballX, ballY, 10, CANVAS_COLORS.physics, true);
    line(ctx, ballX - 12, ballY, ballX + 12, ballY, CANVAS_COLORS.physics, 1);

    const velocityLength = Math.min(80, 10 + (position.velocity / Math.max(1, fall.impactVelocity)) * 70);
    if (position.velocity > 0.2) {
      arrow(ctx, ballX + 18, ballY, ballX + 18, ballY + velocityLength, CANVAS_COLORS.mathematics, 2, 6);
      label(ctx, `${formatNumber(position.velocity, 1)} m/s`, ballX + 25, ballY + velocityLength / 2, {
        color: CANVAS_COLORS.mathematics,
        size: 10,
      });
    }

    line(ctx, area.x + area.width - 90, topY + 18, area.x + area.width - 90, groundY, CANVAS_COLORS.hairline, 1, [4, 4]);
    label(ctx, `${formatNumber(position.height, 1)} m`, area.x + area.width - 84, toY(dropHeight / 2), {
      color: CANVAS_COLORS.ink,
      size: 11,
      weight: 600,
    });

    drawTitle(ctx, view.width, `Free fall at ${formatNumber(gravity, 1)} m/s²`);
    label(ctx, `mass ${formatNumber(mass, 1)} kg`, view.width - 16, 18, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 10,
    });
    label(ctx, `${formatNumber(time, 2)} s`, ballX, groundY - 22, {
      align: 'center',
      color: CANVAS_COLORS.physics,
      size: 11,
      weight: 600,
    });
    cornerNote(ctx, view.width, view.height, 'No air resistance · uniform gravity');
  },
  metrics(params, t) {
    const gravity = num(params, 'gravity');
    const mass = num(params, 'mass');
    const v0 = num(params, 'initialVelocity');
    const dropHeight = num(params, 'height');
    const fall = freeFall(dropHeight, gravity, v0);
    const time = Math.min(t, fall.impactTime);
    const position = freeFallAt(time, dropHeight, gravity, v0);
    return [
      { label: 'Elapsed', value: formatNumber(time, 2), unit: 's' },
      { label: 'Height', value: formatNumber(position.height, 1), unit: 'm' },
      { label: 'Speed', value: formatNumber(position.velocity, 1), unit: 'm/s' },
      { label: 'Weight', value: formatNumber(mass * gravity, 1), unit: 'N' },
      { label: 'Impact time', value: formatNumber(fall.impactTime, 2), unit: 's' },
      { label: 'Impact speed', value: formatNumber(fall.impactVelocity, 1), unit: 'm/s' },
    ];
  },
  explanation(params, t) {
    const gravity = num(params, 'gravity');
    const mass = num(params, 'mass');
    const v0 = num(params, 'initialVelocity');
    const fall = freeFall(num(params, 'height'), gravity, v0);
    const time = Math.min(t, fall.impactTime);
    const position = freeFallAt(time, num(params, 'height'), gravity, v0);
    if (time >= fall.impactTime) {
      return {
        headline: 'The object has reached the ground.',
        body: `It took ${fall.impactTime.toFixed(2)} s and arrived at ${fall.impactVelocity.toFixed(1)} m/s. With no air resistance, gravity alone sets this motion — the ${mass.toFixed(1)} kg mass changes the weight but not the acceleration.`,
      };
    }
    if (v0 > 0) {
      return {
        headline: 'The object is thrown downward and keeps speeding up.',
        body: `Release speed is ${v0.toFixed(0)} m/s; gravity adds ${gravity.toFixed(1)} m/s every second. At ${time.toFixed(2)} s the object is ${position.height.toFixed(1)} m above the ground.`,
      };
    }
    return {
      headline: 'The object accelerates at the same rate regardless of mass.',
      body: `Gravity is ${gravity.toFixed(1)} m/s², so speed grows by that amount each second. After ${time.toFixed(2)} s the object has fallen ${(num(params, 'height') - position.height).toFixed(1)} m.`,
    };
  },
  experiment: {
    question: 'Predict which lands first: a 1 kg ball or a 10 kg ball released from the same height.',
    steps: [
      'Set gravity to 9.8 m/s² and release speed to 0.',
      'Set the mass to 1 kg and note the impact time.',
      'Change the mass to 10 kg without touching height or gravity.',
      'Compare the two impact times.',
    ],
    expected: 'They land together. In this model gravity accelerates every mass at the same rate; mass only changes the weight force (mg).',
  },
  assumptions: [
    'Air resistance is ignored, so all objects fall with the same acceleration.',
    'Gravity is constant over the fall; the Earth is treated as a flat, uniform field.',
    'The object is a point mass; rotation and buoyancy are ignored.',
  ],
  sources: [SOURCES.physics, source('Free fall — Wikipedia', 'https://en.wikipedia.org/wiki/Free_fall')],
};

export default spec;
