export interface MoleculeAtom {
  symbol: string;
  x: number;
  y: number;
  charge?: string;
}

export interface MoleculeBond {
  a: number;
  b: number;
  order: 1 | 2;
  ionic?: boolean;
}

export interface MoleculeDatum {
  id: string;
  label: string;
  type: 'Ionic' | 'Covalent';
  polar: boolean;
  electronegativityDifference: number;
  note: string;
  atoms: MoleculeAtom[];
  bonds: MoleculeBond[];
}

export const MOLECULES: MoleculeDatum[] = [
  {
    id: 'nacl',
    label: 'Sodium chloride (NaCl)',
    type: 'Ionic',
    polar: true,
    electronegativityDifference: 2.23,
    note: 'Sodium transfers one electron to chlorine, forming Na⁺ and Cl⁻ ions held by electrostatic attraction.',
    atoms: [
      { symbol: 'Na', x: 0.34, y: 0.5, charge: '+' },
      { symbol: 'Cl', x: 0.66, y: 0.5, charge: '−' },
    ],
    bonds: [{ a: 0, b: 1, order: 1, ionic: true }],
  },
  {
    id: 'h2o',
    label: 'Water (H₂O)',
    type: 'Covalent',
    polar: true,
    electronegativityDifference: 1.24,
    note: 'Oxygen shares one electron pair with each hydrogen. The bent shape and uneven sharing make water polar.',
    atoms: [
      { symbol: 'O', x: 0.5, y: 0.5 },
      { symbol: 'H', x: 0.3, y: 0.7 },
      { symbol: 'H', x: 0.7, y: 0.7 },
    ],
    bonds: [{ a: 0, b: 1, order: 1 }, { a: 0, b: 2, order: 1 }],
  },
  {
    id: 'co2',
    label: 'Carbon dioxide (CO₂)',
    type: 'Covalent',
    polar: false,
    electronegativityDifference: 0.89,
    note: 'Two polar C=O bonds point in opposite directions, so the molecule as a whole is nonpolar.',
    atoms: [
      { symbol: 'C', x: 0.5, y: 0.5 },
      { symbol: 'O', x: 0.25, y: 0.5 },
      { symbol: 'O', x: 0.75, y: 0.5 },
    ],
    bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2, order: 2 }],
  },
  {
    id: 'ch4',
    label: 'Methane (CH₄)',
    type: 'Covalent',
    polar: false,
    electronegativityDifference: 0.35,
    note: 'Carbon shares four pairs with hydrogen. The tetrahedral symmetry cancels the small bond polarity.',
    atoms: [
      { symbol: 'C', x: 0.5, y: 0.5 },
      { symbol: 'H', x: 0.5, y: 0.24 },
      { symbol: 'H', x: 0.75, y: 0.62 },
      { symbol: 'H', x: 0.5, y: 0.78 },
      { symbol: 'H', x: 0.25, y: 0.62 },
    ],
    bonds: [
      { a: 0, b: 1, order: 1 },
      { a: 0, b: 2, order: 1 },
      { a: 0, b: 3, order: 1 },
      { a: 0, b: 4, order: 1 },
    ],
  },
  {
    id: 'mgo',
    label: 'Magnesium oxide (MgO)',
    type: 'Ionic',
    polar: true,
    electronegativityDifference: 2.13,
    note: 'Magnesium transfers two electrons to oxygen. The 2+ and 2− ions form a high-melting ionic lattice.',
    atoms: [
      { symbol: 'Mg', x: 0.35, y: 0.5, charge: '2+' },
      { symbol: 'O', x: 0.65, y: 0.5, charge: '2−' },
    ],
    bonds: [{ a: 0, b: 1, order: 1, ionic: true }],
  },
  {
    id: 'hcl',
    label: 'Hydrogen chloride (HCl)',
    type: 'Covalent',
    polar: true,
    electronegativityDifference: 0.96,
    note: 'Hydrogen and chlorine share one pair, but chlorine pulls the pair closer, creating a polar bond.',
    atoms: [
      { symbol: 'H', x: 0.36, y: 0.5 },
      { symbol: 'Cl', x: 0.64, y: 0.5 },
    ],
    bonds: [{ a: 0, b: 1, order: 1 }],
  },
];

export interface ReactionSpecies {
  label: string;
  coefficient: number;
  atoms: Record<string, number>;
  color: string;
}

export interface ReactionDatum {
  id: string;
  label: string;
  equation: string;
  energy: 'Exothermic' | 'Endothermic';
  left: ReactionSpecies[];
  right: ReactionSpecies[];
  note: string;
}

export const REACTIONS: ReactionDatum[] = [
  {
    id: 'hydrogen',
    label: 'Hydrogen combustion',
    equation: '2H₂ + O₂ → 2H₂O',
    energy: 'Exothermic',
    left: [
      { label: 'H₂', coefficient: 2, atoms: { H: 2 }, color: 'mathematics' },
      { label: 'O₂', coefficient: 1, atoms: { O: 2 }, color: 'physics' },
    ],
    right: [{ label: 'H₂O', coefficient: 2, atoms: { H: 2, O: 1 }, color: 'technology' }],
    note: 'Four hydrogen atoms and two oxygen atoms appear on both sides. The coefficients give the lowest whole-number ratio.',
  },
  {
    id: 'methane',
    label: 'Methane combustion',
    equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    energy: 'Exothermic',
    left: [
      { label: 'CH₄', coefficient: 1, atoms: { C: 1, H: 4 }, color: 'chemistry' },
      { label: 'O₂', coefficient: 2, atoms: { O: 2 }, color: 'physics' },
    ],
    right: [
      { label: 'CO₂', coefficient: 1, atoms: { C: 1, O: 2 }, color: 'engineering' },
      { label: 'H₂O', coefficient: 2, atoms: { H: 2, O: 1 }, color: 'technology' },
    ],
    note: 'One carbon, four hydrogen and four oxygen atoms are conserved. Complete combustion produces CO₂ and water.',
  },
  {
    id: 'ammonia',
    label: 'Ammonia synthesis',
    equation: 'N₂ + 3H₂ ⇌ 2NH₃',
    energy: 'Exothermic',
    left: [
      { label: 'N₂', coefficient: 1, atoms: { N: 2 }, color: 'chemistry' },
      { label: 'H₂', coefficient: 3, atoms: { H: 2 }, color: 'mathematics' },
    ],
    right: [{ label: 'NH₃', coefficient: 2, atoms: { N: 1, H: 3 }, color: 'biology' }],
    note: 'The Haber process is reversible. Six hydrogen atoms and two nitrogen atoms balance on both sides.',
  },
  {
    id: 'neutralisation',
    label: 'Neutralisation',
    equation: 'HCl + NaOH → NaCl + H₂O',
    energy: 'Exothermic',
    left: [
      { label: 'HCl', coefficient: 1, atoms: { H: 1, Cl: 1 }, color: 'physics' },
      { label: 'NaOH', coefficient: 1, atoms: { Na: 1, O: 1, H: 1 }, color: 'chemistry' },
    ],
    right: [
      { label: 'NaCl', coefficient: 1, atoms: { Na: 1, Cl: 1 }, color: 'technology' },
      { label: 'H₂O', coefficient: 1, atoms: { H: 2, O: 1 }, color: 'biology' },
    ],
    note: 'H⁺ from the acid and OH⁻ from the base form water. The remaining ions stay dissolved as NaCl.',
  },
];

export interface OrganelleDatum {
  id: string;
  name: string;
  short: string;
  function: string;
  plant: boolean;
  animal: boolean;
  /** Normalised position inside the cell outline, 0–1 on both axes. */
  u: number;
  v: number;
}

/**
 * Organelles used by the cell-structure schematic. Presence flags follow the
 * standard plant/animal contrast taught at introductory level: plant cells
 * carry a wall, chloroplasts and a large central vacuole; animal cells carry
 * lysosomes and centrosomes. Both are eukaryotic, so both share the rest.
 */
export const CELL_ORGANELLES: OrganelleDatum[] = [
  {
    id: 'nucleus',
    name: 'Nucleus',
    short: 'Nucleus',
    function: 'Stores DNA and coordinates gene expression, growth and division.',
    plant: true,
    animal: true,
    u: 0.43,
    v: 0.42,
  },
  {
    id: 'mitochondrion',
    name: 'Mitochondrion',
    short: 'Mitochondria',
    function: 'Uses aerobic respiration to convert glucose and oxygen into ATP.',
    plant: true,
    animal: true,
    u: 0.29,
    v: 0.64,
  },
  {
    id: 'ribosome',
    name: 'Ribosome',
    short: 'Ribosomes',
    function: 'Assembles proteins by translating messenger RNA.',
    plant: true,
    animal: true,
    u: 0.6,
    v: 0.3,
  },
  {
    id: 'endoplasmic-reticulum',
    name: 'Endoplasmic reticulum',
    short: 'ER',
    function: 'Folds and transports proteins and lipids through the cell.',
    plant: true,
    animal: true,
    u: 0.65,
    v: 0.45,
  },
  {
    id: 'golgi',
    name: 'Golgi apparatus',
    short: 'Golgi',
    function: 'Modifies, sorts and packages proteins for transport or release.',
    plant: true,
    animal: true,
    u: 0.3,
    v: 0.32,
  },
  {
    id: 'cell-membrane',
    name: 'Cell membrane',
    short: 'Membrane',
    function: 'Controls which substances enter and leave the cell.',
    plant: true,
    animal: true,
    u: 0.5,
    v: 0.9,
  },
  {
    id: 'chloroplast',
    name: 'Chloroplast',
    short: 'Chloroplast',
    function: 'Captures light energy and carries out photosynthesis.',
    plant: true,
    animal: false,
    u: 0.72,
    v: 0.66,
  },
  {
    id: 'cell-wall',
    name: 'Cell wall',
    short: 'Cell wall',
    function: 'A rigid cellulose layer that supports and protects the cell.',
    plant: true,
    animal: false,
    u: 0.82,
    v: 0.14,
  },
  {
    id: 'central-vacuole',
    name: 'Central vacuole',
    short: 'Vacuole',
    function: 'Stores water, ions and sugars and maintains turgor pressure.',
    plant: true,
    animal: false,
    u: 0.5,
    v: 0.7,
  },
  {
    id: 'lysosome',
    name: 'Lysosome',
    short: 'Lysosome',
    function: 'Contains enzymes that digest worn cell parts and taken-in material.',
    plant: false,
    animal: true,
    u: 0.74,
    v: 0.58,
  },
  {
    id: 'centrosome',
    name: 'Centrosome',
    short: 'Centrosome',
    function: 'Organises microtubules that separate chromosomes during division.',
    plant: false,
    animal: true,
    u: 0.57,
    v: 0.68,
  },
];

export const DNA_SEQUENCE = 'ATGCGTACGTTAGCCGATCGTACGATCG';

export const DNA_BASES = ['A', 'T', 'G', 'C'] as const;

export const COMPLEMENT: Record<string, string> = { A: 'T', T: 'A', G: 'C', C: 'G' };

export const BASE_PAIR_NAMES: Record<string, string> = {
  A: 'Adenine pairs with thymine',
  T: 'Thymine pairs with adenine',
  G: 'Guanine pairs with cytosine',
  C: 'Cytosine pairs with guanine',
};
