import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { photosynthesisRate } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import {
  arrow,
  cornerNote,
  dot,
  label,
  line,
  prepare,
  roundRectPath,
} from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'biology',
  aspect: 1.6,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'A leaf cross-section with light, carbon dioxide, water and oxygen moving through it',
  stageHint: 'The relative rate is set by the scarcest input after a temperature penalty. Bubbles at the stoma show oxygen leaving; carbon dioxide dots enter. This is a summary model, not a full light-dependent reaction scheme.',
  controls: [
    { kind: 'slider', id: 'light', label: 'Light intensity', min: 0, max: 100, step: 5, defaultValue: 70, unit: '%' },
    { kind: 'slider', id: 'co2', label: 'Carbon dioxide', min: 0, max: 100, step: 5, defaultValue: 50, unit: '%' },
    { kind: 'slider', id: 'water', label: 'Water supply', min: 0, max: 100, step: 5, defaultValue: 80, unit: '%' },
    { kind: 'slider', id: 'temperature', label: 'Temperature', min: 5, max: 45, step: 1, defaultValue: 25, unit: '°C' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const light = num(params, 'light');
    const co2 = num(params, 'co2');
    const water = num(params, 'water');
    const temperature = num(params, 'temperature');
    const result = photosynthesisRate(light, co2, water, temperature);
    const rate = result.rate;

    const leaf = {
      x: view.width * 0.1,
      y: 64,
      width: view.width * 0.8,
      height: Math.max(120, view.height * 0.46),
    };
    const stomaX = leaf.x + leaf.width * 0.52;

    // Leaf body.
    ctx.save();
    roundRectPath(ctx, leaf.x, leaf.y, leaf.width, leaf.height, 30);
    ctx.fillStyle = 'rgba(110, 231, 160, 0.07)';
    ctx.fill();
    ctx.strokeStyle = CANVAS_COLORS.biology;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    line(ctx, leaf.x + 6, leaf.y + 10, leaf.x + leaf.width - 6, leaf.y + 10, CANVAS_COLORS.biology, 2);
    line(ctx, leaf.x + 6, leaf.y + leaf.height - 10, leaf.x + leaf.width * 0.47, leaf.y + leaf.height - 10, CANVAS_COLORS.biology, 2);
    line(ctx, leaf.x + leaf.width * 0.57, leaf.y + leaf.height - 10, leaf.x + leaf.width - 6, leaf.y + leaf.height - 10, CANVAS_COLORS.biology, 2);
    label(ctx, 'upper epidermis', leaf.x + 10, leaf.y + 20, { color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, 'lower epidermis', leaf.x + 10, leaf.y + leaf.height - 20, { color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, 'stoma', stomaX, leaf.y + leaf.height + 14, { align: 'center', color: CANVAS_COLORS.muted, size: 8 });

    // Palisade mesophyll: tightly packed columns full of chloroplasts.
    const cellCount = 7;
    const cellGap = 6;
    const cellWidth = (leaf.width - 24 - cellGap * (cellCount - 1)) / cellCount;
    const palisadeTop = leaf.y + 18;
    const palisadeHeight = leaf.height * 0.36;
    for (let cell = 0; cell < cellCount; cell += 1) {
      const x = leaf.x + 12 + cell * (cellWidth + cellGap);
      ctx.save();
      roundRectPath(ctx, x, palisadeTop, cellWidth, palisadeHeight, 8);
      ctx.fillStyle = 'rgba(110, 231, 160, 0.12)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(110, 231, 160, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
      for (let chloroplast = 0; chloroplast < 3; chloroplast += 1) {
        const px = x + cellWidth * (0.3 + (chloroplast % 2) * 0.38);
        const py = palisadeTop + palisadeHeight * (0.24 + chloroplast * 0.26);
        ctx.beginPath();
        ctx.ellipse(px, py, Math.max(4, cellWidth * 0.2), Math.max(2.5, cellWidth * 0.1), 0.3, 0, Math.PI * 2);
        ctx.fillStyle = CANVAS_COLORS.biology;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Spongy mesophyll: loose cells with air spaces.
    const spongyTop = palisadeTop + palisadeHeight + 12;
    for (let row = 0; row < 2; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        const x = leaf.x + 24 + col * ((leaf.width - 48) / 5) + (row % 2) * 8;
        const y = spongyTop + row * (leaf.height * 0.17);
        ctx.beginPath();
        ctx.ellipse(x, y, 15, 10, 0.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(110, 231, 160, 0.1)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(110, 231, 160, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Xylem: water moving up the vein.
    const veinX = leaf.x + leaf.width * 0.2;
    line(ctx, veinX, leaf.y + leaf.height - 4, veinX, leaf.y + leaf.height * 0.58, CANVAS_COLORS.technology, 4);
    label(ctx, 'xylem', veinX + 8, leaf.y + leaf.height * 0.62, { color: CANVAS_COLORS.technology, size: 8 });
    for (let index = 0; index < 4; index += 1) {
      if (water <= 0) break;
      const progress = (t * 0.28 + index / 4) % 1;
      const y = leaf.y + leaf.height - 6 - progress * leaf.height * 0.34;
      dot(ctx, veinX + Math.sin(t + index) * 2, y, 2.4, CANVAS_COLORS.technology, false);
    }

    // Light rays from the upper left.
    const sunX = leaf.x + 20;
    const sunY = 30;
    dot(ctx, sunX, sunY, 10, CANVAS_COLORS.mathematics, false);
    const rayAlpha = 0.15 + (light / 100) * 0.85;
    ctx.save();
    ctx.globalAlpha = rayAlpha;
    for (let ray = 0; ray < 5; ray += 1) {
      const startX = sunX + 8 + ray * 4;
      const startY = sunY + 8;
      const endX = leaf.x + leaf.width * (0.18 + ray * 0.16);
      const endY = leaf.y + 8;
      arrow(ctx, startX, startY, endX, endY, CANVAS_COLORS.mathematics, 1.6, 5);
    }
    ctx.restore();
    label(ctx, 'light', sunX, sunY - 16, { align: 'center', color: CANVAS_COLORS.mathematics, size: 9, weight: 600 });

    // Gas exchange at the stoma: CO2 enters, O2 leaves.
    const bubbleCount = Math.round(rate * 6);
    for (let index = 0; index < bubbleCount; index += 1) {
      const progress = (t * (0.25 + rate * 0.7) + index / Math.max(1, bubbleCount)) % 1;
      if (co2 > 0) {
        const enterY = leaf.y + leaf.height + 30 - progress * (leaf.height * 0.18 + 30);
        dot(ctx, stomaX - 10 + Math.sin(progress * 6 + index) * 4, enterY, 2.6, CANVAS_COLORS.warn, false);
      }
      if (rate > 0.02) {
        const exitY = leaf.y + leaf.height - 2 + progress * (leaf.height * 0.22 + 26);
        dot(ctx, stomaX + 12 + Math.cos(progress * 5 + index) * 4, exitY, 2.8, CANVAS_COLORS.physics, false);
      }
    }
    label(ctx, 'CO₂ in', stomaX - 34, leaf.y + leaf.height + 38, { align: 'right', color: CANVAS_COLORS.warn, size: 8 });
    label(ctx, 'O₂ out', stomaX + 36, leaf.y + leaf.height + 38, { color: CANVAS_COLORS.physics, size: 8 });

    // Rate gauge.
    const gauge = { x: view.width * 0.58, y: view.height - 40, width: view.width * 0.34 };
    line(ctx, gauge.x, gauge.y, gauge.x + gauge.width, gauge.y, CANVAS_COLORS.hairline, 6);
    line(ctx, gauge.x, gauge.y, gauge.x + gauge.width * rate, gauge.y, CANVAS_COLORS.biology, 6);
    label(ctx, 'relative rate', gauge.x, gauge.y - 14, { color: CANVAS_COLORS.muted, size: 9 });
    label(ctx, `${formatNumber(rate * 100, 0)}%`, gauge.x + gauge.width, gauge.y - 14, {
      align: 'right',
      color: CANVAS_COLORS.ink,
      size: 10,
      weight: 600,
    });

    const limitingText = result.limiting === 'CO₂' ? 'CO₂' : result.limiting === 'temperature' ? 'temperature' : result.limiting;
    label(ctx, `limiting: ${limitingText}`, view.width - 16, 22, {
      align: 'right',
      color: CANVAS_COLORS.warn,
      size: 9,
      weight: 600,
    });
    drawTitle(ctx, view.width, `Photosynthesis · ${formatNumber(rate * 100, 0)}% of maximum`);
    cornerNote(ctx, view.width, view.height, 'Relative units · summary equation, not a reaction scheme');
  },
  metrics(params) {
    const light = num(params, 'light');
    const co2 = num(params, 'co2');
    const water = num(params, 'water');
    const temperature = num(params, 'temperature');
    const result = photosynthesisRate(light, co2, water, temperature);
    return [
      { label: 'Relative rate', value: formatNumber(result.rate * 100, 0), unit: '%' },
      { label: 'Limiting factor', value: result.limiting },
      { label: 'Temperature factor', value: formatNumber(result.tempFactor, 2) },
      { label: 'Light', value: formatNumber(light, 0), unit: '%' },
      { label: 'Carbon dioxide', value: formatNumber(co2, 0), unit: '%' },
      { label: 'Water', value: formatNumber(water, 0), unit: '%' },
    ];
  },
  explanation(params) {
    const light = num(params, 'light');
    const co2 = num(params, 'co2');
    const water = num(params, 'water');
    const temperature = num(params, 'temperature');
    const result = photosynthesisRate(light, co2, water, temperature);
    if (result.rate <= 0.01) {
      return {
        headline: 'No net photosynthesis at this temperature.',
        body: `At ${temperature.toFixed(0)} °C the temperature factor is ${result.tempFactor.toFixed(2)}. Enzymes in the light-independent reactions lose activity outside their working range, so the model produces no net output even though light, CO₂ and water are available.`,
      };
    }
    const limitingName = result.limiting === 'CO₂' ? 'carbon dioxide' : result.limiting;
    return {
      headline: `${limitingName[0].toUpperCase()}${limitingName.slice(1)} is the limiting factor.`,
      body: `Light is ${light.toFixed(0)}%, CO₂ is ${co2.toFixed(0)}% and water is ${water.toFixed(0)}%, with a temperature factor of ${result.tempFactor.toFixed(2)} at ${temperature.toFixed(0)} °C. The slowest input caps the relative rate at ${(result.rate * 100).toFixed(0)}%. Raising a non-limiting input will not increase the rate until the limiting one improves.`,
    };
  },
  experiment: {
    question: 'Raise light intensity while carbon dioxide stays low. Does the rate keep climbing?',
    steps: [
      'Set CO₂ to 30%, water to 80%, temperature to 25 °C and light to 20%.',
      'Increase light in steps to 100%.',
      'Watch the relative rate and the limiting-factor readout.',
    ],
    expected:
      'The rate rises at first but plateaus once light is no longer limiting. With CO₂ at 30%, the plateau is about 30% of maximum. Adding more light cannot fix a CO₂ shortage.',
  },
  assumptions: [
    'The rate is relative (0–100%), not a measured oxygen or glucose production rate.',
    'The scarcest of light, CO₂ and water caps the rate; temperature applies a symmetric penalty around 25 °C.',
    'Photorespiration, stomatal closure, leaf age and pigment adaptation are not modelled.',
    'The leaf drawing is a schematic cross-section, not scaled tissue.',
  ],
  sources: [
    SOURCES.biology,
    { label: 'Photosynthesis — Wikipedia', url: 'https://en.wikipedia.org/wiki/Photosynthesis' },
  ],
  table(params) {
    const co2 = num(params, 'co2');
    const water = num(params, 'water');
    const temperature = num(params, 'temperature');
    return {
      caption: 'Relative rate as light intensity rises, with the other inputs held at their current values',
      headers: ['Light (%)', 'Relative rate (%)', 'Limiting factor'],
      rows: [20, 40, 60, 80, 100].map((light) => {
        const result = photosynthesisRate(light, co2, water, temperature);
        return {
          cells: [String(light), formatNumber(result.rate * 100, 0), result.limiting],
          highlight: Math.abs(light - num(params, 'light')) < 1,
        };
      }),
    };
  },
};

export default spec;
