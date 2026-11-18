import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { beamLoad } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

type Support = 'simple' | 'cantilever';

const spec: VisualizerSpec = {
  accent: 'engineering',
  aspect: 1.7,
  animated: false,
  stageLabel: 'A beam with a movable point load, support reactions, a bending-moment diagram and an exaggerated deflection',
  stageHint: 'Reactions and bending moment come from statics. The deflection curve uses a constant-EI Euler–Bernoulli approximation and is drawn with an exaggerated vertical scale.',
  controls: [
    {
      kind: 'segment',
      id: 'support',
      label: 'Support',
      defaultValue: 'simple',
      options: [
        { value: 'simple', label: 'Simply supported' },
        { value: 'cantilever', label: 'Cantilever' },
      ],
    },
    { kind: 'slider', id: 'span', label: 'Span', min: 2, max: 20, step: 0.5, defaultValue: 8, unit: 'm' },
    { kind: 'slider', id: 'load', label: 'Point load', min: 1, max: 100, step: 1, defaultValue: 20, unit: 'kN' },
    { kind: 'slider', id: 'position', label: 'Load position', min: 0, max: 100, step: 1, defaultValue: 50, unit: '%' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const support = (str(params, 'support') as Support) ?? 'simple';
    const span = num(params, 'span');
    const load = num(params, 'load');
    const position = num(params, 'position');
    const model = beamLoad(span, load, position, support);
    const accent = CANVAS_COLORS.engineering;

    const x0 = view.width * 0.12;
    const x1 = view.width * 0.88;
    const beamY = view.height * 0.42;
    const u = position / 100;
    const xLoad = x0 + (x1 - x0) * u;
    const sag = Math.min(24, model.deflectionMm * 0.6);
    const deflect = (fraction: number) => {
      if (support === 'cantilever') return beamY + sag * fraction * fraction * (3 - fraction) * 0.5;
      return beamY + sag * Math.sin(Math.PI * fraction) * (0.65 + 0.35 * Math.sin(Math.PI * u));
    };

    // Deflected beam.
    ctx.save();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 7;
    ctx.beginPath();
    for (let index = 0; index <= 44; index += 1) {
      const fraction = index / 44;
      const x = x0 + (x1 - x0) * fraction;
      const y = deflect(fraction);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();

    // Supports.
    if (support === 'simple') {
      for (const x of [x0, x1]) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, beamY + 9);
        ctx.lineTo(x - 13, beamY + 34);
        ctx.lineTo(x + 13, beamY + 34);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 143, 163, 0.16)';
        ctx.fill();
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1.6;
        ctx.stroke();
        ctx.restore();
      }
      arrow(ctx, x0, beamY + 28, x0, beamY + 8, CANVAS_COLORS.biology, 1.8, 6);
      arrow(ctx, x1, beamY + 28, x1, beamY + 8, CANVAS_COLORS.biology, 1.8, 6);
      label(ctx, `${formatNumber(model.reactionLeft / 1000, 1)} kN`, x0, beamY + 48, {
        align: 'center',
        color: CANVAS_COLORS.biology,
        size: 8,
      });
      label(ctx, `${formatNumber(model.reactionRight / 1000, 1)} kN`, x1, beamY + 48, {
        align: 'center',
        color: CANVAS_COLORS.biology,
        size: 8,
      });
    } else {
      ctx.save();
      ctx.fillStyle = 'rgba(200, 215, 240, 0.12)';
      ctx.fillRect(x0 - 10, beamY - 22, 10, 44);
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(x0 - 10, beamY - 22, 10, 44);
      for (let index = -2; index <= 2; index += 1) {
        line(ctx, x0 - 10, beamY + index * 8, x0 - 20, beamY + index * 8 - 8, 'rgba(200, 215, 240, 0.3)', 1);
      }
      ctx.restore();
      arrow(ctx, x0 + 2, beamY + 30, x0 + 2, beamY + 8, CANVAS_COLORS.biology, 1.8, 6);
      label(ctx, `${formatNumber(model.reactionLeft / 1000, 1)} kN`, x0 + 2, beamY + 44, {
        align: 'center',
        color: CANVAS_COLORS.biology,
        size: 8,
      });
      label(ctx, 'fixed', x0 - 20, beamY + 44, { align: 'right', color: CANVAS_COLORS.muted, size: 8 });
    }

    // Point load.
    arrow(ctx, xLoad, beamY - 76, xLoad, deflect(u) - 8, CANVAS_COLORS.mathematics, 2.5, 8);
    label(ctx, `${formatNumber(load, 0)} kN`, xLoad, beamY - 86, {
      align: 'center',
      color: CANVAS_COLORS.mathematics,
      size: 10,
      weight: 700,
    });
    dot(ctx, xLoad, deflect(u), 4, CANVAS_COLORS.mathematics, false);

    // Bending-moment diagram.
    const momentTop = view.height * 0.62;
    const momentHeight = Math.min(view.height * 0.2, 72);
    const denominator = Math.max(0.01, model.maxMoment);
    const momentAt = (fraction: number) => {
      const x = fraction * span;
      const a = u * span;
      if (support === 'simple') {
        const left = model.reactionLeft;
        return (x <= a ? left * x : model.reactionRight * (span - x)) / denominator;
      }
      return (x <= a ? load * 1000 * (a - x) : 0) / denominator;
    };
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0, momentTop);
    for (let index = 0; index <= 44; index += 1) {
      const fraction = index / 44;
      ctx.lineTo(x0 + (x1 - x0) * fraction, momentTop - momentHeight * Math.max(0, momentAt(fraction)));
    }
    ctx.lineTo(x1, momentTop);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 143, 163, 0.16)';
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.restore();
    line(ctx, x0, momentTop, x1, momentTop, CANVAS_COLORS.hairline, 1);
    label(ctx, 'bending moment', x0, momentTop + 14, { color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, `${formatNumber(model.maxMoment / 1000, 1)} kNm max`, x1, momentTop + 14, {
      align: 'right',
      color: accent,
      size: 9,
      weight: 600,
    });

    label(ctx, `${span.toFixed(1)} m`, (x0 + x1) / 2, view.height - 24, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    label(ctx, `deflection ${formatNumber(model.deflectionMm, 1)} mm`, view.width - 16, 24, {
      align: 'right',
      color: CANVAS_COLORS.ink,
      size: 9,
      weight: 600,
    });
    drawTitle(ctx, view.width, `${support === 'simple' ? 'Simply supported' : 'Cantilever'} beam`);
    cornerNote(ctx, view.width, view.height, 'Constant EI · small-deflection approximation · deflection exaggerated');
  },
  metrics(params) {
    const support = (str(params, 'support') as Support) ?? 'simple';
    const model = beamLoad(num(params, 'span'), num(params, 'load'), num(params, 'position'), support);
    return [
      { label: 'Left reaction', value: formatNumber(model.reactionLeft / 1000, 1), unit: 'kN' },
      { label: 'Right reaction', value: formatNumber(model.reactionRight / 1000, 1), unit: 'kN' },
      { label: 'Max moment', value: formatNumber(model.maxMoment / 1000, 1), unit: 'kNm' },
      { label: 'Deflection', value: formatNumber(model.deflectionMm, 1), unit: 'mm' },
      { label: 'Span', value: formatNumber(num(params, 'span'), 1), unit: 'm' },
      { label: 'Load position', value: formatNumber(num(params, 'position'), 0), unit: '%' },
    ];
  },
  explanation(params) {
    const support = (str(params, 'support') as Support) ?? 'simple';
    const span = num(params, 'span');
    const load = num(params, 'load');
    const position = num(params, 'position');
    const model = beamLoad(span, load, position, support);
    const a = (position / 100) * span;
    if (support === 'cantilever') {
      return {
        headline: `The fixed end carries the whole ${load.toFixed(0)} kN load.`,
        body: `With the load ${a.toFixed(1)} m from the fixed support, the model gives a fixed-end moment of ${(model.maxMoment / 1000).toFixed(1)} kNm and a tip deflection of ${model.deflectionMm.toFixed(1)} mm. Moving the load toward the fixed end reduces the moment and deflection; at the free end they reach their maximum.`,
      };
    }
    return {
      headline: `The load is shared between the two supports.`,
      body: `A ${load.toFixed(0)} kN load ${a.toFixed(1)} m from the left support gives reactions of ${(model.reactionLeft / 1000).toFixed(1)} kN and ${(model.reactionRight / 1000).toFixed(1)} kN. The maximum bending moment is ${(model.maxMoment / 1000).toFixed(1)} kNm, and the midspan-style deflection estimate is ${model.deflectionMm.toFixed(1)} mm. Placing the load at midspan maximises the moment for a simply supported beam.`,
    };
  },
  experiment: {
    question: 'Where should a point load sit to maximise the bending moment in a simply supported beam?',
    steps: ['Select the simply supported beam and set a 20 kN load.', 'Move the load from 25% to 50% and then 75%.', 'Compare the max moment readout at each position.'],
    expected:
      'The moment peaks at midspan: M = Pab/L is largest when a = b = L/2. For an 8 m span and 20 kN, the maximum is 40 kNm at the centre and falls toward either support.',
  },
  assumptions: [
    'The beam is linear-elastic and follows Euler–Bernoulli beam theory with small deflections.',
    'The section is represented by a constant EI = 200 GPa × 1×10⁻⁴ m⁴; no real section properties are used.',
    'Self-weight, shear deformation, buckling, dynamic effects and support settlement are ignored.',
    'The deflection curve is not to scale vertically; only the direction and relative shape are meaningful.',
  ],
  sources: [SOURCES.beam, { label: 'Deflection (engineering) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Deflection_(engineering)' }],
  table(params) {
    const support = (str(params, 'support') as Support) ?? 'simple';
    const span = num(params, 'span');
    const load = num(params, 'load');
    return {
      caption: 'Reactions, moment and deflection as the load position changes',
      headers: ['Position (%)', 'Left (kN)', 'Right (kN)', 'Max moment (kNm)', 'Deflection (mm)'],
      rows: [25, 50, 75].map((position) => {
        const model = beamLoad(span, load, position, support);
        return {
          cells: [
            String(position),
            formatNumber(model.reactionLeft / 1000, 1),
            formatNumber(model.reactionRight / 1000, 1),
            formatNumber(model.maxMoment / 1000, 1),
            formatNumber(model.deflectionMm, 1),
          ],
          highlight: Math.abs(position - num(params, 'position')) < 1,
        };
      }),
    };
  },
};

export default spec;
