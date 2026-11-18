import { z } from 'zod';
import { parseContent, slugSchema, subjectSchema } from './schema';
import type { SubjectKey } from './types';

export const visualizerSchema = z.object({
  slug: slugSchema,
  title: z.string().trim().min(1).max(80),
  subject: subjectSchema,
  summary: z.string().trim().min(1).max(240),
  description: z.string().trim().min(1).max(600),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  topicSlugs: z.array(slugSchema).min(1).max(6),
});

export type VisualizerMeta = z.infer<typeof visualizerSchema>;

const raw: VisualizerMeta[] = [
  /* Physics */
  {
    slug: 'gravity-and-motion',
    title: 'Gravity and motion',
    subject: 'physics',
    summary: 'Drop a mass under different gravities and watch height, velocity and force change together.',
    description:
      'A free-fall instrument. Change gravity, mass and release speed, then follow the falling body and the measurements that describe it. Mass changes weight, not acceleration.',
    level: 'beginner',
    topicSlugs: ['newtons-laws-of-motion', 'kinematic-equations', 'universal-gravitation'],
  },
  {
    slug: 'projectile-motion',
    title: 'Projectile motion',
    subject: 'physics',
    summary: 'Launch a projectile and separate the horizontal and vertical parts of its flight.',
    description:
      'Set an angle, launch speed and gravity. The trajectory, components and landing point are calculated from the same kinematic model, with no air resistance.',
    level: 'beginner',
    topicSlugs: ['projectile-motion', 'kinematic-equations'],
  },
  {
    slug: 'wave-interference',
    title: 'Wave interference',
    subject: 'physics',
    summary: 'Combine two coherent waves and see where they reinforce or cancel.',
    description:
      'A two-trace interferometer. Adjust frequency, amplitude, phase and path difference to see the resultant amplitude move between constructive and destructive.',
    level: 'intermediate',
    topicSlugs: ['waves-and-sound', 'interference-of-light', 'standing-waves'],
  },
  {
    slug: 'newtons-laws',
    title: "Newton's laws",
    subject: 'physics',
    summary: 'Apply a force to a block and watch net force, acceleration and velocity respond.',
    description:
      'A force bench for the second law. Add applied force and friction, change mass, and follow the block. The first law appears when friction cancels the push.',
    level: 'beginner',
    topicSlugs: ['newtons-laws-of-motion', 'friction', 'momentum'],
  },
  {
    slug: 'electric-circuits',
    title: 'Electric circuits',
    subject: 'physics',
    summary: 'Change voltage and resistance and follow current around a closed circuit.',
    description:
      'An Ohm’s law instrument for single, series and parallel resistors. Conventional current is animated, while voltage, resistance, current and power stay linked by calculation.',
    level: 'beginner',
    topicSlugs: ['electric-circuits', 'series-and-parallel-circuits', 'electrical-resistance-and-resistivity'],
  },

  /* Chemistry */
  {
    slug: 'atomic-structure',
    title: 'Atomic structure',
    subject: 'chemistry',
    summary: 'Build an atom from protons, neutrons and electrons and identify its element and charge.',
    description:
      'A Bohr-style atom bench. Protons set the element, neutrons change the isotope, and electrons change the charge. Shell occupancy updates as electrons are added.',
    level: 'beginner',
    topicSlugs: ['atomic-structure', 'atomic-nucleus', 'isotopes-and-mass-number'],
  },
  {
    slug: 'electron-shells',
    title: 'Electron shells',
    subject: 'chemistry',
    summary: 'Inspect ground-state electron configurations, orbital boxes and valence electrons.',
    description:
      'Choose the first twenty elements and an ion charge. Shell rings and orbital boxes show the Aufbau filling order, with unpaired electrons called out.',
    level: 'intermediate',
    topicSlugs: ['electron-configuration-and-orbitals', 'quantum-numbers-and-atomic-orbitals', 'atomic-emission-spectra'],
  },
  {
    slug: 'molecular-bonding',
    title: 'Molecular bonding',
    subject: 'chemistry',
    summary: 'Compare ionic transfer and covalent sharing across six common molecules.',
    description:
      'A Lewis-style bonding bench. Switch between ionic and covalent examples, see electron transfer or shared pairs, and read the electronegativity difference behind the bond type.',
    level: 'intermediate',
    topicSlugs: ['chemical-bonding', 'ionic-bonding', 'covalent-bonding'],
  },
  {
    slug: 'states-of-matter',
    title: 'States of matter',
    subject: 'chemistry',
    summary: 'Heat water-like particles and watch the lattice loosen into a liquid and then a gas.',
    description:
      'A particle-box model at 1 atm. Temperature sets the state and average speed; particle count and volume change the displayed density. This is a teaching model, not a phase diagram.',
    level: 'beginner',
    topicSlugs: ['states-of-matter', 'intermolecular-forces', 'latent-heat-and-phase-changes'],
  },
  {
    slug: 'chemical-reactions',
    title: 'Chemical reactions',
    subject: 'chemistry',
    summary: 'Scrub through four balanced reactions and check that every atom is conserved.',
    description:
      'A reaction-progress bench. Move from reactants to products, compare atom counts element by element, and read the balanced equation and energy change.',
    level: 'intermediate',
    topicSlugs: ['types-of-chemical-reactions', 'combustion', 'neutralisation-reactions'],
  },

  /* Biology */
  {
    slug: 'cell-structure',
    title: 'Cell structure',
    subject: 'biology',
    summary: 'Compare plant and animal cells and inspect the job of each organelle.',
    description:
      'A schematic cell bench. Switch cell type and select an organelle to highlight it and read its function. Structures absent from the chosen cell are labelled honestly.',
    level: 'beginner',
    topicSlugs: ['cell-biology', 'cell-organelles', 'prokaryotic-and-eukaryotic-cells'],
  },
  {
    slug: 'human-heart',
    title: 'Human heart',
    subject: 'biology',
    summary: 'Follow the cardiac cycle and see how rate and stroke volume set cardiac output.',
    description:
      'A four-chamber schematic that pulses through systole and diastole. Change heart rate and stroke volume; the output calculation updates with the animation.',
    level: 'intermediate',
    topicSlugs: ['human-circulatory-system', 'blood-and-blood-groups', 'homeostasis'],
  },
  {
    slug: 'respiratory-system',
    title: 'Respiratory system',
    subject: 'biology',
    summary: 'Breathe with a lung model and connect rate and tidal volume to minute ventilation.',
    description:
      'An animated chest cross-section. The diaphragm and lungs follow the breathing rate; gas-exchange dots show oxygen entering and carbon dioxide leaving.',
    level: 'beginner',
    topicSlugs: ['human-respiratory-system', 'cellular-respiration-and-atp', 'homeostasis'],
  },
  {
    slug: 'photosynthesis',
    title: 'Photosynthesis',
    subject: 'biology',
    summary: 'Find the limiting factor as light, carbon dioxide, water and temperature change.',
    description:
      'A leaf-level model of the light-dependent summary equation. Adjust four inputs and watch the output rate, bubble production and limiting factor respond.',
    level: 'intermediate',
    topicSlugs: ['photosynthesis', 'plant-tissues-and-organs', 'energy-flow-in-ecosystems'],
  },
  {
    slug: 'dna-structure',
    title: 'DNA structure',
    subject: 'biology',
    summary: 'Rotate a double helix, unzip the strands and inspect complementary base pairs.',
    description:
      'A schematic B-DNA model. Highlight a base, watch A pair with T and G pair with C, and count the hydrogen bonds that hold each pair together.',
    level: 'intermediate',
    topicSlugs: ['dna-structure-and-replication', 'genetics-basics', 'transcription'],
  },

  /* Mathematics */
  {
    slug: 'function-grapher',
    title: 'Function grapher',
    subject: 'mathematics',
    summary: 'Change a, b and c and watch a function family move on the coordinate plane.',
    description:
      'A parameter bench for five function families. The curve, a movable inspection point, the value and an approximate slope update from the same expression.',
    level: 'beginner',
    topicSlugs: ['functions-and-graphs', 'quadratic-equations', 'coordinate-geometry'],
  },
  {
    slug: 'geometry-explorer',
    title: 'Geometry explorer',
    subject: 'mathematics',
    summary: 'Resize rectangles, triangles, circles and trapezoids and compare area with perimeter.',
    description:
      'A dimension bench with live formulas. Change width, height, radius and top base; the drawing and both measurements scale together.',
    level: 'beginner',
    topicSlugs: ['area-and-perimeter', 'circles', 'triangles-and-congruence'],
  },
  {
    slug: 'trigonometry-visualizer',
    title: 'Trigonometry visualizer',
    subject: 'mathematics',
    summary: 'Move around the unit circle and read sine, cosine and tangent as coordinates.',
    description:
      'A unit-circle instrument with linked wave traces. The angle sets the point, the triangle and the signs; tangent is reported as undefined at 90° and 270°.',
    level: 'intermediate',
    topicSlugs: ['trigonometry-basics', 'unit-circle', 'radians-and-arc-length'],
  },
  {
    slug: 'probability-simulator',
    title: 'Probability simulator',
    subject: 'mathematics',
    summary: 'Run a coin, die or biased-coin experiment and compare empirical with theoretical probability.',
    description:
      'A reproducible experiment bench. Trials run on a seeded sequence, so the same settings produce the same result; increase the trial count to see the law of large numbers.',
    level: 'beginner',
    topicSlugs: ['probability-basics', 'law-of-large-numbers', 'expected-value'],
  },
  {
    slug: '3d-geometry',
    title: '3D geometry',
    subject: 'mathematics',
    summary: 'Rotate and resize cubes, spheres, cylinders and cones with live volume and surface area.',
    description:
      'A lightweight 3D projection. Yaw, pitch and zoom expose the shape; volume and surface area come from standard formulas, not from the drawing.',
    level: 'intermediate',
    topicSlugs: ['volume-and-surface-area', 'coordinate-geometry', 'vectors'],
  },

  /* Technology */
  {
    slug: 'logic-gates',
    title: 'Logic gates',
    subject: 'technology',
    summary: 'Toggle inputs across seven gates and check the output against a truth table.',
    description:
      'A Boolean bench for AND, OR, NOT, NAND, NOR, XOR and XNOR. The gate symbol, output lamp, expression and truth table all use the same logic function.',
    level: 'beginner',
    topicSlugs: ['logic-gates-and-boolean-algebra', 'computer-hardware-basics', 'transistors-and-amplifiers'],
  },
  {
    slug: 'binary-number-system',
    title: 'Binary numbers',
    subject: 'technology',
    summary: 'Flip eight bits and watch the place-value sum become decimal and hexadecimal.',
    description:
      'A bit bench with weights 128 to 1. Every on bit contributes to the total, and the step-by-step table shows exactly where the decimal value comes from.',
    level: 'beginner',
    topicSlugs: ['binary-and-hexadecimal', 'variables-and-data-types', 'computer-hardware-basics'],
  },
  {
    slug: 'cpu-architecture',
    title: 'CPU architecture',
    subject: 'technology',
    summary: 'Step through fetch, decode, execute and write back inside a simplified CPU.',
    description:
      'A four-stage processor schematic. Clock speed sets the cycle rate and the instruction decides what happens to the accumulator and memory.',
    level: 'intermediate',
    topicSlugs: ['cpu-instruction-cycle', 'computer-hardware-basics', 'operating-system-fundamentals'],
  },
  {
    slug: 'computer-memory',
    title: 'Computer memory',
    subject: 'technology',
    summary: 'Trace a memory access through registers, cache, RAM and storage.',
    description:
      'A memory-hierarchy bench. Working-set size, cache size and access pattern set a simplified hit rate and average latency; the access path animates the result.',
    level: 'intermediate',
    topicSlugs: ['memory-hierarchy', 'storage-devices', 'virtual-memory-and-paging'],
  },
  {
    slug: 'computer-networking',
    title: 'Computer networking',
    subject: 'technology',
    summary: 'Send packets across a network and compare TCP retransmission with UDP loss.',
    description:
      'A packet-switching model. Latency, loss and packet count determine the outcome; TCP resends lost packets while UDP does not. All numbers are derived from the same seeded run.',
    level: 'intermediate',
    topicSlugs: ['osi-and-tcp-ip-models', 'routing-and-packet-switching', 'tcp-and-udp'],
  },

  /* Engineering */
  {
    slug: 'bridge-structures',
    title: 'Bridge structures',
    subject: 'engineering',
    summary: 'Compare beam, truss, arch and suspension forms under a changing span and load.',
    description:
      'A structural-form bench. Reactions, bending moment, a relative deflection index and a teaching utilisation estimate respond to span, load and material.',
    level: 'intermediate',
    topicSlugs: ['warren-truss-bridge', 'suspension-bridge', 'stone-arch-bridge', 'cantilever-beam'],
  },
  {
    slug: 'gears',
    title: 'Gears',
    subject: 'engineering',
    summary: 'Mesh two gears and trade speed for torque through the gear ratio.',
    description:
      'A gear-train instrument. Teeth counts set the ratio; the driver and driven wheels rotate in opposite directions at speeds that match the calculation.',
    level: 'beginner',
    topicSlugs: ['gear-trains', 'belt-drives', 'simple-machines'],
  },
  {
    slug: 'hydraulics',
    title: 'Hydraulics',
    subject: 'engineering',
    summary: 'Apply Pascal’s principle across two pistons and multiply force with area.',
    description:
      'A two-piston hydraulic bench. The input force and piston areas set pressure, output force and mechanical advantage; the fluid and pistons move together.',
    level: 'intermediate',
    topicSlugs: ['simple-machines', 'engineering-design-process'],
  },
  {
    slug: 'simple-machines',
    title: 'Simple machines',
    subject: 'engineering',
    summary: 'Compare lever, pulley, inclined plane and wheel-and-axle mechanical advantage.',
    description:
      'A four-machine bench. Only the controls relevant to the selected machine appear; ideal mechanical advantage and effort force update together.',
    level: 'beginner',
    topicSlugs: ['simple-machines', 'gear-trains', 'belt-drives'],
  },
  {
    slug: 'structural-loads',
    title: 'Structural loads',
    subject: 'engineering',
    summary: 'Move a point load along a beam and watch reactions, moment and deflection change.',
    description:
      'A simply supported and cantilever beam bench. Reactions and bending moment use statics; deflection uses a constant-EI Euler–Bernoulli approximation.',
    level: 'advanced',
    topicSlugs: ['cantilever-beam', 'warren-truss-bridge', 'factor-of-safety', 'reinforced-concrete'],
  },
];

export const visualizers: VisualizerMeta[] = parseContent(
  z.array(visualizerSchema),
  raw,
  'visualizers',
);

export function getVisualizer(slug: string): VisualizerMeta | undefined {
  return visualizers.find((visualizer) => visualizer.slug === slug);
}

export function visualizersBySubject(subject: SubjectKey): VisualizerMeta[] {
  return visualizers.filter((visualizer) => visualizer.subject === subject);
}

export function visualizersForTopic(topicSlug: string): VisualizerMeta[] {
  return visualizers.filter((visualizer) => visualizer.topicSlugs.includes(topicSlug));
}

export function visualizerHref(meta: VisualizerMeta): string {
  return `/visualizers/${meta.subject}/${meta.slug}`;
}
