import type { VisualizerSpec } from '@/lib/visualizers/types';
import { bool, formatNumber, num } from '@/lib/visualizers/types';
import { cardiacOutput } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'biology',
  aspect: 1.55,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'A four-chamber heart schematic pulsing through systole and diastole',
  stageHint: 'The animation follows the cardiac cycle at the chosen heart rate. Ventricles squeeze during systole; chambers fill during diastole. Cardiac output is rate multiplied by stroke volume.',
  controls: [
    { kind: 'slider', id: 'heartRate', label: 'Heart rate', min: 40, max: 180, step: 1, defaultValue: 70, unit: 'bpm' },
    { kind: 'slider', id: 'strokeVolume', label: 'Stroke volume', min: 40, max: 120, step: 5, defaultValue: 70, unit: 'mL' },
    { kind: 'toggle', id: 'flow', label: 'Blood-flow arrows', defaultValue: true, onLabel: 'Shown', offLabel: 'Hidden' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const heartRate = num(params, 'heartRate');
    const strokeVolume = num(params, 'strokeVolume');
    const showFlow = bool(params, 'flow');
    const { cycleSeconds } = cardiacOutput(heartRate, strokeVolume);

    const beat = cycleSeconds === 0 ? 0 : (t % cycleSeconds) / cycleSeconds;
    const systolic = beat < 0.36;
    const squeeze = systolic ? Math.sin((beat / 0.36) * Math.PI) : 0;
    const atrialSqueeze = beat > 0.84 ? Math.sin(((beat - 0.84) / 0.16) * Math.PI) : 0;

    const cx = view.width / 2;
    const cy = view.height * 0.55;
    const unit = Math.min(view.width * 0.215, view.height * 0.31);
    const oxygenated = CANVAS_COLORS.engineering;
    const deoxygenated = CANVAS_COLORS.physics;

    // Great vessels first, so the heart chambers sit on top of them.
    const vessel = (x1: number, y1: number, x2: number, y2: number, color: string) =>
      line(ctx, x1, y1, x2, y2, color, 10);
    vessel(cx - unit * 1.18, cy - unit * 0.9, cx - unit * 0.45, cy - unit * 0.98, deoxygenated);
    vessel(cx + unit * 0.5, cy - unit * 1.12, cx + unit * 1.16, cy - unit * 0.72, oxygenated);
    vessel(cx - unit * 0.62, cy - unit * 0.82, cx - unit * 0.2, cy - unit * 1.36, deoxygenated);
    vessel(cx + unit * 0.62, cy - unit * 0.82, cx + unit * 0.18, cy - unit * 1.36, oxygenated);

    const chamber = (
      x: number,
      y: number,
      rx: number,
      ry: number,
      color: string,
      labelText: string,
      emphasis: number,
    ) => {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.24 + emphasis * 0.3;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
      label(ctx, labelText, x, y, {
        align: 'center',
        color: CANVAS_COLORS.ink,
        size: 11,
        weight: 600,
      });
    };

    const ventricularRy = unit * 0.68 * (1 - squeeze * 0.16);
    chamber(cx - unit * 0.47, cy - unit * 0.76, unit * 0.42, unit * 0.32, deoxygenated, 'RA', atrialSqueeze);
    chamber(cx + unit * 0.47, cy - unit * 0.76, unit * 0.42, unit * 0.32, oxygenated, 'LA', atrialSqueeze);
    chamber(cx - unit * 0.45, cy + unit * 0.08, unit * 0.5, ventricularRy, deoxygenated, 'RV', squeeze);
    chamber(cx + unit * 0.45, cy + unit * 0.08, unit * 0.5, ventricularRy, oxygenated, 'LV', squeeze);

    // Septum and valve leaflets.
    line(ctx, cx, cy - unit * 0.98, cx, cy + unit * 0.8, CANVAS_COLORS.hairline, 2);
    line(ctx, cx - unit * 0.82, cy - unit * 0.45, cx - unit * 0.12, cy - unit * 0.45, CANVAS_COLORS.ink, 1.5);
    line(ctx, cx + unit * 0.12, cy - unit * 0.45, cx + unit * 0.82, cy - unit * 0.45, CANVAS_COLORS.ink, 1.5);

    if (showFlow) {
      const alpha = 0.45 + 0.55 * (systolic ? squeeze : 0.35);
      ctx.save();
      ctx.globalAlpha = alpha;
      arrow(ctx, cx - unit * 1.22, cy - unit * 0.58, cx - unit * 0.72, cy - unit * 0.64, deoxygenated, 2, 7);
      arrow(ctx, cx - unit * 0.47, cy - unit * 0.42, cx - unit * 0.47, cy - unit * 0.22, deoxygenated, 2, 6);
      arrow(ctx, cx - unit * 0.34, cy + unit * 0.04, cx - unit * 0.34, cy - unit * 0.42, deoxygenated, 2, 6);
      arrow(ctx, cx + unit * 1.22, cy - unit * 0.58, cx + unit * 0.72, cy - unit * 0.64, oxygenated, 2, 7);
      arrow(ctx, cx + unit * 0.47, cy - unit * 0.42, cx + unit * 0.47, cy - unit * 0.22, oxygenated, 2, 6);
      arrow(ctx, cx + unit * 0.34, cy + unit * 0.04, cx + unit * 0.34, cy - unit * 0.42, oxygenated, 2, 6);
      ctx.restore();
    }

    // Cycle progress rail.
    const railX = view.width * 0.2;
    const railY = view.height - 44;
    const railW = view.width * 0.6;
    line(ctx, railX, railY, railX + railW, railY, CANVAS_COLORS.hairline, 5);
    line(ctx, railX, railY, railX + railW * beat, railY, CANVAS_COLORS.biology, 5);
    dot(ctx, railX + railW * beat, railY, 4, CANVAS_COLORS.ink, true);
    label(ctx, 'systole', railX + railW * 0.18, railY - 12, {
      align: 'center',
      color: systolic ? CANVAS_COLORS.ink : CANVAS_COLORS.muted,
      size: 9,
      weight: systolic ? 600 : 500,
    });
    label(ctx, 'diastole', railX + railW * 0.68, railY - 12, {
      align: 'center',
      color: !systolic ? CANVAS_COLORS.ink : CANVAS_COLORS.muted,
      size: 9,
      weight: !systolic ? 600 : 500,
    });

    const vesselText = view.width < 420 ? 8 : 9;
    label(ctx, 'vena cava', cx - unit * 1.2, cy - unit * 1.02, { align: 'right', color: deoxygenated, size: vesselText });
    label(ctx, 'pulmonary artery', cx - unit * 0.2, cy - unit * 1.46, { align: 'center', color: deoxygenated, size: vesselText });
    label(ctx, 'pulmonary vein', cx + unit * 1.2, cy - unit * 1.02, { color: oxygenated, size: vesselText });
    label(ctx, 'aorta', cx + unit * 0.2, cy - unit * 1.46, { align: 'center', color: oxygenated, size: vesselText });

    drawTitle(ctx, view.width, `Cardiac cycle · ${systolic ? 'systole' : 'diastole'} · ${formatNumber(beat * 100, 0)}%`);
    label(ctx, `${formatNumber(heartRate, 0)} bpm · ${formatNumber(strokeVolume, 0)} mL/beat`, view.width - 16, 20, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    cornerNote(ctx, view.width, view.height, 'Schematic · oxygenated left, deoxygenated right');
  },
  metrics(params, t) {
    const heartRate = num(params, 'heartRate');
    const strokeVolume = num(params, 'strokeVolume');
    const { cardiacOutput: output, cycleSeconds } = cardiacOutput(heartRate, strokeVolume);
    const beat = cycleSeconds === 0 ? 0 : (t % cycleSeconds) / cycleSeconds;
    return [
      { label: 'Cardiac output', value: formatNumber(output, 1), unit: 'L/min' },
      { label: 'Heart rate', value: formatNumber(heartRate, 0), unit: 'bpm' },
      { label: 'Stroke volume', value: formatNumber(strokeVolume, 0), unit: 'mL' },
      { label: 'Cycle length', value: formatNumber(cycleSeconds, 2), unit: 's' },
      { label: 'Phase', value: beat < 0.36 ? 'Systole' : 'Diastole' },
      { label: 'Cycle progress', value: formatNumber(beat * 100, 0), unit: '%' },
    ];
  },
  explanation(params, t) {
    const heartRate = num(params, 'heartRate');
    const strokeVolume = num(params, 'strokeVolume');
    const { cardiacOutput: output, cycleSeconds } = cardiacOutput(heartRate, strokeVolume);
    const beat = cycleSeconds === 0 ? 0 : (t % cycleSeconds) / cycleSeconds;
    const systolic = beat < 0.36;
    return {
      headline: systolic
        ? 'Systole: the ventricles contract and eject blood.'
        : 'Diastole: the chambers relax and refill.',
      body: `At ${heartRate.toFixed(0)} beats per minute, one cycle lasts ${cycleSeconds.toFixed(2)} s. Each beat ejects ${strokeVolume.toFixed(0)} mL, so cardiac output is HR × SV = ${output.toFixed(1)} L/min. The right side sends deoxygenated blood to the lungs; the left side sends oxygenated blood to the body.`,
    };
  },
  experiment: {
    question: 'Keep stroke volume fixed and raise heart rate from 60 to 120 bpm. What happens to cardiac output?',
    steps: [
      'Set stroke volume to 70 mL and heart rate to 60 bpm.',
      'Note the cardiac output readout.',
      'Raise heart rate to 120 bpm and compare.',
    ],
    expected:
      'Cardiac output doubles from about 4.2 to about 8.4 L/min, because output is the product of rate and volume. In a real heart, filling time shortens at very high rates, so stroke volume usually falls before output plateaus.',
  },
  assumptions: [
    'The heart is a four-chamber schematic; vessel anatomy, valve detail and conduction timing are simplified.',
    'Cardiac output is modelled as heart rate × stroke volume with a constant stroke volume.',
    'Systole occupies about 36% of the cycle at every rate, which is a teaching approximation, not a clinical timing model.',
    'No valve disease, shunts or arrhythmias are represented.',
  ],
  sources: [
    SOURCES.anatomy,
    { label: 'Cardiac cycle — Wikipedia', url: 'https://en.wikipedia.org/wiki/Cardiac_cycle' },
  ],
  table(params) {
    const strokeVolume = num(params, 'strokeVolume');
    return {
      caption: 'Cardiac output at selected heart rates with the current stroke volume',
      headers: ['Heart rate (bpm)', 'Cycle length (s)', 'Cardiac output (L/min)'],
      rows: [60, 90, 120, 150].map((rate) => ({
        cells: [
          String(rate),
          formatNumber(cardiacOutput(rate, strokeVolume).cycleSeconds, 2),
          formatNumber(cardiacOutput(rate, strokeVolume).cardiacOutput, 1),
        ],
        highlight: Math.abs(rate - num(params, 'heartRate')) < 1,
      })),
    };
  },
};

export default spec;
