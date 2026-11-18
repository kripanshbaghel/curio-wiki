import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { solidMetrics } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, label, line, polyline3D, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

type Solid = 'cube' | 'sphere' | 'cylinder' | 'cone';

const spec: VisualizerSpec = {
  accent: 'mathematics',
  aspect: 1.6,
  animated: false,
  stageLabel: 'A rotatable 3D solid drawn as a projected wireframe with dimensions and measurements',
  stageHint: 'Yaw and pitch rotate the projection; zoom changes only the view. Volume and surface area use the real dimensions.',
  controls: [
    { kind: 'select', id: 'shape', label: 'Solid', defaultValue: 'cube', options: [
      { value: 'cube', label: 'Cube' },
      { value: 'sphere', label: 'Sphere' },
      { value: 'cylinder', label: 'Cylinder' },
      { value: 'cone', label: 'Cone' },
    ] },
    { kind: 'slider', id: 'size', label: 'Size / radius', min: 1, max: 10, step: 0.5, defaultValue: 5, unit: 'cm' },
    { kind: 'slider', id: 'height', label: 'Height', min: 1, max: 15, step: 0.5, defaultValue: 8, unit: 'cm', when: (p) => str(p, 'shape') === 'cylinder' || str(p, 'shape') === 'cone' },
    { kind: 'slider', id: 'yaw', label: 'Yaw', min: -180, max: 180, step: 1, defaultValue: 32, unit: '°' },
    { kind: 'slider', id: 'pitch', label: 'Pitch', min: -60, max: 60, step: 1, defaultValue: 18, unit: '°' },
    { kind: 'slider', id: 'zoom', label: 'Zoom', min: 0.6, max: 1.8, step: 0.05, defaultValue: 1 },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const shape = str(params, 'shape') as Solid;
    const size = num(params, 'size');
    const height = num(params, 'height');
    const yaw = num(params, 'yaw');
    const pitch = num(params, 'pitch');
    const zoom = num(params, 'zoom');
    const center = { x: view.width / 2, y: view.height / 2 + 6 };
    const extent = shape === 'cube' ? size : Math.max(size * 2, shape === 'sphere' ? size * 2 : height);
    const scale = (Math.min(view.width, view.height - 50) * 0.32 * zoom) / Math.max(1, extent);
    const accent = CANVAS_COLORS.mathematics;

    const circle = (radius: number, y: number, segments = 40): Array<[number, number, number]> =>
      Array.from({ length: segments }, (_, index) => {
        const angle = (index / segments) * Math.PI * 2;
        return [radius * Math.cos(angle), y, radius * Math.sin(angle)] as [number, number, number];
      });

    if (shape === 'cube') {
      const h = size / 2;
      const vertices: Array<[number, number, number]> = [
        [-h, -h, -h], [h, -h, -h], [h, -h, h], [-h, -h, h],
        [-h, h, -h], [h, h, -h], [h, h, h], [-h, h, h],
      ];
      const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
      for (const [a, b] of edges) {
        polyline3D(ctx, [vertices[a], vertices[b]], yaw, pitch, scale, center, accent, 2);
      }
    } else if (shape === 'sphere') {
      const radius = size;
      for (let latitude = -60; latitude <= 60; latitude += 30) {
        const rad = (latitude * Math.PI) / 180;
        const ringRadius = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        polyline3D(ctx, circle(ringRadius, y), yaw, pitch, scale, center, accent, 1.4, true);
      }
      for (let longitude = 0; longitude < 180; longitude += 45) {
        const rad = (longitude * Math.PI) / 180;
        const points: Array<[number, number, number]> = Array.from({ length: 36 }, (_, index) => {
          const angle = (index / 36) * Math.PI * 2;
          return [radius * Math.cos(angle) * Math.cos(rad), radius * Math.sin(angle), radius * Math.cos(angle) * Math.sin(rad)];
        });
        polyline3D(ctx, points, yaw, pitch, scale, center, accent, 1.4, true);
      }
    } else if (shape === 'cylinder') {
      const radius = size;
      const half = height / 2;
      polyline3D(ctx, circle(radius, -half), yaw, pitch, scale, center, accent, 2, true);
      polyline3D(ctx, circle(radius, half), yaw, pitch, scale, center, accent, 2, true);
      for (let angle = 0; angle < 360; angle += 90) {
        const rad = (angle * Math.PI) / 180;
        polyline3D(ctx, [[radius * Math.cos(rad), -half, radius * Math.sin(rad)], [radius * Math.cos(rad), half, radius * Math.sin(rad)]], yaw, pitch, scale, center, accent, 1.2);
      }
    } else {
      const radius = size;
      const half = height / 2;
      polyline3D(ctx, circle(radius, -half), yaw, pitch, scale, center, accent, 2, true);
      for (let angle = 0; angle < 360; angle += 45) {
        const rad = (angle * Math.PI) / 180;
        polyline3D(ctx, [[radius * Math.cos(rad), -half, radius * Math.sin(rad)], [0, half, 0]], yaw, pitch, scale, center, accent, 1);
      }
    }

    line(ctx, center.x - 22, view.height - 28, center.x + 22, view.height - 28, CANVAS_COLORS.hairline, 1);
    label(ctx, 'drag yaw and pitch to rotate', center.x, view.height - 14, { align: 'center', color: CANVAS_COLORS.muted, size: 9 });
    drawTitle(ctx, view.width, `${shape[0].toUpperCase()}${shape.slice(1)} · ${yaw.toFixed(0)}° / ${pitch.toFixed(0)}°`);
    cornerNote(ctx, view.width, view.height, 'Orthographic projection · not to scale');
  },
  metrics(params) {
    const shape = str(params, 'shape') as Solid;
    const result = solidMetrics(shape, num(params, 'size'), num(params, 'height'));
    const heightUsed = shape === 'cylinder' || shape === 'cone';
    const volumeFormula =
      shape === 'cube' ? 's³' : shape === 'sphere' ? '4/3 πr³' : shape === 'cylinder' ? 'πr²h' : '1/3 πr²h';
    return [
      { label: 'Volume', value: formatNumber(result.volume, 1), unit: 'cm³', hint: `V = ${volumeFormula}` },
      { label: 'Surface area', value: formatNumber(result.surface, 1), unit: 'cm²' },
      { label: 'Solid', value: `${shape[0].toUpperCase()}${shape.slice(1)}` },
      { label: 'Side / diameter', value: formatNumber(num(params, 'size'), 1), unit: 'cm' },
      {
        label: 'Height',
        value: heightUsed ? formatNumber(num(params, 'height'), 1) : '—',
        unit: heightUsed ? 'cm' : undefined,
        hint: heightUsed ? undefined : 'Height does not enter this solid’s formulas.',
      },
      { label: 'View', value: `${formatNumber(num(params, 'yaw'), 0)}° / ${formatNumber(num(params, 'pitch'), 0)}°` },
    ];
  },
  explanation(params) {
    const shape = str(params, 'shape') as Solid;
    const size = num(params, 'size');
    const height = num(params, 'height');
    const result = solidMetrics(shape, size, height);
    const formula = shape === 'cube' ? `V = s³ = ${size}³` : shape === 'sphere' ? `V = 4/3 πr³` : shape === 'cylinder' ? `V = πr²h` : `V = 1/3 πr²h`;
    return {
      headline: 'The projection shows shape; the formulas give measure.',
      body: `${formula} = ${result.volume.toFixed(1)} cm³. Surface area is ${result.surface.toFixed(1)} cm². Rotating the view never changes either measurement.`,
    };
  },
  experiment: {
    question: 'Double the side length of a cube. What happens to its volume?',
    steps: ['Choose the cube and set the size to 3 cm.', 'Note the volume.', 'Set the size to 6 cm and compare.'],
    expected: 'Volume becomes eight times larger, because volume scales with the cube of length.',
  },
  assumptions: [
    'The solids are ideal geometric shapes with flat or perfectly spherical surfaces.',
    'Dimensions are in centimetres and measurements use consistent units.',
    'The projection is orthographic with a small perspective cue; it is not a CAD model.',
  ],
  sources: [SOURCES.algebra, { label: 'Volume — Wikipedia', url: 'https://en.wikipedia.org/wiki/Volume' }],
};

export default spec;
