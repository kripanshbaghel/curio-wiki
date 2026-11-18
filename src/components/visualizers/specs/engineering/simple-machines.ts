import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { machineAdvantage } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, prepare, roundRectPath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

type Machine = 'lever' | 'pulley' | 'incline' | 'wheel';

const spec: VisualizerSpec = {
  accent: 'engineering',
  aspect: 1.65,
  animated: false,
  stageLabel: 'A lever, pulley, inclined plane or wheel-and-axle with effort, load and mechanical advantage',
  stageHint: 'Only the controls for the selected machine affect its advantage. Ideal mechanical advantage trades distance for force: a larger advantage means the effort moves farther than the load.',
  controls: [
    {
      kind: 'segment',
      id: 'machine',
      label: 'Machine',
      defaultValue: 'lever',
      options: [
        { value: 'lever', label: 'Lever' },
        { value: 'pulley', label: 'Pulley' },
        { value: 'incline', label: 'Incline' },
        { value: 'wheel', label: 'Wheel & axle' },
      ],
    },
    { kind: 'slider', id: 'load', label: 'Load force', min: 50, max: 1000, step: 25, defaultValue: 300, unit: 'N' },
    { kind: 'slider', id: 'effortArm', label: 'Effort arm', min: 0.5, max: 5, step: 0.1, defaultValue: 2, unit: 'm', when: (p) => str(p, 'machine') === 'lever' || str(p, 'machine') === 'wheel' },
    { kind: 'slider', id: 'loadArm', label: 'Load arm', min: 0.2, max: 3, step: 0.1, defaultValue: 0.8, unit: 'm', when: (p) => str(p, 'machine') === 'lever' || str(p, 'machine') === 'wheel' },
    { kind: 'slider', id: 'angle', label: 'Incline angle', min: 5, max: 60, step: 1, defaultValue: 30, unit: '°', when: (p) => str(p, 'machine') === 'incline' },
    { kind: 'slider', id: 'ropes', label: 'Supporting ropes', min: 1, max: 6, step: 1, defaultValue: 3, when: (p) => str(p, 'machine') === 'pulley' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const machine = (str(params, 'machine') as Machine) ?? 'lever';
    const load = num(params, 'load');
    const effortArm = num(params, 'effortArm');
    const loadArm = num(params, 'loadArm');
    const angle = num(params, 'angle');
    const ropes = Math.round(num(params, 'ropes'));
    const ma = machineAdvantage(machine, effortArm, loadArm, angle, ropes);
    const effort = load / Math.max(0.01, ma);
    const accent = CANVAS_COLORS.engineering;
    const baseY = view.height - 62;
    const topY = 74;

    const loadBlock = (x: number, y: number, width = 46) => {
      ctx.save();
      roundRectPath(ctx, x - width / 2, y, width, 28, 5);
      ctx.fillStyle = 'rgba(255, 143, 163, 0.16)';
      ctx.fill();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.restore();
      label(ctx, `${formatNumber(load, 0)} N`, x, y + 14, { align: 'center', color: CANVAS_COLORS.ink, size: 9, weight: 600 });
    };

    if (machine === 'lever') {
      const margin = view.width * 0.08;
      const available = view.width * 0.84;
      const total = Math.max(0.1, effortArm + loadArm);
      const leftLength = (effortArm / total) * available;
      const beamY = view.height * 0.46;
      const xEffort = margin;
      const xLoad = margin + available;
      const fulcrumX = margin + leftLength;

      line(ctx, xEffort, beamY, xLoad, beamY, accent, 7);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(fulcrumX, beamY + 4);
      ctx.lineTo(fulcrumX - 17, baseY);
      ctx.lineTo(fulcrumX + 17, baseY);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 143, 163, 0.16)';
      ctx.fill();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.restore();

      arrow(ctx, xEffort, beamY - 60, xEffort, beamY - 6, CANVAS_COLORS.mathematics, 2.5, 8);
      label(ctx, `effort ${formatNumber(effort, 0)} N`, xEffort + 4, beamY - 70, {
        color: CANVAS_COLORS.mathematics,
        size: 9,
        weight: 600,
      });
      loadBlock(xLoad, beamY + 6);
      line(ctx, xLoad, beamY, xLoad, beamY + 6, accent, 2);

      line(ctx, xEffort, beamY + 22, fulcrumX, beamY + 22, CANVAS_COLORS.muted, 1);
      line(ctx, xEffort, beamY + 17, xEffort, beamY + 27, CANVAS_COLORS.muted, 1);
      line(ctx, fulcrumX, beamY + 17, fulcrumX, beamY + 27, CANVAS_COLORS.muted, 1);
      label(ctx, `${effortArm.toFixed(1)} m`, (xEffort + fulcrumX) / 2, beamY + 38, {
        align: 'center',
        color: CANVAS_COLORS.muted,
        size: 8,
      });
      line(ctx, fulcrumX, beamY + 22, xLoad, beamY + 22, CANVAS_COLORS.muted, 1);
      line(ctx, xLoad, beamY + 17, xLoad, beamY + 27, CANVAS_COLORS.muted, 1);
      label(ctx, `${loadArm.toFixed(1)} m`, (fulcrumX + xLoad) / 2, beamY + 38, {
        align: 'center',
        color: CANVAS_COLORS.muted,
        size: 8,
      });
      label(ctx, 'fulcrum', fulcrumX, baseY + 14, { align: 'center', color: CANVAS_COLORS.muted, size: 8 });
    } else if (machine === 'pulley') {
      const ceilingY = topY + 8;
      line(ctx, view.width * 0.2, ceilingY, view.width * 0.8, ceilingY, CANVAS_COLORS.hairline, 5);
      const fixedX = view.width * 0.56;
      const movableX = view.width * 0.44;
      const fixedY = ceilingY + 22;
      const movableY = view.height * 0.53;
      const rope = CANVAS_COLORS.technology;
      for (let strand = 0; strand < ropes; strand += 1) {
        const offset = (strand - (ropes - 1) / 2) * 12;
        line(ctx, fixedX + offset, fixedY + 12, movableX + offset, movableY - 12, rope, 1.6);
      }
      for (const [x, y] of [[fixedX, fixedY], [movableX, movableY]] as const) {
        dot(ctx, x, y, 13, CANVAS_COLORS.stage, false);
        ctx.save();
        ctx.strokeStyle = CANVAS_COLORS.engineering;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(x, y, 13, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      line(ctx, fixedX + 13, fixedY, view.width * 0.72, view.height * 0.28, rope, 1.6);
      const freeEndX = view.width * 0.72;
      for (let index = 0; index < 3; index += 1) {
        line(ctx, freeEndX, ceilingY + 30 + index * 8, freeEndX, view.height * 0.3 - index * 8, rope, 1.2);
      }
      arrow(ctx, freeEndX, view.height * 0.28, freeEndX, view.height * 0.28 + 72, CANVAS_COLORS.mathematics, 2.2, 7);
      label(ctx, `effort ${formatNumber(effort, 0)} N`, freeEndX + 6, view.height * 0.28 + 84, {
        color: CANVAS_COLORS.mathematics,
        size: 9,
        weight: 600,
      });
      line(ctx, movableX, movableY + 13, movableX, movableY + 40, CANVAS_COLORS.hairline, 1.5);
      loadBlock(movableX, movableY + 40);
      label(ctx, `${ropes} supporting rope${ropes === 1 ? '' : 's'}`, view.width / 2, baseY + 14, {
        align: 'center',
        color: CANVAS_COLORS.muted,
        size: 9,
      });
    } else if (machine === 'incline') {
      const x0 = view.width * 0.16;
      const x1 = view.width * 0.78;
      const width = x1 - x0;
      const height = Math.min(view.height * 0.52, width * Math.tan((angle * Math.PI) / 180));
      const top = { x: x1, y: baseY - height };
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x0, baseY);
      ctx.lineTo(x1, baseY);
      ctx.lineTo(x1, top.y);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 143, 163, 0.12)';
      ctx.fill();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
      const u = 0.52;
      const blockX = x0 + width * u;
      const blockY = baseY - height * u;
      ctx.save();
      ctx.translate(blockX, blockY - 12);
      ctx.rotate(-Math.atan2(height, width));
      ctx.fillStyle = 'rgba(255, 143, 163, 0.2)';
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.6;
      ctx.fillRect(-18, -9, 36, 18);
      ctx.strokeRect(-18, -9, 36, 18);
      ctx.restore();
      label(ctx, `${formatNumber(load, 0)} N`, blockX, blockY - 30, { align: 'center', color: CANVAS_COLORS.ink, size: 9, weight: 600 });
      const pushDirX = Math.cos(Math.atan2(height, width));
      const pushDirY = -Math.sin(Math.atan2(height, width));
      arrow(ctx, blockX + 24, blockY - 12, blockX + 24 + pushDirX * 54, blockY - 12 + pushDirY * 54, CANVAS_COLORS.mathematics, 2.2, 7);
      label(ctx, `effort ${formatNumber(effort, 0)} N`, blockX + 34, blockY - 30, {
        color: CANVAS_COLORS.mathematics,
        size: 9,
        weight: 600,
      });
      line(ctx, x0 + 40, baseY, x0 + 90, baseY, CANVAS_COLORS.muted, 1);
      ctx.save();
      ctx.strokeStyle = CANVAS_COLORS.muted;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x0 + 40, baseY, 34, -Math.atan2(height, width), 0);
      ctx.stroke();
      ctx.restore();
      label(ctx, `${angle.toFixed(0)}°`, x0 + 48, baseY - 18, { color: CANVAS_COLORS.muted, size: 9 });
      label(ctx, `${formatNumber(height / Math.max(1, width), 2)} rise / run`, view.width / 2, baseY + 14, {
        align: 'center',
        color: CANVAS_COLORS.muted,
        size: 9,
      });
    } else {
      const cx = view.width * 0.5;
      const cy = view.height * 0.47;
      const wheelRadius = Math.min(view.width * 0.19, view.height * 0.23);
      const axleRadius = Math.max(12, wheelRadius * Math.min(0.7, loadArm / Math.max(0.1, effortArm)));
      dot(ctx, cx, cy, wheelRadius, CANVAS_COLORS.stage, false);
      ctx.save();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.arc(cx, cy, wheelRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      dot(ctx, cx, cy, axleRadius, CANVAS_COLORS.raised, false);
      ctx.save();
      ctx.strokeStyle = CANVAS_COLORS.technology;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, axleRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      line(ctx, cx + wheelRadius, cy, cx + wheelRadius, cy + 54, CANVAS_COLORS.technology, 1.6);
      arrow(ctx, cx + wheelRadius, cy + 58, cx + wheelRadius, cy + 118, CANVAS_COLORS.mathematics, 2.2, 7);
      label(ctx, `effort ${formatNumber(effort, 0)} N`, cx + wheelRadius + 6, cy + 72, {
        color: CANVAS_COLORS.mathematics,
        size: 9,
        weight: 600,
      });
      line(ctx, cx - axleRadius, cy + axleRadius, cx - axleRadius, cy + 56, CANVAS_COLORS.hairline, 1.4);
      loadBlock(cx - axleRadius, cy + 56, 56);
      label(ctx, 'wheel', cx, cy - wheelRadius - 14, { align: 'center', color: accent, size: 9 });
      label(ctx, 'axle', cx, cy + 2, { align: 'center', color: CANVAS_COLORS.technology, size: 8 });
    }

    label(ctx, `MA ${formatNumber(ma, 2)} · effort ${formatNumber(effort, 0)} N`, view.width - 16, 24, {
      align: 'right',
      color: CANVAS_COLORS.ink,
      size: 10,
      weight: 600,
    });
    drawTitle(ctx, view.width, `${machine[0].toUpperCase()}${machine.slice(1)} · ideal machine`);
    cornerNote(ctx, view.width, view.height, 'Ideal machine · no friction, massless parts');
  },
  metrics(params) {
    const machine = (str(params, 'machine') as Machine) ?? 'lever';
    const load = num(params, 'load');
    const ma = machineAdvantage(machine, num(params, 'effortArm'), num(params, 'loadArm'), num(params, 'angle'), Math.round(num(params, 'ropes')));
    return [
      { label: 'Mechanical advantage', value: formatNumber(ma, 2) },
      { label: 'Effort force', value: formatNumber(load / Math.max(0.01, ma), 0), unit: 'N' },
      { label: 'Load force', value: formatNumber(load, 0), unit: 'N' },
      { label: 'Machine', value: machine },
      { label: 'Distance ratio', value: formatNumber(ma, 2) },
      { label: 'Efficiency', value: 'ideal' },
    ];
  },
  explanation(params) {
    const machine = (str(params, 'machine') as Machine) ?? 'lever';
    const load = num(params, 'load');
    const ma = machineAdvantage(machine, num(params, 'effortArm'), num(params, 'loadArm'), num(params, 'angle'), Math.round(num(params, 'ropes')));
    const effort = load / Math.max(0.01, ma);
    const reason =
      machine === 'lever'
        ? `The effort arm is ${num(params, 'effortArm').toFixed(1)} m and the load arm is ${num(params, 'loadArm').toFixed(1)} m, so the arm ratio gives the advantage.`
        : machine === 'pulley'
          ? `${Math.round(num(params, 'ropes'))} rope segments support the movable pulley, so the load is shared across them.`
          : machine === 'incline'
            ? `A ${num(params, 'angle').toFixed(0)}° slope turns a small effort along the ramp into a larger force perpendicular to the load.`
            : `The wheel radius is the effort arm and the axle radius is the load arm, so their ratio sets the advantage.`;
    return {
      headline: `This ${machine} has an ideal mechanical advantage of ${ma.toFixed(2)}.`,
      body: `${reason} A ${load.toFixed(0)} N load needs about ${effort.toFixed(0)} N of effort, and the effort moves ${ma.toFixed(2)} times farther than the load. Ideal machines conserve energy; real machines lose some to friction, so their efficiency is below 100%.`,
    };
  },
  experiment: {
    question: 'Move the load closer to the fulcrum on a lever. What happens to the effort needed?',
    steps: ['Select the lever, set the effort arm to 2.0 m and the load arm to 1.0 m.', 'Note the effort force.', 'Reduce the load arm to 0.4 m and compare.'],
    expected:
      'The mechanical advantage rises from 2 to 5, so the effort falls from half the load to one fifth. The effort must move farther, keeping ideal work input equal to work output.',
  },
  assumptions: [
    'Machines are ideal: no friction, rope mass, bending or elastic losses.',
    'Mechanical advantage is geometric and equals the ideal distance ratio; efficiency is therefore 100% in the model.',
    'The lever beam and pulley ropes are schematics, not scaled engineering drawings.',
    'The load is static; acceleration, shock loading and stability are not modelled.',
  ],
  sources: [SOURCES.machines, { label: 'Mechanical advantage — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mechanical_advantage' }],
  table(params) {
    const machine = (str(params, 'machine') as Machine) ?? 'lever';
    const load = num(params, 'load');
    const rows: Array<{ key: Machine; label: string; formula: string }> = [
      { key: 'lever', label: 'Lever', formula: 'effort arm / load arm' },
      { key: 'pulley', label: 'Pulley', formula: 'supporting ropes' },
      { key: 'incline', label: 'Incline', formula: '1 / sin θ' },
      { key: 'wheel', label: 'Wheel & axle', formula: 'wheel radius / axle radius' },
    ];
    return {
      caption: 'Ideal mechanical advantage for each machine with the current controls',
      headers: ['Machine', 'Rule', 'MA', 'Effort (N)'],
      rows: rows.map((row) => {
        const ma = machineAdvantage(row.key, num(params, 'effortArm'), num(params, 'loadArm'), num(params, 'angle'), Math.round(num(params, 'ropes')));
        return {
          cells: [row.label, row.formula, formatNumber(ma, 2), formatNumber(load / Math.max(0.01, ma), 0)],
          highlight: row.key === machine,
        };
      }),
    };
  },
};

export default spec;
