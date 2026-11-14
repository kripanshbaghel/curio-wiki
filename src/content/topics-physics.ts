import type { Topic } from './types';

/**
 * Physics topic seeds.
 * Parsed at module load by `parseContent` — invalid content fails the build.
 */
export const physicsTopicSeeds: Topic[] = [
  {
    "slug": "newtons-laws-of-motion",
    "title": "Newton's laws of motion",
    "subject": "physics",
    "summary": "Newton's three laws describe how force, mass, and motion relate: objects keep their velocity unless a net force acts, force equals mass times acceleration, and forces always come in equal and opposite pairs.",
    "aliases": [
      "newtonian mechanics",
      "laws of motion"
    ],
    "keyConcepts": [
      {
        "term": "Inertia",
        "definition": "An object resists changes to its state of motion; it keeps its velocity unless a net force acts on it (first law)."
      },
      {
        "term": "Net force",
        "definition": "The vector sum of all forces on an object; only a net force changes an object’s velocity."
      },
      {
        "term": "Action and reaction",
        "definition": "When one body exerts a force on a second, the second exerts an equal and opposite force back (third law)."
      }
    ],
    "equations": [
      {
        "label": "Newton's second law",
        "latex": "F = ma",
        "variables": [
          {
            "symbol": "F",
            "meaning": "net force on the object (newtons)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the object (kilograms)"
          },
          {
            "symbol": "a",
            "meaning": "acceleration (metres per second squared)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "simple-pendulum-period"
    ],
    "wikipediaTitle": "Newton's laws of motion",
    "collectionSlugs": [
      "motion-and-forces"
    ],
    "category": "mechanics",
    "relatedSlugs": [
      "simple-pendulum",
      "energy-and-work",
      "simple-machines"
    ],
    "sources": [
      {
        "label": "Newton's laws of motion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "simple-pendulum",
    "title": "Simple pendulum",
    "subject": "physics",
    "summary": "A simple pendulum is a mass swinging on the end of a string. Its period depends mainly on the length of the string and on gravity — not on the mass or how wide it swings (for small angles).",
    "aliases": [
      "pendulum",
      "pendulum motion"
    ],
    "keyConcepts": [
      {
        "term": "Period",
        "definition": "The time the pendulum takes to complete one full back-and-forth swing."
      },
      {
        "term": "Amplitude",
        "definition": "The angle or distance the pendulum is released from; small angles keep the motion simple."
      }
    ],
    "equations": [
      {
        "label": "Period of a simple pendulum (small angles)",
        "latex": "T = 2\\pi\\sqrt{\\frac{L}{g}}",
        "variables": [
          {
            "symbol": "T",
            "meaning": "period of one swing (seconds)"
          },
          {
            "symbol": "L",
            "meaning": "length from pivot to centre of mass (metres)"
          },
          {
            "symbol": "g",
            "meaning": "gravitational field strength (≈ 9.8 m/s² on Earth)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "simple-pendulum-period"
    ],
    "wikipediaTitle": "Pendulum",
    "collectionSlugs": [
      "motion-and-forces"
    ],
    "category": "mechanics",
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "energy-and-work"
    ],
    "sources": [
      {
        "label": "Pendulum — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pendulum"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "energy-and-work",
    "title": "Energy and work",
    "subject": "physics",
    "summary": "Energy is the capacity to do work, and work is energy transferred when a force moves an object. Kinetic energy depends on mass and speed, while the work done by a force depends on its strength, the distance moved, and the direction of the force.",
    "aliases": [
      "kinetic energy",
      "work done"
    ],
    "keyConcepts": [
      {
        "term": "Energy",
        "definition": "The capacity to do work; it appears in forms such as kinetic, thermal, and chemical energy that can transform into one another."
      },
      {
        "term": "Work",
        "definition": "Energy transferred to or from an object by a force acting on it as it moves; measured in joules."
      },
      {
        "term": "Kinetic energy",
        "definition": "The energy an object has because of its motion; it grows with mass and with the square of its speed."
      },
      {
        "term": "Joule",
        "definition": "The SI unit of work and energy; one joule is the work done by a force of one newton over one metre."
      }
    ],
    "equations": [
      {
        "label": "Kinetic energy",
        "latex": "KE = \\frac{1}{2}mv^2",
        "variables": [
          {
            "symbol": "KE",
            "meaning": "kinetic energy (joules)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the object (kilograms)"
          },
          {
            "symbol": "v",
            "meaning": "speed of the object (metres per second)"
          }
        ]
      },
      {
        "label": "Work done by a constant force",
        "latex": "W = Fd\\cos\\theta",
        "variables": [
          {
            "symbol": "W",
            "meaning": "work done (joules)"
          },
          {
            "symbol": "F",
            "meaning": "magnitude of the force (newtons)"
          },
          {
            "symbol": "d",
            "meaning": "distance the object moves (metres)"
          },
          {
            "symbol": "θ",
            "meaning": "angle between the force and the direction of motion"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "solar-oven-smores"
    ],
    "wikipediaTitle": "Work (physics)",
    "collectionSlugs": [
      "motion-and-forces"
    ],
    "category": "energy",
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "simple-pendulum",
      "states-of-matter"
    ],
    "sources": [
      {
        "label": "Work (physics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Work_(physics)"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "electric-circuits",
    "title": "Electric circuits",
    "subject": "physics",
    "summary": "An electric circuit is a closed loop that lets charge flow from a source, through components, and back again. The current that flows depends on the voltage pushing the charge and the resistance opposing it.",
    "aliases": [
      "circuits",
      "electric current"
    ],
    "keyConcepts": [
      {
        "term": "Current",
        "definition": "The rate at which electric charge flows past a point in a circuit, measured in amperes."
      },
      {
        "term": "Voltage",
        "definition": "The energy per unit charge supplied by a source such as a battery, measured in volts."
      },
      {
        "term": "Resistance",
        "definition": "How strongly a component opposes the flow of current, measured in ohms."
      },
      {
        "term": "Series circuit",
        "definition": "A single loop where the same current flows through every component and the resistances add together."
      }
    ],
    "equations": [
      {
        "label": "Ohm's law",
        "latex": "V = IR",
        "variables": [
          {
            "symbol": "V",
            "meaning": "voltage across the component (volts)"
          },
          {
            "symbol": "I",
            "meaning": "current through the component (amperes)"
          },
          {
            "symbol": "R",
            "meaning": "resistance of the component (ohms)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "ohms-law-circuit"
    ],
    "wikipediaTitle": "Electric circuit",
    "collectionSlugs": [
      "technology-and-design"
    ],
    "category": "electricity-and-magnetism",
    "relatedSlugs": [
      "energy-and-work",
      "computer-hardware-basics"
    ],
    "sources": [
      {
        "label": "Electric circuit — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electrical_network"
      },
      {
        "label": "OpenStax College Physics 2e",
        "url": "https://openstax.org/books/college-physics-2e"
      }
    ]
  },
  {
    "slug": "waves-and-sound",
    "title": "Waves and sound",
    "subject": "physics",
    "summary": "Waves carry energy and information as oscillating disturbances travelling through a medium or across space. Sound waves are longitudinal pressure waves, and their speed equals frequency multiplied by wavelength.",
    "aliases": [
      "sound waves",
      "wave motion"
    ],
    "keyConcepts": [
      {
        "term": "Wavelength",
        "definition": "The distance between two consecutive matching points on a wave, such as crest to crest; symbol λ."
      },
      {
        "term": "Frequency",
        "definition": "The number of wave cycles that pass a point each second, measured in hertz."
      },
      {
        "term": "Amplitude",
        "definition": "The maximum displacement of a wave from its rest position; it sets the wave’s intensity or loudness."
      },
      {
        "term": "Longitudinal wave",
        "definition": "A wave in which the disturbance oscillates parallel to the direction of travel, as sound does in air."
      }
    ],
    "equations": [
      {
        "label": "Wave equation",
        "latex": "v = f\\lambda",
        "variables": [
          {
            "symbol": "v",
            "meaning": "wave speed (metres per second)"
          },
          {
            "symbol": "f",
            "meaning": "frequency (hertz)"
          },
          {
            "symbol": "λ",
            "meaning": "wavelength (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "seeing-sound-rice-drum"
    ],
    "wikipediaTitle": "Wave",
    "collectionSlugs": [
      "motion-and-forces"
    ],
    "category": "waves-and-sound",
    "relatedSlugs": [
      "optics-light",
      "simple-pendulum"
    ],
    "sources": [
      {
        "label": "Wave — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Wave"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "optics-light",
    "title": "Optics and light",
    "subject": "physics",
    "summary": "Optics is the study of light: how it travels, reflects, and bends when it passes between materials. Refraction follows Snell’s law, which explains why a prism splits white light into a rainbow of colours.",
    "aliases": [
      "light",
      "refraction"
    ],
    "keyConcepts": [
      {
        "term": "Refraction",
        "definition": "The bending of light as it passes from one material into another because its speed changes."
      },
      {
        "term": "Refractive index",
        "definition": "A number describing how strongly a material slows light; a higher index bends light more sharply."
      },
      {
        "term": "Reflection",
        "definition": "Light bouncing off a surface, with the angle of incidence equal to the angle of reflection."
      },
      {
        "term": "Dispersion",
        "definition": "The splitting of white light into its component colours because each colour refracts by a slightly different amount."
      }
    ],
    "equations": [
      {
        "label": "Snell's law",
        "latex": "n_1\\sin\\theta_1 = n_2\\sin\\theta_2",
        "variables": [
          {
            "symbol": "n₁",
            "meaning": "refractive index of the first material"
          },
          {
            "symbol": "θ₁",
            "meaning": "angle of incidence, measured from the normal"
          },
          {
            "symbol": "n₂",
            "meaning": "refractive index of the second material"
          },
          {
            "symbol": "θ₂",
            "meaning": "angle of refraction, measured from the normal"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "rainbow-refraction-light"
    ],
    "wikipediaTitle": "Optics",
    "collectionSlugs": [
      "motion-and-forces"
    ],
    "category": "optics",
    "relatedSlugs": [
      "waves-and-sound",
      "atomic-structure"
    ],
    "sources": [
      {
        "label": "Optics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Optics"
      },
      {
        "label": "OpenStax College Physics 2e",
        "url": "https://openstax.org/books/college-physics-2e"
      }
    ]
  }
];
