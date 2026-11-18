import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { bridgeModel } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

type BridgeType = 'beam' | 'truss' | 'arch' | 'suspension';
type Material = 'steel' | 'concrete';

const spec: VisualizerSpec = {
  accent: 'engineering',
  aspect: 1.7,
  animated: false,
  stageLabel: 'A bridge elevation drawn as beam, truss, arch or suspension, with load, span and utilisation',
  stageHint: 'The drawing follows the selected structural form. Span, load and material feed a teaching capacity estimate; deflection is exaggerated so the shape of the response is visible.',
  controls: [
    {
      kind: 'select',
      id: 'type',
      label: 'Structural form',
      defaultValue: 'truss',
      options: [
        { value: 'beam', label: 'Beam' },
        { value: 'truss', label: 'Truss' },
        { value: 'arch', label: 'Arch' },
        { value: 'suspension', label: 'Suspension' },
      ],
    },
    { kind: 'slider', id: 'span', label: 'Span', min: 10, max: 100, step: 5, defaultValue: 50, unit: 'm' },
    { kind: 'slider', id: 'load', label: 'Point load', min: 1, max: 100, step: 1, defaultValue: 30, unit: 'kN' },
    {
      kind: 'segment',
      id: 'material',
      label: 'Material',
      defaultValue: 'steel',
      options: [
        { value: 'steel', label: 'Steel' },
        { value: 'concrete', label: 'Concrete' },
      ],
    },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const type = (str(params, 'type') as BridgeType) ?? 'truss';
    const span = num(params, 'span');
    const load = num(params, 'load');
    const material = (str(params, 'material') as Material) ?? 'steel';
    const model = bridgeModel(type, span, load, material);
    const dangerous = model.utilization > 1;
    const accent = dangerous ? CANVAS_COLORS.danger : CANVAS_COLORS.engineering;

    const x0 = view.width * 0.1;
    const x1 = view.width * 0.9;
    const deckY = view.height * 0.46;
    const groundY = view.height - 62;
    const sag = Math.min(18, model.deflectionIndex * 0.2);
    const deckPoint = (u: number) => ({
      x: x0 + (x1 - x0) * u,
      y: deckY + 4 * sag * u * (1 - u),
    });

    // Ground and supports.
    line(ctx, view.width * 0.03, groundY, view.width * 0.97, groundY, CANVAS_COLORS.hairline, 2);
    for (let index = 0; index < 26; index += 1) {
      const x = view.width * 0.04 + index * (view.width * 0.92) / 25;
      line(ctx, x, groundY, x - 6, groundY + 8, 'rgba(200, 215, 240, 0.18)', 1);
    }
    const support = (x: number) => {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, deckY + 10);
      ctx.lineTo(x - 13, deckY + 34);
      ctx.lineTo(x + 13, deckY + 34);
      ctx.closePath();
      ctx.fillStyle = 'rgba(200, 215, 240, 0.12)';
      ctx.fill();
      ctx.strokeStyle = CANVAS_COLORS.muted;
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.restore();
    };
    support(x0);
    support(x1);

    // Deck as a slightly deflected quadratic.
    ctx.save();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 7;
    ctx.beginPath();
    for (let index = 0; index <= 40; index += 1) {
      const point = deckPoint(index / 40);
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    }
    ctx.stroke();
    ctx.restore();

    if (type === 'truss') {
      const topY = deckY - Math.min(76, view.height * 0.2);
      const panels = 6;
      for (let index = 0; index <= panels; index += 1) {
        const point = deckPoint(index / panels);
        const top = deckY + (topY - deckY);
        line(ctx, point.x, point.y, point.x, top, CANVAS_COLORS.engineering, 2);
        if (index < panels) {
          const next = deckPoint((index + 1) / panels);
          line(ctx, point.x, top, next.x, next.y, CANVAS_COLORS.engineering, 2);
        }
      }
      line(ctx, x0, topY, x1, topY, CANVAS_COLORS.engineering, 3);
    } else if (type === 'arch') {
      ctx.save();
      ctx.strokeStyle = CANVAS_COLORS.engineering;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(x0, deckY + 8);
      ctx.quadraticCurveTo((x0 + x1) / 2, deckY + Math.min(120, view.height * 0.32), x1, deckY + 8);
      ctx.stroke();
      ctx.restore();
      for (let index = 1; index < 8; index += 1) {
        const u = index / 8;
        const x = x0 + (x1 - x0) * u;
        const archY = deckY + 8 + (Math.min(120, view.height * 0.32) - 8) * 2 * u * (1 - u);
        line(ctx, x, deckPoint(u).y, x, archY, 'rgba(255, 143, 163, 0.5)', 1.2);
      }
    } else if (type === 'suspension') {
      const towerTop = deckY - Math.min(88, view.height * 0.24);
      const towerA = x0 + (x1 - x0) * 0.16;
      const towerB = x1 - (x1 - x0) * 0.16;
      line(ctx, towerA, groundY, towerA, towerTop, CANVAS_COLORS.engineering, 4);
      line(ctx, towerB, groundY, towerB, towerTop, CANVAS_COLORS.engineering, 4);
      const cableMid = deckY - 8;
      ctx.save();
      ctx.strokeStyle = CANVAS_COLORS.engineering;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x0, towerTop);
      ctx.quadraticCurveTo((x0 + towerA) / 2, cableMid + 24, towerA, towerTop);
      ctx.moveTo(towerA, towerTop);
      ctx.quadraticCurveTo((towerA + towerB) / 2, cableMid, towerB, towerTop);
      ctx.moveTo(towerB, towerTop);
      ctx.quadraticCurveTo((towerB + x1) / 2, cableMid + 24, x1, towerTop);
      ctx.stroke();
      ctx.restore();
      for (let index = 1; index < 15; index += 1) {
        const u = index / 15;
        const x = x0 + (x1 - x0) * u;
        const cableY = u < 0.16
          ? towerTop + (cableMid + 24 - towerTop) * Math.sin((u / 0.16) * Math.PI)
          : u > 0.84
            ? towerTop + (cableMid + 24 - towerTop) * Math.sin(((1 - u) / 0.16) * Math.PI)
            : cableMid + (towerTop - cableMid) * Math.abs(u - 0.5) * 2.4;
        line(ctx, x, cableY, x, deckPoint(u).y, 'rgba(255, 143, 163, 0.55)', 1);
      }
    }

    // Load arrow at midspan.
    const mid = deckPoint(0.5);
    arrow(ctx, mid.x, mid.y - 78, mid.x, mid.y - 12, CANVAS_COLORS.warn, 2.5, 8);
    label(ctx, `${load.toFixed(0)} kN`, mid.x + 8, mid.y - 82, { color: CANVAS_COLORS.warn, size: 10, weight: 600 });

    // Span dimension.
    line(ctx, x0, groundY - 18, x1, groundY - 18, CANVAS_COLORS.muted, 1);
    line(ctx, x0, groundY - 23, x0, groundY - 13, CANVAS_COLORS.muted, 1);
    line(ctx, x1, groundY - 23, x1, groundY - 13, CANVAS_COLORS.muted, 1);
    label(ctx, `${span.toFixed(0)} m span`, (x0 + x1) / 2, groundY - 30, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    label(ctx, material, view.width - 16, 22, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    label(ctx, `capacity ${model.capacityKn.toFixed(0)} kN`, view.width - 16, 38, {
      align: 'right',
      color: accent,
      size: 9,
      weight: 600,
    });
    label(ctx, `safety factor ${Number.isFinite(model.safetyFactor) ? model.safetyFactor.toFixed(2) : '—'}`, view.width - 16, 54, {
      align: 'right',
      color: accent,
      size: 9,
      weight: 600,
    });
    label(ctx, `utilisation ${(model.utilization * 100).toFixed(0)}%`, view.width / 2, view.height - 24, {
      align: 'center',
      color: accent,
      size: 11,
      weight: 600,
    });
    dot(ctx, view.width / 2 - 78, view.height - 24, 3, accent, false);

    drawTitle(ctx, view.width, `${type[0].toUpperCase()}${type.slice(1)} bridge`);
    cornerNote(ctx, view.width, view.height, 'Teaching estimate · deflection exaggerated');
  },
  metrics(params) {
    const type = (str(params, 'type') as BridgeType) ?? 'truss';
    const model = bridgeModel(type, num(params, 'span'), num(params, 'load'), (str(params, 'material') as Material) ?? 'steel');
    return [
      { label: 'Capacity', value: formatNumber(model.capacityKn, 0), unit: 'kN' },
      { label: 'Utilisation', value: formatNumber(model.utilization * 100, 0), unit: '%' },
      { label: 'Safety factor', value: Number.isFinite(model.safetyFactor) ? formatNumber(model.safetyFactor, 2) : '—' },
      { label: 'Deflection index', value: formatNumber(model.deflectionIndex, 1) },
      { label: 'Span', value: formatNumber(num(params, 'span'), 0), unit: 'm' },
      { label: 'Load', value: formatNumber(num(params, 'load'), 0), unit: 'kN' },
    ];
  },
  explanation(params) {
    const type = (str(params, 'type') as BridgeType) ?? 'truss';
    const material = (str(params, 'material') as Material) ?? 'steel';
    const model = bridgeModel(type, num(params, 'span'), num(params, 'load'), material);
    const status = model.utilization > 1
      ? 'The estimated utilisation is above 100%, so this teaching model is overloaded.'
      : `At ${(model.utilization * 100).toFixed(0)}% utilisation there is a modelled safety factor of ${model.safetyFactor.toFixed(2)}.`;
    return {
      headline: `${type[0].toUpperCase()}${type.slice(1)} form with a ${num(params, 'span').toFixed(0)} m span.`,
      body: `A ${material} ${type} bridge carrying ${num(params, 'load').toFixed(0)} kN has an estimated capacity of ${model.capacityKn.toFixed(0)} kN. ${status} Longer spans reduce capacity and increase the relative deflection index. Real design also checks bending, shear, buckling, fatigue, wind, seismic loads and foundations, none of which are in this model.`,
    };
  },
  experiment: {
    question: 'At the same span and load, which form is most efficient in this model?',
    steps: ['Set span to 60 m and load to 40 kN.', 'Compare beam, truss, arch and suspension capacities.', 'Note the utilisation and safety factor for each.'],
    expected:
      'The model ranks suspension highest, then arch, then truss, then beam. The ordering reflects the efficiency factors in the teaching formula, not a full structural analysis; real bridge choice also depends on site, cost, foundations and construction method.',
  },
  assumptions: [
    'Capacity, utilisation and deflection index come from a small teaching formula, not a structural design code.',
    'The load is a single static point load at midspan; moving loads, wind, earthquakes and thermal effects are excluded.',
    'Deflection is drawn with an exaggerated vertical scale so the shape is visible.',
    'Steel and concrete are represented by one strength value each; real section, reinforcement and connection design are not modelled.',
  ],
  sources: [
    SOURCES.bridge,
    { label: 'Truss bridge — Wikipedia', url: 'https://en.wikipedia.org/wiki/Truss_bridge' },
    { label: 'Suspension bridge — Wikipedia', url: 'https://en.wikipedia.org/wiki/Suspension_bridge' },
  ],
  table(params) {
    const span = num(params, 'span');
    const load = num(params, 'load');
    const material = (str(params, 'material') as Material) ?? 'steel';
    const selected = (str(params, 'type') as BridgeType) ?? 'truss';
    return {
      caption: 'Structural forms compared at the current span, load and material',
      headers: ['Form', 'Capacity (kN)', 'Utilisation (%)', 'Safety factor'],
      rows: (['beam', 'truss', 'arch', 'suspension'] as const).map((type) => {
        const model = bridgeModel(type, span, load, material);
        return {
          cells: [
            type,
            formatNumber(model.capacityKn, 0),
            formatNumber(model.utilization * 100, 0),
            formatNumber(model.safetyFactor, 2),
          ],
          highlight: type === selected,
        };
      }),
    };
  },
};

export default spec;
