/**
 * Physics, chemistry, and mathematics topic seeds.
 * Owned by content agent A — extend this array with new entries.
 * collectionSlugs available: motion-and-forces, life-and-reactions,
 * matter-and-chemistry, mathematics-toolkit, living-systems, technology-and-design.
 * Experiment slugs available (for relatedExperimentSlugs):
 * simple-pendulum-period, vinegar-volcano, leaf-starch-test, yeast-fermentation-balloon,
 * osmosis-potato-cores, density-column-liquids, growing-salt-crystals, straw-bridge-load-test,
 * solar-oven-smores, ohms-law-circuit, seeing-sound-rice-drum, rainbow-refraction-light,
 * balloon-static-electricity, magnetic-field-iron-filings, reaction-rate-temperature-baking-soda,
 * chromatography-plant-pigments, ph-indicator-red-cabbage, pulse-and-exercise-response.
 */
export const physicalMathTopicSeeds: unknown[] = [
  {
    slug: 'newtons-laws-of-motion',
    title: "Newton's laws of motion",
    subject: 'physics',
    summary:
      "Newton's three laws describe how force, mass, and motion relate: objects keep their velocity unless a net force acts, force equals mass times acceleration, and forces always come in equal and opposite pairs.",
    aliases: ['newtonian mechanics', 'laws of motion'],
    keyConcepts: [
      {
        term: 'Inertia',
        definition:
          'An object resists changes to its state of motion; it keeps its velocity unless a net force acts on it (first law).',
      },
      {
        term: 'Net force',
        definition:
          'The vector sum of all forces on an object; only a net force changes an object’s velocity.',
      },
      {
        term: 'Action and reaction',
        definition:
          'When one body exerts a force on a second, the second exerts an equal and opposite force back (third law).',
      },
    ],
    equations: [
      {
        label: "Newton's second law",
        latex: 'F = ma',
        variables: [
          { symbol: 'F', meaning: 'net force on the object (newtons)' },
          { symbol: 'm', meaning: 'mass of the object (kilograms)' },
          { symbol: 'a', meaning: 'acceleration (metres per second squared)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['simple-pendulum-period'],
    wikipediaTitle: "Newton's laws of motion",
    collectionSlugs: ['motion-and-forces'],
  },
  {
    slug: 'simple-pendulum',
    title: 'Simple pendulum',
    subject: 'physics',
    summary:
      'A simple pendulum is a mass swinging on the end of a string. Its period depends mainly on the length of the string and on gravity — not on the mass or how wide it swings (for small angles).',
    aliases: ['pendulum', 'pendulum motion'],
    keyConcepts: [
      {
        term: 'Period',
        definition: 'The time the pendulum takes to complete one full back-and-forth swing.',
      },
      {
        term: 'Amplitude',
        definition: 'The angle or distance the pendulum is released from; small angles keep the motion simple.',
      },
    ],
    equations: [
      {
        label: 'Period of a simple pendulum (small angles)',
        latex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}',
        variables: [
          { symbol: 'T', meaning: 'period of one swing (seconds)' },
          { symbol: 'L', meaning: 'length from pivot to centre of mass (metres)' },
          { symbol: 'g', meaning: 'gravitational field strength (≈ 9.8 m/s² on Earth)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['simple-pendulum-period'],
    wikipediaTitle: 'Pendulum',
    collectionSlugs: ['motion-and-forces'],
  },
  {
    slug: 'acid-base-reaction',
    title: 'Acid–base reaction',
    subject: 'chemistry',
    summary:
      'Acid–base reactions transfer protons between substances. When an acid meets a base they neutralize each other; if a carbonate is present the reaction also releases carbon dioxide gas.',
    aliases: ['neutralization', 'vinegar and baking soda'],
    keyConcepts: [
      {
        term: 'Acid',
        definition: 'A substance that donates protons (H⁺) in solution, turning indicators like litmus red.',
      },
      {
        term: 'Base',
        definition: 'A substance that accepts protons (or produces OH⁻ in water), turning indicators like litmus blue.',
      },
      {
        term: 'Neutralization',
        definition: 'The reaction of an acid with a base to form water and a salt.',
      },
    ],
    equations: [
      {
        label: 'Vinegar (acetic acid) and baking soda (sodium hydrogencarbonate)',
        latex: '\\mathrm{CH}_3\\mathrm{COOH} + \\mathrm{NaHCO}_3 \\rightarrow \\mathrm{CH}_3\\mathrm{COONa} + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2',
        variables: [
          { symbol: 'CH₃COOH', meaning: 'acetic acid (in vinegar)' },
          { symbol: 'NaHCO₃', meaning: 'sodium hydrogencarbonate (baking soda)' },
          { symbol: 'CO₂', meaning: 'carbon dioxide gas (the bubbles)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['vinegar-volcano'],
    wikipediaTitle: 'Acid–base reaction',
    collectionSlugs: ['life-and-reactions', 'matter-and-chemistry'],
  },
  {
    slug: 'energy-and-work',
    title: 'Energy and work',
    subject: 'physics',
    summary:
      'Energy is the capacity to do work, and work is energy transferred when a force moves an object. Kinetic energy depends on mass and speed, while the work done by a force depends on its strength, the distance moved, and the direction of the force.',
    aliases: ['kinetic energy', 'work done'],
    keyConcepts: [
      {
        term: 'Energy',
        definition:
          'The capacity to do work; it appears in forms such as kinetic, thermal, and chemical energy that can transform into one another.',
      },
      {
        term: 'Work',
        definition:
          'Energy transferred to or from an object by a force acting on it as it moves; measured in joules.',
      },
      {
        term: 'Kinetic energy',
        definition:
          'The energy an object has because of its motion; it grows with mass and with the square of its speed.',
      },
      {
        term: 'Joule',
        definition:
          'The SI unit of work and energy; one joule is the work done by a force of one newton over one metre.',
      },
    ],
    equations: [
      {
        label: 'Kinetic energy',
        latex: 'KE = \\frac{1}{2}mv^2',
        variables: [
          { symbol: 'KE', meaning: 'kinetic energy (joules)' },
          { symbol: 'm', meaning: 'mass of the object (kilograms)' },
          { symbol: 'v', meaning: 'speed of the object (metres per second)' },
        ],
      },
      {
        label: 'Work done by a constant force',
        latex: 'W = Fd\\cos\\theta',
        variables: [
          { symbol: 'W', meaning: 'work done (joules)' },
          { symbol: 'F', meaning: 'magnitude of the force (newtons)' },
          { symbol: 'd', meaning: 'distance the object moves (metres)' },
          { symbol: 'θ', meaning: 'angle between the force and the direction of motion' },
        ],
      },
    ],
    relatedExperimentSlugs: ['solar-oven-smores'],
    wikipediaTitle: 'Work (physics)',
    collectionSlugs: ['motion-and-forces'],
  },
  {
    slug: 'electric-circuits',
    title: 'Electric circuits',
    subject: 'physics',
    summary:
      'An electric circuit is a closed loop that lets charge flow from a source, through components, and back again. The current that flows depends on the voltage pushing the charge and the resistance opposing it.',
    aliases: ['circuits', 'electric current'],
    keyConcepts: [
      {
        term: 'Current',
        definition: 'The rate at which electric charge flows past a point in a circuit, measured in amperes.',
      },
      {
        term: 'Voltage',
        definition: 'The energy per unit charge supplied by a source such as a battery, measured in volts.',
      },
      {
        term: 'Resistance',
        definition: 'How strongly a component opposes the flow of current, measured in ohms.',
      },
      {
        term: 'Series circuit',
        definition:
          'A single loop where the same current flows through every component and the resistances add together.',
      },
    ],
    equations: [
      {
        label: "Ohm's law",
        latex: 'V = IR',
        variables: [
          { symbol: 'V', meaning: 'voltage across the component (volts)' },
          { symbol: 'I', meaning: 'current through the component (amperes)' },
          { symbol: 'R', meaning: 'resistance of the component (ohms)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['ohms-law-circuit'],
    wikipediaTitle: 'Electric circuit',
    collectionSlugs: ['technology-and-design'],
  },
  {
    slug: 'waves-and-sound',
    title: 'Waves and sound',
    subject: 'physics',
    summary:
      'Waves carry energy and information as oscillating disturbances travelling through a medium or across space. Sound waves are longitudinal pressure waves, and their speed equals frequency multiplied by wavelength.',
    aliases: ['sound waves', 'wave motion'],
    keyConcepts: [
      {
        term: 'Wavelength',
        definition:
          'The distance between two consecutive matching points on a wave, such as crest to crest; symbol λ.',
      },
      {
        term: 'Frequency',
        definition: 'The number of wave cycles that pass a point each second, measured in hertz.',
      },
      {
        term: 'Amplitude',
        definition:
          'The maximum displacement of a wave from its rest position; it sets the wave’s intensity or loudness.',
      },
      {
        term: 'Longitudinal wave',
        definition:
          'A wave in which the disturbance oscillates parallel to the direction of travel, as sound does in air.',
      },
    ],
    equations: [
      {
        label: 'Wave equation',
        latex: 'v = f\\lambda',
        variables: [
          { symbol: 'v', meaning: 'wave speed (metres per second)' },
          { symbol: 'f', meaning: 'frequency (hertz)' },
          { symbol: 'λ', meaning: 'wavelength (metres)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['seeing-sound-rice-drum'],
    wikipediaTitle: 'Wave',
    collectionSlugs: ['motion-and-forces'],
  },
  {
    slug: 'optics-light',
    title: 'Optics and light',
    subject: 'physics',
    summary:
      'Optics is the study of light: how it travels, reflects, and bends when it passes between materials. Refraction follows Snell’s law, which explains why a prism splits white light into a rainbow of colours.',
    aliases: ['light', 'refraction'],
    keyConcepts: [
      {
        term: 'Refraction',
        definition:
          'The bending of light as it passes from one material into another because its speed changes.',
      },
      {
        term: 'Refractive index',
        definition:
          'A number describing how strongly a material slows light; a higher index bends light more sharply.',
      },
      {
        term: 'Reflection',
        definition:
          'Light bouncing off a surface, with the angle of incidence equal to the angle of reflection.',
      },
      {
        term: 'Dispersion',
        definition:
          'The splitting of white light into its component colours because each colour refracts by a slightly different amount.',
      },
    ],
    equations: [
      {
        label: "Snell's law",
        latex: 'n_1\\sin\\theta_1 = n_2\\sin\\theta_2',
        variables: [
          { symbol: 'n₁', meaning: 'refractive index of the first material' },
          { symbol: 'θ₁', meaning: 'angle of incidence, measured from the normal' },
          { symbol: 'n₂', meaning: 'refractive index of the second material' },
          { symbol: 'θ₂', meaning: 'angle of refraction, measured from the normal' },
        ],
      },
    ],
    relatedExperimentSlugs: ['rainbow-refraction-light'],
    wikipediaTitle: 'Optics',
    collectionSlugs: ['motion-and-forces'],
  },
  {
    slug: 'atomic-structure',
    title: 'Atomic structure',
    subject: 'chemistry',
    summary:
      'Atoms are the building blocks of elements: tiny nuclei of protons and neutrons surrounded by clouds of electrons. The arrangement of those electrons determines an element’s chemistry and how it bonds to others.',
    aliases: ['atom model', 'subatomic particles'],
    keyConcepts: [
      {
        term: 'Nucleus',
        definition:
          'The dense centre of an atom, containing protons and neutrons; it holds almost all of the atom’s mass.',
      },
      {
        term: 'Proton',
        definition:
          'A positively charged particle in the nucleus; the number of protons (the atomic number) defines the element.',
      },
      {
        term: 'Electron',
        definition:
          'A negatively charged particle found in energy levels around the nucleus; its arrangement governs bonding.',
      },
      {
        term: 'Isotope',
        definition:
          'Atoms of the same element with different numbers of neutrons, giving different masses but identical chemistry.',
      },
    ],
    equations: [
      {
        label: 'Photon energy',
        latex: 'E = hf',
        variables: [
          { symbol: 'E', meaning: 'energy of the photon (joules)' },
          { symbol: 'h', meaning: 'Planck’s constant (≈ 6.626 × 10⁻³⁴ J s)' },
          { symbol: 'f', meaning: 'frequency of the light (hertz)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['balloon-static-electricity'],
    wikipediaTitle: 'Atom',
    collectionSlugs: ['matter-and-chemistry'],
  },
  {
    slug: 'chemical-bonding',
    title: 'Chemical bonding',
    subject: 'chemistry',
    summary:
      'Chemical bonds hold atoms together in molecules and crystals. Ionic bonds form when electrons transfer between atoms, while covalent and metallic bonds arise from shared or delocalised electrons, giving materials very different properties.',
    aliases: ['ionic bond', 'covalent bond'],
    keyConcepts: [
      {
        term: 'Ionic bond',
        definition:
          'The attraction between oppositely charged ions that forms when electrons transfer from one atom to another.',
      },
      {
        term: 'Covalent bond',
        definition:
          'A bond in which two atoms share a pair of electrons, typically between non-metals.',
      },
      {
        term: 'Metallic bond',
        definition:
          'The attraction between positive metal ions and a sea of delocalised electrons, which explains metals’ conductivity.',
      },
      {
        term: 'Valence electron',
        definition:
          'An electron in the outer shell of an atom, involved in forming chemical bonds with other atoms.',
      },
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Chemical bond',
    collectionSlugs: ['matter-and-chemistry'],
  },
  {
    slug: 'states-of-matter',
    title: 'States of matter',
    subject: 'chemistry',
    summary:
      'Matter usually exists as a solid, liquid, or gas, and heating or cooling can change one state into another. The ideal gas law links a gas’s pressure, volume, and temperature to the amount of substance present.',
    aliases: ['phases of matter', 'gas laws'],
    keyConcepts: [
      {
        term: 'Solid',
        definition:
          'A state with a fixed shape and volume; particles vibrate in place in a regular arrangement.',
      },
      {
        term: 'Liquid',
        definition:
          'A state with a fixed volume but no fixed shape; particles slide past one another and take the container’s form.',
      },
      {
        term: 'Gas',
        definition:
          'A state with no fixed shape or volume; particles move freely and expand to fill whatever container they are in.',
      },
      {
        term: 'Melting and boiling points',
        definition:
          'The temperatures at which a substance changes from solid to liquid and from liquid to gas at standard pressure.',
      },
    ],
    equations: [
      {
        label: 'Ideal gas law',
        latex: 'PV = nRT',
        variables: [
          { symbol: 'P', meaning: 'pressure of the gas (pascals)' },
          { symbol: 'V', meaning: 'volume of the gas (cubic metres)' },
          { symbol: 'n', meaning: 'amount of substance (moles)' },
          { symbol: 'R', meaning: 'ideal gas constant (≈ 8.314 J mol⁻¹ K⁻¹)' },
          { symbol: 'T', meaning: 'absolute temperature (kelvin)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['density-column-liquids', 'growing-salt-crystals'],
    wikipediaTitle: 'State of matter',
    collectionSlugs: ['matter-and-chemistry'],
  },
  {
    slug: 'quadratic-equations',
    title: 'Quadratic equations',
    subject: 'mathematics',
    summary:
      'A quadratic equation has the form ax² + bx + c = 0 with a ≠ 0. The quadratic formula solves it for any coefficients, and the discriminant b² − 4ac tells you how many real solutions to expect.',
    aliases: ['quadratic formula', 'second-degree equation'],
    keyConcepts: [
      {
        term: 'Coefficients',
        definition:
          'The numbers a, b, and c in ax² + bx + c = 0; a must not be zero or the equation is not quadratic.',
      },
      {
        term: 'Discriminant',
        definition:
          'The value b² − 4ac; positive gives two real roots, zero gives one repeated root, and negative gives no real roots.',
      },
      {
        term: 'Roots',
        definition:
          'The values of x that satisfy the equation, also called solutions or zeros of the quadratic.',
      },
      {
        term: 'Parabola',
        definition:
          'The graph of y = ax² + bx + c; it opens upwards when a > 0 and downwards when a < 0.',
      },
    ],
    equations: [
      {
        label: 'Quadratic formula',
        latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        variables: [
          { symbol: 'x', meaning: 'the solutions (roots) of the equation' },
          { symbol: 'a', meaning: 'quadratic coefficient' },
          { symbol: 'b', meaning: 'linear coefficient' },
          { symbol: 'c', meaning: 'constant term' },
        ],
      },
      {
        label: 'Discriminant',
        latex: 'b^2 - 4ac',
        variables: [
          { symbol: 'a', meaning: 'quadratic coefficient' },
          { symbol: 'b', meaning: 'linear coefficient' },
          { symbol: 'c', meaning: 'constant term' },
        ],
      },
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Quadratic equation',
    collectionSlugs: ['mathematics-toolkit'],
  },
  {
    slug: 'trigonometry-basics',
    title: 'Trigonometry basics',
    subject: 'mathematics',
    summary:
      'Trigonometry relates the angles of a right-angled triangle to the ratios of its side lengths. Sine, cosine, and tangent — and the identity sin²θ + cos²θ = 1 — underpin navigation, waves, and circular motion.',
    aliases: ['trig', 'sine and cosine'],
    keyConcepts: [
      {
        term: 'Right-angled triangle',
        definition:
          'A triangle with one 90° angle; the basic trigonometric ratios are defined for its two acute angles.',
      },
      {
        term: 'Sine',
        definition:
          'For an acute angle, the ratio of the length of the opposite side to the length of the hypotenuse.',
      },
      {
        term: 'Cosine',
        definition:
          'For an acute angle, the ratio of the length of the adjacent side to the length of the hypotenuse.',
      },
      {
        term: 'Tangent',
        definition:
          'For an acute angle, the ratio of the opposite side to the adjacent side, equal to sine divided by cosine.',
      },
    ],
    equations: [
      {
        label: 'Pythagorean identity',
        latex: '\\sin^2\\theta + \\cos^2\\theta = 1',
        variables: [
          { symbol: 'θ', meaning: 'angle in a right-angled triangle or on the unit circle' },
          { symbol: 'sin θ', meaning: 'sine of the angle' },
          { symbol: 'cos θ', meaning: 'cosine of the angle' },
        ],
      },
      {
        label: 'Sine (SOH)',
        latex: '\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}',
        variables: [
          { symbol: 'θ', meaning: 'acute angle in a right-angled triangle' },
          { symbol: 'opposite', meaning: 'side opposite the angle θ' },
          { symbol: 'hypotenuse', meaning: 'longest side, opposite the right angle' },
        ],
      },
      {
        label: 'Cosine (CAH)',
        latex: '\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}',
        variables: [
          { symbol: 'θ', meaning: 'acute angle in a right-angled triangle' },
          { symbol: 'adjacent', meaning: 'side next to the angle θ' },
          { symbol: 'hypotenuse', meaning: 'longest side, opposite the right angle' },
        ],
      },
      {
        label: 'Tangent (TOA)',
        latex: '\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}',
        variables: [
          { symbol: 'θ', meaning: 'acute angle in a right-angled triangle' },
          { symbol: 'opposite', meaning: 'side opposite the angle θ' },
          { symbol: 'adjacent', meaning: 'side next to the angle θ' },
        ],
      },
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Trigonometry',
    collectionSlugs: ['mathematics-toolkit'],
  },
  {
    slug: 'probability-basics',
    title: 'Probability basics',
    subject: 'mathematics',
    summary:
      'Probability measures how likely an event is, from 0 for impossible to 1 for certain. For equally likely outcomes it is the number of favourable outcomes divided by the total number of possible outcomes.',
    aliases: ['chance', 'likelihood'],
    keyConcepts: [
      {
        term: 'Event',
        definition: 'A possible outcome or set of outcomes from a random experiment, such as rolling a six.',
      },
      {
        term: 'Equally likely outcomes',
        definition:
          'Situations like a fair die where every outcome has the same chance of occurring.',
      },
      {
        term: 'Complementary events',
        definition: 'An event and its opposite; their probabilities always add up to 1.',
      },
      {
        term: 'Independent events',
        definition:
          'Events where one outcome does not affect the other, so their probabilities multiply together.',
      },
    ],
    equations: [
      {
        label: 'Classical probability',
        latex: 'P(A) = \\frac{\\text{favourable}}{\\text{total}}',
        variables: [
          { symbol: 'P(A)', meaning: 'probability of event A, between 0 and 1' },
          { symbol: 'favourable', meaning: 'number of outcomes where A occurs' },
          { symbol: 'total', meaning: 'number of equally likely outcomes' },
        ],
      },
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Probability',
    collectionSlugs: ['mathematics-toolkit'],
  },
];
