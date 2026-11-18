import type { Topic } from './types';

/**
 * Engineering topic seeds.
 * Parsed at module load by `parseContent` — invalid content fails the build.
 */
export const engineeringTopicSeeds: Topic[] = [
  {
    slug: 'simple-machines',
    title: 'Simple machines',
    subject: 'engineering',
    summary: "A simple machine is a device that changes the size or direction of a force. Levers, pulleys, inclined planes, wedges, screws, and wheels and axles all trade a smaller force applied over a longer distance for a larger force over a shorter one.",
    aliases: [
      'simple machines',
      'mechanical advantage'
    ],
    keyConcepts: [
      {
        term: 'Simple machine',
        definition: 'A device that redirects or multiplies a force with no moving parts of its own, such as a lever or an inclined plane.'
      },
      {
        term: 'Mechanical advantage',
        definition: 'How many times a machine multiplies the force you put in; ideal mechanical advantage compares the output force with the input force.'
      },
      {
        term: 'Effort',
        definition: 'The force you apply to a machine, also called the input force.'
      },
      {
        term: 'Load',
        definition: 'The force the machine works against, also called the output force.'
      },
      {
        term: 'Distance trade-off',
        definition: 'To gain force you must move the effort further than the load moves; no machine gives force and distance for free.'
      }
    ],
    equations: [
      {
        label: 'Mechanical advantage of a machine',
        latex: '\\mathrm{MA} = \\frac{F_{\\mathrm{out}}}{F_{\\mathrm{in}}}',
        variables: [
          {
            symbol: 'MA',
            meaning: 'mechanical advantage (no units)'
          },
          {
            symbol: 'F_out',
            meaning: 'output force delivered by the machine (newtons)'
          },
          {
            symbol: 'F_in',
            meaning: 'input force you apply (newtons)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [
      'straw-bridge-load-test'
    ],
    wikipediaTitle: 'Simple machine',
    collectionSlugs: [
      'technology-and-design'
    ],
    category: 'mechanical-engineering',
    relatedSlugs: [
      'newtons-laws-of-motion',
      'work-energy-theorem',
      'gear-trains'
    ],
    sources: [
      {
        label: 'Simple machine — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Simple_machine'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'internal-combustion-engine',
    title: 'Internal combustion engine',
    subject: 'engineering',
    summary: 'An internal combustion engine burns fuel inside cylinders to create pressure that moves pistons, converting chemical energy into rotational mechanical work.',
    aliases: [
      'internal combustion engine',
      'ICE engine'
    ],
    keyConcepts: [
      {
        term: 'Combustion chamber',
        definition: 'The enclosed space where fuel and air are ignited to produce high-pressure gas.'
      },
      {
        term: 'Piston',
        definition: 'A sliding component that transfers force from expanding gas to the crankshaft.'
      },
      {
        term: 'Crankshaft',
        definition: 'A rotating shaft that converts the piston\'s linear motion into rotational torque.'
      },
      {
        term: 'Four-stroke cycle',
        definition: 'Intake, compression, power, and exhaust strokes that repeat to produce continuous power.'
      }
    ],
    equations: [
      {
        label: 'Mechanical work per cycle',
        latex: 'W = P \\Delta V',
        variables: [
          {
            symbol: 'W',
            meaning: 'work done by the gas (joules)'
          },
          {
            symbol: 'P',
            meaning: 'average pressure during expansion (pascals)'
          },
          {
            symbol: 'Delta V',
            meaning: 'change in volume (cubic metres)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Internal combustion engine',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'mechanical-engineering',
    relatedSlugs: [
      'newtons-laws-of-motion',
      'work-energy-theorem',
      'electric-generator'
    ],
    sources: [
      {
        label: 'Internal combustion engine — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Internal_combustion_engine'
      },
      {
        label: 'OpenStax University Physics, Volume 1',
        url: 'https://openstax.org/books/university-physics-volume-1'
      }
    ]
  },
  {
    slug: 'gear-trains',
    title: 'Gear trains',
    subject: 'engineering',
    summary: 'Gear trains transmit motion and torque between shafts using meshing teeth, allowing speed reduction, torque multiplication, or direction change.',
    aliases: [
      'gear train',
      'gearing'
    ],
    keyConcepts: [
      {
        term: 'Gear ratio',
        definition: 'The ratio of output speed to input speed, equal to the ratio of driven gear teeth to driving gear teeth.'
      },
      {
        term: 'Idler gear',
        definition: 'A gear placed between two others to reverse direction without changing the gear ratio.'
      },
      {
        term: 'Torque multiplication',
        definition: 'Reducing speed increases torque proportionally, neglecting friction losses.'
      }
    ],
    equations: [
      {
        label: 'Gear ratio',
        latex: 'r = \\frac{N_{\\mathrm{driven}}}{N_{\\mathrm{driver}}}',
        variables: [
          {
            symbol: 'r',
            meaning: 'gear ratio (output speed / input speed)'
          },
          {
            symbol: 'N_driven',
            meaning: 'number of teeth on the driven gear'
          },
          {
            symbol: 'N_driver',
            meaning: 'number of teeth on the driving gear'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Gear train',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'mechanical-engineering',
    relatedSlugs: [
      'simple-machines',
      'electric-motor'
    ],
    sources: [
      {
        label: 'Gear train — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Gear_train'
      },
      {
        label: 'Engineering Toolbox: Gears',
        url: 'https://www.engineeringtoolbox.com/gears-d_818.html'
      }
    ]
  },
  {
    slug: 'belt-drives',
    title: 'Belt drives',
    subject: 'engineering',
    summary: 'Belt drives transfer rotational power between pulleys using a flexible belt, offering simple, low-maintenance power transmission with some slip.',
    aliases: [
      'belt drive',
      'pulley belt'
    ],
    keyConcepts: [
      {
        term: 'Pulley',
        definition: 'A grooved wheel that guides a belt and transfers torque to a shaft.'
      },
      {
        term: 'Belt tension',
        definition: 'The force in the belt that allows grip between belt and pulley without slip.'
      },
      {
        term: 'Slip',
        definition: 'Relative motion between belt and pulley that reduces power transmission efficiency.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Belt (mechanical)',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'mechanical-engineering',
    relatedSlugs: [
      'simple-machines',
      'gear-trains'
    ],
    sources: [
      {
        label: 'Belt (mechanical) — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Belt_(mechanical)'
      },
      {
        label: 'Engineering Toolbox: Belt Transmissions',
        url: 'https://www.engineeringtoolbox.com/belt-transmissions-d_817.html'
      }
    ]
  },
  {
    slug: 'ball-bearings',
    title: 'Ball bearings',
    subject: 'engineering',
    summary: 'Ball bearings reduce friction between rotating and stationary parts by replacing sliding contact with rolling elements.',
    aliases: [
      'ball bearing',
      'rolling bearing'
    ],
    keyConcepts: [
      {
        term: 'Rolling element',
        definition: 'A ball or roller that rolls between inner and outer races instead of sliding.'
      },
      {
        term: 'Race',
        definition: 'The inner or outer ring against which rolling elements move.'
      },
      {
        term: 'Lubrication',
        definition: 'A grease or oil film that prevents metal-to-metal contact and wear.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Bearing (mechanical)',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'mechanical-engineering',
    relatedSlugs: [
      'gear-trains',
      'steam-turbine'
    ],
    sources: [
      {
        label: 'Bearing (mechanical) — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Bearing_(mechanical)'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'steam-turbine',
    title: 'Steam turbine',
    subject: 'engineering',
    summary: 'A steam turbine extracts energy from high-pressure steam to rotate a shaft, used in power plants and marine propulsion.',
    aliases: [
      'steam turbine',
      'turbine'
    ],
    keyConcepts: [
      {
        term: 'Impulse',
        definition: 'Steam striking turbine blades changes momentum, producing a force on the rotor.'
      },
      {
        term: 'Stage',
        definition: 'One set of stationary nozzles and moving blades that extracts part of the steam\'s energy.'
      },
      {
        term: 'Condenser',
        definition: 'A heat exchanger that condenses exhaust steam back to water, maintaining low pressure.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [
      'water-wheel-power'
    ],
    wikipediaTitle: 'Steam turbine',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'mechanical-engineering',
    relatedSlugs: [
      'electric-generator',
      'internal-combustion-engine'
    ],
    sources: [
      {
        label: 'Steam turbine — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Steam_turbine'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'electric-power-grid',
    title: 'Electric power grid',
    subject: 'engineering',
    summary: 'The electric power grid transmits generated electricity over transmission lines at high voltage, then steps it down for distribution to consumers.',
    aliases: [
      'power grid',
      'electrical grid'
    ],
    keyConcepts: [
      {
        term: 'Transmission',
        definition: 'High-voltage, low-current transport of electrical power over long distances to reduce losses.'
      },
      {
        term: 'Substation',
        definition: 'A facility containing transformers that step voltage up for transmission or down for distribution.'
      },
      {
        term: 'Load',
        definition: 'The total electrical power drawn by consumers connected to the grid at any moment.'
      }
    ],
    equations: [
      {
        label: 'Transmission power loss',
        latex: 'P_{\\mathrm{loss}} = I^2 R',
        variables: [
          {
            symbol: 'P_loss',
            meaning: 'power lost as heat in transmission lines (watts)'
          },
          {
            symbol: 'I',
            meaning: 'current in the line (amperes)'
          },
          {
            symbol: 'R',
            meaning: 'line resistance (ohms)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Electric power distribution',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'electrical-engineering',
    relatedSlugs: [
      'electric-generator',
      'electrical-transformer'
    ],
    sources: [
      {
        label: 'Electric power distribution — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Electric_power_distribution'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'electric-motor',
    title: 'Electric motor',
    subject: 'engineering',
    summary: 'An electric motor converts electrical energy into mechanical motion using magnetic fields acting on current-carrying conductors.',
    aliases: [
      'electric motor',
      'DC motor',
      'AC motor'
    ],
    keyConcepts: [
      {
        term: 'Stator',
        definition: 'The stationary part of a motor that creates a fixed or rotating magnetic field.'
      },
      {
        term: 'Rotor',
        definition: 'The rotating part of a motor that carries current and experiences torque from the field.'
      },
      {
        term: 'Torque',
        definition: 'The rotational force produced by the interaction of current and magnetic field.'
      }
    ],
    equations: [
      {
        label: 'Force on current-carrying wire',
        latex: 'F = I L B \\sin(\\theta)',
        variables: [
          {
            symbol: 'F',
            meaning: 'magnetic force on the wire (newtons)'
          },
          {
            symbol: 'I',
            meaning: 'current through the wire (amperes)'
          },
          {
            symbol: 'L',
            meaning: 'length of wire in the field (metres)'
          },
          {
            symbol: 'B',
            meaning: 'magnetic field strength (tesla)'
          },
          {
            symbol: 'theta',
            meaning: 'angle between current direction and magnetic field'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [
      'simple-dc-motor'
    ],
    wikipediaTitle: 'Electric motor',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'electrical-engineering',
    relatedSlugs: [
      'electric-circuits',
      'electric-generator'
    ],
    sources: [
      {
        label: 'Electric motor — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Electric_motor'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'electrical-transformer',
    title: 'Electrical transformer',
    subject: 'engineering',
    summary: 'A transformer changes AC voltage levels using electromagnetic induction between primary and secondary windings on a shared core.',
    aliases: [
      'transformer',
      'step-up transformer',
      'step-down transformer'
    ],
    keyConcepts: [
      {
        term: 'Primary winding',
        definition: 'The input coil connected to the source voltage.'
      },
      {
        term: 'Secondary winding',
        definition: 'The output coil that delivers the transformed voltage to the load.'
      },
      {
        term: 'Turns ratio',
        definition: 'The ratio of secondary turns to primary turns, equal to the voltage ratio.'
      }
    ],
    equations: [
      {
        label: 'Transformer voltage ratio',
        latex: '\\frac{V_s}{V_p} = \\frac{N_s}{N_p}',
        variables: [
          {
            symbol: 'V_s',
            meaning: 'secondary voltage (volts)'
          },
          {
            symbol: 'V_p',
            meaning: 'primary voltage (volts)'
          },
          {
            symbol: 'N_s',
            meaning: 'number of secondary turns'
          },
          {
            symbol: 'N_p',
            meaning: 'number of primary turns'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Transformer',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'electrical-engineering',
    relatedSlugs: [
      'electric-power-grid',
      'electric-circuits'
    ],
    sources: [
      {
        label: 'Transformer — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Transformer'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'electrolytic-capacitor',
    title: 'Electrolytic capacitor',
    subject: 'engineering',
    summary: 'An electrolytic capacitor stores electrical charge using an electrolyte and oxide dielectric, offering high capacitance in a small volume.',
    aliases: [
      'electrolytic capacitor',
      'capacitor'
    ],
    keyConcepts: [
      {
        term: 'Capacitance',
        definition: 'The amount of charge stored per volt of potential difference, measured in farads.'
      },
      {
        term: 'Dielectric',
        definition: 'An insulating material between capacitor plates that increases capacitance.'
      },
      {
        term: 'Polarity',
        definition: 'Electrolytic capacitors must be connected with correct positive and negative orientation.'
      }
    ],
    equations: [
      {
        label: 'Capacitor charge',
        latex: 'Q = C V',
        variables: [
          {
            symbol: 'Q',
            meaning: 'stored charge (coulombs)'
          },
          {
            symbol: 'C',
            meaning: 'capacitance (farads)'
          },
          {
            symbol: 'V',
            meaning: 'voltage across the capacitor (volts)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Capacitor',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'electrical-engineering',
    relatedSlugs: [
      'electric-circuits',
      'resistor-voltage-divider'
    ],
    sources: [
      {
        label: 'Capacitor — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Capacitor'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'rectifier-diode',
    title: 'Rectifier diode',
    subject: 'engineering',
    summary: 'A rectifier diode allows current to flow in one direction only, converting AC to DC in power supplies.',
    aliases: [
      'rectifier diode',
      'power diode'
    ],
    keyConcepts: [
      {
        term: 'Forward bias',
        definition: 'When the anode is positive relative to the cathode, allowing current to flow.'
      },
      {
        term: 'Reverse bias',
        definition: 'When the cathode is positive relative to the anode, blocking current flow.'
      },
      {
        term: 'Rectification',
        definition: 'The process of converting alternating current into direct current using diodes.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [
      'breadboard-series-circuit'
    ],
    wikipediaTitle: 'Diode',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'electrical-engineering',
    relatedSlugs: [
      'electrolytic-capacitor',
      'series-dc-circuit'
    ],
    sources: [
      {
        label: 'Diode — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Diode'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'electric-generator',
    title: 'Electric generator',
    subject: 'engineering',
    summary: 'An electric generator converts mechanical rotation into electrical energy using electromagnetic induction in a stator and rotor.',
    aliases: [
      'electric generator',
      'generator'
    ],
    keyConcepts: [
      {
        term: 'Electromagnetic induction',
        definition: 'A changing magnetic field induces an electromotive force in a conductor.'
      },
      {
        term: 'Armature',
        definition: 'The winding in which power is generated by motion through a magnetic field.'
      },
      {
        term: 'EMF',
        definition: 'Electromotive force, the voltage generated by electromagnetic induction.'
      }
    ],
    equations: [
      {
        label: 'Induced EMF (Faraday\'s law)',
        latex: '\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}',
        variables: [
          {
            symbol: 'mathcal{E}',
            meaning: 'induced electromotive force (volts)'
          },
          {
            symbol: 'N',
            meaning: 'number of turns in the winding'
          },
          {
            symbol: 'Phi_B',
            meaning: 'magnetic flux through the loop (webers)'
          },
          {
            symbol: 't',
            meaning: 'time (seconds)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Electric generator',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'electrical-engineering',
    relatedSlugs: [
      'electric-motor',
      'electric-power-grid'
    ],
    sources: [
      {
        label: 'Electric generator — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Electric_generator'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'reinforced-concrete',
    title: 'Reinforced concrete',
    subject: 'engineering',
    summary: 'Reinforced concrete combines concrete\'s compressive strength with steel reinforcement\'s tensile strength to create durable structural elements.',
    aliases: [
      'reinforced concrete',
      'rebar concrete'
    ],
    keyConcepts: [
      {
        term: 'Compression',
        definition: 'A squeezing force that concrete resists well.'
      },
      {
        term: 'Tension',
        definition: 'A pulling force that concrete resists poorly but steel handles well.'
      },
      {
        term: 'Rebar',
        definition: 'Steel reinforcing bars embedded in concrete to carry tensile forces.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [
      'popsicle-stick-truss-bridge'
    ],
    wikipediaTitle: 'Reinforced concrete',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'civil-engineering',
    relatedSlugs: [
      'static-equilibrium',
      'cantilever-beam'
    ],
    sources: [
      {
        label: 'Reinforced concrete — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Reinforced_concrete'
      },
      {
        label: 'Engineering Toolbox: Concrete',
        url: 'https://www.engineeringtoolbox.com/concrete-properties-d_1125.html'
      }
    ]
  },
  {
    slug: 'suspension-bridge',
    title: 'Suspension bridge',
    subject: 'engineering',
    summary: 'A suspension bridge carries its deck from cables anchored at each end and draped over towers, enabling long spans over water or valleys.',
    aliases: [
      'suspension bridge',
      'suspended bridge'
    ],
    keyConcepts: [
      {
        term: 'Main cable',
        definition: 'The large curved cable that carries the deck\'s weight to the anchorages.'
      },
      {
        term: 'Tower',
        definition: 'The vertical support that holds the main cable up at the centre of the span.'
      },
      {
        term: 'Anchorage',
        definition: 'A massive structure at each end that secures the cable ends and resists tension.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [
      'popsicle-stick-truss-bridge'
    ],
    wikipediaTitle: 'Suspension bridge',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'civil-engineering',
    relatedSlugs: [
      'warren-truss-bridge',
      'stone-arch-bridge'
    ],
    sources: [
      {
        label: 'Suspension bridge — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Suspension_bridge'
      },
      {
        label: 'Engineering Toolbox: Mechanics',
        url: 'https://www.engineeringtoolbox.com/mechanics-index-d_491.html'
      }
    ]
  },
  {
    slug: 'gravity-dam',
    title: 'Gravity dam',
    subject: 'engineering',
    summary: 'A gravity dam resists water pressure primarily through its own weight, holding back reservoirs for water supply, irrigation, and power.',
    aliases: [
      'gravity dam',
      'dam'
    ],
    keyConcepts: [
      {
        term: 'Hydrostatic pressure',
        definition: 'The pressure exerted by water at depth, increasing linearly with depth below the surface.'
      },
      {
        term: 'Overturning',
        definition: 'The tendency for water pressure to tip a dam downstream, resisted by the dam\'s weight.'
      },
      {
        term: 'Foundation',
        definition: 'The rock or soil beneath the dam that supports its weight and resists sliding.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Dam',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'civil-engineering',
    relatedSlugs: [
      'culvert-drainage',
      'cantilever-beam'
    ],
    sources: [
      {
        label: 'Dam — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dam'
      },
      {
        label: 'Engineering Toolbox: Fluid Mechanics',
        url: 'https://www.engineeringtoolbox.com/fluid-mechanics-d_492.html'
      }
    ]
  },
  {
    slug: 'asphalt-pavement',
    title: 'Asphalt pavement',
    subject: 'engineering',
    summary: 'Asphalt pavement is a flexible road surface made of aggregate bound with bitumen, designed to distribute vehicle loads to the sub-base.',
    aliases: [
      'asphalt pavement',
      'asphalt road'
    ],
    keyConcepts: [
      {
        term: 'Aggregate',
        definition: 'Crushed stone, gravel, or sand that forms the skeleton of asphalt pavement.'
      },
      {
        term: 'Bitumen',
        definition: 'A sticky black binder that holds aggregate together in asphalt.'
      },
      {
        term: 'Sub-base',
        definition: 'The layer of soil or crushed rock beneath the pavement that supports the load.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Asphalt concrete',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'civil-engineering',
    relatedSlugs: [
      'culvert-drainage',
      'spread-foundation'
    ],
    sources: [
      {
        label: 'Asphalt concrete — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Asphalt_concrete'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'spread-foundation',
    title: 'Spread foundation',
    subject: 'engineering',
    summary: 'A spread foundation distributes a building\'s load over a wide area of soil, reducing pressure to safe bearing capacity levels.',
    aliases: [
      'spread foundation',
      'footing'
    ],
    keyConcepts: [
      {
        term: 'Bearing capacity',
        definition: 'The maximum pressure soil can support without shear failure or excessive settlement.'
      },
      {
        term: 'Settlement',
        definition: 'The downward movement of a foundation under load as soil compresses.'
      },
      {
        term: 'Footing',
        definition: 'A widened base that spreads a column or wall load over more soil area.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Foundation (engineering)',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'civil-engineering',
    relatedSlugs: [
      'asphalt-pavement',
      'gravity-retaining-wall'
    ],
    sources: [
      {
        label: 'Foundation (engineering) — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Foundation_(engineering)'
      },
      {
        label: 'Engineering Toolbox: Soil',
        url: 'https://www.engineeringtoolbox.com/soil-index-d_507.html'
      }
    ]
  },
  {
    slug: 'culvert-drainage',
    title: 'Culvert drainage',
    subject: 'engineering',
    summary: 'A culvert is a tunnel or pipe carrying water under a road or embankment, maintaining natural drainage patterns.',
    aliases: [
      'culvert',
      'drainage culvert'
    ],
    keyConcepts: [
      {
        term: 'Headwater',
        definition: 'The upstream water level relative to the culvert inlet.'
      },
      {
        term: 'Culvert capacity',
        definition: 'The maximum flow rate a culvert can pass without excessive upstream backup.'
      },
      {
        term: 'Scour',
        definition: 'Erosion of soil around a culvert outlet caused by fast-moving water.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Culvert',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'civil-engineering',
    relatedSlugs: [
      'gravity-dam',
      'asphalt-pavement'
    ],
    sources: [
      {
        label: 'Culvert — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Culvert'
      },
      {
        label: 'Engineering Toolbox: Fluid Mechanics',
        url: 'https://www.engineeringtoolbox.com/fluid-mechanics-d_492.html'
      }
    ]
  },
  {
    slug: 'fractional-distillation',
    title: 'Fractional distillation',
    subject: 'engineering',
    summary: 'Fractional distillation separates liquid mixtures by boiling point using a fractioning column where vapors condense and re-vaporize.',
    aliases: [
      'fractional distillation',
      'distillation column'
    ],
    keyConcepts: [
      {
        term: 'Fractioning column',
        definition: 'A vertical column containing trays or packing that allows repeated condensation and vaporization.'
      },
      {
        term: 'Boiling point',
        definition: 'The temperature at which a liquid\'s vapour pressure equals the surrounding pressure.'
      },
      {
        term: 'Reflux',
        definition: 'Condensed vapor returned to the column to improve separation.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Distillation',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'chemical-engineering',
    relatedSlugs: [
      'rotary-evaporator',
      'shell-and-tube-heat-exchanger'
    ],
    sources: [
      {
        label: 'Distillation — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Distillation'
      },
      {
        label: 'Engineering Toolbox: Thermodynamics',
        url: 'https://www.engineeringtoolbox.com/thermodynamics-index-d_490.html'
      }
    ]
  },
  {
    slug: 'shell-and-tube-heat-exchanger',
    title: 'Shell and tube heat exchanger',
    subject: 'engineering',
    summary: 'A shell and tube heat exchanger transfers heat between two fluids flowing through tubes inside a pressurized shell.',
    aliases: [
      'heat exchanger',
      'shell and tube exchanger'
    ],
    keyConcepts: [
      {
        term: 'Tube side',
        definition: 'The fluid flowing inside the tubes of the exchanger.'
      },
      {
        term: 'Shell side',
        definition: 'The fluid flowing outside the tubes but inside the shell.'
      },
      {
        term: 'Heat transfer coefficient',
        definition: 'A measure of how easily heat moves between the two fluids and the wall.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Heat exchanger',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'chemical-engineering',
    relatedSlugs: [
      'fractional-distillation',
      'continuous-stirred-tank-reactor'
    ],
    sources: [
      {
        label: 'Heat exchanger — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Heat_exchanger'
      },
      {
        label: 'Engineering Toolbox: Heat Transfer',
        url: 'https://www.engineeringtoolbox.com/heat-transfer-d_489.html'
      }
    ]
  },
  {
    slug: 'continuous-stirred-tank-reactor',
    title: 'Continuous stirred tank reactor',
    subject: 'engineering',
    summary: 'A CSTR continuously feeds reactants into a well-mixed vessel while removing products, maintaining steady-state reaction conditions.',
    aliases: [
      'CSTR',
      'stirred tank reactor'
    ],
    keyConcepts: [
      {
        term: 'Residence time',
        definition: 'The average time a fluid element spends inside the reactor vessel.'
      },
      {
        term: 'Steady state',
        definition: 'Conditions where concentrations and temperature remain constant over time.'
      },
      {
        term: 'Impeller',
        definition: 'A rotating mixer that keeps reactor contents uniform in composition and temperature.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Chemical reactor',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'chemical-engineering',
    relatedSlugs: [
      'shell-and-tube-heat-exchanger',
      'vacuum-filtration'
    ],
    sources: [
      {
        label: 'Chemical reactor — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Chemical_reactor'
      },
      {
        label: 'Engineering Toolbox: Thermodynamics',
        url: 'https://www.engineeringtoolbox.com/thermodynamics-index-d_490.html'
      }
    ]
  },
  {
    slug: 'vacuum-filtration',
    title: 'Vacuum filtration',
    subject: 'engineering',
    summary: 'Vacuum filtration pulls liquid through a filter medium using reduced pressure, separating solids from liquids faster than gravity filtration.',
    aliases: [
      'vacuum filtration',
      'suction filtration'
    ],
    keyConcepts: [
      {
        term: 'Filter medium',
        definition: 'A porous barrier such as filter paper that retains solids while passing liquid.'
      },
      {
        term: 'Filtrate',
        definition: 'The liquid that passes through the filter medium.'
      },
      {
        term: 'Cake',
        definition: 'The layer of solids retained on the filter medium.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Filtration',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'chemical-engineering',
    relatedSlugs: [
      'continuous-stirred-tank-reactor',
      'rotary-evaporator'
    ],
    sources: [
      {
        label: 'Filtration — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Filtration'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'rotary-evaporator',
    title: 'Rotary evaporator',
    subject: 'engineering',
    summary: 'A rotary evaporator gently removes volatile solvents from samples by rotating a flask under reduced pressure and controlled heat.',
    aliases: [
      'rotary evaporator',
      'rotovap'
    ],
    keyConcepts: [
      {
        term: 'Reduced pressure',
        definition: 'Lowering pressure lowers a solvent\'s boiling point, allowing gentle evaporation.'
      },
      {
        term: 'Rotation',
        definition: 'Spreading the sample as a thin film inside the flask increases evaporation area.'
      },
      {
        term: 'Condenser',
        definition: 'A cooled coil that condenses evaporated solvent for collection.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Rotary evaporator',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'chemical-engineering',
    relatedSlugs: [
      'vacuum-filtration',
      'fractional-distillation'
    ],
    sources: [
      {
        label: 'Rotary evaporator — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Rotary_evaporator'
      },
      {
        label: 'Engineering Toolbox: Thermodynamics',
        url: 'https://www.engineeringtoolbox.com/thermodynamics-index-d_490.html'
      }
    ]
  },
  {
    slug: 'three-way-catalytic-converter',
    title: 'Three-way catalytic converter',
    subject: 'engineering',
    summary: 'A three-way catalytic converter reduces carbon monoxide, hydrocarbons, and nitrogen oxides from engine exhaust using precious-metal catalysts.',
    aliases: [
      'catalytic converter',
      'three-way converter'
    ],
    keyConcepts: [
      {
        term: 'Catalyst',
        definition: 'A material such as platinum, palladium, or rhodium that speeds reactions without being consumed.'
      },
      {
        term: 'Oxidation',
        definition: 'Converting carbon monoxide and hydrocarbons into carbon dioxide and water.'
      },
      {
        term: 'Reduction',
        definition: 'Converting nitrogen oxides into nitrogen and oxygen.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Catalytic converter',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'chemical-engineering',
    relatedSlugs: [
      'internal-combustion-engine',
      'electric-motor'
    ],
    sources: [
      {
        label: 'Catalytic converter — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Catalytic_converter'
      },
      {
        label: 'Engineering Toolbox: Combustion',
        url: 'https://www.engineeringtoolbox.com/combustion-index-d_497.html'
      }
    ]
  },
  {
    slug: 'airfoil-wing',
    title: 'Airfoil wing',
    subject: 'engineering',
    summary: 'An airfoil wing generates lift by shaping airflow so pressure above the wing is lower than below, creating an upward force.',
    aliases: [
      'airfoil',
      'wing',
      'aerofoil'
    ],
    keyConcepts: [
      {
        term: 'Lift',
        definition: 'The aerodynamic force perpendicular to the direction of motion that holds an aircraft up.'
      },
      {
        term: 'Angle of attack',
        definition: 'The angle between the wing\'s chord line and the oncoming airflow.'
      },
      {
        term: 'Pressure difference',
        definition: 'Lower pressure on the upper surface and higher pressure below produce lift.'
      }
    ],
    equations: [
      {
        label: 'Lift equation',
        latex: 'L = \\frac{1}{2} \\rho v^2 S C_L',
        variables: [
          {
            symbol: 'L',
            meaning: 'lift force (newtons)'
          },
          {
            symbol: 'rho',
            meaning: 'air density (kilograms per cubic metre)'
          },
          {
            symbol: 'v',
            meaning: 'airspeed (metres per second)'
          },
          {
            symbol: 'S',
            meaning: 'wing area (square metres)'
          },
          {
            symbol: 'C_L',
            meaning: 'coefficient of lift (no units)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [
      'paper-glider-lift'
    ],
    wikipediaTitle: 'Airfoil',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'aerospace-engineering',
    relatedSlugs: [
      'turbofan-engine',
      'subsonic-wind-tunnel'
    ],
    sources: [
      {
        label: 'Airfoil — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Airfoil'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'turbofan-engine',
    title: 'Turbofan engine',
    subject: 'engineering',
    summary: 'A turbofan engine produces thrust by accelerating a large mass of air through a fan surrounding a jet core, improving efficiency.',
    aliases: [
      'turbofan',
      'jet engine'
    ],
    keyConcepts: [
      {
        term: 'Bypass ratio',
        definition: 'The ratio of air flowing around the core to air flowing through the core.'
      },
      {
        term: 'Thrust',
        definition: 'The forward force produced by accelerating air rearward.'
      },
      {
        term: 'Turbine',
        definition: 'A rotor driven by hot exhaust gases that powers the compressor and fan.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Turbofan',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'aerospace-engineering',
    relatedSlugs: [
      'airfoil-wing',
      'solid-rocket-motor'
    ],
    sources: [
      {
        label: 'Turbofan — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Turbofan'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'solid-rocket-motor',
    title: 'Solid rocket motor',
    subject: 'engineering',
    summary: 'A solid rocket motor burns pre-loaded solid propellant to produce thrust, with no way to throttle or restart once ignited.',
    aliases: [
      'solid rocket',
      'solid propellant rocket'
    ],
    keyConcepts: [
      {
        term: 'Propellant grain',
        definition: 'The solid fuel and oxidizer mixture cast into the motor casing.'
      },
      {
        term: 'Nozzle',
        definition: 'A shaped exhaust opening that accelerates gases to produce thrust.'
      },
      {
        term: 'Burn rate',
        definition: 'The speed at which the propellant surface recedes during burning.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Solid-fuel rocket',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'aerospace-engineering',
    relatedSlugs: [
      'turbofan-engine',
      'helicopter-main-rotor'
    ],
    sources: [
      {
        label: 'Solid-fuel rocket — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Solid-fuel_rocket'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'helicopter-main-rotor',
    title: 'Helicopter main rotor',
    subject: 'engineering',
    summary: 'A helicopter main rotor generates lift and thrust through rotating blades, with cyclic and collective pitch controlling direction and altitude.',
    aliases: [
      'helicopter rotor',
      'main rotor'
    ],
    keyConcepts: [
      {
        term: 'Collective pitch',
        definition: 'Changing the pitch of all blades together to increase or decrease total lift.'
      },
      {
        term: 'Cyclic pitch',
        definition: 'Changing blade pitch as they rotate to tilt the rotor disk and move the helicopter.'
      },
      {
        term: 'Autorotation',
        definition: 'Using upward airflow to keep rotors spinning after engine failure for a controlled descent.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Helicopter rotor',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'aerospace-engineering',
    relatedSlugs: [
      'airfoil-wing',
      'solid-rocket-motor'
    ],
    sources: [
      {
        label: 'Helicopter rotor — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Helicopter_rotor'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'low-earth-orbit',
    title: 'Low Earth orbit',
    subject: 'engineering',
    summary: 'Low Earth orbit is the region of space up to about 2,000 km altitude where satellites circle Earth every 90 minutes or so.',
    aliases: [
      'LEO',
      'low earth orbit'
    ],
    keyConcepts: [
      {
        term: 'Orbital velocity',
        definition: 'The speed needed to stay in orbit, about 7.8 km/s for low Earth orbit.'
      },
      {
        term: 'Orbital decay',
        definition: 'Gradual loss of altitude due to atmospheric drag at the lowest LEO altitudes.'
      },
      {
        term: 'Period',
        definition: 'The time for one complete orbit, roughly 90 minutes in LEO.'
      }
    ],
    equations: [
      {
        label: 'Orbital velocity (circular orbit)',
        latex: 'v = \\sqrt{\\frac{GM}{r}}',
        variables: [
          {
            symbol: 'v',
            meaning: 'orbital speed (metres per second)'
          },
          {
            symbol: 'G',
            meaning: 'gravitational constant'
          },
          {
            symbol: 'M',
            meaning: 'mass of Earth (kilograms)'
          },
          {
            symbol: 'r',
            meaning: 'orbital radius from Earth\'s centre (metres)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Low Earth orbit',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'aerospace-engineering',
    relatedSlugs: [
      'turbofan-engine',
      'subsonic-wind-tunnel'
    ],
    sources: [
      {
        label: 'Low Earth orbit — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Low_Earth_orbit'
      },
      {
        label: 'OpenStax University Physics, Volume 1',
        url: 'https://openstax.org/books/university-physics-volume-1'
      }
    ]
  },
  {
    slug: 'subsonic-wind-tunnel',
    title: 'Subsonic wind tunnel',
    subject: 'engineering',
    summary: 'A subsonic wind tunnel tests aircraft models by blowing air over them at controlled speeds to measure lift, drag, and stability.',
    aliases: [
      'wind tunnel',
      'subsonic tunnel'
    ],
    keyConcepts: [
      {
        term: 'Test section',
        definition: 'The area where the model is placed and air flows over it at controlled speed.'
      },
      {
        term: 'Drag',
        definition: 'The aerodynamic force opposing motion through the air.'
      },
      {
        term: 'Reynolds number',
        definition: 'A dimensionless ratio predicting flow behaviour based on speed, size, and viscosity.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Wind tunnel',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'aerospace-engineering',
    relatedSlugs: [
      'airfoil-wing',
      'turbofan-engine'
    ],
    sources: [
      {
        label: 'Wind tunnel — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Wind_tunnel'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'upper-limb-prosthesis',
    title: 'Upper limb prosthesis',
    subject: 'engineering',
    summary: 'An upper limb prosthesis replaces a missing arm or hand, restoring function through mechanical or electrically powered components.',
    aliases: [
      'prosthetic arm',
      'upper limb prosthesis'
    ],
    keyConcepts: [
      {
        term: 'Socket',
        definition: 'The custom-moulded interface between the residual limb and the prosthesis.'
      },
      {
        term: 'Actuator',
        definition: 'A motor or mechanical component that moves the prosthesis joints.'
      },
      {
        term: 'Myoelectric control',
        definition: 'Using electrical signals from muscles to control prosthesis movements.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Prosthesis',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'biomedical-engineering',
    relatedSlugs: [
      'cardiac-pacemaker',
      'digital-hearing-aid'
    ],
    sources: [
      {
        label: 'Prosthesis — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Prosthesis'
      },
      {
        label: 'OpenStax University Physics, Volume 1',
        url: 'https://openstax.org/books/university-physics-volume-1'
      }
    ]
  },
  {
    slug: 'bioprosthetic-heart-valve',
    title: 'Bioprosthetic heart valve',
    subject: 'engineering',
    summary: 'A bioprosthetic heart valve replaces a diseased valve using tissue-based leaflets that open and close with each heartbeat.',
    aliases: [
      'heart valve',
      'bioprosthetic valve'
    ],
    keyConcepts: [
      {
        term: 'Leaflet',
        definition: 'A flap of tissue that opens to let blood flow and closes to prevent backflow.'
      },
      {
        term: 'Stent',
        definition: 'A supporting frame that holds the tissue leaflets in shape.'
      },
      {
        term: 'Thrombosis',
        definition: 'Blood clot formation, a risk with any implanted blood-contacting device.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Heart valve',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'biomedical-engineering',
    relatedSlugs: [
      'cardiac-pacemaker',
      'upper-limb-prosthesis'
    ],
    sources: [
      {
        label: 'Heart valve — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Heart_valve'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'magnetic-resonance-imaging',
    title: 'Magnetic resonance imaging',
    subject: 'engineering',
    summary: 'MRI uses strong magnetic fields and radio waves to create detailed images of soft tissues without ionizing radiation.',
    aliases: [
      'MRI',
      'magnetic resonance imaging'
    ],
    keyConcepts: [
      {
        term: 'Magnetic field',
        definition: 'A strong static field that aligns hydrogen nuclei in the body.'
      },
      {
        term: 'Radiofrequency pulse',
        definition: 'A radio wave signal that excites nuclei so they emit detectable signals.'
      },
      {
        term: 'Gradient coil',
        definition: 'Coils that vary the magnetic field spatially to encode position in the image.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Magnetic resonance imaging',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'biomedical-engineering',
    relatedSlugs: [
      'digital-hearing-aid',
      'cardiac-pacemaker'
    ],
    sources: [
      {
        label: 'Magnetic resonance imaging — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Magnetic_resonance_imaging'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'digital-hearing-aid',
    title: 'Digital hearing aid',
    subject: 'engineering',
    summary: 'A digital hearing aid amplifies sound using microphones, digital signal processing, and a speaker customized to the user\'s hearing loss.',
    aliases: [
      'hearing aid',
      'digital hearing aid'
    ],
    keyConcepts: [
      {
        term: 'Microphone',
        definition: 'Converts sound waves into electrical signals.'
      },
      {
        term: 'Amplifier',
        definition: 'Increases the strength of selected frequencies based on the user\'s hearing profile.'
      },
      {
        term: 'Receiver',
        definition: 'A speaker that delivers the processed sound into the ear canal.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Hearing aid',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'biomedical-engineering',
    relatedSlugs: [
      'magnetic-resonance-imaging',
      'upper-limb-prosthesis'
    ],
    sources: [
      {
        label: 'Hearing aid — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Hearing_aid'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'hemodialysis-machine',
    title: 'Hemodialysis machine',
    subject: 'engineering',
    summary: 'A hemodialysis machine filters waste and excess fluid from blood when kidneys fail, using a semipermeable membrane and dialysate.',
    aliases: [
      'hemodialysis',
      'dialysis machine'
    ],
    keyConcepts: [
      {
        term: 'Semipermeable membrane',
        definition: 'A barrier that lets small molecules like urea pass while retaining blood cells and proteins.'
      },
      {
        term: 'Dialysate',
        definition: 'A cleansing fluid that draws waste from blood across the membrane.'
      },
      {
        term: 'Diffusion',
        definition: 'The movement of dissolved substances from higher to lower concentration.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Dialysis',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'biomedical-engineering',
    relatedSlugs: [
      'cardiac-pacemaker',
      'magnetic-resonance-imaging'
    ],
    sources: [
      {
        label: 'Dialysis — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Dialysis'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'cardiac-pacemaker',
    title: 'Cardiac pacemaker',
    subject: 'engineering',
    summary: 'A cardiac pacemaker delivers electrical pulses to the heart to maintain a healthy rhythm when the natural conduction system fails.',
    aliases: [
      'pacemaker',
      'cardiac pacemaker'
    ],
    keyConcepts: [
      {
        term: 'Lead',
        definition: 'An insulated wire carrying electrical pulses from the generator to the heart muscle.'
      },
      {
        term: 'Sensing',
        definition: 'The pacemaker\'s ability to detect the heart\'s own electrical activity and avoid unnecessary pulses.'
      },
      {
        term: 'Defibrillation',
        definition: 'A strong pulse to reset a dangerously fast or chaotic heart rhythm.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Artificial cardiac pacemaker',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'biomedical-engineering',
    relatedSlugs: [
      'bioprosthetic-heart-valve',
      'hemodialysis-machine'
    ],
    sources: [
      {
        label: 'Artificial cardiac pacemaker — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Artificial_cardiac_pacemaker'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'carbon-steel-alloy',
    title: 'Carbon steel alloy',
    subject: 'engineering',
    summary: 'Carbon steel is an iron-carbon alloy whose hardness and strength increase with carbon content, used in structures, tools, and machines.',
    aliases: [
      'carbon steel',
      'steel alloy'
    ],
    keyConcepts: [
      {
        term: 'Alloy',
        definition: 'A mixture of a metal with one or more other elements to change its properties.'
      },
      {
        term: 'Carbon content',
        definition: 'The percentage of carbon in steel, which controls hardness and strength.'
      },
      {
        term: 'Heat treatment',
        definition: 'Heating and cooling steel to change its microstructure and mechanical properties.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Steel',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'materials',
    relatedSlugs: [
      'fiberglass-composite',
      'epoxy-coated-rebar'
    ],
    sources: [
      {
        label: 'Steel — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Steel'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'fiberglass-composite',
    title: 'Fiberglass composite',
    subject: 'engineering',
    summary: 'Fiberglass composite combines glass fibers in a polymer matrix, offering high strength-to-weight ratio for boats, tanks, and panels.',
    aliases: [
      'fiberglass',
      'glass fibre composite'
    ],
    keyConcepts: [
      {
        term: 'Composite',
        definition: 'A material made from two or more constituents with different properties combined.'
      },
      {
        term: 'Matrix',
        definition: 'The polymer resin that binds and protects the reinforcing fibres.'
      },
      {
        term: 'Reinforcement',
        definition: 'The fibres that carry most of the load in a composite material.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Fiberglass',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'materials',
    relatedSlugs: [
      'carbon-steel-alloy',
      'alumina-ceramic'
    ],
    sources: [
      {
        label: 'Fiberglass — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Fiberglass'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'epoxy-coated-rebar',
    title: 'Epoxy coated rebar',
    subject: 'engineering',
    summary: 'Epoxy coated rebar is steel reinforcement coated with epoxy to resist corrosion in concrete structures exposed to moisture and salts.',
    aliases: [
      'epoxy coated rebar',
      'coated rebar'
    ],
    keyConcepts: [
      {
        term: 'Corrosion',
        definition: 'The gradual destruction of metal by chemical reaction with its environment.'
      },
      {
        term: 'Chloride',
        definition: 'Salt ions that penetrate concrete and trigger steel corrosion.'
      },
      {
        term: 'Barrier coating',
        definition: 'A protective layer that prevents corrosive substances reaching the steel surface.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Rebar',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'materials',
    relatedSlugs: [
      'reinforced-concrete',
      'carbon-steel-alloy'
    ],
    sources: [
      {
        label: 'Rebar — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Rebar'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'polyethylene-polymer',
    title: 'Polyethylene polymer',
    subject: 'engineering',
    summary: 'Polyethylene is a lightweight thermoplastic polymer made from ethylene, used in packaging, pipes, and containers.',
    aliases: [
      'polyethylene',
      'PE plastic'
    ],
    keyConcepts: [
      {
        term: 'Polymer',
        definition: 'A large molecule made of repeating units called monomers.'
      },
      {
        term: 'Thermoplastic',
        definition: 'A plastic that softens when heated and hardens when cooled, allowing reshaping.'
      },
      {
        term: 'Ethylene',
        definition: 'The monomer unit (C2H4) that polymerizes to form polyethylene.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Polyethylene',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'materials',
    relatedSlugs: [
      'fiberglass-composite',
      'alumina-ceramic'
    ],
    sources: [
      {
        label: 'Polyethylene — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Polyethylene'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'sacrificial-anode-protection',
    title: 'Sacrificial anode protection',
    subject: 'engineering',
    summary: 'Sacrificial anode protection corrodes a more reactive metal (zinc or magnesium) instead of the structure it is connected to.',
    aliases: [
      'sacrificial anode',
      'cathodic protection'
    ],
    keyConcepts: [
      {
        term: 'Galvanic corrosion',
        definition: 'Corrosion driven by electrical potential between two different metals in contact.'
      },
      {
        term: 'Anode',
        definition: 'The electrode where oxidation occurs and the metal corrodes.'
      },
      {
        term: 'Cathode',
        definition: 'The protected electrode where reduction occurs and no corrosion takes place.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Cathodic protection',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'materials',
    relatedSlugs: [
      'carbon-steel-alloy',
      'epoxy-coated-rebar'
    ],
    sources: [
      {
        label: 'Cathodic protection — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cathodic_protection'
      },
      {
        label: 'Engineering Toolbox: Corrosion',
        url: 'https://www.engineeringtoolbox.com/corrosion-index-d_503.html'
      }
    ]
  },
  {
    slug: 'alumina-ceramic',
    title: 'Alumina ceramic',
    subject: 'engineering',
    summary: 'Alumina ceramic is a hard, heat-resistant material made from aluminum oxide, used in wear parts, insulators, and cutting tools.',
    aliases: [
      'alumina',
      'aluminum oxide ceramic'
    ],
    keyConcepts: [
      {
        term: 'Ceramic',
        definition: 'An inorganic, non-metallic material, often crystalline, hardened by heat.'
      },
      {
        term: 'Hardness',
        definition: 'Resistance to scratching, indentation, or abrasion.'
      },
      {
        term: 'Electrical insulator',
        definition: 'A material that does not conduct electricity, such as alumina.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Ceramic engineering',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'materials',
    relatedSlugs: [
      'fiberglass-composite',
      'carbon-steel-alloy'
    ],
    sources: [
      {
        label: 'Ceramic engineering — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Ceramic_engineering'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'warren-truss-bridge',
    title: 'Warren truss bridge',
    subject: 'engineering',
    summary: 'A Warren truss bridge uses equilateral triangles to distribute loads through axial tension and compression in its members.',
    aliases: [
      'Warren truss',
      'truss bridge'
    ],
    keyConcepts: [
      {
        term: 'Truss',
        definition: 'A structure of triangular units where members carry axial tension or compression.'
      },
      {
        term: 'Joint',
        definition: 'A connection point where truss members meet and transfer forces.'
      },
      {
        term: 'Axial force',
        definition: 'A force acting along the length of a member, either tension or compression.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [
      'popsicle-stick-truss-bridge'
    ],
    wikipediaTitle: 'Truss',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'structures',
    relatedSlugs: [
      'cantilever-beam',
      'suspension-bridge'
    ],
    sources: [
      {
        label: 'Truss — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Truss'
      },
      {
        label: 'Engineering Toolbox: Mechanics',
        url: 'https://www.engineeringtoolbox.com/mechanics-index-d_491.html'
      }
    ]
  },
  {
    slug: 'cantilever-beam',
    title: 'Cantilever beam',
    subject: 'engineering',
    summary: 'A cantilever beam is fixed at one end and free at the other, carrying loads through bending moment and shear stress.',
    aliases: [
      'cantilever',
      'cantilever beam'
    ],
    keyConcepts: [
      {
        term: 'Bending moment',
        definition: 'The internal moment that resists bending, largest at the fixed support.'
      },
      {
        term: 'Shear force',
        definition: 'The internal force that resists sliding between cross-sections of the beam.'
      },
      {
        term: 'Deflection',
        definition: 'The displacement of the beam under load, largest at the free end.'
      }
    ],
    equations: [
      {
        label: 'Cantilever tip deflection',
        latex: '\\delta = \\frac{F L^3}{3 E I}',
        variables: [
          {
            symbol: 'delta',
            meaning: 'deflection at the free end (metres)'
          },
          {
            symbol: 'F',
            meaning: 'point load at the tip (newtons)'
          },
          {
            symbol: 'L',
            meaning: 'beam length from fixed end (metres)'
          },
          {
            symbol: 'E',
            meaning: 'Young\'s modulus of the material (pascals)'
          },
          {
            symbol: 'I',
            meaning: 'second moment of area of the cross-section (metres^4)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [
      'cantilever-beam-deflection'
    ],
    wikipediaTitle: 'Cantilever',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'structures',
    relatedSlugs: [
      'warren-truss-bridge',
      'reinforced-concrete'
    ],
    sources: [
      {
        label: 'Cantilever — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cantilever'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'geodesic-dome',
    title: 'Geodesic dome',
    subject: 'engineering',
    summary: 'A geodesic dome is a spherical or partial-spherical shell made of triangular elements that distribute stress across the whole structure.',
    aliases: [
      'geodesic dome',
      'dome structure'
    ],
    keyConcepts: [
      {
        term: 'Strut',
        definition: 'A lightweight compression member forming an edge of the triangular network.'
      },
      {
        term: 'Hub',
        definition: 'A connection point where struts meet in the dome framework.'
      },
      {
        term: 'Membrane stress',
        definition: 'Tension and compression distributed across the shell surface rather than concentrated at supports.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Geodesic dome',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'structures',
    relatedSlugs: [
      'warren-truss-bridge',
      'stone-arch-bridge'
    ],
    sources: [
      {
        label: 'Geodesic dome — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Geodesic_dome'
      },
      {
        label: 'Engineering Toolbox: Mechanics',
        url: 'https://www.engineeringtoolbox.com/mechanics-index-d_491.html'
      }
    ]
  },
  {
    slug: 'stone-arch-bridge',
    title: 'Stone arch bridge',
    subject: 'engineering',
    summary: 'A stone arch bridge carries load through compression along a curved arch, transferring forces to abutments at each end.',
    aliases: [
      'arch bridge',
      'stone arch'
    ],
    keyConcepts: [
      {
        term: 'Keystone',
        definition: 'The central stone at the top of the arch that locks the structure in place.'
      },
      {
        term: 'Abutment',
        definition: 'The support at each end of the arch that resists outward thrust.'
      },
      {
        term: 'Compression',
        definition: 'The primary internal force in an arch, squeezing stones together.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Arch',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'structures',
    relatedSlugs: [
      'suspension-bridge',
      'geodesic-dome'
    ],
    sources: [
      {
        label: 'Arch — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Arch'
      },
      {
        label: 'Engineering Toolbox: Mechanics',
        url: 'https://www.engineeringtoolbox.com/mechanics-index-d_491.html'
      }
    ]
  },
  {
    slug: 'steel-tower',
    title: 'Steel tower',
    subject: 'engineering',
    summary: 'A steel tower is a vertical structure made of steel members, used for transmission, observation, and support of antennas or bridges.',
    aliases: [
      'steel tower',
      'tower structure'
    ],
    keyConcepts: [
      {
        term: 'Buckling',
        definition: 'Sudden sideways collapse of a compression member under load.'
      },
      {
        term: 'Guy wire',
        definition: 'A tensioned cable that stabilizes a tower against wind and sideways loads.'
      },
      {
        term: 'Slenderness ratio',
        definition: 'A measure of how likely a column is to buckle based on length and cross-section.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Tower',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'structures',
    relatedSlugs: [
      'cantilever-beam',
      'gravity-retaining-wall'
    ],
    sources: [
      {
        label: 'Tower — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Tower'
      },
      {
        label: 'Engineering Toolbox: Mechanics',
        url: 'https://www.engineeringtoolbox.com/mechanics-index-d_491.html'
      }
    ]
  },
  {
    slug: 'gravity-retaining-wall',
    title: 'Gravity retaining wall',
    subject: 'engineering',
    summary: 'A gravity retaining wall holds back soil using its own weight and mass, resisting lateral earth pressure without reinforcement.',
    aliases: [
      'gravity retaining wall',
      'retaining wall'
    ],
    keyConcepts: [
      {
        term: 'Lateral earth pressure',
        definition: 'The sideways force soil exerts on a retaining structure.'
      },
      {
        term: 'Sliding',
        definition: 'The tendency for a wall to move horizontally under soil pressure.'
      },
      {
        term: 'Overturning',
        definition: 'The tendency for a wall to rotate about its toe under soil pressure.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Retaining wall',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'structures',
    relatedSlugs: [
      'spread-foundation',
      'steel-tower'
    ],
    sources: [
      {
        label: 'Retaining wall — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Retaining_wall'
      },
      {
        label: 'Engineering Toolbox: Soil',
        url: 'https://www.engineeringtoolbox.com/soil-index-d_507.html'
      }
    ]
  },
  {
    slug: 'series-dc-circuit',
    title: 'Series DC circuit',
    subject: 'engineering',
    summary: 'A series DC circuit provides a single current path where the same current flows through all components and voltages add up.',
    aliases: [
      'series circuit',
      'series DC circuit'
    ],
    keyConcepts: [
      {
        term: 'Series connection',
        definition: 'Components arranged one after another so the same current flows through each.'
      },
      {
        term: 'Voltage division',
        definition: 'The supply voltage is shared among series components in proportion to their resistance.'
      },
      {
        term: 'Total resistance',
        definition: 'In series, resistances add: R_total = R1 + R2 + ...'
      }
    ],
    equations: [
      {
        label: 'Series resistance',
        latex: 'R_{\\mathrm{total}} = R_1 + R_2 + \\cdots + R_n',
        variables: [
          {
            symbol: 'R_total',
            meaning: 'total resistance of the series circuit (ohms)'
          },
          {
            symbol: 'R_1',
            meaning: 'resistance of first component (ohms)'
          },
          {
            symbol: 'R_2',
            meaning: 'resistance of second component (ohms)'
          },
          {
            symbol: 'R_n',
            meaning: 'resistance of nth component (ohms)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [
      'breadboard-series-circuit'
    ],
    wikipediaTitle: 'Series and parallel circuits',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'circuits',
    relatedSlugs: [
      'parallel-dc-circuit',
      'electric-circuits'
    ],
    sources: [
      {
        label: 'Series and parallel circuits — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Series_and_parallel_circuits'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'parallel-dc-circuit',
    title: 'Parallel DC circuit',
    subject: 'engineering',
    summary: 'A parallel DC circuit provides multiple current paths where voltage is the same across branches and currents add up.',
    aliases: [
      'parallel circuit',
      'parallel DC circuit'
    ],
    keyConcepts: [
      {
        term: 'Parallel connection',
        definition: 'Components connected across the same two nodes, sharing the same voltage.'
      },
      {
        term: 'Current division',
        definition: 'Total current splits among parallel branches inversely proportional to resistance.'
      },
      {
        term: 'Equivalent resistance',
        definition: 'In parallel, reciprocal resistances add: 1/Req = 1/R1 + 1/R2 + ...'
      }
    ],
    equations: [
      {
        label: 'Parallel equivalent resistance',
        latex: '\\frac{1}{R_{\\mathrm{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots + \\frac{1}{R_n}',
        variables: [
          {
            symbol: 'R_eq',
            meaning: 'equivalent resistance of the parallel circuit (ohms)'
          },
          {
            symbol: 'R_1',
            meaning: 'resistance of first branch (ohms)'
          },
          {
            symbol: 'R_2',
            meaning: 'resistance of second branch (ohms)'
          },
          {
            symbol: 'R_n',
            meaning: 'resistance of nth branch (ohms)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [
      'breadboard-series-circuit'
    ],
    wikipediaTitle: 'Series and parallel circuits',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'circuits',
    relatedSlugs: [
      'series-dc-circuit',
      'resistor-voltage-divider'
    ],
    sources: [
      {
        label: 'Series and parallel circuits — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Series_and_parallel_circuits'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'resistor-voltage-divider',
    title: 'Resistor voltage divider',
    subject: 'engineering',
    summary: 'A resistor voltage divider splits an input voltage into a smaller output using two resistors in series across the supply.',
    aliases: [
      'voltage divider',
      'resistive divider'
    ],
    keyConcepts: [
      {
        term: 'Output voltage',
        definition: 'The voltage measured across one resistor in the divider, lower than the input.'
      },
      {
        term: 'Loading effect',
        definition: 'Connecting a load to the output changes the divider ratio by drawing current.'
      },
      {
        term: 'Resistor ratio',
        definition: 'The ratio of the two resistors determines the output voltage fraction.'
      }
    ],
    equations: [
      {
        label: 'Voltage divider output',
        latex: 'V_{\\mathrm{out}} = V_{\\mathrm{in}} \\frac{R_2}{R_1 + R_2}',
        variables: [
          {
            symbol: 'V_out',
            meaning: 'output voltage across R2 (volts)'
          },
          {
            symbol: 'V_in',
            meaning: 'input supply voltage (volts)'
          },
          {
            symbol: 'R_1',
            meaning: 'upper resistor connected to input (ohms)'
          },
          {
            symbol: 'R_2',
            meaning: 'lower resistor connected to ground (ohms)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [
      'breadboard-series-circuit'
    ],
    wikipediaTitle: 'Resistive divider',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'circuits',
    relatedSlugs: [
      'series-dc-circuit',
      'parallel-dc-circuit'
    ],
    sources: [
      {
        label: 'Resistive divider — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Resistive_divider'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'rc-timing-circuit',
    title: 'RC timing circuit',
    subject: 'engineering',
    summary: 'An RC circuit uses a resistor and capacitor to create time delays, filtering, or oscillation based on the RC time constant.',
    aliases: [
      'RC circuit',
      'resistor capacitor circuit'
    ],
    keyConcepts: [
      {
        term: 'Time constant',
        definition: 'The product of resistance and capacitance, representing the charging timescale.'
      },
      {
        term: 'Charging',
        definition: 'The capacitor voltage rises toward the supply voltage over time.'
      },
      {
        term: 'Discharging',
        definition: 'The capacitor voltage falls toward zero when disconnected from the supply.'
      }
    ],
    equations: [
      {
        label: 'RC time constant',
        latex: '\\tau = R C',
        variables: [
          {
            symbol: 'tau',
            meaning: 'time constant (seconds)'
          },
          {
            symbol: 'R',
            meaning: 'resistance (ohms)'
          },
          {
            symbol: 'C',
            meaning: 'capacitance (farads)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'RC circuit',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'circuits',
    relatedSlugs: [
      'series-dc-circuit',
      'electrolytic-capacitor'
    ],
    sources: [
      {
        label: 'RC circuit — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/RC_circuit'
      },
      {
        label: 'OpenStax University Physics, Volume 2',
        url: 'https://openstax.org/books/university-physics-volume-2'
      }
    ]
  },
  {
    slug: 'engineering-design-process',
    title: 'Engineering design process',
    subject: 'engineering',
    summary: 'The engineering design process iterates through defining problems, generating concepts, prototyping, testing, and refining solutions.',
    aliases: [
      'engineering design',
      'design process'
    ],
    keyConcepts: [
      {
        term: 'Problem definition',
        definition: 'Clearly stating what needs to be solved, including constraints and criteria.'
      },
      {
        term: 'Prototype',
        definition: 'An early model built to test a design concept before final production.'
      },
      {
        term: 'Iteration',
        definition: 'Repeating design, build, and test cycles to improve the solution.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Engineering design process',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'design-principles',
    relatedSlugs: [
      'physical-prototyping',
      'factor-of-safety'
    ],
    sources: [
      {
        label: 'Engineering design process — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Engineering_design_process'
      },
      {
        label: 'OpenStax College Physics 2e',
        url: 'https://openstax.org/books/college-physics-2e'
      }
    ]
  },
  {
    slug: 'factor-of-safety',
    title: 'Factor of safety',
    subject: 'engineering',
    summary: 'A factor of safety is the ratio of a structure\'s failure load to its expected working load, providing margin against uncertainty.',
    aliases: [
      'factor of safety',
      'safety factor'
    ],
    keyConcepts: [
      {
        term: 'Failure load',
        definition: 'The load at which a component or structure is expected to break.'
      },
      {
        term: 'Working load',
        definition: 'The maximum load expected in normal service.'
      },
      {
        term: 'Margin',
        definition: 'Extra capacity beyond the working load to account for unknowns and variations.'
      }
    ],
    equations: [
      {
        label: 'Factor of safety',
        latex: 'n = \\frac{F_{\\mathrm{failure}}}{F_{\\mathrm{working}}}',
        variables: [
          {
            symbol: 'n',
            meaning: 'factor of safety (no units)'
          },
          {
            symbol: 'F_failure',
            meaning: 'load causing failure (newtons)'
          },
          {
            symbol: 'F_working',
            meaning: 'expected service load (newtons)'
          }
        ]
      }
    ],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Factor of safety',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'design-principles',
    relatedSlugs: [
      'engineering-design-process',
      'root-cause-failure-analysis'
    ],
    sources: [
      {
        label: 'Factor of safety — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Factor_of_safety'
      },
      {
        label: 'Engineering Toolbox: Mechanics',
        url: 'https://www.engineeringtoolbox.com/mechanics-index-d_491.html'
      }
    ]
  },
  {
    slug: 'root-cause-failure-analysis',
    title: 'Root cause failure analysis',
    subject: 'engineering',
    summary: 'Root cause failure analysis investigates why a component or system failed, identifying the underlying cause to prevent recurrence.',
    aliases: [
      'failure analysis',
      'root cause analysis'
    ],
    keyConcepts: [
      {
        term: 'Failure mode',
        definition: 'The way in which a component fails, such as fracture, fatigue, or corrosion.'
      },
      {
        term: 'Root cause',
        definition: 'The fundamental reason a failure occurred, not just the immediate symptom.'
      },
      {
        term: 'Corrective action',
        definition: 'A design or process change that prevents the same failure from recurring.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Failure analysis',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'design-principles',
    relatedSlugs: [
      'factor-of-safety',
      'engineering-design-process'
    ],
    sources: [
      {
        label: 'Failure analysis — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Failure_analysis'
      },
      {
        label: 'Engineering Toolbox: Mechanics',
        url: 'https://www.engineeringtoolbox.com/mechanics-index-d_491.html'
      }
    ]
  },
  {
    slug: 'physical-prototyping',
    title: 'Physical prototyping',
    subject: 'engineering',
    summary: 'Physical prototyping builds early versions of a design to test form, fit, function, and manufacturability before production.',
    aliases: [
      'prototyping',
      'physical prototype'
    ],
    keyConcepts: [
      {
        term: 'Proof of concept',
        definition: 'A simple prototype demonstrating that an idea is technically feasible.'
      },
      {
        term: 'Iterative design',
        definition: 'Building, testing, and refining prototypes in repeated cycles.'
      },
      {
        term: 'Manufacturability',
        definition: 'How easily and cheaply a design can be produced at scale.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Prototyping',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'design-principles',
    relatedSlugs: [
      'engineering-design-process',
      'life-cycle-assessment'
    ],
    sources: [
      {
        label: 'Prototyping — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Prototyping'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  },
  {
    slug: 'life-cycle-assessment',
    title: 'Life cycle assessment',
    subject: 'engineering',
    summary: 'Life cycle assessment evaluates environmental impacts of a product from raw material extraction through manufacturing, use, and disposal.',
    aliases: [
      'LCA',
      'life cycle assessment'
    ],
    keyConcepts: [
      {
        term: 'Cradle to grave',
        definition: 'Assessing impacts from raw material extraction through end-of-life disposal.'
      },
      {
        term: 'Carbon footprint',
        definition: 'Total greenhouse gas emissions associated with a product or process.'
      },
      {
        term: 'Impact category',
        definition: 'A type of environmental impact such as climate change, water use, or toxicity.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Life-cycle assessment',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'design-principles',
    relatedSlugs: [
      'physical-prototyping',
      'design-for-manufacturing'
    ],
    sources: [
      {
        label: 'Life-cycle assessment — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Life-cycle_assessment'
      },
      {
        label: 'Engineering Toolbox: Environment',
        url: 'https://www.engineeringtoolbox.com/environment-index-d_505.html'
      }
    ]
  },
  {
    slug: 'design-for-manufacturing',
    title: 'Design for manufacturing',
    subject: 'engineering',
    summary: 'Design for manufacturing simplifies products so they are easier and cheaper to produce, assemble, and maintain at scale.',
    aliases: [
      'DFM',
      'design for manufacturing'
    ],
    keyConcepts: [
      {
        term: 'Part count',
        definition: 'The number of distinct parts in a product; fewer parts usually means lower cost.'
      },
      {
        term: 'Standardization',
        definition: 'Using standard sizes and fasteners to reduce custom tooling and inventory.'
      },
      {
        term: 'Assembly time',
        definition: 'The time needed to put a product together, which drives manufacturing cost.'
      }
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Design for manufacturing',
    collectionSlugs: [
      'engineering-fundamentals'
    ],
    category: 'design-principles',
    relatedSlugs: [
      'life-cycle-assessment',
      'physical-prototyping'
    ],
    sources: [
      {
        label: 'Design for manufacturing — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Design_for_manufacturing'
      },
      {
        label: 'Engineering Toolbox: Materials',
        url: 'https://www.engineeringtoolbox.com/materials-index-d_509.html'
      }
    ]
  }
];