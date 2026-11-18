import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { gearRatio } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

function drawGear(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  teeth: number,
  angle: number,
  colour: string,
  highlighted: boolean,
): void {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 143, 163, 0.08)';
  ctx.fill();
  ctx.strokeStyle = colour;
  ctx.lineWidth = highlighted ? 2.4 : 1.8;
  ctx.stroke();
  ctx.restore();

  for (let tooth = 0; tooth < teeth; tooth += 1) {
    const toothAngle = angle + (tooth / teeth) * Math.PI * 2;
    const inner = radius - 1;
    const outer = radius + Math.max(4, Math.min(9, radius * 0.16));
    line(
      ctx,
      cx + Math.cos(toothAngle) * inner,
      cy + Math.sin(toothAngle) * inner,
      cx + Math.cos(toothAngle) * outer,
      cy + Math.sin(toothAngle) * outer,
      colour,
      highlighted ? 3 : 2,
    );
  }
  dot(ctx, cx, cy, Math.max(6, radius * 0.14), CANVAS_COLORS.stage, false);
  ctx.save();
  ctx.strokeStyle = colour;
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(6, radius * 0.14), 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function directionArc(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  clockwise: boolean,
  colour: string,
): void {
  const start = -Math.PI * 0.72;
  const end = Math.PI * 0.18;
  ctx.save();
  ctx.strokeStyle = colour;
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, start, end, !clockwise);
  ctx.stroke();
  const tangent = end + (clockwise ? Math.PI / 2 : -Math.PI / 2);
  const tipX = cx + Math.cos(end) * radius;
  const tipY = cy + Math.sin(end) * radius;
  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(tipX - Math.cos(tangent - 0.4) * 7, tipY - Math.sin(tangent - 0.4) * 7);
  ctx.lineTo(tipX - Math.cos(tangent + 0.4) * 7, tipY - Math.sin(tangent + 0.4) * 7);
  ctx.closePath();
  ctx.fillStyle = colour;
  ctx.fill();
  ctx.restore();
}

const spec: VisualizerSpec = {
  accent: 'engineering',
  aspect: 1.65,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'Two meshed gears with tooth counts, rotation directions and output speed',
  stageHint: 'The driver is on the left. More teeth on the driven gear means fewer output revolutions and more torque. The drawn rotation is slowed down so the direction stays readable.',
  controls: [
    { kind: 'slider', id: 'driver', label: 'Driver teeth', min: 8, max: 60, step: 1, defaultValue: 20 },
    { kind: 'slider', id: 'driven', label: 'Driven teeth', min: 8, max: 60, step: 1, defaultValue: 40 },
    { kind: 'slider', id: 'rpm', label: 'Input speed', min: 10, max: 300, step: 5, defaultValue: 120, unit: 'rpm' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const driverTeeth = Math.round(num(params, 'driver'));
    const drivenTeeth = Math.round(num(params, 'driven'));
    const inputRpm = num(params, 'rpm');
    const result = gearRatio(driverTeeth, drivenTeeth, inputRpm);
    const accent = CANVAS_COLORS.engineering;

    const available = Math.min(view.width * 0.34, view.height * 0.28);
    const scale = Math.max(0.18, (available - 28) / Math.max(1, driverTeeth + drivenTeeth));
    const radiusA = 14 + driverTeeth * scale;
    const radiusB = 14 + drivenTeeth * scale;
    const distance = radiusA + radiusB;
    const midX = view.width / 2;
    const cy = view.height * 0.52 - 6;
    const ax = midX - distance / 2;
    const bx = midX + distance / 2;
    const driverAngle = t * 0.7;
    const drivenAngle = -driverAngle / Math.max(0.1, result.ratio);

    drawGear(ctx, ax, cy, radiusA, driverTeeth, driverAngle, accent, true);
    drawGear(ctx, bx, cy, radiusB, drivenTeeth, drivenAngle, CANVAS_COLORS.technology, false);
    dot(ctx, midX, cy, 3, CANVAS_COLORS.mathematics, true);

    directionArc(ctx, ax, cy, radiusA + 16, true, accent);
    directionArc(ctx, bx, cy, radiusB + 16, false, CANVAS_COLORS.technology);

    label(ctx, 'driver', ax, cy - radiusA - 24, { align: 'center', color: accent, size: 10, weight: 600 });
    label(ctx, `${driverTeeth} teeth`, ax, cy + radiusA + 24, { align: 'center', color: CANVAS_COLORS.muted, size: 9 });
    label(ctx, 'driven', bx, cy - radiusB - 24, { align: 'center', color: CANVAS_COLORS.technology, size: 10, weight: 600 });
    label(ctx, `${drivenTeeth} teeth`, bx, cy + radiusB + 24, { align: 'center', color: CANVAS_COLORS.muted, size: 9 });

    label(ctx, 'mesh', midX, cy + 16, { align: 'center', color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, `${formatNumber(inputRpm, 0)} rpm in`, view.width * 0.14, view.height - 46, {
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    label(ctx, `${formatNumber(result.outputRpm, 0)} rpm out`, view.width * 0.72, view.height - 46, {
      color: CANVAS_COLORS.technology,
      size: 12,
      weight: 700,
      mono: true,
    });
    label(ctx, `${formatNumber(result.ratio, 2)} : 1`, view.width / 2, view.height - 22, {
      align: 'center',
      color: CANVAS_COLORS.ink,
      size: 16,
      weight: 700,
      mono: true,
    });

    drawTitle(ctx, view.width, `Gear pair · torque ×${formatNumber(result.torqueMultiplier, 2)}`);
    label(ctx, 'clockwise / counter-clockwise', view.width - 16, 22, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 8,
    });
    cornerNote(ctx, view.width, view.height, 'Ideal gears · rotation slowed for display');
  },
  metrics(params) {
    const driverTeeth = Math.round(num(params, 'driver'));
    const drivenTeeth = Math.round(num(params, 'driven'));
    const inputRpm = num(params, 'rpm');
    const result = gearRatio(driverTeeth, drivenTeeth, inputRpm);
    return [
      { label: 'Gear ratio', value: formatNumber(result.ratio, 2), unit: ': 1' },
      { label: 'Output speed', value: formatNumber(result.outputRpm, 0), unit: 'rpm' },
      { label: 'Torque multiplier', value: formatNumber(result.torqueMultiplier, 2), unit: '×' },
      { label: 'Input speed', value: formatNumber(inputRpm, 0), unit: 'rpm' },
      { label: 'Driver teeth', value: String(driverTeeth) },
      { label: 'Driven teeth', value: String(drivenTeeth) },
    ];
  },
  explanation(params) {
    const driverTeeth = Math.round(num(params, 'driver'));
    const drivenTeeth = Math.round(num(params, 'driven'));
    const inputRpm = num(params, 'rpm');
    const result = gearRatio(driverTeeth, drivenTeeth, inputRpm);
    return {
      headline: `A ${driverTeeth}-tooth driver and a ${drivenTeeth}-tooth driven gear give ${result.ratio.toFixed(2)} : 1.`,
      body: `Each turn of the driver moves ${driverTeeth} teeth, while one turn of the driven gear needs ${drivenTeeth}. The driven gear therefore turns ${result.outputRpm.toFixed(0)} rpm when the input is ${inputRpm.toFixed(0)} rpm, and the ideal torque rises by ${result.torqueMultiplier.toFixed(2)}×. The two gears rotate in opposite directions. Real gears lose some energy to friction, and the teeth must be designed for the resulting load.`,
    };
  },
  experiment: {
    question: 'What happens to speed and torque if the driven gear has twice as many teeth?',
    steps: ['Set the driver to 20 teeth and the driven to 20 teeth.', 'Note output speed and torque multiplier.', 'Change the driven gear to 40 teeth and compare.'],
    expected:
      'The ratio becomes 2 : 1, output speed halves and the ideal torque multiplier doubles. A larger driven gear trades rotational speed for torque; it does not create energy.',
  },
  assumptions: [
    'Gears are ideal: no friction, backlash, wear, deflection or slip.',
    'The ratio is set only by the tooth counts; pressure angle, module and tooth profile are not modelled.',
    'Torque multiplication is ideal and assumes constant power (input torque × input speed = output torque × output speed).',
    'The displayed rotation is slowed and not synchronised tooth-by-tooth; the rpm readout is the calculated value.',
  ],
  sources: [SOURCES.gear, { label: 'Gear train — Wikipedia', url: 'https://en.wikipedia.org/wiki/Gear_train' }],
  table(params) {
    const driverTeeth = Math.round(num(params, 'driver'));
    const inputRpm = num(params, 'rpm');
    return {
      caption: 'Output speed and torque for different driven gears at the current input',
      headers: ['Driven teeth', 'Ratio', 'Output rpm', 'Torque multiplier'],
      rows: [10, 20, 30, 40, 60].map((driven) => {
        const result = gearRatio(driverTeeth, driven, inputRpm);
        return {
          cells: [
            String(driven),
            formatNumber(result.ratio, 2),
            formatNumber(result.outputRpm, 0),
            formatNumber(result.torqueMultiplier, 2),
          ],
          highlight: driven === Math.round(num(params, 'driven')),
        };
      }),
    };
  },
};

export default spec;
