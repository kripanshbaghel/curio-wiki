import type { VisualizerSpec } from '@/lib/visualizers/types';
import { bool, formatNumber, num } from '@/lib/visualizers/types';
import { minuteVentilation } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare, roundRectPath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const DEAD_SPACE_LITRES = 0.15;

const spec: VisualizerSpec = {
  accent: 'biology',
  aspect: 1.55,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'An animated chest cross-section with lungs, diaphragm and airflow',
  stageHint: 'The diaphragm lowers and the lungs expand on inhale. Minute ventilation is breathing rate multiplied by tidal volume; a fixed dead-space estimate separates total from alveolar ventilation.',
  controls: [
    { kind: 'slider', id: 'rate', label: 'Breathing rate', min: 6, max: 40, step: 1, defaultValue: 14, unit: 'breaths/min' },
    { kind: 'slider', id: 'tidal', label: 'Tidal volume', min: 0.2, max: 1.2, step: 0.05, defaultValue: 0.5, unit: 'L' },
    { kind: 'toggle', id: 'airflow', label: 'Airflow dots', defaultValue: true, onLabel: 'Shown', offLabel: 'Hidden' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const rate = num(params, 'rate');
    const tidal = num(params, 'tidal');
    const showAirflow = bool(params, 'airflow');
    const cycleSeconds = 60 / Math.max(0.01, rate);
    const phase = (t % cycleSeconds) / cycleSeconds;
    const expansion = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);
    const inhale = phase < 0.5;

    const chest = { x: view.width * 0.18, y: 52, width: view.width * 0.64, height: view.height - 106 };
    const cx = view.width / 2;
    const lungWidth = chest.width * 0.42;
    const lungHeight = chest.height * 0.56;
    const lungCentreY = chest.y + chest.height * 0.46;

    ctx.save();
    roundRectPath(ctx, chest.x, chest.y, chest.width, chest.height, 34);
    ctx.fillStyle = 'rgba(110, 231, 160, 0.04)';
    ctx.fill();
    ctx.strokeStyle = CANVAS_COLORS.hairline;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Ribs.
    for (let rib = 0; rib < 4; rib += 1) {
      const ribY = chest.y + chest.height * (0.2 + rib * 0.16);
      ctx.beginPath();
      ctx.moveTo(chest.x + 6, ribY);
      ctx.quadraticCurveTo(cx, ribY + 18, chest.x + chest.width - 6, ribY);
      ctx.strokeStyle = 'rgba(200, 215, 240, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();

    // Trachea and main bronchi.
    line(ctx, cx, chest.y - 20, cx, chest.y + 38, CANVAS_COLORS.technology, 9);
    line(ctx, cx, chest.y - 20, cx, chest.y + 38, 'rgba(79, 224, 200, 0.35)', 3);
    const carina = { x: cx, y: chest.y + 38 };
    const leftCentre = { x: cx - lungWidth * 0.62, y: lungCentreY };
    const rightCentre = { x: cx + lungWidth * 0.62, y: lungCentreY };
    line(ctx, carina.x, carina.y, leftCentre.x + 8, leftCentre.y - lungHeight * 0.22, CANVAS_COLORS.technology, 4);
    line(ctx, carina.x, carina.y, rightCentre.x - 8, rightCentre.y - lungHeight * 0.22, CANVAS_COLORS.technology, 4);
    label(ctx, 'trachea', cx + 12, chest.y - 12, { color: CANVAS_COLORS.muted, size: 9 });

    const lung = (centreX: number, colour: string) => {
      const rx = lungWidth * (0.56 + expansion * 0.05);
      const ry = (lungHeight / 2) * (1 + expansion * 0.07);
      const y = lungCentreY + expansion * 4;
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centreX, y, rx, ry, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(110, 231, 160, 0.12)';
      ctx.fill();
      ctx.strokeStyle = colour;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
      // Bronchial branches.
      ctx.save();
      ctx.strokeStyle = 'rgba(79, 224, 200, 0.55)';
      ctx.lineWidth = 1.4;
      for (let branch = 0; branch < 4; branch += 1) {
        const angle = -0.9 + branch * 0.55;
        ctx.beginPath();
        ctx.moveTo(centreX - Math.sign(centreX - cx) * 10, y - ry * 0.35);
        ctx.quadraticCurveTo(
          centreX + Math.cos(angle) * rx * 0.4,
          y - ry * 0.15,
          centreX + Math.cos(angle) * rx * 0.62,
          y + Math.sin(angle) * ry * 0.5,
        );
        ctx.stroke();
      }
      ctx.restore();
      dot(ctx, centreX - Math.sign(centreX - cx) * 10, y - ry * 0.35, 2.5, CANVAS_COLORS.technology, false);
    };
    lung(leftCentre.x, CANVAS_COLORS.biology);
    lung(rightCentre.x, CANVAS_COLORS.biology);

    if (showAirflow) {
      const direction = inhale ? 1 : -1;
      const colour = inhale ? CANVAS_COLORS.physics : CANVAS_COLORS.warn;
      const speed = 0.35 + rate / 40;
      for (let index = 0; index < 8; index += 1) {
        const raw = (t * speed + index / 8) % 1;
        const progress = direction === 1 ? raw : 1 - raw;
        const side = index % 2 === 0 ? -1 : 1;
        const start = { x: carina.x + side * 4, y: carina.y };
        const end = { x: (side < 0 ? leftCentre.x : rightCentre.x) + (side < 0 ? 8 : -8), y: lungCentreY - lungHeight * 0.18 };
        dot(
          ctx,
          start.x + (end.x - start.x) * progress,
          start.y + (end.y - start.y) * progress,
          3.4,
          colour,
          false,
        );
      }
      label(ctx, inhale ? 'O₂ in' : 'CO₂ out', cx, chest.y - 38, {
        align: 'center',
        color: inhale ? CANVAS_COLORS.physics : CANVAS_COLORS.warn,
        size: 10,
        weight: 600,
      });
    }

    // Diaphragm: a dome that flattens and lowers during inhalation.
    const diaphragmBase = chest.y + chest.height - 24;
    const domeHeight = 30 - expansion * 18;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(chest.x + 6, diaphragmBase);
    ctx.quadraticCurveTo(cx, diaphragmBase - domeHeight * 2, chest.x + chest.width - 6, diaphragmBase);
    ctx.strokeStyle = CANVAS_COLORS.engineering;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
    label(ctx, 'diaphragm', chest.x + 12, diaphragmBase - 6, { color: CANVAS_COLORS.engineering, size: 9 });

    label(ctx, inhale ? 'Inhale · diaphragm contracts' : 'Exhale · diaphragm relaxes', cx, view.height - 38, {
      align: 'center',
      color: inhale ? CANVAS_COLORS.physics : CANVAS_COLORS.muted,
      size: 10,
      weight: 600,
    });
    label(ctx, `${rate.toFixed(0)} breaths/min · ${tidal.toFixed(2)} L per breath`, view.width - 16, 20, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    drawTitle(ctx, view.width, `Minute ventilation · ${formatNumber(rate * tidal, 1)} L/min`);
    cornerNote(ctx, view.width, view.height, 'Schematic · dead space assumed 0.15 L');
  },
  metrics(params, t) {
    const rate = num(params, 'rate');
    const tidal = num(params, 'tidal');
    const cycleSeconds = 60 / Math.max(0.01, rate);
    const phase = (t % cycleSeconds) / cycleSeconds;
    const total = minuteVentilation(rate, tidal);
    const alveolar = minuteVentilation(rate, Math.max(0, tidal - DEAD_SPACE_LITRES));
    return [
      { label: 'Minute ventilation', value: formatNumber(total, 1), unit: 'L/min' },
      { label: 'Alveolar ventilation', value: formatNumber(alveolar, 1), unit: 'L/min' },
      { label: 'Breathing rate', value: formatNumber(rate, 0), unit: 'breaths/min' },
      { label: 'Tidal volume', value: formatNumber(tidal, 2), unit: 'L' },
      { label: 'Cycle length', value: formatNumber(cycleSeconds, 1), unit: 's' },
      { label: 'Phase', value: phase < 0.5 ? 'Inhale' : 'Exhale' },
    ];
  },
  explanation(params, t) {
    const rate = num(params, 'rate');
    const tidal = num(params, 'tidal');
    const cycleSeconds = 60 / Math.max(0.01, rate);
    const phase = (t % cycleSeconds) / cycleSeconds;
    const total = minuteVentilation(rate, tidal);
    const alveolar = minuteVentilation(rate, Math.max(0, tidal - DEAD_SPACE_LITRES));
    return {
      headline: phase < 0.5
        ? 'Inhale: the diaphragm drops and the chest volume rises.'
        : 'Exhale: the diaphragm relaxes and air leaves the lungs.',
      body: `At ${rate.toFixed(0)} breaths per minute with ${tidal.toFixed(2)} L per breath, total minute ventilation is ${total.toFixed(1)} L/min. Assuming 0.15 L of each breath stays in the conducting airways, alveolar ventilation is about ${alveolar.toFixed(1)} L/min. Gas exchange also depends on alveolar surface area, membrane thickness and blood flow, which this model does not simulate.`,
    };
  },
  experiment: {
    question: 'Can a fast shallow breath move the same air as a slow deep breath?',
    steps: [
      'Set 20 breaths/min and 0.5 L tidal volume; note minute ventilation.',
      'Change to 10 breaths/min and 1.0 L; note minute ventilation again.',
      'Compare the alveolar values, remembering the 0.15 L dead space.',
    ],
    expected:
      'Both give 10 L/min total ventilation, but the deep breaths give more alveolar ventilation because dead space is a smaller fraction of each breath. This is why slow, deep breathing is more efficient for gas exchange.',
  },
  assumptions: [
    'The chest, lungs and diaphragm are schematics, not scaled anatomy.',
    'Tidal volume is the volume moved per breath; the model does not include residual volume or forced expiration.',
    'A fixed 0.15 L anatomical dead space is assumed for the alveolar estimate.',
    'Gas exchange is not diffusion-modelled; only bulk airflow and ventilation are shown.',
  ],
  sources: [
    SOURCES.anatomy,
    { label: 'Respiratory system — Wikipedia', url: 'https://en.wikipedia.org/wiki/Respiratory_system' },
  ],
  table(params) {
    const tidal = num(params, 'tidal');
    return {
      caption: 'Minute ventilation at selected breathing rates with the current tidal volume',
      headers: ['Rate (breaths/min)', 'Minute ventilation (L/min)', 'Alveolar (L/min)'],
      rows: [8, 12, 16, 20, 30].map((rate) => ({
        cells: [
          String(rate),
          formatNumber(minuteVentilation(rate, tidal), 1),
          formatNumber(minuteVentilation(rate, Math.max(0, tidal - DEAD_SPACE_LITRES)), 1),
        ],
        highlight: Math.abs(rate - num(params, 'rate')) < 1,
      })),
    };
  },
};

export default spec;
