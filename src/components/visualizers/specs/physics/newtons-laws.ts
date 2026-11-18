import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { newtonMotion } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, label, line, map, plotArea, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'physics',
  aspect: 1.7,
  autoPlay: true,
  stageLabel: 'A block on a surface with applied force, friction, weight and normal force arrows',
  stageHint: 'The block starts from rest. If applied force is below friction, the net force is zero and the block stays still.',
  controls: [
    { kind: 'slider', id: 'force', label: 'Applied force', min: 0, max: 60, step: 1, defaultValue: 20, unit: 'N' },
    { kind: 'slider', id: 'mass', label: 'Mass', min: 1, max: 20, step: 0.5, defaultValue: 5, unit: 'kg' },
    { kind: 'slider', id: 'friction', label: 'Friction', min: 0, max: 20, step: 0.5, defaultValue: 4, unit: 'N' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const force = num(params, 'force');
    const mass = num(params, 'mass');
    const friction = num(params, 'friction');
    const motion = newtonMotion(force, mass, friction, t);
    const area = plotArea(view.width, view.height, 48, 40);
    const groundY = area.y + area.height - 22;
    const startX = area.x + 34;
    const travel = Math.min(motion.distance, 30);
    const blockX = map(travel, 0, 30, startX, startX + area.width * 0.66);
    const blockY = groundY - 34;
    const blockWidth = 56;
    const blockHeight = 34;

    line(ctx, area.x, groundY, area.x + area.width, groundY, CANVAS_COLORS.ink, 2);
    for (let x = area.x; x < area.x + area.width; x += 12) {
      line(ctx, x, groundY, x + 6, groundY + 6, CANVAS_COLORS.hairline, 1);
    }

    ctx.save();
    ctx.fillStyle = CANVAS_COLORS.physics;
    ctx.globalAlpha = 0.16;
    ctx.fillRect(blockX - blockWidth / 2, blockY, blockWidth, blockHeight);
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.physics;
    ctx.lineWidth = 2;
    ctx.strokeRect(blockX - blockWidth / 2, blockY, blockWidth, blockHeight);
    ctx.restore();
    label(ctx, `${formatNumber(mass, 1)} kg`, blockX, blockY + blockHeight / 2, {
      align: 'center',
      color: CANVAS_COLORS.ink,
      size: 11,
      weight: 600,
    });

    const forceLength = Math.min(86, force * 1.7);
    if (force > 0) {
      arrow(ctx, blockX + blockWidth / 2 + 4, blockY + 10, blockX + blockWidth / 2 + 4 + forceLength, blockY + 10, CANVAS_COLORS.mathematics, 2.5, 7);
      label(ctx, `F applied ${force.toFixed(0)} N`, blockX + blockWidth / 2 + 8, blockY - 2, {
        color: CANVAS_COLORS.mathematics,
        size: 10,
      });
    }
    if (friction > 0) {
      const frictionLength = Math.min(76, friction * 1.7);
      arrow(ctx, blockX - blockWidth / 2 - 4, blockY + blockHeight - 8, blockX - blockWidth / 2 - 4 - frictionLength, blockY + blockHeight - 8, CANVAS_COLORS.engineering, 2, 6);
      label(ctx, `friction ${friction.toFixed(1)} N`, blockX - blockWidth / 2 - 8, blockY + blockHeight + 12, {
        align: 'right',
        color: CANVAS_COLORS.engineering,
        size: 9,
      });
    }

    const weightLength = Math.min(52, mass * 4);
    arrow(ctx, blockX + blockWidth / 2 - 10, blockY + blockHeight, blockX + blockWidth / 2 - 10, blockY + blockHeight + weightLength, CANVAS_COLORS.technology, 1.5, 5);
    arrow(ctx, blockX - blockWidth / 2 + 10, blockY, blockX - blockWidth / 2 + 10, blockY - Math.min(52, mass * 4), CANVAS_COLORS.biology, 1.5, 5);
    label(ctx, 'mg', blockX + blockWidth / 2 - 4, blockY + blockHeight + weightLength + 10, { color: CANVAS_COLORS.technology, size: 9 });
    label(ctx, 'normal', blockX - blockWidth / 2 + 4, blockY - Math.min(52, mass * 4) - 10, { color: CANVAS_COLORS.biology, size: 9 });

    const accelBarX = area.x + area.width - 118;
    const accelBarY = area.y + 8;
    label(ctx, 'acceleration', accelBarX, accelBarY, { color: CANVAS_COLORS.muted, size: 10 });
    line(ctx, accelBarX, accelBarY + 12, accelBarX + 100, accelBarY + 12, CANVAS_COLORS.hairline, 5);
    line(ctx, accelBarX, accelBarY + 12, accelBarX + Math.min(100, motion.acceleration * 8), accelBarY + 12, CANVAS_COLORS.physics, 5);
    label(ctx, `${formatNumber(motion.acceleration, 1)} m/s²`, accelBarX, accelBarY + 26, {
      color: CANVAS_COLORS.physics,
      size: 11,
      weight: 600,
    });

    drawTitle(ctx, view.width, motion.netForce > 0 ? 'Net force produces acceleration' : 'Friction balances the push');
    cornerNote(ctx, view.width, view.height, 'Horizontal surface · Coulomb friction');
  },
  metrics(params, t) {
    const force = num(params, 'force');
    const mass = num(params, 'mass');
    const friction = num(params, 'friction');
    const motion = newtonMotion(force, mass, friction, t);
    return [
      { label: 'Net force', value: formatNumber(motion.netForce, 1), unit: 'N' },
      { label: 'Acceleration', value: formatNumber(motion.acceleration, 2), unit: 'm/s²' },
      { label: 'Velocity', value: formatNumber(motion.velocity, 2), unit: 'm/s' },
      { label: 'Distance', value: formatNumber(motion.distance, 2), unit: 'm' },
      { label: 'Weight', value: formatNumber(mass * 9.8, 1), unit: 'N' },
      { label: 'Friction', value: formatNumber(friction, 1), unit: 'N' },
    ];
  },
  explanation(params, t) {
    const force = num(params, 'force');
    const mass = num(params, 'mass');
    const friction = num(params, 'friction');
    const motion = newtonMotion(force, mass, friction, t);
    if (motion.netForce === 0) {
      return {
        headline: 'The forces balance, so the block does not accelerate.',
        body: `The applied force is ${force.toFixed(0)} N and friction is ${friction.toFixed(1)} N. The net force is zero, so the block stays at rest — this is the first law: no net force, no change in velocity.`,
      };
    }
    return {
      headline: 'The net force sets the acceleration.',
      body: `F_net = ${force.toFixed(0)} N − ${friction.toFixed(1)} N = ${motion.netForce.toFixed(1)} N. Dividing by ${mass.toFixed(1)} kg gives ${motion.acceleration.toFixed(2)} m/s². Doubling the mass would roughly halve the acceleration for the same net force.`,
    };
  },
  experiment: {
    question: 'Keep the applied force at 20 N and raise the mass. What happens to acceleration?',
    steps: [
      'Set force to 20 N and friction to 0 N.',
      'Start with a 2 kg mass and note the acceleration.',
      'Change the mass to 4 kg and then 8 kg.',
      'Compare the distances after the same elapsed time.',
    ],
    expected: 'Acceleration halves when mass doubles: a = F/m. The 8 kg block accelerates four times more slowly than the 2 kg block for the same force.',
  },
  assumptions: [
    'Friction is treated as a constant opposing force (a simplified Coulomb model).',
    'The block moves on a horizontal surface with no air resistance.',
    'The applied force is horizontal and the block does not rotate.',
  ],
  sources: [SOURCES.physics, { label: "Newton's laws of motion — Wikipedia", url: "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion" }],
};

export default spec;
