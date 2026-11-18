import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { hydraulicSystem } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, prepare, roundRectPath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'engineering',
  aspect: 1.65,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'Two connected hydraulic pistons with force, area and fluid movement',
  stageHint: 'A small force on the small piston creates pressure in the fluid. The same pressure acting on the larger area produces a larger force, but the large piston moves a shorter distance.',
  controls: [
    { kind: 'slider', id: 'force', label: 'Input force', min: 10, max: 500, step: 5, defaultValue: 100, unit: 'N' },
    { kind: 'slider', id: 'inputArea', label: 'Input piston area', min: 1, max: 50, step: 1, defaultValue: 10, unit: 'cm²' },
    { kind: 'slider', id: 'outputArea', label: 'Output piston area', min: 1, max: 100, step: 1, defaultValue: 50, unit: 'cm²' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const force = num(params, 'force');
    const inputArea = num(params, 'inputArea');
    const outputArea = num(params, 'outputArea');
    const result = hydraulicSystem(force, inputArea, outputArea);
    const accent = CANVAS_COLORS.engineering;
    const fluid = CANVAS_COLORS.technology;

    const pipeY = view.height - 76;
    const left = { x: view.width * 0.16, width: view.width * 0.2 };
    const right = { x: view.width * 0.64, width: view.width * 0.22 };
    const travel = 4 + 3 * Math.sin(t * 1.4);
    const outputTravel = travel / Math.max(0.2, result.mechanicalAdvantage);
    const leftTop = view.height * 0.34 + travel;
    const rightTop = view.height * 0.4 - outputTravel;

    // Connecting pipe.
    ctx.save();
    ctx.fillStyle = 'rgba(79, 224, 200, 0.22)';
    ctx.fillRect(left.x + left.width / 2 - 6, pipeY - 16, right.x + right.width / 2 - (left.x + left.width / 2) + 12, 32);
    ctx.restore();

    const cylinder = (x: number, width: number, top: number, colour: string) => {
      const leftX = x;
      const rightX = x + width;
      ctx.save();
      roundRectPath(ctx, leftX, top, width, pipeY + 16 - top, 10);
      ctx.fillStyle = 'rgba(79, 224, 200, 0.13)';
      ctx.fill();
      ctx.strokeStyle = CANVAS_COLORS.hairline;
      ctx.lineWidth = 2;
      ctx.stroke();
      // Fluid body.
      ctx.beginPath();
      ctx.rect(leftX + 3, top + 14, width - 6, pipeY + 12 - (top + 14));
      ctx.fillStyle = 'rgba(79, 224, 200, 0.26)';
      ctx.fill();
      ctx.restore();
      line(ctx, leftX, top, rightX, top, colour, 5);
      dot(ctx, leftX, top, 3, colour, false);
      dot(ctx, rightX, top, 3, colour, false);
    };
    cylinder(left.x, left.width, leftTop, accent);
    cylinder(right.x, right.width, rightTop, accent);

    // Input force and output load.
    const leftCentre = left.x + left.width / 2;
    const rightCentre = right.x + right.width / 2;
    arrow(ctx, leftCentre, leftTop - 64, leftCentre, leftTop - 5, CANVAS_COLORS.mathematics, 3, 9);
    label(ctx, `${formatNumber(force, 0)} N`, leftCentre, leftTop - 74, {
      align: 'center',
      color: CANVAS_COLORS.mathematics,
      size: 11,
      weight: 700,
    });
    label(ctx, 'input', leftCentre, leftTop - 88, { align: 'center', color: CANVAS_COLORS.muted, size: 8 });

    arrow(ctx, rightCentre, rightTop - 6, rightCentre, rightTop - 60, CANVAS_COLORS.biology, 3, 9);
    label(ctx, `${formatNumber(result.outputForce, 0)} N`, rightCentre, rightTop - 72, {
      align: 'center',
      color: CANVAS_COLORS.biology,
      size: 12,
      weight: 700,
    });
    label(ctx, 'output', rightCentre, rightTop - 86, { align: 'center', color: CANVAS_COLORS.muted, size: 8 });

    label(ctx, `${formatNumber(inputArea, 0)} cm²`, leftCentre, pipeY + 32, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    label(ctx, `${formatNumber(outputArea, 0)} cm²`, rightCentre, pipeY + 32, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    label(ctx, 'incompressible fluid', view.width / 2, pipeY + 32, {
      align: 'center',
      color: fluid,
      size: 8,
    });

    label(ctx, `pressure ${formatNumber(result.pressure / 1000, 1)} kPa`, view.width / 2, view.height - 26, {
      align: 'center',
      color: CANVAS_COLORS.ink,
      size: 12,
      weight: 600,
    });
    label(ctx, `MA ${formatNumber(result.mechanicalAdvantage, 1)} · distance ratio ${formatNumber(result.distanceRatio, 1)}`, view.width / 2, view.height - 10, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 8,
    });

    drawTitle(ctx, view.width, 'Hydraulic press · Pascal’s principle');
    cornerNote(ctx, view.width, view.height, 'Not to scale · ideal fluid, no losses');
  },
  metrics(params) {
    const result = hydraulicSystem(
      num(params, 'force'),
      num(params, 'inputArea'),
      num(params, 'outputArea'),
    );
    return [
      { label: 'Output force', value: formatNumber(result.outputForce, 0), unit: 'N' },
      { label: 'Pressure', value: formatNumber(result.pressure / 1000, 1), unit: 'kPa' },
      { label: 'Mechanical advantage', value: formatNumber(result.mechanicalAdvantage, 2) },
      { label: 'Distance ratio', value: formatNumber(result.distanceRatio, 2) },
      { label: 'Input force', value: formatNumber(num(params, 'force'), 0), unit: 'N' },
      { label: 'Input area', value: formatNumber(num(params, 'inputArea'), 0), unit: 'cm²' },
    ];
  },
  explanation(params) {
    const force = num(params, 'force');
    const inputArea = num(params, 'inputArea');
    const outputArea = num(params, 'outputArea');
    const result = hydraulicSystem(force, inputArea, outputArea);
    return {
      headline: `The large piston produces ${result.outputForce.toFixed(0)} N.`,
      body: `Pressure is force divided by area: ${force.toFixed(0)} N over ${inputArea.toFixed(0)} cm² gives ${(result.pressure / 1000).toFixed(1)} kPa. The same pressure acts on the ${outputArea.toFixed(0)} cm² output piston, producing ${result.outputForce.toFixed(0)} N. The force is multiplied by ${result.mechanicalAdvantage.toFixed(1)}, but the output moves only 1/${result.distanceRatio.toFixed(1)} as far. Energy is not multiplied.`,
    };
  },
  experiment: {
    question: 'Double the output piston area. What happens to force and movement?',
    steps: ['Set the output area to 50 cm² and note the output force.', 'Change it to 100 cm².', 'Compare the mechanical advantage and distance ratio.'],
    expected:
      'The output force doubles and the distance ratio doubles, so the large piston moves half as far for the same input travel. The pressure stays the same because it is set by the input force and input area.',
  },
  assumptions: [
    'The fluid is ideal and incompressible, with no friction, leakage or viscosity losses.',
    'Pistons and connecting parts are treated as massless and rigid; the system is analysed statically.',
    'The drawing is schematic and not to scale; piston widths do not encode the exact area ratio.',
    'Pascal’s principle is applied uniformly, ignoring fluid dynamics and pressure waves.',
  ],
  sources: [SOURCES.hydraulics, { label: 'Pascal’s law — Wikipedia', url: 'https://en.wikipedia.org/wiki/Pascal%27s_law' }],
  table(params) {
    const force = num(params, 'force');
    const inputArea = num(params, 'inputArea');
    return {
      caption: 'Output force for different output piston areas',
      headers: ['Output area (cm²)', 'Output force (N)', 'Mechanical advantage'],
      rows: [10, 25, 50, 75, 100].map((area) => {
        const result = hydraulicSystem(force, inputArea, area);
        return {
          cells: [
            String(area),
            formatNumber(result.outputForce, 0),
            formatNumber(result.mechanicalAdvantage, 2),
          ],
          highlight: area === Math.round(num(params, 'outputArea')),
        };
      }),
    };
  },
};

export default spec;
