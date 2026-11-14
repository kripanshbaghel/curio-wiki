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
      "work-energy-theorem",
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
      "work-energy-theorem"
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
    "slug": "electric-circuits",
    "title": "Circuit components and measurement",
    "subject": "physics",
    "summary": "An electric circuit is a closed loop that lets charge flow from a source through components and back. Cells supply energy, bulbs and resistors use it, and meters measure the current and voltage at points in the circuit.",
    "aliases": [
      "circuits"
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
        "definition": "An ammeter is connected in series with a component to measure its current (ideally with very low resistance), while a voltmeter is connected in parallel across it (ideally with very high resistance)."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [
      "ohms-law-circuit"
    ],
    "wikipediaTitle": "Electrical network",
    "collectionSlugs": [
      "technology-and-design"
    ],
    "category": "electricity-and-magnetism",
    "relatedSlugs": [
      "work-energy-theorem",
      "computer-hardware-basics"
    ],
    "sources": [
      {
        "label": "Electrical network — Wikipedia",
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
    "title": "Wave properties",
    "subject": "physics",
    "summary": "Waves carry energy and information as oscillating disturbances travelling through a medium or across space. The wave equation links speed, frequency and wavelength, and the same properties describe water waves, seismic waves, light and sound.",
    "aliases": [
      "wave motion",
      "wave equation"
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
      "refraction-and-snells-law",
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
    "slug": "kinematic-equations",
    "title": "Kinematic equations for uniform acceleration",
    "subject": "physics",
    "category": "mechanics",
    "summary": "For straight-line motion with constant acceleration, a set of equations links displacement, initial and final velocity, acceleration, and time. Each equation omits one quantity, so you pick the one that matches the information you have.",
    "aliases": [
      "suvat equations",
      "constant-acceleration equations"
    ],
    "keyConcepts": [
      {
        "term": "Uniform acceleration",
        "definition": "Acceleration is constant in both magnitude and direction, so velocity changes at a steady rate and the velocity-time graph is a straight line."
      },
      {
        "term": "Displacement versus distance",
        "definition": "Displacement is the straight-line change in position with a direction; distance is the total path length travelled. The equations use displacement, so reversing direction needs care."
      },
      {
        "term": "Choosing an equation",
        "definition": "List the known and unknown quantities, then select the equation that does not contain the variable you neither know nor need."
      },
      {
        "term": "Sign convention",
        "definition": "Assign one direction as positive and keep it for every vector quantity; a negative result then means the quantity points the opposite way."
      }
    ],
    "equations": [
      {
        "label": "Velocity after time t",
        "latex": "v = u + at",
        "variables": [
          {
            "symbol": "v",
            "meaning": "final velocity (metres per second)"
          },
          {
            "symbol": "u",
            "meaning": "initial velocity (metres per second)"
          },
          {
            "symbol": "a",
            "meaning": "constant acceleration (metres per second squared)"
          },
          {
            "symbol": "t",
            "meaning": "time interval (seconds)"
          }
        ]
      },
      {
        "label": "Displacement after time t",
        "latex": "s = ut + \\frac{1}{2}at^2",
        "variables": [
          {
            "symbol": "s",
            "meaning": "displacement (metres)"
          },
          {
            "symbol": "u",
            "meaning": "initial velocity (metres per second)"
          },
          {
            "symbol": "a",
            "meaning": "constant acceleration (metres per second squared)"
          },
          {
            "symbol": "t",
            "meaning": "time interval (seconds)"
          }
        ]
      },
      {
        "label": "Velocity and displacement without time",
        "latex": "v^2 = u^2 + 2as",
        "variables": [
          {
            "symbol": "v",
            "meaning": "final velocity (metres per second)"
          },
          {
            "symbol": "u",
            "meaning": "initial velocity (metres per second)"
          },
          {
            "symbol": "a",
            "meaning": "constant acceleration (metres per second squared)"
          },
          {
            "symbol": "s",
            "meaning": "displacement (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "projectile-motion",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Equations of motion",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Equations of motion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Equations_of_motion"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "projectile-motion",
    "title": "Projectile motion",
    "subject": "physics",
    "category": "mechanics",
    "summary": "A projectile moves under gravity alone after launch, so its horizontal velocity stays constant while its vertical velocity changes by 9.8 m/s each second. With negligible air resistance the path is a parabola.",
    "aliases": [
      "ballistic trajectory"
    ],
    "keyConcepts": [
      {
        "term": "Independence of components",
        "definition": "Horizontal and vertical motions can be analysed separately: gravity affects only the vertical velocity, and horizontal velocity is unchanged."
      },
      {
        "term": "Time of flight",
        "definition": "For a projectile launched and landing at the same height, the flight time is set by the vertical component, 2u sin θ / g."
      },
      {
        "term": "Range",
        "definition": "The horizontal distance covered before returning to launch height is largest at a 45° launch angle when air resistance is ignored."
      },
      {
        "term": "Complementary angles",
        "definition": "Two launch angles that add to 90° give the same range on level ground, though the higher-angle path stays airborne longer."
      }
    ],
    "equations": [
      {
        "label": "Horizontal displacement",
        "latex": "x = u_x t",
        "variables": [
          {
            "symbol": "x",
            "meaning": "horizontal displacement (metres)"
          },
          {
            "symbol": "u_x",
            "meaning": "horizontal component of launch velocity (m/s)"
          },
          {
            "symbol": "t",
            "meaning": "time since launch (seconds)"
          }
        ]
      },
      {
        "label": "Vertical displacement",
        "latex": "y = u_y t - \\frac{1}{2}gt^2",
        "variables": [
          {
            "symbol": "y",
            "meaning": "vertical displacement (metres)"
          },
          {
            "symbol": "u_y",
            "meaning": "vertical component of launch velocity (m/s)"
          },
          {
            "symbol": "g",
            "meaning": "gravitational acceleration (≈ 9.8 m/s²)"
          },
          {
            "symbol": "t",
            "meaning": "time since launch (seconds)"
          }
        ]
      },
      {
        "label": "Range on level ground",
        "latex": "R = \\frac{u^2 \\sin 2\\theta}{g}",
        "variables": [
          {
            "symbol": "R",
            "meaning": "horizontal range (metres)"
          },
          {
            "symbol": "u",
            "meaning": "launch speed (metres per second)"
          },
          {
            "symbol": "θ",
            "meaning": "launch angle above the horizontal"
          },
          {
            "symbol": "g",
            "meaning": "gravitational acceleration (≈ 9.8 m/s²)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "kinematic-equations",
      "newtons-laws-of-motion",
      "circular-motion"
    ],
    "wikipediaTitle": "Projectile motion",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Projectile motion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Projectile_motion"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "circular-motion",
    "title": "Circular motion",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Uniform circular motion is travel around a circle at constant speed. Because the direction of velocity changes continuously, the object accelerates toward the centre even though its speed does not change.",
    "aliases": [
      "uniform circular motion"
    ],
    "keyConcepts": [
      {
        "term": "Period",
        "definition": "The time for one complete revolution around the circle, measured in seconds and equal to the circumference divided by the speed."
      },
      {
        "term": "Tangential velocity",
        "definition": "The instantaneous velocity points along the tangent to the circle; its magnitude is constant in uniform circular motion but its direction turns steadily."
      },
      {
        "term": "Centripetal acceleration",
        "definition": "The acceleration points toward the centre with magnitude v²/r, so tighter turns and higher speeds demand larger acceleration."
      },
      {
        "term": "Angular velocity",
        "definition": "The rate of change of angle, ω = 2π/T, measured in radians per second and related to tangential speed by v = rω."
      }
    ],
    "equations": [
      {
        "label": "Speed in uniform circular motion",
        "latex": "v = \\frac{2\\pi r}{T}",
        "variables": [
          {
            "symbol": "v",
            "meaning": "tangential speed (metres per second)"
          },
          {
            "symbol": "r",
            "meaning": "radius of the circle (metres)"
          },
          {
            "symbol": "T",
            "meaning": "period of one revolution (seconds)"
          }
        ]
      },
      {
        "label": "Centripetal acceleration",
        "latex": "a_c = \\frac{v^2}{r}",
        "variables": [
          {
            "symbol": "a_c",
            "meaning": "centripetal acceleration (m/s²)"
          },
          {
            "symbol": "v",
            "meaning": "tangential speed (metres per second)"
          },
          {
            "symbol": "r",
            "meaning": "radius of the circle (metres)"
          }
        ]
      },
      {
        "label": "Angular velocity",
        "latex": "\\omega = \\frac{2\\pi}{T}",
        "variables": [
          {
            "symbol": "ω",
            "meaning": "angular velocity (radians per second)"
          },
          {
            "symbol": "T",
            "meaning": "period of one revolution (seconds)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "centripetal-force",
      "angular-momentum",
      "orbital-motion"
    ],
    "wikipediaTitle": "Circular motion",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Circular motion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Circular_motion"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "centripetal-force",
    "title": "Centripetal force",
    "subject": "physics",
    "category": "motion-and-forces",
    "summary": "Centripetal force is the net inward force that keeps an object moving in a circle. It is not a separate kind of force: tension, gravity, friction, or a normal force supplies it, and without it the object moves off along the tangent.",
    "aliases": [
      "center-seeking force"
    ],
    "keyConcepts": [
      {
        "term": "Net inward force",
        "definition": "Only the component of the net force pointing toward the centre counts as centripetal; any tangential component changes the object's speed instead."
      },
      {
        "term": "Centripetal versus centrifugal",
        "definition": "Centrifugal force is a fictitious force that appears only in a rotating frame of reference; in an inertial frame there is no outward force, only inertia carrying the object straight ahead."
      },
      {
        "term": "Everyday sources",
        "definition": "A car turns because of sideways friction, a satellite orbits because of gravity, and in a swung bucket the bucket's base pushes the water toward the centre of the circle."
      },
      {
        "term": "Speed and radius dependence",
        "definition": "The required force grows with the square of speed and shrinks with radius, which is why fast, tight turns are the hardest to hold."
      }
    ],
    "equations": [
      {
        "label": "Centripetal force",
        "latex": "F_c = \\frac{mv^2}{r}",
        "variables": [
          {
            "symbol": "F_c",
            "meaning": "centripetal force (newtons)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the object (kilograms)"
          },
          {
            "symbol": "v",
            "meaning": "tangential speed (metres per second)"
          },
          {
            "symbol": "r",
            "meaning": "radius of the circular path (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "circular-motion",
      "friction",
      "newtons-laws-of-motion",
      "orbital-motion"
    ],
    "wikipediaTitle": "Centripetal force",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Centripetal force — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Centripetal_force"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "friction",
    "title": "Friction",
    "subject": "physics",
    "category": "motion-and-forces",
    "summary": "Friction is a contact force that opposes sliding or the tendency to slide between two surfaces. Static friction rises to match an applied force up to a limit, after which kinetic friction acts at a roughly constant value.",
    "aliases": [
      "frictional force",
      "sliding friction"
    ],
    "keyConcepts": [
      {
        "term": "Static friction",
        "definition": "Friction that holds a stationary object in place; it adjusts from zero up to a maximum value proportional to the normal force."
      },
      {
        "term": "Kinetic friction",
        "definition": "Friction acting while surfaces slide past one another; for a given pair of surfaces it is approximately independent of speed and contact area."
      },
      {
        "term": "Coefficient of friction",
        "definition": "A dimensionless number comparing the friction force to the normal force; it depends on the materials and surface finish, not on the object's mass alone."
      },
      {
        "term": "Normal force",
        "definition": "The perpendicular contact force between surfaces; on a slope it equals mg cos θ, which is why friction weakens as a ramp steepens."
      }
    ],
    "equations": [
      {
        "label": "Maximum static friction",
        "latex": "f_s \\le \\mu_s N",
        "variables": [
          {
            "symbol": "f_s",
            "meaning": "static friction force (newtons)"
          },
          {
            "symbol": "μ_s",
            "meaning": "coefficient of static friction"
          },
          {
            "symbol": "N",
            "meaning": "normal force (newtons)"
          }
        ]
      },
      {
        "label": "Kinetic friction",
        "latex": "f_k = \\mu_k N",
        "variables": [
          {
            "symbol": "f_k",
            "meaning": "kinetic friction force (newtons)"
          },
          {
            "symbol": "μ_k",
            "meaning": "coefficient of kinetic friction"
          },
          {
            "symbol": "N",
            "meaning": "normal force (newtons)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "centripetal-force",
      "static-equilibrium"
    ],
    "wikipediaTitle": "Friction",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Friction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Friction"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "momentum",
    "title": "Momentum",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Momentum is the product of an object's mass and velocity, so a heavy slow object and a light fast one can carry equal momentum. It is a vector quantity, and a net force changes it at a rate equal to that force.",
    "aliases": [
      "linear momentum"
    ],
    "keyConcepts": [
      {
        "term": "Vector nature",
        "definition": "Momentum has both magnitude and direction; reversing an object's direction reverses its momentum even if its speed is unchanged."
      },
      {
        "term": "Momentum versus kinetic energy",
        "definition": "Momentum is proportional to speed while kinetic energy is proportional to speed squared, so doubling speed doubles momentum but quadruples kinetic energy."
      },
      {
        "term": "Newton's second law in momentum form",
        "definition": "The net force equals the rate of change of momentum, which reduces to F = ma when mass is constant."
      }
    ],
    "equations": [
      {
        "label": "Linear momentum",
        "latex": "p = mv",
        "variables": [
          {
            "symbol": "p",
            "meaning": "momentum (kilogram metres per second)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the object (kilograms)"
          },
          {
            "symbol": "v",
            "meaning": "velocity (metres per second)"
          }
        ]
      },
      {
        "label": "Force as rate of change of momentum",
        "latex": "F_{\\text{net}} = \\frac{\\Delta p}{\\Delta t}",
        "variables": [
          {
            "symbol": "F_net",
            "meaning": "net force (newtons)"
          },
          {
            "symbol": "Δp",
            "meaning": "change in momentum (kg·m/s)"
          },
          {
            "symbol": "Δt",
            "meaning": "time interval (seconds)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "impulse",
      "conservation-of-momentum",
      "newtons-laws-of-motion"
    ],
    "wikipediaTitle": "Momentum",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Momentum — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Momentum"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "impulse",
    "title": "Impulse",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Impulse is the change in momentum caused by a force acting over a time interval, equal to the area under a force–time graph. Stretching the contact time for a fixed momentum change lowers the peak force, which is how airbags and crumple zones protect people.",
    "aliases": [
      "impulse of force"
    ],
    "keyConcepts": [
      {
        "term": "Impulse–momentum theorem",
        "definition": "The impulse delivered to an object equals its change in momentum, so a given momentum change can come from a large force for a short time or a small force for a long time."
      },
      {
        "term": "Force–time area",
        "definition": "For a varying force, impulse is the area under the force–time curve, found by integration or by estimating the area on a graph."
      },
      {
        "term": "Reducing peak force",
        "definition": "Safety padding, bending your knees on landing, and following through when catching a ball all extend the interaction time and so reduce the maximum force."
      }
    ],
    "equations": [
      {
        "label": "Impulse from a constant force",
        "latex": "J = F\\Delta t = \\Delta p",
        "variables": [
          {
            "symbol": "J",
            "meaning": "impulse (newton seconds)"
          },
          {
            "symbol": "F",
            "meaning": "constant applied force (newtons)"
          },
          {
            "symbol": "Δt",
            "meaning": "duration of contact (seconds)"
          },
          {
            "symbol": "Δp",
            "meaning": "change in momentum (kg·m/s)"
          }
        ]
      },
      {
        "label": "Impulse from a varying force",
        "latex": "J = \\int F\\,dt",
        "variables": [
          {
            "symbol": "J",
            "meaning": "impulse (newton seconds)"
          },
          {
            "symbol": "F",
            "meaning": "force as a function of time (newtons)"
          },
          {
            "symbol": "dt",
            "meaning": "infinitesimal time interval (seconds)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "momentum",
      "conservation-of-momentum",
      "newtons-laws-of-motion"
    ],
    "wikipediaTitle": "Impulse (physics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Impulse (physics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Impulse_(physics)"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "conservation-of-momentum",
    "title": "Conservation of momentum",
    "subject": "physics",
    "category": "mechanics",
    "summary": "In a closed system with no net external force, the total momentum of all interacting bodies stays constant. Internal forces occur in equal and opposite pairs, so they cancel and merely redistribute momentum between the bodies.",
    "aliases": [
      "momentum conservation",
      "law of conservation of momentum"
    ],
    "keyConcepts": [
      {
        "term": "Closed system",
        "definition": "A system that exchanges no mass with its surroundings and experiences no net external force; only then is total momentum conserved."
      },
      {
        "term": "Internal versus external forces",
        "definition": "Forces between members of the system cancel in pairs by Newton's third law, while an external force such as friction or gravity can change the total."
      },
      {
        "term": "Vector addition",
        "definition": "Momenta must be added as vectors, so a collision at an angle needs components treated separately along each axis."
      },
      {
        "term": "Recoil",
        "definition": "A gun pushing a bullet forward recoils backward with equal momentum, an everyday consequence of the same conservation law."
      }
    ],
    "equations": [
      {
        "label": "Conservation for two interacting bodies",
        "latex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
        "variables": [
          {
            "symbol": "m₁, m₂",
            "meaning": "masses of the two bodies (kilograms)"
          },
          {
            "symbol": "u₁, u₂",
            "meaning": "velocities before interaction (m/s)"
          },
          {
            "symbol": "v₁, v₂",
            "meaning": "velocities after interaction (m/s)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "momentum",
      "elastic-and-inelastic-collisions",
      "impulse",
      "newtons-laws-of-motion"
    ],
    "wikipediaTitle": "Momentum",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Momentum — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Momentum"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "elastic-and-inelastic-collisions",
    "title": "Elastic and inelastic collisions",
    "subject": "physics",
    "category": "mechanics",
    "summary": "In an elastic collision both momentum and kinetic energy are conserved, as with ideal billiard balls. In an inelastic collision momentum is still conserved but some kinetic energy becomes heat, sound, or permanent deformation; a perfectly inelastic collision leaves the bodies stuck together.",
    "aliases": [
      "elastic collisions",
      "inelastic collisions"
    ],
    "keyConcepts": [
      {
        "term": "Elastic collision",
        "definition": "A collision in which total kinetic energy before and after is the same; it requires no permanent deformation and no energy lost to heat or sound."
      },
      {
        "term": "Inelastic collision",
        "definition": "A collision in which kinetic energy is converted into other forms, though total energy and total momentum are still conserved."
      },
      {
        "term": "Perfectly inelastic collision",
        "definition": "The bodies stick together and move with one common velocity, which is the case that loses the maximum possible kinetic energy."
      },
      {
        "term": "Coefficient of restitution",
        "definition": "The ratio of relative separation speed to relative approach speed; it equals 1 for a perfectly elastic collision and 0 when the bodies stick."
      }
    ],
    "equations": [
      {
        "label": "Kinetic energy conserved in an elastic collision",
        "latex": "\\frac{1}{2}m_1u_1^2 + \\frac{1}{2}m_2u_2^2 = \\frac{1}{2}m_1v_1^2 + \\frac{1}{2}m_2v_2^2",
        "variables": [
          {
            "symbol": "m₁, m₂",
            "meaning": "masses of the two bodies (kilograms)"
          },
          {
            "symbol": "u₁, u₂",
            "meaning": "velocities before collision (m/s)"
          },
          {
            "symbol": "v₁, v₂",
            "meaning": "velocities after collision (m/s)"
          }
        ]
      },
      {
        "label": "Coefficient of restitution",
        "latex": "e = \\frac{v_2 - v_1}{u_1 - u_2}",
        "variables": [
          {
            "symbol": "e",
            "meaning": "coefficient of restitution (0 to 1)"
          },
          {
            "symbol": "u₁, u₂",
            "meaning": "approach velocities before impact (m/s)"
          },
          {
            "symbol": "v₁, v₂",
            "meaning": "separation velocities after impact (m/s)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "conservation-of-momentum",
      "momentum",
      "impulse"
    ],
    "wikipediaTitle": "Collision",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Collision — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Collision"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "torque",
    "title": "Torque",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Torque measures how effectively a force twists an object about an axis. It depends on the force, the distance from the pivot to the point of application, and the angle between them, so a force directed straight through the pivot produces no torque.",
    "aliases": [
      "moment of force",
      "turning moment"
    ],
    "keyConcepts": [
      {
        "term": "Lever arm",
        "definition": "The perpendicular distance from the axis to the line of action of the force; torque is the force multiplied by this distance."
      },
      {
        "term": "Direction and sign",
        "definition": "Torque is a vector along the rotation axis, with anticlockwise and clockwise senses conventionally given opposite signs when summing torques."
      },
      {
        "term": "Torque versus force",
        "definition": "A given force produces more torque further from the pivot, which is why door handles sit far from their hinges and long spanners loosen stubborn bolts."
      },
      {
        "term": "Couple",
        "definition": "Two equal, opposite, and parallel forces separated by a distance form a couple that produces pure rotation with no net force."
      }
    ],
    "equations": [
      {
        "label": "Torque from force and lever arm",
        "latex": "\\tau = rF\\sin\\theta",
        "variables": [
          {
            "symbol": "τ",
            "meaning": "torque (newton metres)"
          },
          {
            "symbol": "r",
            "meaning": "distance from pivot to application point (m)"
          },
          {
            "symbol": "F",
            "meaning": "applied force (newtons)"
          },
          {
            "symbol": "θ",
            "meaning": "angle between r and F"
          }
        ]
      },
      {
        "label": "Torque as a vector product",
        "latex": "\\vec{\\tau} = \\vec{r} \\times \\vec{F}",
        "variables": [
          {
            "symbol": "τ",
            "meaning": "torque vector (newton metres)"
          },
          {
            "symbol": "r",
            "meaning": "position vector from pivot to force (m)"
          },
          {
            "symbol": "F",
            "meaning": "force vector (newtons)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "static-equilibrium",
      "moment-of-inertia",
      "simple-machines",
      "angular-momentum"
    ],
    "wikipediaTitle": "Torque",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Torque — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Torque"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "rotational-kinematics",
    "title": "Rotational kinematics",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Rotational kinematics describes spinning motion using angular displacement, angular velocity, and angular acceleration, with equations that mirror the linear kinematic set. Every point on a rigid body shares the same angular quantities, but tangential speed grows with distance from the axis.",
    "aliases": [
      "angular kinematics",
      "rotational motion equations"
    ],
    "keyConcepts": [
      {
        "term": "Angular displacement",
        "definition": "The angle through which a body turns, measured in radians; one full revolution is 2π radians."
      },
      {
        "term": "Angular velocity",
        "definition": "The rate of change of angular displacement, ω = Δθ/Δt, measured in radians per second."
      },
      {
        "term": "Angular acceleration",
        "definition": "The rate of change of angular velocity, α = Δω/Δt; when it is constant the rotational kinematic equations apply."
      },
      {
        "term": "Rigid body",
        "definition": "A body whose parts keep fixed distances from one another, so all points turn through the same angle in the same time."
      }
    ],
    "equations": [
      {
        "label": "Angular velocity after time t",
        "latex": "\\omega = \\omega_0 + \\alpha t",
        "variables": [
          {
            "symbol": "ω",
            "meaning": "final angular velocity (rad/s)"
          },
          {
            "symbol": "ω₀",
            "meaning": "initial angular velocity (rad/s)"
          },
          {
            "symbol": "α",
            "meaning": "angular acceleration (rad/s²)"
          },
          {
            "symbol": "t",
            "meaning": "time interval (seconds)"
          }
        ]
      },
      {
        "label": "Angular displacement",
        "latex": "\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2",
        "variables": [
          {
            "symbol": "θ",
            "meaning": "angular displacement (radians)"
          },
          {
            "symbol": "ω₀",
            "meaning": "initial angular velocity (rad/s)"
          },
          {
            "symbol": "α",
            "meaning": "angular acceleration (rad/s²)"
          },
          {
            "symbol": "t",
            "meaning": "time interval (seconds)"
          }
        ]
      },
      {
        "label": "Angular velocity and displacement without time",
        "latex": "\\omega^2 = \\omega_0^2 + 2\\alpha\\theta",
        "variables": [
          {
            "symbol": "ω",
            "meaning": "final angular velocity (rad/s)"
          },
          {
            "symbol": "ω₀",
            "meaning": "initial angular velocity (rad/s)"
          },
          {
            "symbol": "α",
            "meaning": "angular acceleration (rad/s²)"
          },
          {
            "symbol": "θ",
            "meaning": "angular displacement (radians)"
          }
        ]
      },
      {
        "label": "Tangential speed",
        "latex": "v = r\\omega",
        "variables": [
          {
            "symbol": "v",
            "meaning": "tangential speed (metres per second)"
          },
          {
            "symbol": "r",
            "meaning": "distance from the rotation axis (metres)"
          },
          {
            "symbol": "ω",
            "meaning": "angular velocity (radians per second)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "circular-motion",
      "moment-of-inertia",
      "angular-momentum",
      "torque"
    ],
    "wikipediaTitle": "Rotation around a fixed axis",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Rotation around a fixed axis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Rotation_around_a_fixed_axis"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "moment-of-inertia",
    "title": "Moment of inertia",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Moment of inertia is a body's resistance to angular acceleration — the rotational analogue of mass. It depends both on how much mass the body has and on how that mass is distributed about the chosen axis, so one object can have different values for different axes.",
    "aliases": [
      "rotational inertia",
      "second moment of mass"
    ],
    "keyConcepts": [
      {
        "term": "Dependence on axis",
        "definition": "Mass far from the axis contributes more resistance, so a hoop resists spinning about its centre more than a solid disc of the same mass does."
      },
      {
        "term": "Parallel-axis theorem",
        "definition": "The moment of inertia about any axis equals the value about a parallel axis through the centre of mass plus Md², where d is the separation."
      },
      {
        "term": "Standard shapes",
        "definition": "Results such as ½MR² for a solid cylinder and MR² for a thin hoop about their central axes are tabulated and used to avoid integration."
      },
      {
        "term": "Rotational analogue of mass",
        "definition": "For a given torque, a larger moment of inertia gives a smaller angular acceleration, exactly as a larger mass gives a smaller linear acceleration."
      }
    ],
    "equations": [
      {
        "label": "Moment of inertia of a collection of masses",
        "latex": "I = \\sum m_i r_i^2",
        "variables": [
          {
            "symbol": "I",
            "meaning": "moment of inertia (kg·m²)"
          },
          {
            "symbol": "m_i",
            "meaning": "mass of the i-th particle (kilograms)"
          },
          {
            "symbol": "r_i",
            "meaning": "distance of that particle from the axis (m)"
          }
        ]
      },
      {
        "label": "Parallel-axis theorem",
        "latex": "I = I_{\\text{cm}} + Md^2",
        "variables": [
          {
            "symbol": "I",
            "meaning": "moment of inertia about the new axis (kg·m²)"
          },
          {
            "symbol": "I_cm",
            "meaning": "moment of inertia about a parallel axis through the centre of mass"
          },
          {
            "symbol": "M",
            "meaning": "total mass of the body (kilograms)"
          },
          {
            "symbol": "d",
            "meaning": "distance between the two parallel axes (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "torque",
      "angular-momentum",
      "rotational-kinematics"
    ],
    "wikipediaTitle": "Moment of inertia",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Moment of inertia — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Moment_of_inertia"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "angular-momentum",
    "title": "Angular momentum",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Angular momentum is the rotational analogue of linear momentum, equal to moment of inertia times angular velocity for a rigid body. When no net external torque acts, it is conserved — which is why a spinning skater speeds up when pulling her arms inward.",
    "aliases": [
      "moment of momentum"
    ],
    "keyConcepts": [
      {
        "term": "Angular momentum of a particle",
        "definition": "For a particle, L = r × p, so it depends on where the reference point is as well as on the particle's mass and velocity."
      },
      {
        "term": "Conservation",
        "definition": "With zero net external torque, total angular momentum stays constant; reducing the moment of inertia must then increase the angular velocity."
      },
      {
        "term": "Torque as rate of change",
        "definition": "The net torque on a system equals the rate of change of its angular momentum, the rotational form of Newton's second law."
      },
      {
        "term": "Spin and orbital",
        "definition": "Angular momentum can come from a body spinning about its own axis or from its motion around an external point, and both forms obey the same conservation law."
      }
    ],
    "equations": [
      {
        "label": "Angular momentum of a rigid body",
        "latex": "L = I\\omega",
        "variables": [
          {
            "symbol": "L",
            "meaning": "angular momentum (kg·m²/s)"
          },
          {
            "symbol": "I",
            "meaning": "moment of inertia about the axis (kg·m²)"
          },
          {
            "symbol": "ω",
            "meaning": "angular velocity (radians per second)"
          }
        ]
      },
      {
        "label": "Angular momentum of a particle",
        "latex": "\\vec{L} = \\vec{r} \\times \\vec{p}",
        "variables": [
          {
            "symbol": "L",
            "meaning": "angular momentum vector (kg·m²/s)"
          },
          {
            "symbol": "r",
            "meaning": "position vector from the reference point (m)"
          },
          {
            "symbol": "p",
            "meaning": "linear momentum of the particle (kg·m/s)"
          }
        ]
      },
      {
        "label": "Net torque and angular momentum",
        "latex": "\\tau_{\\text{net}} = \\frac{\\Delta L}{\\Delta t}",
        "variables": [
          {
            "symbol": "τ_net",
            "meaning": "net torque (newton metres)"
          },
          {
            "symbol": "ΔL",
            "meaning": "change in angular momentum (kg·m²/s)"
          },
          {
            "symbol": "Δt",
            "meaning": "time interval (seconds)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "moment-of-inertia",
      "torque",
      "rotational-kinematics",
      "conservation-of-momentum"
    ],
    "wikipediaTitle": "Angular momentum",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Angular momentum — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Angular_momentum"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "static-equilibrium",
    "title": "Static equilibrium",
    "subject": "physics",
    "category": "mechanics",
    "summary": "A rigid body is in static equilibrium when it remains at rest and the net force and net torque on it are both zero. Those two conditions let engineers solve for unknown support forces in beams, ladders, bridges, and other structures.",
    "aliases": [
      "mechanical equilibrium",
      "equilibrium of forces"
    ],
    "keyConcepts": [
      {
        "term": "Translational equilibrium",
        "definition": "The vector sum of all forces is zero, so the body's centre of mass has no acceleration."
      },
      {
        "term": "Rotational equilibrium",
        "definition": "The sum of torques about any axis is zero, so the body does not start to spin."
      },
      {
        "term": "Free-body diagram",
        "definition": "A sketch showing every external force acting on the body, with arrows for direction and labels for magnitude, used to write the equilibrium equations."
      },
      {
        "term": "Choosing a pivot",
        "definition": "Because the net torque is zero about any point in equilibrium, you may place the pivot wherever it removes an unknown force from the torque equation."
      }
    ],
    "equations": [
      {
        "label": "Force equilibrium",
        "latex": "\\sum \\vec{F} = 0",
        "variables": [
          {
            "symbol": "F",
            "meaning": "each external force acting on the body (newtons)"
          }
        ]
      },
      {
        "label": "Torque equilibrium",
        "latex": "\\sum \\vec{\\tau} = 0",
        "variables": [
          {
            "symbol": "τ",
            "meaning": "each external torque about the chosen axis (N·m)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "torque",
      "centre-of-mass",
      "newtons-laws-of-motion",
      "simple-machines"
    ],
    "wikipediaTitle": "Mechanical equilibrium",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Mechanical equilibrium — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mechanical_equilibrium"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "centre-of-mass",
    "title": "Centre of mass",
    "subject": "physics",
    "category": "mechanics",
    "summary": "The centre of mass is the mass-weighted average position of a body, the point that moves as though all its mass and all external forces acted there. In a uniform gravitational field it coincides with the centre of gravity.",
    "aliases": [
      "center of mass"
    ],
    "keyConcepts": [
      {
        "term": "Mass-weighted average",
        "definition": "Each particle's position is weighted by its mass, so the centre of mass lies closer to the heavier parts of an object."
      },
      {
        "term": "Motion of the centre of mass",
        "definition": "The centre of mass accelerates exactly as a single particle of the total mass would under the net external force, even when the body tumbles or breaks apart."
      },
      {
        "term": "Stability",
        "definition": "An object topples when its centre of mass falls outside its base of support, which is why a low centre of mass and a wide base make a body more stable."
      },
      {
        "term": "Centre of gravity",
        "definition": "The point where the total gravitational force may be considered to act; it coincides with the centre of mass when the field is uniform across the body."
      }
    ],
    "equations": [
      {
        "label": "Centre of mass of a system of particles",
        "latex": "\\vec{r}_{\\text{cm}} = \\frac{\\sum m_i \\vec{r}_i}{M}",
        "variables": [
          {
            "symbol": "r_cm",
            "meaning": "position vector of the centre of mass (metres)"
          },
          {
            "symbol": "m_i",
            "meaning": "mass of the i-th particle (kilograms)"
          },
          {
            "symbol": "r_i",
            "meaning": "position vector of the i-th particle (metres)"
          },
          {
            "symbol": "M",
            "meaning": "total mass of the system (kilograms)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "static-equilibrium",
      "momentum",
      "conservation-of-momentum"
    ],
    "wikipediaTitle": "Center of mass",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Center of mass — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Center_of_mass"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "universal-gravitation",
    "title": "Newton's law of universal gravitation",
    "subject": "physics",
    "category": "gravity",
    "summary": "Every pair of masses attracts with a force proportional to the product of the masses and inversely proportional to the square of the distance between their centres. With one constant, G, this law explains falling bodies, orbits, and tides.",
    "aliases": [
      "Newton's law of gravitation",
      "inverse-square law of gravity"
    ],
    "keyConcepts": [
      {
        "term": "Inverse-square law",
        "definition": "Tripling the distance between two masses reduces the gravitational force to one ninth, because the force falls as 1/r²."
      },
      {
        "term": "Gravitational constant",
        "definition": "G ≈ 6.674 × 10⁻¹¹ N·m²/kg² sets the strength of gravity; it is measured in a laboratory torsion-balance experiment rather than derived."
      },
      {
        "term": "Gravitational field strength",
        "definition": "The force per unit mass at a point; at Earth's surface it is about 9.8 N/kg, the same number as the acceleration of free fall."
      },
      {
        "term": "Superposition",
        "definition": "The gravitational forces from several bodies add as vectors, so a planet's net pull is the sum of the pulls from the Sun and its moons."
      }
    ],
    "equations": [
      {
        "label": "Newton's law of universal gravitation",
        "latex": "F = G\\frac{m_1 m_2}{r^2}",
        "variables": [
          {
            "symbol": "F",
            "meaning": "gravitational force between the masses (newtons)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant (≈ 6.674×10⁻¹¹ N·m²/kg²)"
          },
          {
            "symbol": "m₁, m₂",
            "meaning": "the two masses (kilograms)"
          },
          {
            "symbol": "r",
            "meaning": "distance between their centres (metres)"
          }
        ]
      },
      {
        "label": "Gravitational field strength outside a spherical mass",
        "latex": "g = \\frac{GM}{r^2}",
        "variables": [
          {
            "symbol": "g",
            "meaning": "gravitational field strength (N/kg)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant"
          },
          {
            "symbol": "M",
            "meaning": "mass of the central body (kilograms)"
          },
          {
            "symbol": "r",
            "meaning": "distance from its centre (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "orbital-motion",
      "keplers-laws",
      "escape-velocity",
      "newtons-laws-of-motion"
    ],
    "wikipediaTitle": "Newton's law of universal gravitation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Newton's law of universal gravitation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "orbital-motion",
    "title": "Orbital motion",
    "subject": "physics",
    "category": "gravity",
    "summary": "An orbit is continuous free fall in which a satellite's sideways speed carries it around a body instead of into it. For a circular orbit the required speed depends on the central mass and the orbital radius, not on the satellite's own mass.",
    "aliases": [
      "orbital revolution"
    ],
    "keyConcepts": [
      {
        "term": "Free fall",
        "definition": "An orbiting object is falling under gravity alone; its tangential velocity keeps moving it past the planet fast enough that the surface curves away beneath it."
      },
      {
        "term": "Circular orbital speed",
        "definition": "Setting gravitational force equal to the required centripetal force gives v = √(GM/r), so higher orbits need slower speeds."
      },
      {
        "term": "Orbital period",
        "definition": "The time for one revolution grows with radius as r^(3/2), which is Kepler's third law expressed with Newton's constant."
      },
      {
        "term": "Bound and unbound paths",
        "definition": "Below escape speed the path is a closed ellipse; at escape speed it becomes a parabola, and above it a hyperbola that never returns."
      }
    ],
    "equations": [
      {
        "label": "Circular orbital speed",
        "latex": "v = \\sqrt{\\frac{GM}{r}}",
        "variables": [
          {
            "symbol": "v",
            "meaning": "orbital speed (metres per second)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant"
          },
          {
            "symbol": "M",
            "meaning": "mass of the central body (kilograms)"
          },
          {
            "symbol": "r",
            "meaning": "orbital radius measured from the centre (m)"
          }
        ]
      },
      {
        "label": "Orbital period",
        "latex": "T = 2\\pi\\sqrt{\\frac{r^3}{GM}}",
        "variables": [
          {
            "symbol": "T",
            "meaning": "period of one orbit (seconds)"
          },
          {
            "symbol": "r",
            "meaning": "orbital radius (metres)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant"
          },
          {
            "symbol": "M",
            "meaning": "mass of the central body (kilograms)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "universal-gravitation",
      "keplers-laws",
      "escape-velocity",
      "centripetal-force"
    ],
    "wikipediaTitle": "Orbit",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Orbit — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Orbit"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "keplers-laws",
    "title": "Kepler's laws of planetary motion",
    "subject": "physics",
    "category": "gravity",
    "summary": "Kepler's three laws describe planetary orbits: each planet follows an ellipse with the Sun at one focus, sweeps equal areas in equal times, and has a period squared proportional to the semi-major axis cubed. Newton later showed all three follow from universal gravitation.",
    "aliases": [
      "Kepler's laws",
      "laws of planetary motion"
    ],
    "keyConcepts": [
      {
        "term": "Elliptical orbit",
        "definition": "A planet's path is an ellipse with the Sun at one focus, so its distance from the Sun varies between perihelion and aphelion."
      },
      {
        "term": "Equal areas in equal times",
        "definition": "A line from the Sun to a planet sweeps equal areas in equal intervals, meaning the planet moves fastest when closest to the Sun — a consequence of angular momentum conservation."
      },
      {
        "term": "Harmonic law",
        "definition": "The square of the orbital period is proportional to the cube of the semi-major axis, with the same constant for all planets orbiting the same body."
      },
      {
        "term": "Semi-major axis",
        "definition": "Half the longest diameter of the ellipse; for a circular orbit it equals the radius, and it sets the orbit's size and period."
      }
    ],
    "equations": [
      {
        "label": "Kepler's third law",
        "latex": "T^2 = \\frac{4\\pi^2}{GM}a^3",
        "variables": [
          {
            "symbol": "T",
            "meaning": "orbital period (seconds)"
          },
          {
            "symbol": "a",
            "meaning": "semi-major axis of the orbit (metres)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant"
          },
          {
            "symbol": "M",
            "meaning": "mass of the central body (kilograms)"
          }
        ]
      },
      {
        "label": "Kepler's second law (areal velocity)",
        "latex": "\\frac{dA}{dt} = \\frac{L}{2m}",
        "variables": [
          {
            "symbol": "dA/dt",
            "meaning": "area swept per unit time (m²/s)"
          },
          {
            "symbol": "L",
            "meaning": "orbital angular momentum (kg·m²/s)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the orbiting body (kilograms)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "orbital-motion",
      "universal-gravitation",
      "angular-momentum",
      "escape-velocity"
    ],
    "wikipediaTitle": "Kepler's laws of planetary motion",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Kepler's laws of planetary motion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "escape-velocity",
    "title": "Escape velocity",
    "subject": "physics",
    "category": "gravity",
    "summary": "Escape velocity is the minimum launch speed needed to coast away from a body forever without further propulsion, ignoring air resistance and rotation. It is √2 times the circular orbital speed at the same radius and does not depend on the direction of launch.",
    "aliases": [
      "escape speed",
      "second cosmic velocity"
    ],
    "keyConcepts": [
      {
        "term": "Energy condition",
        "definition": "Escape occurs when total mechanical energy is at least zero, so the kinetic energy at launch just balances the negative gravitational potential energy."
      },
      {
        "term": "Independence of mass and direction",
        "definition": "Both the kinetic and potential energies scale with the projectile's mass, so escape speed is the same for a pebble and a rocket, and any launch direction that clears the body and its atmosphere works."
      },
      {
        "term": "Earth's value",
        "definition": "Earth's escape speed is about 11.2 km/s; the Moon's is about 2.4 km/s because of its smaller mass and radius."
      },
      {
        "term": "Event horizons",
        "definition": "If a body is compact enough that escape speed reaches the speed of light, nothing can leave — the defining idea behind a black hole's event horizon."
      }
    ],
    "equations": [
      {
        "label": "Escape velocity from a spherical body",
        "latex": "v_{\\text{esc}} = \\sqrt{\\frac{2GM}{r}}",
        "variables": [
          {
            "symbol": "v_esc",
            "meaning": "escape speed (metres per second)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant"
          },
          {
            "symbol": "M",
            "meaning": "mass of the body (kilograms)"
          },
          {
            "symbol": "r",
            "meaning": "distance from the body's centre (metres)"
          }
        ]
      },
      {
        "label": "Escape velocity at a surface",
        "latex": "v_{\\text{esc}} = \\sqrt{2gr}",
        "variables": [
          {
            "symbol": "v_esc",
            "meaning": "escape speed (metres per second)"
          },
          {
            "symbol": "g",
            "meaning": "surface gravitational field strength (N/kg)"
          },
          {
            "symbol": "r",
            "meaning": "radius of the body (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "universal-gravitation",
      "orbital-motion",
      "keplers-laws",
      "conservation-of-mechanical-energy"
    ],
    "wikipediaTitle": "Escape velocity",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Escape velocity — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Escape_velocity"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "apparent-weight-and-weightlessness",
    "title": "Apparent weight and weightlessness",
    "subject": "physics",
    "category": "gravity",
    "summary": "Apparent weight is the normal force a floor or scale exerts on you, which differs from your true weight whenever you accelerate. In free fall that normal force drops to zero, so you feel weightless even though gravity is still pulling on you.",
    "aliases": [
      "effective weight",
      "apparent weightlessness"
    ],
    "keyConcepts": [
      {
        "term": "True weight versus apparent weight",
        "definition": "True weight is the gravitational force mg; apparent weight is what a scale reads, namely the normal force needed to support you."
      },
      {
        "term": "Accelerating lifts",
        "definition": "A lift accelerating upward makes the floor push harder and the scale read more; accelerating downward reduces the reading, and free fall makes it zero."
      },
      {
        "term": "Weightlessness in orbit",
        "definition": "Astronauts on the space station are in continuous free fall around Earth, so they and the station accelerate together and no normal force is needed."
      },
      {
        "term": "Feeling versus gravity",
        "definition": "Sensations of weight come from contact forces and fluid shifts in the body, not from gravity itself, which is why free fall feels like floating."
      }
    ],
    "equations": [
      {
        "label": "Apparent weight in a lift accelerating upward",
        "latex": "N = m(g + a)",
        "variables": [
          {
            "symbol": "N",
            "meaning": "normal force, i.e. scale reading (newtons)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the person (kilograms)"
          },
          {
            "symbol": "g",
            "meaning": "gravitational field strength (≈ 9.8 N/kg)"
          },
          {
            "symbol": "a",
            "meaning": "upward acceleration of the lift (m/s²)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "universal-gravitation",
      "orbital-motion",
      "buoyancy-and-archimedes-principle"
    ],
    "wikipediaTitle": "Apparent weight",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Apparent weight — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Apparent_weight"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "pressure-in-fluids",
    "title": "Pressure in fluids",
    "subject": "physics",
    "category": "fluids-and-buoyancy",
    "summary": "Pressure is force per unit area acting perpendicular to a surface, and in a static fluid it rises with depth because deeper fluid must support the weight of everything above it. At a given depth, pressure acts equally in all directions.",
    "aliases": [
      "fluid pressure",
      "hydrostatic pressure"
    ],
    "keyConcepts": [
      {
        "term": "Pressure definition",
        "definition": "Force divided by the area over which it acts, measured in pascals; one pascal is one newton per square metre."
      },
      {
        "term": "Hydrostatic pressure",
        "definition": "Pressure at depth h in a fluid of density ρ increases by ρgh, independent of the shape or width of the container."
      },
      {
        "term": "Gauge and absolute pressure",
        "definition": "Gauge pressure is measured relative to atmospheric pressure, while absolute pressure includes the atmosphere; a tyre gauge reads gauge pressure."
      },
      {
        "term": "Pascal's principle",
        "definition": "A pressure change applied to an enclosed fluid is transmitted undiminished throughout it, the basis of hydraulic lifts and brakes."
      }
    ],
    "equations": [
      {
        "label": "Pressure",
        "latex": "P = \\frac{F}{A}",
        "variables": [
          {
            "symbol": "P",
            "meaning": "pressure (pascals)"
          },
          {
            "symbol": "F",
            "meaning": "perpendicular force (newtons)"
          },
          {
            "symbol": "A",
            "meaning": "area over which the force acts (m²)"
          }
        ]
      },
      {
        "label": "Pressure at depth in a static fluid",
        "latex": "P = P_0 + \\rho g h",
        "variables": [
          {
            "symbol": "P",
            "meaning": "absolute pressure at depth h (pascals)"
          },
          {
            "symbol": "P₀",
            "meaning": "pressure at the surface (pascals)"
          },
          {
            "symbol": "ρ",
            "meaning": "density of the fluid (kg/m³)"
          },
          {
            "symbol": "h",
            "meaning": "depth below the surface (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "buoyancy-and-archimedes-principle",
      "density",
      "bernoullis-principle"
    ],
    "wikipediaTitle": "Pressure",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Pressure — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pressure"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "buoyancy-and-archimedes-principle",
    "title": "Buoyancy and Archimedes' principle",
    "subject": "physics",
    "category": "fluids-and-buoyancy",
    "summary": "Archimedes' principle states that a body immersed in a fluid feels an upward buoyant force equal to the weight of the fluid it displaces. An object floats when the displaced fluid can weigh as much as the object, which happens when its average density is lower than the fluid's.",
    "aliases": [
      "upthrust",
      "Archimedes' principle"
    ],
    "keyConcepts": [
      {
        "term": "Buoyant force",
        "definition": "The net upward force from the greater pressure on the bottom of a submerged object than on its top, equal to the weight of displaced fluid."
      },
      {
        "term": "Displaced volume",
        "definition": "Only the submerged volume displaces fluid, so a floating object displaces just enough to balance its weight and sits lower in a less dense liquid."
      },
      {
        "term": "Floating and sinking",
        "definition": "An object floats if its average density is less than the fluid's, sinks if greater, and remains neutrally suspended if the densities match."
      },
      {
        "term": "Apparent weight in a fluid",
        "definition": "A submerged object seems lighter because the buoyant force opposes its weight; the difference between true and apparent weight gives the buoyant force."
      }
    ],
    "equations": [
      {
        "label": "Archimedes' principle",
        "latex": "F_b = \\rho_{\\text{fluid}} V_{\\text{disp}} g",
        "variables": [
          {
            "symbol": "F_b",
            "meaning": "buoyant force (newtons)"
          },
          {
            "symbol": "ρ_fluid",
            "meaning": "density of the fluid (kg/m³)"
          },
          {
            "symbol": "V_disp",
            "meaning": "volume of fluid displaced (m³)"
          },
          {
            "symbol": "g",
            "meaning": "gravitational field strength (≈ 9.8 N/kg)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "density",
      "pressure-in-fluids",
      "apparent-weight-and-weightlessness"
    ],
    "wikipediaTitle": "Archimedes' principle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Archimedes' principle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Archimedes%27_principle"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "density",
    "title": "Density",
    "subject": "physics",
    "category": "fluids-and-buoyancy",
    "summary": "Density is mass per unit volume, a property that decides whether a material floats and how heavy a given volume of it is. Liquid water's density of about 1000 kg/m³ is a familiar reference, while gases are roughly a thousand times less dense.",
    "aliases": [
      "mass density",
      "volumetric mass density"
    ],
    "keyConcepts": [
      {
        "term": "Density definition",
        "definition": "Mass divided by volume, measured in kilograms per cubic metre; a material's density is a property of the substance, not of the sample's size."
      },
      {
        "term": "Relative density",
        "definition": "Also called specific gravity, the ratio of a material's density to that of water; a value below 1 means the material floats in water."
      },
      {
        "term": "Temperature effects",
        "definition": "Most substances expand when heated, so their density falls. Water is unusual in two ways: ice is less dense than liquid water, so it floats, and liquid water is densest at about 4 °C."
      },
      {
        "term": "Density of mixtures",
        "definition": "An alloy or solution's average density depends on the proportions and densities of its components, which is why seawater is denser than fresh water."
      }
    ],
    "equations": [
      {
        "label": "Density",
        "latex": "\\rho = \\frac{m}{V}",
        "variables": [
          {
            "symbol": "ρ",
            "meaning": "density (kilograms per cubic metre)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the sample (kilograms)"
          },
          {
            "symbol": "V",
            "meaning": "volume of the sample (cubic metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "buoyancy-and-archimedes-principle",
      "pressure-in-fluids",
      "states-of-matter"
    ],
    "wikipediaTitle": "Density",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Density — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Density"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "bernoullis-principle",
    "title": "Bernoulli's principle",
    "subject": "physics",
    "category": "fluids-and-buoyancy",
    "summary": "Bernoulli's principle relates pressure, speed, and height along a streamline in steady, ideal flow: where the fluid moves faster, its pressure is lower. It follows from conservation of energy and explains Venturi meters and carburettors, and contributes to how aerofoils generate lift.",
    "aliases": [
      "Bernoulli equation",
      "Bernoulli's theorem"
    ],
    "keyConcepts": [
      {
        "term": "Streamline flow",
        "definition": "A steady flow pattern in which each fluid particle follows a smooth path and the velocity at any fixed point does not change with time."
      },
      {
        "term": "Ideal-fluid assumptions",
        "definition": "The simple form assumes incompressible, non-viscous flow with no energy added or removed, so it can mislead in real turbulent or sticky fluids."
      },
      {
        "term": "Venturi effect",
        "definition": "Where a pipe narrows, the fluid speeds up and its pressure drops, allowing a constriction to measure flow rate or draw in fuel."
      },
      {
        "term": "Energy interpretation",
        "definition": "The equation is energy per unit volume: pressure energy, kinetic energy density, and gravitational potential energy density trade off along a streamline."
      }
    ],
    "equations": [
      {
        "label": "Bernoulli's equation",
        "latex": "P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}",
        "variables": [
          {
            "symbol": "P",
            "meaning": "static pressure (pascals)"
          },
          {
            "symbol": "ρ",
            "meaning": "fluid density (kg/m³)"
          },
          {
            "symbol": "v",
            "meaning": "flow speed (metres per second)"
          },
          {
            "symbol": "g",
            "meaning": "gravitational field strength (N/kg)"
          },
          {
            "symbol": "h",
            "meaning": "height above a reference level (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "pressure-in-fluids",
      "viscosity",
      "conservation-of-mechanical-energy"
    ],
    "wikipediaTitle": "Bernoulli's principle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Bernoulli's principle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bernoulli%27s_principle"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "viscosity",
    "title": "Viscosity",
    "subject": "physics",
    "category": "fluids-and-buoyancy",
    "summary": "Viscosity is a fluid's resistance to shear flow, caused by internal friction between layers moving at different speeds. Syrup is far more viscous than water, and for most liquids viscosity falls sharply as temperature rises.",
    "aliases": [
      "dynamic viscosity",
      "internal friction of fluids"
    ],
    "keyConcepts": [
      {
        "term": "Shear flow",
        "definition": "Adjacent fluid layers sliding past one another at different speeds; viscosity is the stress needed to maintain that velocity gradient."
      },
      {
        "term": "Dynamic and kinematic viscosity",
        "definition": "Dynamic viscosity μ relates stress to velocity gradient, while kinematic viscosity ν = μ/ρ also accounts for density and governs how quickly momentum diffuses."
      },
      {
        "term": "Newtonian fluids",
        "definition": "Fluids whose viscosity is the same at every shear rate; water and air are nearly Newtonian, while ketchup and paint are not."
      },
      {
        "term": "Terminal velocity",
        "definition": "A falling object stops accelerating when viscous drag plus buoyancy balances its weight, giving a steady terminal speed that smaller or more viscous cases reach sooner."
      }
    ],
    "equations": [
      {
        "label": "Newton's law of viscosity",
        "latex": "\\tau = \\mu\\frac{dv}{dy}",
        "variables": [
          {
            "symbol": "τ",
            "meaning": "shear stress (pascals)"
          },
          {
            "symbol": "μ",
            "meaning": "dynamic viscosity (pascal seconds)"
          },
          {
            "symbol": "dv/dy",
            "meaning": "velocity gradient across the flow (s⁻¹)"
          }
        ]
      },
      {
        "label": "Stokes drag on a small sphere",
        "latex": "F_d = 6\\pi\\mu r v",
        "variables": [
          {
            "symbol": "F_d",
            "meaning": "viscous drag force (newtons)"
          },
          {
            "symbol": "μ",
            "meaning": "dynamic viscosity of the fluid (Pa·s)"
          },
          {
            "symbol": "r",
            "meaning": "radius of the sphere (metres)"
          },
          {
            "symbol": "v",
            "meaning": "speed relative to the fluid (m/s)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "pressure-in-fluids",
      "bernoullis-principle",
      "surface-tension"
    ],
    "wikipediaTitle": "Viscosity",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Viscosity — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Viscosity"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "surface-tension",
    "title": "Surface tension",
    "subject": "physics",
    "category": "fluids-and-buoyancy",
    "summary": "Surface tension is the energy per unit area of a liquid surface, produced by cohesive forces pulling surface molecules inward. It lets light objects rest on water, pulls droplets into spheres, and drives capillary rise in narrow tubes.",
    "aliases": [
      "surface energy"
    ],
    "keyConcepts": [
      {
        "term": "Cohesion",
        "definition": "Attraction between like molecules; molecules at a surface have fewer neighbours above them, so they are pulled inward and the surface behaves like a stretched skin."
      },
      {
        "term": "Surface energy",
        "definition": "Creating new surface costs energy, so a liquid minimises area; surface tension is this energy per unit area, numerically equal to the force per unit length."
      },
      {
        "term": "Capillary action",
        "definition": "In a narrow tube, adhesion to the walls plus surface tension lifts liquid; the thinner the tube, the higher the rise, and mercury instead is depressed."
      },
      {
        "term": "Surfactants",
        "definition": "Soap molecules gather at the surface and lower surface tension, letting water wet surfaces and form films and bubbles more easily."
      }
    ],
    "equations": [
      {
        "label": "Surface tension as force per unit length",
        "latex": "\\gamma = \\frac{F}{L}",
        "variables": [
          {
            "symbol": "γ",
            "meaning": "surface tension (newtons per metre)"
          },
          {
            "symbol": "F",
            "meaning": "force along the surface (newtons)"
          },
          {
            "symbol": "L",
            "meaning": "length of the boundary it acts on (metres)"
          }
        ]
      },
      {
        "label": "Capillary rise in a narrow tube",
        "latex": "h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}",
        "variables": [
          {
            "symbol": "h",
            "meaning": "height the liquid rises (metres)"
          },
          {
            "symbol": "γ",
            "meaning": "surface tension (N/m)"
          },
          {
            "symbol": "θ",
            "meaning": "contact angle between liquid and tube wall"
          },
          {
            "symbol": "ρ",
            "meaning": "liquid density (kg/m³)"
          },
          {
            "symbol": "r",
            "meaning": "tube radius (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "viscosity",
      "density",
      "pressure-in-fluids"
    ],
    "wikipediaTitle": "Surface tension",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Surface tension — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Surface_tension"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "simple-harmonic-motion",
    "title": "Simple harmonic motion",
    "subject": "physics",
    "category": "mechanics",
    "summary": "Simple harmonic motion is oscillation under a restoring force proportional to displacement and directed back toward equilibrium. The displacement follows a sine or cosine, and the period is independent of amplitude for an ideal oscillator.",
    "aliases": [
      "harmonic oscillation"
    ],
    "keyConcepts": [
      {
        "term": "Restoring force",
        "definition": "A force that always points toward equilibrium and grows in proportion to how far the object has been displaced, F = −kx."
      },
      {
        "term": "Amplitude, period, and frequency",
        "definition": "Amplitude is the maximum displacement, period is the time for one full cycle, and frequency is the number of cycles per second; period and frequency are reciprocals."
      },
      {
        "term": "Phase",
        "definition": "The angle inside the sine or cosine that fixes where in the cycle the motion starts and how two oscillations line up in time."
      },
      {
        "term": "Energy exchange",
        "definition": "Kinetic energy is greatest at the equilibrium point and potential energy is greatest at the turning points, while the total stays constant without damping."
      }
    ],
    "equations": [
      {
        "label": "Defining condition for SHM",
        "latex": "a = -\\omega^2 x",
        "variables": [
          {
            "symbol": "a",
            "meaning": "acceleration (m/s²)"
          },
          {
            "symbol": "ω",
            "meaning": "angular frequency (radians per second)"
          },
          {
            "symbol": "x",
            "meaning": "displacement from equilibrium (metres)"
          }
        ]
      },
      {
        "label": "Displacement in SHM",
        "latex": "x = A\\cos(\\omega t + \\phi)",
        "variables": [
          {
            "symbol": "x",
            "meaning": "displacement at time t (metres)"
          },
          {
            "symbol": "A",
            "meaning": "amplitude (metres)"
          },
          {
            "symbol": "ω",
            "meaning": "angular frequency (rad/s)"
          },
          {
            "symbol": "φ",
            "meaning": "initial phase (radians)"
          }
        ]
      },
      {
        "label": "Period of a mass on a spring",
        "latex": "T = 2\\pi\\sqrt{\\frac{m}{k}}",
        "variables": [
          {
            "symbol": "T",
            "meaning": "period of oscillation (seconds)"
          },
          {
            "symbol": "m",
            "meaning": "oscillating mass (kilograms)"
          },
          {
            "symbol": "k",
            "meaning": "spring constant (newtons per metre)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "simple-pendulum",
      "waves-and-sound",
      "conservation-of-mechanical-energy"
    ],
    "wikipediaTitle": "Simple harmonic motion",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Simple harmonic motion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Simple_harmonic_motion"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "work-energy-theorem",
    "title": "Work-energy theorem",
    "subject": "physics",
    "category": "energy",
    "summary": "The work-energy theorem states that the net work done on an object equals its change in kinetic energy. It turns a force-and-distance calculation into a prediction of speed, and it holds even when the force varies or the path curves.",
    "aliases": [
      "work-energy principle",
      "net work theorem"
    ],
    "keyConcepts": [
      {
        "term": "Net work",
        "definition": "The work done by the vector sum of all forces, not by any single force; positive net work speeds an object up and negative net work slows it down."
      },
      {
        "term": "Derivation from Newton's second law",
        "definition": "Combining F = ma with the kinematic relation v² = u² + 2as gives W = ½mv² − ½mu² for a constant force along the motion."
      },
      {
        "term": "Variable forces",
        "definition": "For a force that changes along the path, work is the area under the force–distance graph, or the integral of F·ds."
      },
      {
        "term": "Conservative versus non-conservative work",
        "definition": "Work by gravity or a spring can be stored and recovered as potential energy, while work by friction removes mechanical energy permanently as heat."
      }
    ],
    "equations": [
      {
        "label": "Work-energy theorem",
        "latex": "W_{\\text{net}} = \\Delta KE = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2",
        "variables": [
          {
            "symbol": "W_net",
            "meaning": "net work done on the object (joules)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the object (kilograms)"
          },
          {
            "symbol": "u",
            "meaning": "initial speed (metres per second)"
          },
          {
            "symbol": "v",
            "meaning": "final speed (metres per second)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "kinematic-equations",
      "conservation-of-mechanical-energy",
      "power"
    ],
    "wikipediaTitle": "Work (physics)",
    "collectionSlugs": [],
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
    "slug": "power",
    "title": "Power (physics)",
    "subject": "physics",
    "category": "energy",
    "summary": "Power is the rate at which work is done or energy is transferred, measured in watts. One watt is one joule per second, and for an object moving at constant speed the mechanical power supplied equals force times velocity.",
    "aliases": [
      "rate of doing work",
      "mechanical power"
    ],
    "keyConcepts": [
      {
        "term": "Watt",
        "definition": "The SI unit of power, equal to one joule per second; a kilowatt is 1000 W and a horsepower is about 746 W."
      },
      {
        "term": "Average and instantaneous power",
        "definition": "Average power divides total work by total time, while instantaneous power is the limit as the interval shrinks, P = dW/dt."
      },
      {
        "term": "Force times velocity",
        "definition": "For a constant force pushing an object at velocity v, power is Fv cos θ, so a car needs more power to hold speed against drag at higher speed."
      },
      {
        "term": "Efficiency",
        "definition": "The ratio of useful output power to total input power. No heat engine reaches 100% (the Carnot limit bounds it), although devices such as electric heaters can convert nearly all of their electrical input into heat."
      }
    ],
    "equations": [
      {
        "label": "Average power",
        "latex": "P = \\frac{W}{t}",
        "variables": [
          {
            "symbol": "P",
            "meaning": "average power (watts)"
          },
          {
            "symbol": "W",
            "meaning": "work done or energy transferred (joules)"
          },
          {
            "symbol": "t",
            "meaning": "time interval (seconds)"
          }
        ]
      },
      {
        "label": "Mechanical power from force and velocity",
        "latex": "P = Fv\\cos\\theta",
        "variables": [
          {
            "symbol": "P",
            "meaning": "instantaneous power (watts)"
          },
          {
            "symbol": "F",
            "meaning": "applied force (newtons)"
          },
          {
            "symbol": "v",
            "meaning": "speed of the object (metres per second)"
          },
          {
            "symbol": "θ",
            "meaning": "angle between force and velocity"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "work-energy-theorem",
      "conservation-of-mechanical-energy"
    ],
    "wikipediaTitle": "Power (physics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Power (physics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Power_(physics)"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "conservation-of-mechanical-energy",
    "title": "Conservation of mechanical energy",
    "subject": "physics",
    "category": "energy",
    "summary": "When only gravity and springs do work, the sum of kinetic and potential energy stays constant and energy shifts between the two forms. Friction and drag are non-conservative, so they drain mechanical energy from the system as heat.",
    "aliases": [
      "mechanical energy conservation",
      "energy conservation in mechanics"
    ],
    "keyConcepts": [
      {
        "term": "Mechanical energy",
        "definition": "The sum of an object's kinetic energy and its gravitational and elastic potential energy at a given moment."
      },
      {
        "term": "Conservative forces",
        "definition": "Forces such as gravity and spring force for which the work done depends only on the endpoints, allowing a potential energy to be defined."
      },
      {
        "term": "Energy transformations",
        "definition": "A roller coaster trades potential energy for kinetic energy on the way down and back again on the next hill, keeping the total fixed in the absence of friction."
      },
      {
        "term": "Dissipation",
        "definition": "Non-conservative forces convert mechanical energy into thermal energy and sound, so the mechanical total falls while the overall energy of the universe is still conserved."
      }
    ],
    "equations": [
      {
        "label": "Conservation of mechanical energy",
        "latex": "KE_i + PE_i = KE_f + PE_f",
        "variables": [
          {
            "symbol": "KE",
            "meaning": "kinetic energy (joules)"
          },
          {
            "symbol": "PE",
            "meaning": "potential energy (joules)"
          },
          {
            "symbol": "i, f",
            "meaning": "initial and final states"
          }
        ]
      },
      {
        "label": "Mechanical energy of a projectile near Earth",
        "latex": "E = \\frac{1}{2}mv^2 + mgh",
        "variables": [
          {
            "symbol": "E",
            "meaning": "total mechanical energy (joules)"
          },
          {
            "symbol": "m",
            "meaning": "mass of the object (kilograms)"
          },
          {
            "symbol": "v",
            "meaning": "speed (metres per second)"
          },
          {
            "symbol": "g",
            "meaning": "gravitational field strength (≈ 9.8 N/kg)"
          },
          {
            "symbol": "h",
            "meaning": "height above the reference level (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "work-energy-theorem",
      "simple-harmonic-motion",
      "escape-velocity"
    ],
    "wikipediaTitle": "Mechanical energy",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Mechanical energy — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mechanical_energy"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "reflection-of-light",
    "title": "Reflection of light",
    "subject": "physics",
    "category": "optics",
    "summary": "Reflection is the change in direction of light when it strikes a surface and bounces back. For a smooth surface the angle of incidence equals the angle of reflection, both measured from the normal.",
    "aliases": [
      "light reflection",
      "mirror reflection"
    ],
    "keyConcepts": [
      {
        "term": "Law of reflection",
        "definition": "The incident ray, the reflected ray and the normal to the surface all lie in one plane, and the angle of incidence equals the angle of reflection."
      },
      {
        "term": "Specular and diffuse reflection",
        "definition": "A smooth surface reflects parallel rays in a single direction (specular). A rough surface scatters them in many directions (diffuse), though the law of reflection still holds at each microscopic patch."
      },
      {
        "term": "Image in a plane mirror",
        "definition": "A plane mirror forms an upright, same-size image as far behind the mirror as the object is in front. The image is virtual because the reflected rays only appear to diverge from it."
      }
    ],
    "equations": [
      {
        "label": "Law of reflection",
        "latex": "\\theta_i = \\theta_r",
        "variables": [
          {
            "symbol": "\\theta_i",
            "meaning": "angle of incidence, measured from the normal"
          },
          {
            "symbol": "\\theta_r",
            "meaning": "angle of reflection, measured from the normal"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "total-internal-reflection"
    ],
    "wikipediaTitle": "Reflection (physics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Reflection (physics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "refraction-and-snells-law",
    "title": "Refraction and Snell's law",
    "subject": "physics",
    "category": "optics",
    "summary": "Refraction is the bending of light as it crosses a boundary between media in which its speed differs. Snell's law relates the angles of incidence and refraction to the refractive indices of the two media.",
    "aliases": [
      "Snell's law",
      "law of refraction"
    ],
    "keyConcepts": [
      {
        "term": "Refractive index",
        "definition": "The ratio of the speed of light in vacuum to its speed in a medium, n = c/v. It is about 1.00 for air, 1.33 for water and 1.5 for ordinary glass."
      },
      {
        "term": "Cause of bending",
        "definition": "Light changes speed at the boundary, so the wavefronts tilt. Entering a denser medium at an angle, the ray bends toward the normal; leaving it, the ray bends away."
      },
      {
        "term": "Frequency is unchanged",
        "definition": "The frequency set by the source stays the same across the boundary, while the wavelength shortens in a denser medium because v = f lambda falls."
      }
    ],
    "equations": [
      {
        "label": "Snell's law",
        "latex": "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2",
        "variables": [
          {
            "symbol": "n_1, n_2",
            "meaning": "refractive indices of the first and second media"
          },
          {
            "symbol": "\\theta_1",
            "meaning": "angle of incidence in the first medium"
          },
          {
            "symbol": "\\theta_2",
            "meaning": "angle of refraction in the second medium"
          }
        ]
      },
      {
        "label": "Refractive index from wave speed",
        "latex": "n = \\frac{c}{v}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "refractive index of the medium (dimensionless)"
          },
          {
            "symbol": "c",
            "meaning": "speed of light in vacuum, about 3.00 x 10^8 m/s"
          },
          {
            "symbol": "v",
            "meaning": "speed of light in the medium"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "reflection-of-light",
      "lenses-and-image-formation",
      "total-internal-reflection"
    ],
    "wikipediaTitle": "Snell's law",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Snell's law — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Snell%27s_law"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "lenses-and-image-formation",
    "title": "Lenses and image formation",
    "subject": "physics",
    "category": "optics",
    "summary": "A lens refracts light at its curved surfaces to converge or diverge rays and form an image. The thin-lens equation links object distance, image distance and focal length, and magnification links the image and object sizes.",
    "aliases": [
      "thin lens",
      "lens imaging"
    ],
    "keyConcepts": [
      {
        "term": "Converging and diverging lenses",
        "definition": "A converging (convex) lens is thicker in the middle and brings parallel rays to a real focal point. A diverging (concave) lens is thinner in the middle and spreads rays so they appear to come from a virtual focal point."
      },
      {
        "term": "Real and virtual images",
        "definition": "A real image is formed where rays actually converge and can be projected onto a screen. A virtual image is formed where rays only appear to diverge from, and cannot be projected."
      },
      {
        "term": "Magnification",
        "definition": "The ratio of image height to object height, equal to minus the image distance divided by the object distance. A negative value means the image is inverted."
      }
    ],
    "equations": [
      {
        "label": "Thin-lens equation",
        "latex": "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}",
        "variables": [
          {
            "symbol": "f",
            "meaning": "focal length of the lens"
          },
          {
            "symbol": "d_o",
            "meaning": "distance from object to lens"
          },
          {
            "symbol": "d_i",
            "meaning": "distance from lens to image"
          }
        ]
      },
      {
        "label": "Magnification",
        "latex": "m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}",
        "variables": [
          {
            "symbol": "m",
            "meaning": "magnification (negative means inverted)"
          },
          {
            "symbol": "h_i",
            "meaning": "image height"
          },
          {
            "symbol": "h_o",
            "meaning": "object height"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "reflection-of-light"
    ],
    "wikipediaTitle": "Lens",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Lens — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lens"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "total-internal-reflection",
    "title": "Total internal reflection",
    "subject": "physics",
    "category": "optics",
    "summary": "Total internal reflection happens when light travelling in a denser medium meets a boundary at more than the critical angle, so no light refracts out and the ray is entirely reflected back inside.",
    "aliases": [
      "TIR",
      "total reflection"
    ],
    "keyConcepts": [
      {
        "term": "Critical angle",
        "definition": "The smallest angle of incidence in the denser medium for which the refracted ray would graze along the boundary (90 degrees). Beyond it, refraction cannot occur."
      },
      {
        "term": "Requirement for a denser medium",
        "definition": "Total internal reflection only occurs when light moves from a higher refractive index to a lower one, for example from glass (about 1.5) into air (about 1.0)."
      },
      {
        "term": "Optical fibres",
        "definition": "Light entering an optical fibre at a shallow angle strikes the core-cladding boundary above the critical angle and is reflected repeatedly, guiding the signal along the fibre with little loss."
      }
    ],
    "equations": [
      {
        "label": "Critical angle",
        "latex": "\\sin\\theta_c = \\frac{n_2}{n_1}",
        "variables": [
          {
            "symbol": "\\theta_c",
            "meaning": "critical angle measured from the normal"
          },
          {
            "symbol": "n_1",
            "meaning": "refractive index of the denser medium"
          },
          {
            "symbol": "n_2",
            "meaning": "refractive index of the less dense medium"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "reflection-of-light"
    ],
    "wikipediaTitle": "Total internal reflection",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Total internal reflection — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Total_internal_reflection"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "interference-of-light",
    "title": "Interference of light",
    "subject": "physics",
    "category": "optics",
    "summary": "Interference is the superposition of light waves, producing bright and dark fringes where crests reinforce or cancel. Young's double-slit experiment demonstrated it and supported the wave model of light.",
    "aliases": [
      "light interference",
      "optical interference"
    ],
    "keyConcepts": [
      {
        "term": "Superposition and coherence",
        "definition": "Where two waves meet, their electric fields add. Stable interference fringes require coherent sources with a constant phase relationship, such as light from one source split into two paths."
      },
      {
        "term": "Constructive and destructive interference",
        "definition": "Waves in phase with a path difference of a whole number of wavelengths reinforce to give bright fringes. A half-wavelength difference cancels them to give dark fringes."
      },
      {
        "term": "Fringe spacing",
        "definition": "For a double slit, the bright fringes are evenly spaced on a distant screen, with spacing equal to wavelength times screen distance divided by slit separation."
      }
    ],
    "equations": [
      {
        "label": "Double-slit maxima",
        "latex": "d\\sin\\theta = m\\lambda",
        "variables": [
          {
            "symbol": "d",
            "meaning": "separation between the two slits"
          },
          {
            "symbol": "\\theta",
            "meaning": "angle to the m-th bright fringe"
          },
          {
            "symbol": "m",
            "meaning": "fringe order: 0, 1, 2, ..."
          },
          {
            "symbol": "\\lambda",
            "meaning": "wavelength of the light"
          }
        ]
      },
      {
        "label": "Fringe spacing on a distant screen",
        "latex": "\\Delta y = \\frac{\\lambda L}{d}",
        "variables": [
          {
            "symbol": "\\Delta y",
            "meaning": "spacing between adjacent bright fringes"
          },
          {
            "symbol": "L",
            "meaning": "distance from slits to screen"
          },
          {
            "symbol": "\\lambda",
            "meaning": "wavelength of the light"
          },
          {
            "symbol": "d",
            "meaning": "slit separation"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "diffraction",
      "standing-waves"
    ],
    "wikipediaTitle": "Wave interference",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Wave interference — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "diffraction",
    "title": "Diffraction",
    "subject": "physics",
    "category": "optics",
    "summary": "Diffraction is the spreading of waves around obstacles and through openings, and it becomes pronounced when the opening is comparable in size to the wavelength. It sets the resolution limit of optical instruments.",
    "aliases": [
      "wave diffraction",
      "bending of waves"
    ],
    "keyConcepts": [
      {
        "term": "Huygens' principle",
        "definition": "Every point on a wavefront acts as a source of secondary spherical wavelets; their envelope gives the next wavefront, which explains how waves bend into the shadow of an obstacle."
      },
      {
        "term": "Single-slit pattern",
        "definition": "Light through a narrow slit produces a broad central maximum with dimmer, wider secondary maxima. Dark minima occur where light from different parts of the slit cancels."
      },
      {
        "term": "Resolution limit",
        "definition": "Because a circular aperture spreads a point source into a diffraction disk, two nearby stars can only be distinguished when their angular separation exceeds about 1.22 lambda / D."
      }
    ],
    "equations": [
      {
        "label": "Single-slit minima",
        "latex": "a\\sin\\theta = m\\lambda",
        "variables": [
          {
            "symbol": "a",
            "meaning": "width of the slit"
          },
          {
            "symbol": "\\theta",
            "meaning": "angle to the m-th dark minimum"
          },
          {
            "symbol": "m",
            "meaning": "non-zero integer order"
          },
          {
            "symbol": "\\lambda",
            "meaning": "wavelength of the light"
          }
        ]
      },
      {
        "label": "Rayleigh resolution criterion",
        "latex": "\\theta_{min} \\approx 1.22\\frac{\\lambda}{D}",
        "variables": [
          {
            "symbol": "\\theta_{min}",
            "meaning": "smallest resolvable angular separation"
          },
          {
            "symbol": "\\lambda",
            "meaning": "wavelength of the light"
          },
          {
            "symbol": "D",
            "meaning": "diameter of the circular aperture"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "interference-of-light",
      "refraction-and-snells-law",
      "waves-and-sound"
    ],
    "wikipediaTitle": "Diffraction",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Diffraction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "polarization",
    "title": "Polarization",
    "subject": "physics",
    "category": "optics",
    "summary": "Polarization describes the orientation of a light wave's oscillating electric field. Unpolarized light can be polarized by filters, by reflection at Brewster's angle, or by scattering, and crossed filters block it.",
    "aliases": [
      "light polarization",
      "polarisation"
    ],
    "keyConcepts": [
      {
        "term": "Transverse polarization",
        "definition": "Light is a transverse electromagnetic wave, so its electric field oscillates perpendicular to the direction of travel. Polarization names the direction of that oscillation."
      },
      {
        "term": "Polarizing filters",
        "definition": "A polarizing filter transmits only the field component along its axis. Two ideal filters with axes at 90 degrees transmit no light at all."
      },
      {
        "term": "Polarization by reflection",
        "definition": "At Brewster's angle, reflected light is completely polarized parallel to the reflecting surface, which is why polarizing sunglasses reduce glare from water and roads."
      }
    ],
    "equations": [
      {
        "label": "Malus's law",
        "latex": "I = I_0 \\cos^2\\theta",
        "variables": [
          {
            "symbol": "I",
            "meaning": "intensity transmitted by the analyzer"
          },
          {
            "symbol": "I_0",
            "meaning": "intensity of the linearly polarized light before the analyzer"
          },
          {
            "symbol": "\\theta",
            "meaning": "angle between the polarization directions"
          }
        ]
      },
      {
        "label": "Brewster's angle",
        "latex": "\\tan\\theta_B = \\frac{n_2}{n_1}",
        "variables": [
          {
            "symbol": "\\theta_B",
            "meaning": "angle of incidence giving fully polarized reflection"
          },
          {
            "symbol": "n_1",
            "meaning": "refractive index of the first medium"
          },
          {
            "symbol": "n_2",
            "meaning": "refractive index of the second medium"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "interference-of-light",
      "waves-and-sound"
    ],
    "wikipediaTitle": "Polarization (waves)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Polarization (waves) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Polarization_(waves)"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "doppler-effect",
    "title": "Doppler effect",
    "subject": "physics",
    "category": "waves-and-sound",
    "summary": "The Doppler effect is the change in observed frequency of a wave when the source and observer move relative to each other: an approaching source sounds higher and a receding source sounds lower.",
    "aliases": [
      "Doppler shift",
      "Doppler principle"
    ],
    "keyConcepts": [
      {
        "term": "Compression of wavefronts",
        "definition": "A source moving toward an observer emits each successive crest from a slightly nearer point, so the crests arrive closer together and the observed frequency rises; moving away stretches them."
      },
      {
        "term": "Motion of source versus observer",
        "definition": "Moving the source changes the wavelength in the medium, while moving the observer changes how often crests are crossed. The two produce different frequency shifts at the same relative speed."
      },
      {
        "term": "Redshift and radar",
        "definition": "Astronomers use the shift of spectral lines toward longer wavelengths (redshift) to measure receding galaxies, and police radar uses the shift of reflected microwaves to measure car speeds."
      }
    ],
    "equations": [
      {
        "label": "Source moving toward a stationary observer",
        "latex": "f' = f_0\\frac{v}{v - v_s}",
        "variables": [
          {
            "symbol": "f'",
            "meaning": "observed frequency"
          },
          {
            "symbol": "f_0",
            "meaning": "frequency emitted by the source"
          },
          {
            "symbol": "v",
            "meaning": "speed of the wave in the medium"
          },
          {
            "symbol": "v_s",
            "meaning": "speed of the source toward the observer"
          }
        ]
      },
      {
        "label": "Observer moving toward a stationary source",
        "latex": "f' = f_0\\frac{v + v_o}{v}",
        "variables": [
          {
            "symbol": "f'",
            "meaning": "observed frequency"
          },
          {
            "symbol": "f_0",
            "meaning": "frequency emitted by the source"
          },
          {
            "symbol": "v",
            "meaning": "speed of the wave in the medium"
          },
          {
            "symbol": "v_o",
            "meaning": "speed of the observer toward the source"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "waves-and-sound",
      "speed-of-sound",
      "standing-waves"
    ],
    "wikipediaTitle": "Doppler effect",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Doppler effect — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Doppler_effect"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "resonance",
    "title": "Resonance",
    "subject": "physics",
    "category": "waves-and-sound",
    "summary": "Resonance occurs when a system is driven at one of its natural frequencies, so energy transfer is maximal and the oscillation amplitude grows. It underlies musical instruments, tuned radio circuits and structural vibrations.",
    "aliases": [
      "resonant vibration"
    ],
    "keyConcepts": [
      {
        "term": "Natural frequency",
        "definition": "Every oscillating system has frequencies at which it vibrates freely. Driving it at one of those frequencies adds energy in step with its motion and builds up a large amplitude."
      },
      {
        "term": "Damping",
        "definition": "Friction or resistance removes energy each cycle, so real resonances have a finite peak height and width. Heavier damping lowers and broadens the resonance curve."
      },
      {
        "term": "Everyday examples",
        "definition": "Pushing a swing in time with its motion, a tuning fork exciting a matched fork, and a radio circuit tuned to one station's frequency are all driven resonant systems."
      }
    ],
    "equations": [
      {
        "label": "Natural frequency of a mass on a spring",
        "latex": "f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}",
        "variables": [
          {
            "symbol": "f_0",
            "meaning": "natural frequency in hertz"
          },
          {
            "symbol": "k",
            "meaning": "spring constant in newtons per metre"
          },
          {
            "symbol": "m",
            "meaning": "oscillating mass in kilograms"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "standing-waves",
      "waves-and-sound",
      "simple-pendulum"
    ],
    "wikipediaTitle": "Resonance",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Resonance — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Resonance"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "standing-waves",
    "title": "Standing waves",
    "subject": "physics",
    "category": "waves-and-sound",
    "summary": "A standing wave forms when two waves of the same frequency travel in opposite directions and superpose, creating fixed nodes and antinodes. Strings and air columns support only certain resonant wavelengths.",
    "aliases": [
      "stationary wave",
      "standing wave pattern"
    ],
    "keyConcepts": [
      {
        "term": "Nodes and antinodes",
        "definition": "Nodes are points that never move because the two waves always cancel there. Antinodes are points of maximum oscillation, halfway between adjacent nodes."
      },
      {
        "term": "Boundary conditions",
        "definition": "A fixed end must be a node, while a free end or an open pipe end is an antinode. These constraints allow only wavelengths that fit the length exactly."
      },
      {
        "term": "Harmonics",
        "definition": "The allowed frequencies form a series. A string fixed at both ends has a fundamental f = v/2L and higher harmonics at 2f, 3f, and so on, which gives instruments their timbre."
      }
    ],
    "equations": [
      {
        "label": "Wavelengths allowed on a string fixed at both ends",
        "latex": "L = n\\frac{\\lambda}{2}",
        "variables": [
          {
            "symbol": "L",
            "meaning": "length of the string"
          },
          {
            "symbol": "n",
            "meaning": "harmonic number 1, 2, 3, ..."
          },
          {
            "symbol": "\\lambda",
            "meaning": "wavelength of the standing wave"
          }
        ]
      },
      {
        "label": "Harmonic frequencies of a fixed string",
        "latex": "f_n = \\frac{nv}{2L}",
        "variables": [
          {
            "symbol": "f_n",
            "meaning": "frequency of the n-th harmonic"
          },
          {
            "symbol": "n",
            "meaning": "harmonic number"
          },
          {
            "symbol": "v",
            "meaning": "wave speed on the string"
          },
          {
            "symbol": "L",
            "meaning": "length of the string"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "waves-and-sound",
      "resonance",
      "speed-of-sound"
    ],
    "wikipediaTitle": "Standing wave",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Standing wave — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Standing_wave"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "speed-of-sound",
    "title": "Speed of sound",
    "subject": "physics",
    "category": "waves-and-sound",
    "summary": "The speed of sound is the speed at which pressure disturbances travel through a medium. It is about 343 m/s in air at 20 degrees Celsius, higher in liquids and solids, and it does not depend on loudness.",
    "aliases": [
      "sound speed",
      "acoustic velocity"
    ],
    "keyConcepts": [
      {
        "term": "Dependence on the medium",
        "definition": "Sound needs a material medium and travels faster when particles are closer and stiffer: roughly 343 m/s in air, about 1480 m/s in water and about 5000 m/s in steel."
      },
      {
        "term": "Temperature dependence in air",
        "definition": "Warmer air is less dense at the same pressure, so sound speeds up by roughly 0.6 m/s for each degree Celsius above 0 degrees."
      },
      {
        "term": "Relation to frequency and wavelength",
        "definition": "For any wave, speed equals frequency times wavelength. As a sound wave passes into a medium where it moves faster, its frequency stays fixed and its wavelength increases."
      }
    ],
    "equations": [
      {
        "label": "Wave speed relation",
        "latex": "v = f\\lambda",
        "variables": [
          {
            "symbol": "v",
            "meaning": "speed of sound in the medium"
          },
          {
            "symbol": "f",
            "meaning": "frequency of the sound"
          },
          {
            "symbol": "\\lambda",
            "meaning": "wavelength of the sound"
          }
        ]
      },
      {
        "label": "Speed in a fluid or gas (bulk modulus B)",
        "latex": "v = \\sqrt{\\frac{B}{\\rho}}",
        "variables": [
          {
            "symbol": "B",
            "meaning": "bulk modulus of the medium"
          },
          {
            "symbol": "\\rho",
            "meaning": "density of the medium"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "waves-and-sound",
      "sound-intensity-and-decibels",
      "doppler-effect"
    ],
    "wikipediaTitle": "Speed of sound",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Speed of sound — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Speed_of_sound"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "sound-intensity-and-decibels",
    "title": "Sound intensity and decibels",
    "subject": "physics",
    "category": "waves-and-sound",
    "summary": "Sound intensity is the power a sound wave carries per unit area. Because the ear responds over an enormous range, intensity is usually expressed on a logarithmic decibel scale, where each 10 dB means ten times the intensity.",
    "aliases": [
      "sound level",
      "acoustic intensity"
    ],
    "keyConcepts": [
      {
        "term": "Intensity and power",
        "definition": "Intensity is power divided by area, measured in watts per square metre. A point source spreading evenly has intensity falling with the square of distance."
      },
      {
        "term": "Threshold of hearing",
        "definition": "The reference intensity I0 is 1 x 10^-12 W/m^2, roughly the quietest sound a healthy young ear can detect at 1 kHz. A whisper is near 20 dB and normal speech near 60 dB."
      },
      {
        "term": "Logarithmic scale",
        "definition": "Adding 10 dB multiplies intensity by ten, so 20 dB is a hundred times more intense than 0 dB. This matches the ear's roughly logarithmic response to loudness."
      }
    ],
    "equations": [
      {
        "label": "Sound level in decibels",
        "latex": "\\beta = 10\\log_{10}\\!\\left(\\frac{I}{I_0}\\right)",
        "variables": [
          {
            "symbol": "\\beta",
            "meaning": "sound level in decibels (dB)"
          },
          {
            "symbol": "I",
            "meaning": "sound intensity in W/m^2"
          },
          {
            "symbol": "I_0",
            "meaning": "reference intensity, 1 x 10^-12 W/m^2"
          }
        ]
      },
      {
        "label": "Inverse-square intensity from a point source",
        "latex": "I = \\frac{P}{4\\pi r^2}",
        "variables": [
          {
            "symbol": "I",
            "meaning": "intensity at distance r"
          },
          {
            "symbol": "P",
            "meaning": "acoustic power emitted by the source"
          },
          {
            "symbol": "r",
            "meaning": "distance from the source"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "waves-and-sound",
      "speed-of-sound",
      "resonance"
    ],
    "wikipediaTitle": "Sound intensity",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Sound intensity — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sound_intensity"
      },
      {
        "label": "OpenStax University Physics, Volume 1",
        "url": "https://openstax.org/books/university-physics-volume-1"
      }
    ]
  },
  {
    "slug": "electric-charge",
    "title": "Electric charge",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "Electric charge is a fundamental property of matter carried by protons and electrons. Like charges repel, opposite charges attract, and the total charge of an isolated system is conserved.",
    "aliases": [
      "electrostatic charge",
      "net charge"
    ],
    "keyConcepts": [
      {
        "term": "Two kinds of charge",
        "definition": "Protons carry positive charge and electrons carry negative charge of the same magnitude. Objects become charged by gaining or losing electrons, not by creating charge."
      },
      {
        "term": "Quantisation",
        "definition": "Charge comes in whole multiples of the elementary charge e, about 1.60 x 10^-19 C. The charge on any isolated particle is an integer multiple of this value."
      },
      {
        "term": "Conservation of charge",
        "definition": "Charge can be transferred between objects but not created or destroyed. In an isolated system the algebraic sum of all charges stays constant."
      }
    ],
    "equations": [
      {
        "label": "Quantised charge",
        "latex": "q = ne",
        "variables": [
          {
            "symbol": "q",
            "meaning": "total charge in coulombs"
          },
          {
            "symbol": "n",
            "meaning": "integer number of elementary charges"
          },
          {
            "symbol": "e",
            "meaning": "elementary charge, about 1.60 x 10^-19 C"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "coulombs-law",
      "electric-field",
      "electric-circuits"
    ],
    "wikipediaTitle": "Electric charge",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electric charge — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electric_charge"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "coulombs-law",
    "title": "Coulomb's law",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "Coulomb's law gives the electrostatic force between two point charges: it is proportional to the product of the charges and inversely proportional to the square of their separation.",
    "aliases": [
      "Coulomb's inverse-square law",
      "electrostatic force law"
    ],
    "keyConcepts": [
      {
        "term": "Inverse-square dependence",
        "definition": "Doubling the distance reduces the force to one quarter, and tripling it to one ninth. The force acts along the line joining the charges and is repulsive for like signs."
      },
      {
        "term": "Coulomb constant",
        "definition": "The constant k equals 1/(4 pi epsilon_0), about 8.99 x 10^9 N m^2/C^2. The permittivity epsilon_0 describes how strongly a vacuum permits electric fields."
      },
      {
        "term": "Superposition",
        "definition": "For more than two charges, the total force on one charge is the vector sum of the forces from each of the others, taken one pair at a time."
      }
    ],
    "equations": [
      {
        "label": "Coulomb's law",
        "latex": "F = k\\frac{|q_1 q_2|}{r^2}",
        "variables": [
          {
            "symbol": "F",
            "meaning": "magnitude of the electrostatic force in newtons"
          },
          {
            "symbol": "k",
            "meaning": "Coulomb constant, about 8.99 x 10^9 N m^2/C^2"
          },
          {
            "symbol": "q_1, q_2",
            "meaning": "magnitudes of the two charges in coulombs"
          },
          {
            "symbol": "r",
            "meaning": "distance between the charges in metres"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electric-charge",
      "electric-field",
      "electric-potential-and-voltage"
    ],
    "wikipediaTitle": "Coulomb's law",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Coulomb's law — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Coulomb%27s_law"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "electric-field",
    "title": "Electric field",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "An electric field surrounds every charge and describes the force a unit positive charge would feel at each point. Field lines point away from positive charges and toward negative ones.",
    "aliases": [
      "E-field",
      "electrostatic field"
    ],
    "keyConcepts": [
      {
        "term": "Field strength",
        "definition": "The electric field at a point is the force per unit positive charge placed there, measured in newtons per coulomb or volts per metre. It is a vector."
      },
      {
        "term": "Field of a point charge",
        "definition": "A point charge produces a field pointing radially outward for positive charge and inward for negative charge, falling off as the inverse square of distance."
      },
      {
        "term": "Uniform fields",
        "definition": "Between two large parallel plates with opposite charge, the field is nearly uniform: equally spaced parallel lines with strength equal to voltage divided by plate separation."
      }
    ],
    "equations": [
      {
        "label": "Electric field definition",
        "latex": "\\vec{E} = \\frac{\\vec{F}}{q}",
        "variables": [
          {
            "symbol": "\\vec{E}",
            "meaning": "electric field vector in N/C"
          },
          {
            "symbol": "\\vec{F}",
            "meaning": "force on a test charge"
          },
          {
            "symbol": "q",
            "meaning": "test charge in coulombs"
          }
        ]
      },
      {
        "label": "Field of a point charge",
        "latex": "E = k\\frac{|q|}{r^2}",
        "variables": [
          {
            "symbol": "E",
            "meaning": "electric field magnitude"
          },
          {
            "symbol": "k",
            "meaning": "Coulomb constant, about 8.99 x 10^9 N m^2/C^2"
          },
          {
            "symbol": "q",
            "meaning": "source charge"
          },
          {
            "symbol": "r",
            "meaning": "distance from the charge"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electric-charge",
      "coulombs-law",
      "electric-potential-and-voltage"
    ],
    "wikipediaTitle": "Electric field",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electric field — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electric_field"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "electric-potential-and-voltage",
    "title": "Electric potential and voltage",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "Electric potential is the potential energy per unit charge at a point in a field, and voltage is the potential difference between two points. Positive charges move spontaneously from higher to lower potential.",
    "aliases": [
      "voltage",
      "electric potential difference"
    ],
    "keyConcepts": [
      {
        "term": "Potential and potential energy",
        "definition": "Electric potential V is potential energy U per unit charge, so moving a charge q through a potential difference V changes its energy by qV. One volt is one joule per coulomb."
      },
      {
        "term": "Equipotential surfaces",
        "definition": "All points at the same potential form an equipotential surface. Its surface is always perpendicular to electric field lines, and no work is done moving a charge along it."
      },
      {
        "term": "Batteries and circuits",
        "definition": "A battery maintains a potential difference between its terminals by doing chemical work, and that voltage drives current through an external circuit."
      }
    ],
    "equations": [
      {
        "label": "Potential as energy per charge",
        "latex": "V = \\frac{U}{q}",
        "variables": [
          {
            "symbol": "V",
            "meaning": "electric potential in volts"
          },
          {
            "symbol": "U",
            "meaning": "electric potential energy in joules"
          },
          {
            "symbol": "q",
            "meaning": "charge in coulombs"
          }
        ]
      },
      {
        "label": "Potential near a point charge",
        "latex": "V = k\\frac{q}{r}",
        "variables": [
          {
            "symbol": "V",
            "meaning": "potential relative to infinity"
          },
          {
            "symbol": "k",
            "meaning": "Coulomb constant, about 8.99 x 10^9 N m^2/C^2"
          },
          {
            "symbol": "q",
            "meaning": "source charge"
          },
          {
            "symbol": "r",
            "meaning": "distance from the charge"
          }
        ]
      },
      {
        "label": "Uniform field and voltage",
        "latex": "\\Delta V = -E\\Delta d",
        "variables": [
          {
            "symbol": "\\Delta V",
            "meaning": "potential difference between two points"
          },
          {
            "symbol": "E",
            "meaning": "uniform electric field strength"
          },
          {
            "symbol": "\\Delta d",
            "meaning": "separation measured along the field"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electric-field",
      "capacitance",
      "electric-circuits"
    ],
    "wikipediaTitle": "Electric potential",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electric potential — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electric_potential"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "capacitance",
    "title": "Capacitance",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "Capacitance is a device's ability to store charge for a given potential difference. A parallel-plate capacitor stores more charge with larger plates, smaller separation, and a dielectric between them.",
    "aliases": [
      "electric capacitance",
      "capacitor capacitance"
    ],
    "keyConcepts": [
      {
        "term": "Charge storage",
        "definition": "A capacitor consists of two conductors separated by an insulator. Applying a voltage puts equal and opposite charges on the plates, and capacitance is the charge divided by that voltage."
      },
      {
        "term": "Dielectrics",
        "definition": "Inserting an insulating material between the plates reduces the field for the same charge, multiplying capacitance by the dielectric constant. Air gives about 1, while some ceramics give hundreds."
      },
      {
        "term": "Stored energy",
        "definition": "A charged capacitor stores energy in its electric field. The energy is one half times capacitance times voltage squared, so doubling the voltage quadruples the stored energy."
      }
    ],
    "equations": [
      {
        "label": "Definition of capacitance",
        "latex": "C = \\frac{Q}{V}",
        "variables": [
          {
            "symbol": "C",
            "meaning": "capacitance in farads"
          },
          {
            "symbol": "Q",
            "meaning": "charge stored on one plate in coulombs"
          },
          {
            "symbol": "V",
            "meaning": "potential difference between the plates"
          }
        ]
      },
      {
        "label": "Parallel-plate capacitor",
        "latex": "C = \\frac{\\varepsilon_0 A}{d}",
        "variables": [
          {
            "symbol": "\\varepsilon_0",
            "meaning": "permittivity of free space"
          },
          {
            "symbol": "A",
            "meaning": "area of each plate"
          },
          {
            "symbol": "d",
            "meaning": "plate separation"
          }
        ]
      },
      {
        "label": "Energy stored",
        "latex": "U = \\frac{1}{2}CV^2",
        "variables": [
          {
            "symbol": "U",
            "meaning": "stored electric potential energy in joules"
          },
          {
            "symbol": "C",
            "meaning": "capacitance in farads"
          },
          {
            "symbol": "V",
            "meaning": "voltage across the capacitor"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electric-potential-and-voltage",
      "electric-field",
      "series-and-parallel-circuits"
    ],
    "wikipediaTitle": "Capacitance",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Capacitance — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Capacitance"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "electrical-resistance-and-resistivity",
    "title": "Electrical resistance and resistivity",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "Resistance measures how strongly a component opposes current, while resistivity is an intrinsic property of the material. For a uniform wire, resistance grows with length and falls with cross-sectional area.",
    "aliases": [
      "resistivity",
      "ohmic resistance"
    ],
    "keyConcepts": [
      {
        "term": "Resistance versus resistivity",
        "definition": "Resistance depends on the object's shape and size as well as its material; resistivity is a material property measured in ohm metres. Copper has a resistivity near 1.7 x 10^-8 ohm metres."
      },
      {
        "term": "Ohm's law",
        "definition": "For an ohmic conductor at constant temperature, current is proportional to voltage, so resistance is constant. Many real components, such as filament lamps, are non-ohmic."
      },
      {
        "term": "Power dissipation",
        "definition": "Current passing through resistance converts electrical energy into heat. The power dissipated equals current times voltage, or current squared times resistance."
      }
    ],
    "equations": [
      {
        "label": "Resistance from resistivity",
        "latex": "R = \\rho\\frac{L}{A}",
        "variables": [
          {
            "symbol": "R",
            "meaning": "resistance in ohms"
          },
          {
            "symbol": "\\rho",
            "meaning": "resistivity of the material in ohm metres"
          },
          {
            "symbol": "L",
            "meaning": "length of the conductor"
          },
          {
            "symbol": "A",
            "meaning": "cross-sectional area"
          }
        ]
      },
      {
        "label": "Ohm's law",
        "latex": "V = IR",
        "variables": [
          {
            "symbol": "V",
            "meaning": "potential difference across the component"
          },
          {
            "symbol": "I",
            "meaning": "current through it in amperes"
          },
          {
            "symbol": "R",
            "meaning": "resistance in ohms"
          }
        ]
      },
      {
        "label": "Electrical power dissipated",
        "latex": "P = I^2 R",
        "variables": [
          {
            "symbol": "P",
            "meaning": "power converted to heat in watts"
          },
          {
            "symbol": "I",
            "meaning": "current in amperes"
          },
          {
            "symbol": "R",
            "meaning": "resistance in ohms"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electric-circuits",
      "series-and-parallel-circuits",
      "electric-charge"
    ],
    "wikipediaTitle": "Electrical resistance and conductance",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electrical resistance and conductance — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "series-and-parallel-circuits",
    "title": "Series and parallel circuits",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "In a series circuit components share one path, so the same current flows through each and the voltages add. In a parallel circuit every branch has the same voltage and the currents split between branches.",
    "aliases": [
      "series circuits",
      "parallel circuits"
    ],
    "keyConcepts": [
      {
        "term": "Series rules",
        "definition": "Components connected end to end carry the same current. Their voltages add to the supply voltage, and the equivalent resistance is the sum of the individual resistances."
      },
      {
        "term": "Parallel rules",
        "definition": "Components connected across the same two nodes share the same voltage. The branch currents add to the total current, and the equivalent resistance is less than the smallest branch resistance."
      },
      {
        "term": "Kirchhoff's laws",
        "definition": "The junction rule states that current into a node equals current out, expressing charge conservation. The loop rule states that voltage changes around any closed loop sum to zero, expressing energy conservation."
      }
    ],
    "equations": [
      {
        "label": "Equivalent series resistance",
        "latex": "R_s = R_1 + R_2 + \\cdots",
        "variables": [
          {
            "symbol": "R_s",
            "meaning": "total series resistance"
          },
          {
            "symbol": "R_1, R_2",
            "meaning": "individual resistances in series"
          }
        ]
      },
      {
        "label": "Equivalent parallel resistance",
        "latex": "\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots",
        "variables": [
          {
            "symbol": "R_p",
            "meaning": "total parallel resistance"
          },
          {
            "symbol": "R_1, R_2",
            "meaning": "individual branch resistances"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electric-circuits",
      "electrical-resistance-and-resistivity",
      "capacitance"
    ],
    "wikipediaTitle": "Series and parallel circuits",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Series and parallel circuits — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Series_and_parallel_circuits"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "magnetic-fields",
    "title": "Magnetic fields",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "A magnetic field is a vector field produced by moving charges and magnetic dipoles, and it exerts forces on other moving charges. Outside a magnet its field lines run from the north pole to the south pole and form closed loops.",
    "aliases": [
      "magnetic field lines",
      "B-field"
    ],
    "keyConcepts": [
      {
        "term": "Closed field lines",
        "definition": "Magnetic field lines have no starting or ending point because magnetic monopoles have not been observed. They form continuous loops through and around a magnet or current-carrying coil."
      },
      {
        "term": "Force on a moving charge",
        "definition": "The magnetic force on a charge is perpendicular to both its velocity and the field, so it changes direction but never speed. Its magnitude is qvB sin(theta)."
      },
      {
        "term": "Fields from currents",
        "definition": "A straight wire produces circular field lines around itself, with strength falling as one over distance. A solenoid produces a nearly uniform field along its inside, proportional to current and turns per metre."
      }
    ],
    "equations": [
      {
        "label": "Magnetic force on a moving charge",
        "latex": "F = qvB\\sin\\theta",
        "variables": [
          {
            "symbol": "F",
            "meaning": "magnetic force in newtons"
          },
          {
            "symbol": "q",
            "meaning": "charge of the particle"
          },
          {
            "symbol": "v",
            "meaning": "speed of the particle"
          },
          {
            "symbol": "B",
            "meaning": "magnetic field strength in teslas"
          },
          {
            "symbol": "\\theta",
            "meaning": "angle between velocity and field"
          }
        ]
      },
      {
        "label": "Field around a long straight wire",
        "latex": "B = \\frac{\\mu_0 I}{2\\pi r}",
        "variables": [
          {
            "symbol": "B",
            "meaning": "magnetic field strength"
          },
          {
            "symbol": "\\mu_0",
            "meaning": "permeability of free space"
          },
          {
            "symbol": "I",
            "meaning": "current in the wire"
          },
          {
            "symbol": "r",
            "meaning": "distance from the wire"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electric-field",
      "electromagnetic-induction",
      "alternating-current"
    ],
    "wikipediaTitle": "Magnetic field",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Magnetic field — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Magnetic_field"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "electromagnetic-induction",
    "title": "Electromagnetic induction",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "Electromagnetic induction is the generation of an electromotive force by a changing magnetic flux through a circuit. Faraday's law quantifies it, and Lenz's law fixes the direction of the induced current.",
    "aliases": [
      "Faraday's law",
      "induced EMF"
    ],
    "keyConcepts": [
      {
        "term": "Magnetic flux",
        "definition": "Flux measures how much magnetic field passes through an area: field strength times area times the cosine of the angle between the field and the area's normal. Flux is measured in webers."
      },
      {
        "term": "Faraday's law",
        "definition": "The induced emf equals the negative rate of change of magnetic flux through a coil, multiplied by the number of turns. A faster change, stronger field, or more turns produces a larger emf."
      },
      {
        "term": "Lenz's law",
        "definition": "The induced current flows in the direction whose own magnetic field opposes the change in flux. This is why the minus sign appears and why generators become harder to turn under load."
      }
    ],
    "equations": [
      {
        "label": "Faraday's law of induction",
        "latex": "\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}",
        "variables": [
          {
            "symbol": "\\mathcal{E}",
            "meaning": "induced electromotive force in volts"
          },
          {
            "symbol": "N",
            "meaning": "number of turns in the coil"
          },
          {
            "symbol": "\\Phi_B",
            "meaning": "magnetic flux through one turn in webers"
          },
          {
            "symbol": "t",
            "meaning": "time in seconds"
          }
        ]
      },
      {
        "label": "Magnetic flux through a flat area",
        "latex": "\\Phi_B = BA\\cos\\theta",
        "variables": [
          {
            "symbol": "\\Phi_B",
            "meaning": "magnetic flux in webers"
          },
          {
            "symbol": "B",
            "meaning": "magnetic field strength"
          },
          {
            "symbol": "A",
            "meaning": "area of the loop"
          },
          {
            "symbol": "\\theta",
            "meaning": "angle between field and the area normal"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "magnetic-fields",
      "transformers",
      "alternating-current"
    ],
    "wikipediaTitle": "Faraday's law of induction",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Faraday's law of induction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Faraday%27s_law_of_induction"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "transformers",
    "title": "Transformers",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "A transformer changes alternating voltage using two coils sharing a magnetic core, with the voltage ratio equal to the turns ratio. It needs a changing current, so it does not work on steady direct current.",
    "aliases": [
      "voltage transformer"
    ],
    "keyConcepts": [
      {
        "term": "Mutual induction",
        "definition": "Alternating current in the primary coil creates a changing magnetic flux in the core, which links the secondary coil and induces an alternating voltage there."
      },
      {
        "term": "Turns ratio",
        "definition": "The secondary voltage divided by the primary voltage equals the number of secondary turns divided by primary turns. More secondary turns step the voltage up; fewer step it down."
      },
      {
        "term": "Power and losses",
        "definition": "An ideal transformer passes the same power, so stepping voltage up steps current down. Real transformers lose energy to resistance in the windings and to eddy currents, which laminated cores reduce."
      }
    ],
    "equations": [
      {
        "label": "Transformer voltage ratio",
        "latex": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p}",
        "variables": [
          {
            "symbol": "V_s",
            "meaning": "secondary voltage"
          },
          {
            "symbol": "V_p",
            "meaning": "primary voltage"
          },
          {
            "symbol": "N_s",
            "meaning": "number of turns in the secondary coil"
          },
          {
            "symbol": "N_p",
            "meaning": "number of turns in the primary coil"
          }
        ]
      },
      {
        "label": "Ideal transformer power balance",
        "latex": "V_p I_p = V_s I_s",
        "variables": [
          {
            "symbol": "V_p, I_p",
            "meaning": "primary voltage and current"
          },
          {
            "symbol": "V_s, I_s",
            "meaning": "secondary voltage and current"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electromagnetic-induction",
      "alternating-current",
      "series-and-parallel-circuits"
    ],
    "wikipediaTitle": "Transformer",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Transformer — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Transformer"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "alternating-current",
    "title": "Alternating current",
    "subject": "physics",
    "category": "electricity-and-magnetism",
    "summary": "Alternating current periodically reverses direction, usually following a sine wave. Mains supply in most countries is AC at 50 or 60 Hz, a choice that makes voltage conversion and long-distance transmission practical.",
    "aliases": [
      "AC",
      "AC current"
    ],
    "keyConcepts": [
      {
        "term": "Sinusoidal supply",
        "definition": "An AC voltage oscillates smoothly between positive and negative peaks. Its frequency is the number of complete cycles per second, and its period is the reciprocal of that frequency."
      },
      {
        "term": "Root mean square values",
        "definition": "Because the average of a sine wave is zero, AC is described by its rms value, which produces the same heating as an equal DC value. Mains 230 V refers to the rms voltage, with a peak near 325 V."
      },
      {
        "term": "Reactance and impedance",
        "definition": "Capacitors and inductors oppose changing current with reactance that depends on frequency, so AC circuits combine resistance and reactance into impedance and can shift current out of phase with voltage."
      }
    ],
    "equations": [
      {
        "label": "Sinusoidal voltage",
        "latex": "V(t) = V_0\\sin(2\\pi f t)",
        "variables": [
          {
            "symbol": "V(t)",
            "meaning": "instantaneous voltage"
          },
          {
            "symbol": "V_0",
            "meaning": "peak voltage"
          },
          {
            "symbol": "f",
            "meaning": "frequency in hertz"
          },
          {
            "symbol": "t",
            "meaning": "time in seconds"
          }
        ]
      },
      {
        "label": "RMS voltage",
        "latex": "V_{rms} = \\frac{V_0}{\\sqrt{2}}",
        "variables": [
          {
            "symbol": "V_{rms}",
            "meaning": "root-mean-square voltage"
          },
          {
            "symbol": "V_0",
            "meaning": "peak voltage"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "transformers",
      "electromagnetic-induction",
      "electric-circuits"
    ],
    "wikipediaTitle": "Alternating current",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Alternating current — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alternating_current"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "temperature-and-thermal-equilibrium",
    "title": "Temperature and thermal equilibrium",
    "subject": "physics",
    "category": "thermodynamics",
    "summary": "Temperature measures the average kinetic energy of the particles in a substance. Two objects in thermal contact reach thermal equilibrium when they have the same temperature and no net heat flows between them.",
    "aliases": [
      "thermal equilibrium",
      "temperature equilibrium"
    ],
    "keyConcepts": [
      {
        "term": "Microscopic interpretation",
        "definition": "In a gas, temperature is proportional to the average translational kinetic energy of its molecules. Heating increases that average energy, so particles move faster."
      },
      {
        "term": "Zeroth law",
        "definition": "If two systems are each in thermal equilibrium with a third, they are in equilibrium with each other. This justifies using a thermometer as a common reference."
      },
      {
        "term": "Absolute scale",
        "definition": "The kelvin scale starts at absolute zero, where classical particle motion is minimal. Kelvin and Celsius degrees are the same size, with 0 K equal to -273.15 degrees Celsius."
      }
    ],
    "equations": [
      {
        "label": "Celsius to kelvin",
        "latex": "T_K = T_C + 273.15",
        "variables": [
          {
            "symbol": "T_K",
            "meaning": "absolute temperature in kelvin"
          },
          {
            "symbol": "T_C",
            "meaning": "temperature in degrees Celsius"
          }
        ]
      },
      {
        "label": "Average molecular kinetic energy",
        "latex": "\\bar{K} = \\frac{3}{2}k_B T",
        "variables": [
          {
            "symbol": "\\bar{K}",
            "meaning": "mean translational kinetic energy per molecule"
          },
          {
            "symbol": "k_B",
            "meaning": "Boltzmann constant, about 1.38 x 10^-23 J/K"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature in kelvin"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "heat-transfer",
      "specific-heat-capacity",
      "first-law-of-thermodynamics"
    ],
    "wikipediaTitle": "Thermal equilibrium",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Thermal equilibrium — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Thermal_equilibrium"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "heat-transfer",
    "title": "Heat transfer",
    "subject": "physics",
    "category": "thermodynamics",
    "summary": "Heat transfers by conduction through direct contact, by convection through moving fluids, and by radiation as electromagnetic waves. All three carry energy from hotter regions to colder ones unless work is done.",
    "aliases": [
      "heat transmission",
      "thermal transport"
    ],
    "keyConcepts": [
      {
        "term": "Conduction",
        "definition": "In solids, vibrating atoms and free electrons pass energy along without bulk movement. The rate depends on the material's thermal conductivity, its area, the temperature difference and the thickness."
      },
      {
        "term": "Convection",
        "definition": "A heated fluid expands, becomes less dense and rises, while cooler fluid sinks to replace it. This circulation, forced or natural, carries heat much faster than conduction in fluids."
      },
      {
        "term": "Radiation",
        "definition": "All objects above absolute zero emit thermal radiation, with power rising as the fourth power of absolute temperature; at everyday temperatures its peak is infrared. Unlike the other two mechanisms, radiation needs no medium and crosses a vacuum."
      }
    ],
    "equations": [
      {
        "label": "Conduction rate",
        "latex": "P = kA\\frac{\\Delta T}{d}",
        "variables": [
          {
            "symbol": "P",
            "meaning": "heat flow rate in watts"
          },
          {
            "symbol": "k",
            "meaning": "thermal conductivity of the material"
          },
          {
            "symbol": "A",
            "meaning": "cross-sectional area"
          },
          {
            "symbol": "\\Delta T",
            "meaning": "temperature difference"
          },
          {
            "symbol": "d",
            "meaning": "thickness along the heat flow"
          }
        ]
      },
      {
        "label": "Stefan-Boltzmann radiation",
        "latex": "P = \\varepsilon\\sigma A T^4",
        "variables": [
          {
            "symbol": "P",
            "meaning": "radiated power in watts"
          },
          {
            "symbol": "\\varepsilon",
            "meaning": "emissivity, between 0 and 1"
          },
          {
            "symbol": "\\sigma",
            "meaning": "Stefan-Boltzmann constant, 5.67 x 10^-8 W/(m^2 K^4)"
          },
          {
            "symbol": "A",
            "meaning": "surface area"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature in kelvin"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "temperature-and-thermal-equilibrium",
      "specific-heat-capacity",
      "latent-heat-and-phase-changes"
    ],
    "wikipediaTitle": "Heat transfer",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Heat transfer — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Heat_transfer"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "specific-heat-capacity",
    "title": "Specific heat capacity",
    "subject": "physics",
    "category": "thermodynamics",
    "summary": "Specific heat capacity is the energy needed to raise one kilogram of a substance by one kelvin. Water's high value, about 4180 J/(kg K), makes it effective at storing heat and moderating climate.",
    "aliases": [
      "specific heat",
      "mass-specific heat capacity"
    ],
    "keyConcepts": [
      {
        "term": "Definition and units",
        "definition": "Specific heat capacity c is heat added per unit mass per unit temperature rise, in joules per kilogram per kelvin. Heat capacity is the same idea for a whole object, equal to mass times c."
      },
      {
        "term": "Why water is unusual",
        "definition": "Water's value of roughly 4180 J/(kg K) is much higher than most metals, near 400 for copper. This lets oceans absorb large amounts of heat with modest temperature change."
      },
      {
        "term": "Calorimetry",
        "definition": "In an insulated container, heat lost by a hot sample equals heat gained by cooler surroundings, assuming no losses. Measuring temperature changes lets you find an unknown specific heat."
      }
    ],
    "equations": [
      {
        "label": "Sensible heat",
        "latex": "Q = mc\\Delta T",
        "variables": [
          {
            "symbol": "Q",
            "meaning": "heat added or removed in joules"
          },
          {
            "symbol": "m",
            "meaning": "mass in kilograms"
          },
          {
            "symbol": "c",
            "meaning": "specific heat capacity in J/(kg K)"
          },
          {
            "symbol": "\\Delta T",
            "meaning": "temperature change in kelvin or Celsius degrees"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "heat-transfer",
      "latent-heat-and-phase-changes",
      "first-law-of-thermodynamics"
    ],
    "wikipediaTitle": "Specific heat capacity",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Specific heat capacity — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Specific_heat_capacity"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "latent-heat-and-phase-changes",
    "title": "Latent heat and phase changes",
    "subject": "physics",
    "category": "thermodynamics",
    "summary": "Latent heat is the energy absorbed or released when a substance changes phase at constant temperature, such as melting or boiling. It goes into breaking or forming bonds rather than raising temperature.",
    "aliases": [
      "latent heat",
      "phase change energy"
    ],
    "keyConcepts": [
      {
        "term": "Fusion and vaporisation",
        "definition": "Latent heat of fusion melts a solid at its melting point; latent heat of vaporisation boils a liquid at its boiling point. For water, fusion takes about 334 kJ/kg and vaporisation about 2260 kJ/kg."
      },
      {
        "term": "Temperature plateaus",
        "definition": "While a pure substance changes phase, added heat does not raise its temperature. On a heating curve this appears as a flat step between the sloped warming regions."
      },
      {
        "term": "Energy in both directions",
        "definition": "Melting absorbs latent heat from the surroundings, which is why ice cools a drink. Freezing releases the same energy and expands water by about 9%, which is why water pipes can burst in a hard freeze."
      }
    ],
    "equations": [
      {
        "label": "Latent heat energy",
        "latex": "Q = mL",
        "variables": [
          {
            "symbol": "Q",
            "meaning": "heat absorbed or released during the phase change"
          },
          {
            "symbol": "m",
            "meaning": "mass of the substance"
          },
          {
            "symbol": "L",
            "meaning": "specific latent heat in joules per kilogram"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "specific-heat-capacity",
      "heat-transfer",
      "states-of-matter"
    ],
    "wikipediaTitle": "Latent heat",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Latent heat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Latent_heat"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "first-law-of-thermodynamics",
    "title": "First law of thermodynamics",
    "subject": "physics",
    "category": "thermodynamics",
    "summary": "The first law of thermodynamics applies conservation of energy to heat and work: a system's internal energy changes by the heat added minus the work it does. It rules out perpetual motion machines of the first kind.",
    "aliases": [
      "thermodynamic energy conservation",
      "energy conservation in thermodynamics"
    ],
    "keyConcepts": [
      {
        "term": "Internal energy",
        "definition": "Internal energy is the total kinetic and potential energy of a system's particles. It is a state function: it depends only on the current state, not on how the system got there."
      },
      {
        "term": "Heat and work are transfers",
        "definition": "Heat is energy transferred because of a temperature difference, and work is energy transferred by a force moving through a distance. Neither is stored in the system; both change its internal energy."
      },
      {
        "term": "Sign convention",
        "definition": "With Q positive when heat enters the system and W positive when the system does work on its surroundings, the change in internal energy is Q minus W."
      }
    ],
    "equations": [
      {
        "label": "First law of thermodynamics",
        "latex": "\\Delta U = Q - W",
        "variables": [
          {
            "symbol": "\\Delta U",
            "meaning": "change in internal energy"
          },
          {
            "symbol": "Q",
            "meaning": "heat added to the system"
          },
          {
            "symbol": "W",
            "meaning": "work done by the system"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "second-law-of-thermodynamics-and-entropy",
      "heat-engines",
      "specific-heat-capacity"
    ],
    "wikipediaTitle": "First law of thermodynamics",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "First law of thermodynamics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/First_law_of_thermodynamics"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "second-law-of-thermodynamics-and-entropy",
    "title": "Second law of thermodynamics and entropy",
    "subject": "physics",
    "category": "thermodynamics",
    "summary": "The second law states that the total entropy of an isolated system never decreases. It explains why heat flows from hot to cold and why no engine can convert all of its heat input into work.",
    "aliases": [
      "law of entropy",
      "entropy increase principle"
    ],
    "keyConcepts": [
      {
        "term": "Entropy",
        "definition": "Entropy measures how many microscopic arrangements correspond to a system's macroscopic state, often described as spread-out energy or disorder. It increases when energy disperses."
      },
      {
        "term": "Irreversibility",
        "definition": "Processes such as unrestrained expansion, mixing and friction cannot spontaneously reverse, because the reverse would lower total entropy. Reversible processes are idealisations."
      },
      {
        "term": "Kelvin-Planck statement",
        "definition": "No cyclic engine can convert heat from a single reservoir entirely into work. Some heat must always be rejected to a colder reservoir, capping efficiency."
      }
    ],
    "equations": [
      {
        "label": "Entropy change for a reversible path",
        "latex": "\\Delta S = \\int \\frac{dQ_{rev}}{T}",
        "variables": [
          {
            "symbol": "\\Delta S",
            "meaning": "change in entropy in J/K"
          },
          {
            "symbol": "dQ_{rev}",
            "meaning": "reversible heat transfer at temperature T"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature in kelvin"
          }
        ]
      },
      {
        "label": "Entropy statement for an isolated system",
        "latex": "\\Delta S_{total} \\ge 0",
        "variables": [
          {
            "symbol": "\\Delta S_{total}",
            "meaning": "total entropy change of system plus surroundings"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "first-law-of-thermodynamics",
      "heat-engines",
      "temperature-and-thermal-equilibrium"
    ],
    "wikipediaTitle": "Second law of thermodynamics",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Second law of thermodynamics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Second_law_of_thermodynamics"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "heat-engines",
    "title": "Heat engines",
    "subject": "physics",
    "category": "thermodynamics",
    "summary": "A heat engine takes heat from a hot reservoir, converts part of it into work, and rejects the rest to a cold reservoir. Its efficiency is limited by the reservoir temperatures, as the Carnot cycle shows.",
    "aliases": [
      "thermodynamic engine",
      "heat engine cycle"
    ],
    "keyConcepts": [
      {
        "term": "Reservoirs and cycle",
        "definition": "A heat engine operates in a repeating cycle between a hot source and a cold sink. Working fluid returns to its initial state each cycle, so its internal energy change over a full cycle is zero."
      },
      {
        "term": "Thermal efficiency",
        "definition": "Efficiency is the work produced divided by the heat taken from the hot reservoir. The rest of the input heat is rejected to the cold reservoir and is not available for work."
      },
      {
        "term": "Carnot limit",
        "definition": "The most efficient possible engine between two temperatures runs a reversible Carnot cycle. Its efficiency depends only on the absolute temperatures, so a larger temperature difference gives higher efficiency."
      }
    ],
    "equations": [
      {
        "label": "Thermal efficiency",
        "latex": "\\eta = \\frac{W}{Q_H} = 1 - \\frac{Q_C}{Q_H}",
        "variables": [
          {
            "symbol": "\\eta",
            "meaning": "thermal efficiency (dimensionless)"
          },
          {
            "symbol": "W",
            "meaning": "net work done per cycle"
          },
          {
            "symbol": "Q_H",
            "meaning": "heat absorbed from the hot reservoir"
          },
          {
            "symbol": "Q_C",
            "meaning": "heat rejected to the cold reservoir"
          }
        ]
      },
      {
        "label": "Carnot efficiency",
        "latex": "\\eta_{Carnot} = 1 - \\frac{T_C}{T_H}",
        "variables": [
          {
            "symbol": "\\eta_{Carnot}",
            "meaning": "maximum possible efficiency"
          },
          {
            "symbol": "T_C",
            "meaning": "cold reservoir temperature in kelvin"
          },
          {
            "symbol": "T_H",
            "meaning": "hot reservoir temperature in kelvin"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "second-law-of-thermodynamics-and-entropy",
      "first-law-of-thermodynamics",
      "heat-transfer"
    ],
    "wikipediaTitle": "Heat engine",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Heat engine — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Heat_engine"
      },
      {
        "label": "OpenStax University Physics, Volume 2",
        "url": "https://openstax.org/books/university-physics-volume-2"
      }
    ]
  },
  {
    "slug": "photoelectric-effect",
    "title": "The photoelectric effect",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "The photoelectric effect is the emission of electrons from a metal surface when light above a threshold frequency shines on it. Brighter light releases more electrons, but only higher-frequency light gives the escaping electrons more kinetic energy.",
    "aliases": [
      "photoemission",
      "photoelectric emission"
    ],
    "keyConcepts": [
      {
        "term": "Threshold frequency",
        "definition": "The minimum frequency of light that can eject electrons from a given metal. Below it, no electrons are emitted however intense the light."
      },
      {
        "term": "Work function",
        "definition": "The minimum energy needed to remove an electron from the surface of a metal, usually written φ and measured in electronvolts or joules."
      },
      {
        "term": "Photon",
        "definition": "A discrete packet of electromagnetic energy with energy hf, where h is the Planck constant and f is the frequency of the light."
      },
      {
        "term": "Stopping potential",
        "definition": "The reverse voltage that just prevents the fastest emitted electrons from reaching the collector, so eV_s equals their maximum kinetic energy."
      }
    ],
    "equations": [
      {
        "label": "Energy of a photon",
        "latex": "E = hf",
        "variables": [
          {
            "symbol": "E",
            "meaning": "photon energy (joules)"
          },
          {
            "symbol": "h",
            "meaning": "Planck constant, 6.626 × 10⁻³⁴ J·s"
          },
          {
            "symbol": "f",
            "meaning": "frequency of the light (hertz)"
          }
        ]
      },
      {
        "label": "Maximum kinetic energy of a photoelectron",
        "latex": "K_{\\max} = hf - \\phi",
        "variables": [
          {
            "symbol": "K_max",
            "meaning": "maximum kinetic energy of emitted electrons (joules)"
          },
          {
            "symbol": "h",
            "meaning": "Planck constant"
          },
          {
            "symbol": "f",
            "meaning": "frequency of the incident light (hertz)"
          },
          {
            "symbol": "φ",
            "meaning": "work function of the metal (joules)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-structure",
      "refraction-and-snells-law",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Photoelectric effect",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Photoelectric effect — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Photoelectric_effect"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "wave-particle-duality",
    "title": "Wave–particle duality",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Wave–particle duality describes how light and matter show both wave and particle behaviour depending on the experiment. Electrons build up interference patterns in a double-slit experiment, yet each one arrives at the detector as a single localised hit.",
    "aliases": [
      "de Broglie waves",
      "complementarity"
    ],
    "keyConcepts": [
      {
        "term": "de Broglie wavelength",
        "definition": "The wavelength associated with a particle of momentum p, given by λ = h/p; it shrinks as the particle's mass or speed grows."
      },
      {
        "term": "Complementarity",
        "definition": "Wave and particle descriptions are complementary: an experiment reveals one aspect and hides the other, rather than showing both at once."
      },
      {
        "term": "Double-slit interference",
        "definition": "Electrons or photons passing through two narrow slits build up a pattern of bright and dark fringes, even when sent through one at a time."
      },
      {
        "term": "Photon momentum",
        "definition": "Light carries momentum p = h/λ, so it can transfer momentum to matter even though a photon has no rest mass."
      }
    ],
    "equations": [
      {
        "label": "de Broglie wavelength",
        "latex": "\\lambda = \\frac{h}{p}",
        "variables": [
          {
            "symbol": "λ",
            "meaning": "wavelength associated with the particle (metres)"
          },
          {
            "symbol": "h",
            "meaning": "Planck constant (J·s)"
          },
          {
            "symbol": "p",
            "meaning": "magnitude of the particle's momentum (kg·m/s)"
          }
        ]
      },
      {
        "label": "Photon energy",
        "latex": "E = hf",
        "variables": [
          {
            "symbol": "E",
            "meaning": "energy of one photon (joules)"
          },
          {
            "symbol": "h",
            "meaning": "Planck constant (J·s)"
          },
          {
            "symbol": "f",
            "meaning": "frequency of the light (hertz)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "waves-and-sound",
      "refraction-and-snells-law",
      "atomic-structure"
    ],
    "wikipediaTitle": "Wave–particle duality",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Wave–particle duality — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Wave–particle_duality"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "atomic-emission-spectra",
    "title": "Atomic emission spectra",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Excited atoms emit light only at particular wavelengths, producing a line spectrum rather than a continuous rainbow. Each element has its own pattern of lines because they come from electrons dropping between discrete energy levels.",
    "aliases": [
      "emission spectrum",
      "line spectrum"
    ],
    "keyConcepts": [
      {
        "term": "Energy level",
        "definition": "A discrete allowed energy that an electron can occupy in an atom; transitions between levels absorb or emit photons."
      },
      {
        "term": "Line spectrum",
        "definition": "A pattern of sharp bright lines at specific wavelengths, produced when excited atoms emit photons of matching energy."
      },
      {
        "term": "Rydberg formula",
        "definition": "A formula that predicts the wavelengths of hydrogen's spectral lines from two integer quantum numbers."
      },
      {
        "term": "Absorption spectrum",
        "definition": "A continuous spectrum crossed by dark lines where cooler gas has absorbed photons at its characteristic wavelengths."
      }
    ],
    "equations": [
      {
        "label": "Photon energy from an atomic transition",
        "latex": "\\Delta E = hf",
        "variables": [
          {
            "symbol": "ΔE",
            "meaning": "energy difference between two levels (joules)"
          },
          {
            "symbol": "h",
            "meaning": "Planck constant (J·s)"
          },
          {
            "symbol": "f",
            "meaning": "frequency of the emitted or absorbed photon (hertz)"
          }
        ]
      },
      {
        "label": "Rydberg formula for hydrogen",
        "latex": "\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)",
        "variables": [
          {
            "symbol": "λ",
            "meaning": "wavelength of the spectral line (metres)"
          },
          {
            "symbol": "R_H",
            "meaning": "Rydberg constant for hydrogen (about 1.097 × 10⁷ m⁻¹)"
          },
          {
            "symbol": "n_i",
            "meaning": "initial (higher) energy level number"
          },
          {
            "symbol": "n_f",
            "meaning": "final (lower) energy level number"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-structure",
      "refraction-and-snells-law",
      "waves-and-sound"
    ],
    "wikipediaTitle": "Emission spectrum",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Emission spectrum — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Emission_spectrum"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "radioactive-decay",
    "title": "Radioactive decay",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Radioactive decay is the spontaneous change of an unstable nucleus, which emits alpha particles, beta particles, or gamma rays and often becomes a different element. Which nucleus decays next is random, but a large sample decays at a predictable rate.",
    "aliases": [
      "radioactivity",
      "nuclear decay"
    ],
    "keyConcepts": [
      {
        "term": "Alpha decay",
        "definition": "A nucleus emits a helium-4 nucleus of two protons and two neutrons, reducing its mass number by four and its atomic number by two."
      },
      {
        "term": "Beta decay",
        "definition": "In beta-minus decay a neutron converts into a proton, emitting an electron and an antineutrino; in beta-plus decay a proton becomes a neutron, emitting a positron and a neutrino."
      },
      {
        "term": "Gamma decay",
        "definition": "An excited nucleus drops to a lower energy state by emitting a high-energy photon, without changing its proton or neutron count."
      },
      {
        "term": "Decay constant",
        "definition": "The probability per unit time that any one nucleus will decay; it fixes both the half-life and the activity of a sample."
      }
    ],
    "equations": [
      {
        "label": "Radioactive decay law",
        "latex": "N = N_0 e^{-\\lambda t}",
        "variables": [
          {
            "symbol": "N",
            "meaning": "number of undecayed nuclei remaining"
          },
          {
            "symbol": "N_0",
            "meaning": "number of nuclei at time zero"
          },
          {
            "symbol": "λ",
            "meaning": "decay constant (per second)"
          },
          {
            "symbol": "t",
            "meaning": "elapsed time (seconds)"
          }
        ]
      },
      {
        "label": "Activity of a sample",
        "latex": "A = \\lambda N",
        "variables": [
          {
            "symbol": "A",
            "meaning": "activity, decays per second (becquerels)"
          },
          {
            "symbol": "λ",
            "meaning": "decay constant (per second)"
          },
          {
            "symbol": "N",
            "meaning": "number of undecayed nuclei present"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-structure",
      "probability-basics",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Radioactive decay",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Radioactive decay — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radioactive_decay"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "half-life",
    "title": "Half-life and applications",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Half-life is the time for half the nuclei in a radioactive sample to decay. It is fixed for each isotope and underpins radiometric dating, medical tracers, and assessments of radioactive waste.",
    "aliases": [
      "half life",
      "decay half-life"
    ],
    "keyConcepts": [
      {
        "term": "Half-life",
        "definition": "The time required for half of the radioactive nuclei in a sample to decay; it is fixed for each isotope."
      },
      {
        "term": "Exponential decay",
        "definition": "The number of undecayed nuclei falls by the same fraction in every equal time interval, producing an exponential curve."
      },
      {
        "term": "Activity",
        "definition": "The number of decays per second in a sample, measured in becquerels and proportional to the number of nuclei present."
      },
      {
        "term": "Radiometric dating",
        "definition": "Comparing the ratio of a parent isotope to its decay product in a rock or fossil gives an age, using the known half-life."
      }
    ],
    "equations": [
      {
        "label": "Fraction remaining after t half-lives",
        "latex": "N = N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}}",
        "variables": [
          {
            "symbol": "N",
            "meaning": "number of undecayed nuclei remaining"
          },
          {
            "symbol": "N_0",
            "meaning": "number of nuclei at time zero"
          },
          {
            "symbol": "t",
            "meaning": "elapsed time"
          },
          {
            "symbol": "t½",
            "meaning": "half-life of the isotope"
          }
        ]
      },
      {
        "label": "Half-life and decay constant",
        "latex": "t_{1/2} = \\frac{\\ln 2}{\\lambda}",
        "variables": [
          {
            "symbol": "t½",
            "meaning": "half-life (seconds)"
          },
          {
            "symbol": "λ",
            "meaning": "decay constant (per second)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "probability-basics",
      "atomic-structure",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Half-life",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Half-life — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Half-life"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "nuclear-fission-and-fusion",
    "title": "Nuclear fission and fusion",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Nuclear fission splits a heavy nucleus into lighter ones, while fusion joins light nuclei into a heavier one. Both release energy because the products are more tightly bound, and fusion in the Sun's core is the source of sunlight.",
    "aliases": [
      "fission and fusion",
      "nuclear reactions"
    ],
    "keyConcepts": [
      {
        "term": "Binding energy per nucleon",
        "definition": "The total binding energy — the energy required to separate all nucleons — divided by the mass number A. It peaks around iron-56 and nickel-62, which is why both splitting very heavy nuclei and fusing very light ones release energy."
      },
      {
        "term": "Nuclear fission",
        "definition": "A heavy nucleus such as uranium-235 splits into two lighter nuclei, releasing several neutrons and a large amount of energy."
      },
      {
        "term": "Nuclear fusion",
        "definition": "Light nuclei such as hydrogen isotopes join to form a heavier nucleus, releasing energy as the binding energy per nucleon increases."
      },
      {
        "term": "Chain reaction",
        "definition": "Neutrons released by fission trigger further fissions; if on average more than one neutron causes another fission, the reaction sustains itself."
      }
    ],
    "equations": [
      {
        "label": "Energy released from a mass change",
        "latex": "E = \\Delta m\\,c^2",
        "variables": [
          {
            "symbol": "E",
            "meaning": "energy released (joules)"
          },
          {
            "symbol": "Δm",
            "meaning": "mass defect, the decrease in total mass (kilograms)"
          },
          {
            "symbol": "c",
            "meaning": "speed of light in vacuum, about 3.00 × 10⁸ m/s"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-structure",
      "work-energy-theorem",
      "states-of-matter"
    ],
    "wikipediaTitle": "Nuclear fission",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Nuclear fission — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Nuclear_fission"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      },
      {
        "label": "Nuclear fusion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Nuclear_fusion"
      }
    ]
  },
  {
    "slug": "special-relativity",
    "title": "Special relativity",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Special relativity describes physics in inertial frames, where the speed of light in vacuum is the same for every observer. Moving clocks run slow, moving lengths contract along the direction of motion, and simultaneity depends on the frame.",
    "aliases": [
      "special theory of relativity",
      "relativistic kinematics"
    ],
    "keyConcepts": [
      {
        "term": "The two postulates",
        "definition": "The laws of physics are the same in all inertial frames, and the speed of light in vacuum has the same value for every observer."
      },
      {
        "term": "Time dilation",
        "definition": "A clock moving relative to an observer runs slow as measured by that observer, by the factor γ."
      },
      {
        "term": "Length contraction",
        "definition": "An object moving relative to an observer is measured shorter along its direction of motion, by the factor 1/γ."
      },
      {
        "term": "Relativity of simultaneity",
        "definition": "Events that are simultaneous in one inertial frame need not be simultaneous in another frame moving relative to it."
      }
    ],
    "equations": [
      {
        "label": "Lorentz factor",
        "latex": "\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}",
        "variables": [
          {
            "symbol": "γ",
            "meaning": "Lorentz factor (dimensionless)"
          },
          {
            "symbol": "v",
            "meaning": "relative speed between frames (m/s)"
          },
          {
            "symbol": "c",
            "meaning": "speed of light in vacuum (m/s)"
          }
        ]
      },
      {
        "label": "Time dilation",
        "latex": "\\Delta t = \\gamma \\Delta t_0",
        "variables": [
          {
            "symbol": "Δt",
            "meaning": "time interval measured by the observer in relative motion"
          },
          {
            "symbol": "Δt_0",
            "meaning": "proper time interval measured by the moving clock"
          },
          {
            "symbol": "γ",
            "meaning": "Lorentz factor"
          }
        ]
      },
      {
        "label": "Length contraction",
        "latex": "L = \\frac{L_0}{\\gamma}",
        "variables": [
          {
            "symbol": "L",
            "meaning": "measured length of the moving object (metres)"
          },
          {
            "symbol": "L_0",
            "meaning": "proper length measured in the object's rest frame"
          },
          {
            "symbol": "γ",
            "meaning": "Lorentz factor"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "refraction-and-snells-law",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Special relativity",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Special relativity — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Special_relativity"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "mass-energy-equivalence",
    "title": "Mass–energy equivalence",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Mass–energy equivalence states that mass is a form of energy, with a conversion factor of the speed of light squared. A tiny change in mass corresponds to a huge energy change, which is why nuclear reactions release so much energy.",
    "aliases": [
      "mass-energy equivalence",
      "energy-mass relation"
    ],
    "keyConcepts": [
      {
        "term": "Rest energy",
        "definition": "The energy E = mc² that a body has simply because it has mass, even when it is at rest."
      },
      {
        "term": "Mass defect",
        "definition": "The difference between the mass of a bound nucleus and the total mass of its separate nucleons; it equals the binding energy divided by c²."
      },
      {
        "term": "Relativistic energy–momentum relation",
        "definition": "E² = (pc)² + (mc²)² combines rest energy and momentum, and reduces to E = mc² for a body at rest."
      },
      {
        "term": "Conservation of mass–energy",
        "definition": "Total energy is conserved in any process; mass can be converted into other forms of energy and vice versa."
      }
    ],
    "equations": [
      {
        "label": "Rest energy",
        "latex": "E = mc^2",
        "variables": [
          {
            "symbol": "E",
            "meaning": "rest energy (joules)"
          },
          {
            "symbol": "m",
            "meaning": "mass (kilograms)"
          },
          {
            "symbol": "c",
            "meaning": "speed of light in vacuum (m/s)"
          }
        ]
      },
      {
        "label": "Relativistic energy and momentum",
        "latex": "E^2 = (pc)^2 + (mc^2)^2",
        "variables": [
          {
            "symbol": "E",
            "meaning": "total relativistic energy (joules)"
          },
          {
            "symbol": "p",
            "meaning": "momentum (kg·m/s)"
          },
          {
            "symbol": "m",
            "meaning": "rest mass (kilograms)"
          },
          {
            "symbol": "c",
            "meaning": "speed of light in vacuum (m/s)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "work-energy-theorem",
      "atomic-structure",
      "newtons-laws-of-motion"
    ],
    "wikipediaTitle": "Mass–energy equivalence",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Mass–energy equivalence — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mass–energy_equivalence"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "standard-model",
    "title": "The Standard Model of particle physics",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "The Standard Model is the quantum field theory describing quarks, leptons, and the gauge bosons that carry the strong, weak, and electromagnetic forces. It accounts for ordinary matter and three of the four fundamental interactions, but not gravity.",
    "aliases": [
      "Standard Model of particle physics",
      "particle physics Standard Model"
    ],
    "keyConcepts": [
      {
        "term": "Quarks",
        "definition": "Fundamental particles that combine to form protons, neutrons, and other hadrons; they carry colour charge and feel the strong force."
      },
      {
        "term": "Leptons",
        "definition": "Fundamental particles such as electrons and neutrinos that do not feel the strong force."
      },
      {
        "term": "Gauge bosons",
        "definition": "Force-carrying particles: photons for electromagnetism, gluons for the strong force, and W and Z bosons for the weak force."
      },
      {
        "term": "Higgs boson",
        "definition": "The quantum of the Higgs field, whose interactions give fundamental particles their masses."
      },
      {
        "term": "Gauge symmetry",
        "definition": "The model is built on the symmetry group SU(3)_C × SU(2)_L × U(1)_Y, which organizes the strong, weak, and electromagnetic interactions."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-structure",
      "chemical-bonding",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Standard Model",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Standard Model — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Standard_Model"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "quantum-mechanics",
    "title": "Quantum mechanics",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Quantum mechanics is the framework for matter and light at atomic scales, where energy, momentum, and other quantities often take discrete values. It predicts probabilities through a wavefunction instead of definite trajectories.",
    "aliases": [
      "quantum theory",
      "quantum physics"
    ],
    "keyConcepts": [
      {
        "term": "Wavefunction",
        "definition": "A mathematical description of a quantum system whose squared magnitude gives the probability of finding a particle in a region."
      },
      {
        "term": "Superposition",
        "definition": "A quantum state can be a combination of several allowed states at once, with measurement outcomes weighted by probability amplitudes."
      },
      {
        "term": "Uncertainty principle",
        "definition": "Certain pairs of quantities, such as position and momentum, cannot both be known with arbitrary precision at the same time."
      },
      {
        "term": "Quantisation",
        "definition": "Bound systems have discrete allowed energies, so they absorb or emit radiation only at particular frequencies."
      }
    ],
    "equations": [
      {
        "label": "Time-dependent Schrödinger equation",
        "latex": "i\\hbar \\frac{\\partial \\Psi}{\\partial t} = \\hat{H}\\Psi",
        "variables": [
          {
            "symbol": "i",
            "meaning": "imaginary unit"
          },
          {
            "symbol": "ħ",
            "meaning": "reduced Planck constant, h/2π"
          },
          {
            "symbol": "Ψ",
            "meaning": "wavefunction of the system"
          },
          {
            "symbol": "Ĥ",
            "meaning": "Hamiltonian operator for the total energy"
          }
        ]
      },
      {
        "label": "Heisenberg uncertainty relation",
        "latex": "\\Delta x\\,\\Delta p \\ge \\frac{\\hbar}{2}",
        "variables": [
          {
            "symbol": "Δx",
            "meaning": "uncertainty in position (metres)"
          },
          {
            "symbol": "Δp",
            "meaning": "uncertainty in momentum (kg·m/s)"
          },
          {
            "symbol": "ħ",
            "meaning": "reduced Planck constant"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "waves-and-sound",
      "refraction-and-snells-law",
      "atomic-structure"
    ],
    "wikipediaTitle": "Quantum mechanics",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Quantum mechanics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Quantum_mechanics"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "quantum-entanglement",
    "title": "Quantum entanglement",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "Quantum entanglement links two or more particles so that their measured properties are correlated more strongly than any classical shared randomness allows. The correlations persist across distance but cannot be used to send information faster than light.",
    "aliases": [
      "entanglement",
      "quantum correlations"
    ],
    "keyConcepts": [
      {
        "term": "Entangled state",
        "definition": "A joint quantum state of two or more particles that cannot be written as independent states for each particle separately."
      },
      {
        "term": "Bell inequality",
        "definition": "A bound on correlations that any local hidden-variable theory must obey; quantum mechanics violates it, as experiments confirm."
      },
      {
        "term": "No-communication theorem",
        "definition": "Entanglement alone cannot transmit information, because each observer's local results look random until the two sets are compared."
      },
      {
        "term": "Decoherence",
        "definition": "Interaction with the environment leaks quantum coherence into unobserved degrees of freedom, making entangled states fragile."
      }
    ],
    "equations": [
      {
        "label": "A maximally entangled Bell state",
        "latex": "|\\Phi^{+}\\rangle = \\frac{1}{\\sqrt{2}}\\left(|00\\rangle + |11\\rangle\\right)",
        "variables": [
          {
            "symbol": "|Φ⁺⟩",
            "meaning": "Bell state of two qubits"
          },
          {
            "symbol": "|0⟩, |1⟩",
            "meaning": "computational basis states of a single qubit"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "probability-basics",
      "refraction-and-snells-law",
      "atomic-structure"
    ],
    "wikipediaTitle": "Quantum entanglement",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Quantum entanglement — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Quantum_entanglement"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "blackbody-radiation",
    "title": "Blackbody radiation",
    "subject": "physics",
    "category": "modern-physics",
    "summary": "A blackbody absorbs all incident radiation and emits a continuous spectrum determined only by its temperature. Hotter bodies emit more total power and peak at shorter wavelengths, which is why heated metal glows red, then yellow, then white.",
    "aliases": [
      "black-body radiation",
      "cavity radiation"
    ],
    "keyConcepts": [
      {
        "term": "Blackbody",
        "definition": "An idealised object that absorbs all radiation falling on it and emits a spectrum determined only by its temperature."
      },
      {
        "term": "Wien's displacement law",
        "definition": "The wavelength of peak emission is inversely proportional to temperature, so hotter objects peak at shorter wavelengths."
      },
      {
        "term": "Stefan–Boltzmann law",
        "definition": "The total power emitted per unit area rises with the fourth power of absolute temperature."
      },
      {
        "term": "Ultraviolet catastrophe",
        "definition": "The classical prediction that a blackbody should emit ever more power at short wavelengths, which failed and pointed to quantised energy."
      }
    ],
    "equations": [
      {
        "label": "Wien's displacement law",
        "latex": "\\lambda_{\\max} T = 2.898 \\times 10^{-3}\\,\\mathrm{m\\,K}",
        "variables": [
          {
            "symbol": "λ_max",
            "meaning": "wavelength of peak emission (metres)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature (kelvin)"
          }
        ]
      },
      {
        "label": "Stefan–Boltzmann law",
        "latex": "P = \\sigma A T^4",
        "variables": [
          {
            "symbol": "P",
            "meaning": "total radiated power (watts)"
          },
          {
            "symbol": "σ",
            "meaning": "Stefan–Boltzmann constant, 5.670 × 10⁻⁸ W·m⁻²·K⁻⁴"
          },
          {
            "symbol": "A",
            "meaning": "surface area of the emitter (square metres)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature (kelvin)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "work-energy-theorem",
      "refraction-and-snells-law",
      "states-of-matter"
    ],
    "wikipediaTitle": "Black-body radiation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Black-body radiation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Black-body_radiation"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "solar-system",
    "title": "The Solar System",
    "subject": "physics",
    "category": "astronomy",
    "summary": "The Solar System consists of the Sun, eight planets, their moons, dwarf planets, asteroids, comets, and dust, all bound by gravity. Rocky planets orbit close to the Sun, the gas and ice giants farther out, and almost all the mass lies in the Sun.",
    "aliases": [
      "Solar System",
      "planetary system"
    ],
    "keyConcepts": [
      {
        "term": "Terrestrial and giant planets",
        "definition": "The four inner planets are small and rocky, while the outer gas and ice giants are much larger and have thick atmospheres."
      },
      {
        "term": "Kepler's laws",
        "definition": "Planetary orbits are ellipses with the Sun at one focus, and the square of the orbital period is proportional to the cube of the semi-major axis."
      },
      {
        "term": "Asteroid and Kuiper belts",
        "definition": "Regions of leftover rocky and icy bodies between Mars and Jupiter and beyond Neptune, remnants of the Solar System's formation."
      },
      {
        "term": "Solar nebula",
        "definition": "The rotating cloud of gas and dust from which the Sun and planets formed about 4.6 billion years ago."
      }
    ],
    "equations": [
      {
        "label": "Kepler's third law",
        "latex": "T^2 = \\frac{4\\pi^2}{GM}a^3",
        "variables": [
          {
            "symbol": "T",
            "meaning": "orbital period (seconds)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant, 6.674 × 10⁻¹¹ N·m²/kg²"
          },
          {
            "symbol": "M",
            "meaning": "mass of the central body (kilograms)"
          },
          {
            "symbol": "a",
            "meaning": "semi-major axis of the orbit (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Solar System",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Solar System — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Solar_System"
      },
      {
        "label": "NASA Science — Solar System",
        "url": "https://science.nasa.gov/solar-system/"
      }
    ]
  },
  {
    "slug": "stellar-evolution",
    "title": "Stars and stellar evolution",
    "subject": "physics",
    "category": "astronomy",
    "summary": "Stars are self-gravitating balls of plasma that shine by fusing hydrogen into helium in their cores, releasing energy that balances gravity. A star's mass sets its luminosity, temperature, and eventual fate, from long-lived red dwarfs to supernovae and black holes.",
    "aliases": [
      "stellar evolution",
      "life cycle of stars"
    ],
    "keyConcepts": [
      {
        "term": "Hydrostatic equilibrium",
        "definition": "The inward pull of gravity is balanced by the outward pressure of the hot gas, keeping a star stable for millions to billions of years."
      },
      {
        "term": "Main sequence",
        "definition": "The long stable phase when a star fuses hydrogen into helium in its core; the Sun is about halfway through this phase."
      },
      {
        "term": "Red giant",
        "definition": "A late stage when the core runs out of hydrogen and the outer layers expand and cool while helium fusion begins."
      },
      {
        "term": "Supernova",
        "definition": "The explosive death of a massive star when its core collapses, briefly outshining a galaxy and leaving a neutron star or black hole."
      }
    ],
    "equations": [
      {
        "label": "Main-sequence mass–luminosity relation (approximate)",
        "latex": "L \\propto M^{3.5}",
        "variables": [
          {
            "symbol": "L",
            "meaning": "stellar luminosity"
          },
          {
            "symbol": "M",
            "meaning": "stellar mass, in solar units"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-structure",
      "work-energy-theorem",
      "states-of-matter"
    ],
    "wikipediaTitle": "Stellar evolution",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Stellar evolution — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stellar_evolution"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "galaxies",
    "title": "Galaxies",
    "subject": "physics",
    "category": "astronomy",
    "summary": "A galaxy is a gravitationally bound system of stars, gas, dust, and dark matter, ranging from dwarfs with millions of stars to giants with trillions. The Milky Way is a barred spiral galaxy roughly 100,000 light-years across.",
    "aliases": [
      "galaxy",
      "galactic structure"
    ],
    "keyConcepts": [
      {
        "term": "Spiral, elliptical, and irregular",
        "definition": "The main galaxy shapes: flattened discs with arms, smooth ellipsoids, and chaotic systems without a clear form."
      },
      {
        "term": "Dark matter",
        "definition": "Unseen mass inferred from galactic rotation speeds and gravitational lensing, which outweighs visible stars and gas in most galaxies."
      },
      {
        "term": "Rotation curve",
        "definition": "A plot of orbital speed against distance from a galaxy's centre; it stays roughly flat far out, implying large amounts of dark matter."
      },
      {
        "term": "The Milky Way",
        "definition": "The barred spiral galaxy containing the Sun, about 100,000 light-years across and home to a few hundred billion stars."
      }
    ],
    "equations": [
      {
        "label": "Circular orbital speed",
        "latex": "v = \\sqrt{\\frac{GM}{r}}",
        "variables": [
          {
            "symbol": "v",
            "meaning": "orbital speed (metres per second)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant (N·m²/kg²)"
          },
          {
            "symbol": "M",
            "meaning": "mass enclosed within radius r (kilograms)"
          },
          {
            "symbol": "r",
            "meaning": "distance from the galactic centre (metres)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "refraction-and-snells-law",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Galaxy",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Galaxy — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Galaxy"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "big-bang",
    "title": "The Big Bang",
    "subject": "physics",
    "category": "astronomy",
    "summary": "The Big Bang is the model in which the universe expanded from a hot, dense state about 13.8 billion years ago. It explains the observed expansion of galaxies, the cosmic microwave background, and the abundances of the light elements.",
    "aliases": [
      "Big Bang",
      "Big Bang theory"
    ],
    "keyConcepts": [
      {
        "term": "Expansion of space",
        "definition": "Distances between distant galaxies grow over time as space itself expands; galaxies are not simply moving through a pre-existing void."
      },
      {
        "term": "Cosmological redshift",
        "definition": "Light from distant galaxies is stretched to longer wavelengths by expansion, with redshift z measuring how much the universe has grown."
      },
      {
        "term": "Big Bang nucleosynthesis",
        "definition": "Within the first few minutes, conditions allowed protons and neutrons to fuse into deuterium, helium, and traces of lithium."
      },
      {
        "term": "Age of the universe",
        "definition": "The time since the hot, dense early state, about 13.8 billion years, inferred from expansion and cosmic microwave background data."
      }
    ],
    "equations": [
      {
        "label": "Cosmological redshift and scale factor",
        "latex": "1 + z = \\frac{a(t_0)}{a(t_e)}",
        "variables": [
          {
            "symbol": "z",
            "meaning": "cosmological redshift (dimensionless)"
          },
          {
            "symbol": "a(t)",
            "meaning": "cosmic scale factor at time t"
          },
          {
            "symbol": "t_0",
            "meaning": "present time"
          },
          {
            "symbol": "t_e",
            "meaning": "time the light was emitted"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "atomic-structure",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Big Bang",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Big Bang — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Big_Bang"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "exoplanets",
    "title": "Exoplanets",
    "subject": "physics",
    "category": "astronomy",
    "summary": "Exoplanets are planets orbiting stars other than the Sun. Astronomers detect most of them by the slight dimming of a star during a transit or by the star's wobble caused by the planet's gravitational pull.",
    "aliases": [
      "extrasolar planets",
      "exoplanet detection"
    ],
    "keyConcepts": [
      {
        "term": "Transit method",
        "definition": "A planet passing in front of its star dims the starlight slightly and periodically, revealing its size relative to the star."
      },
      {
        "term": "Radial velocity",
        "definition": "The star's spectrum shifts back and forth as it orbits the common centre of mass with its planet, revealing the planet's minimum mass."
      },
      {
        "term": "Habitable zone",
        "definition": "The range of orbital distances where a rocky planet could keep liquid water on its surface for a given star."
      },
      {
        "term": "Direct imaging",
        "definition": "Blocking the star's glare with a coronagraph or observing in infrared to photograph the planet itself."
      }
    ],
    "equations": [
      {
        "label": "Transit depth",
        "latex": "\\delta = \\left(\\frac{R_p}{R_s}\\right)^2",
        "variables": [
          {
            "symbol": "δ",
            "meaning": "fractional dip in starlight during transit"
          },
          {
            "symbol": "R_p",
            "meaning": "radius of the planet"
          },
          {
            "symbol": "R_s",
            "meaning": "radius of the star"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "newtons-laws-of-motion",
      "probability-basics"
    ],
    "wikipediaTitle": "Exoplanet",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Exoplanet — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Exoplanet"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "black-holes",
    "title": "Black holes",
    "subject": "physics",
    "category": "astronomy",
    "summary": "A black hole is a region where gravity is so strong that nothing, including light, can escape from inside its event horizon. Stellar-mass black holes form when massive stars collapse, while supermassive black holes sit at the centres of most large galaxies.",
    "aliases": [
      "black hole",
      "event horizon"
    ],
    "keyConcepts": [
      {
        "term": "Event horizon",
        "definition": "The boundary inside which the escape velocity exceeds the speed of light, so nothing can return to the outside."
      },
      {
        "term": "Schwarzschild radius",
        "definition": "The radius of the event horizon for a non-rotating black hole, proportional to its mass: r_s = 2GM/c²."
      },
      {
        "term": "Singularity",
        "definition": "The region at the centre where general relativity predicts infinite density and curvature, signalling that the theory breaks down."
      },
      {
        "term": "Accretion disc",
        "definition": "Hot, orbiting matter spiralling into a black hole, which radiates brightly in X-rays before crossing the horizon."
      }
    ],
    "equations": [
      {
        "label": "Schwarzschild radius",
        "latex": "r_s = \\frac{2GM}{c^2}",
        "variables": [
          {
            "symbol": "r_s",
            "meaning": "radius of the event horizon (metres)"
          },
          {
            "symbol": "G",
            "meaning": "gravitational constant (N·m²/kg²)"
          },
          {
            "symbol": "M",
            "meaning": "mass of the black hole (kilograms)"
          },
          {
            "symbol": "c",
            "meaning": "speed of light in vacuum (m/s)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "work-energy-theorem",
      "refraction-and-snells-law"
    ],
    "wikipediaTitle": "Black hole",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Black hole — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Black_hole"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "hubble-law",
    "title": "Hubble's law",
    "subject": "physics",
    "category": "astronomy",
    "summary": "Hubble's law states that distant galaxies recede at speeds proportional to their distance, so a galaxy twice as far moves away about twice as fast. The constant of proportionality, the Hubble constant, is roughly 70 km/s per megaparsec.",
    "aliases": [
      "Hubble–Lemaître law",
      "Hubble law"
    ],
    "keyConcepts": [
      {
        "term": "Redshift",
        "definition": "The fractional increase in wavelength of light from a receding source; for nearby galaxies it is proportional to recession speed."
      },
      {
        "term": "Hubble constant",
        "definition": "The present rate of expansion, H₀, measured in kilometres per second per megaparsec; values near 70 are reported."
      },
      {
        "term": "Expansion of space",
        "definition": "Distances between galaxies grow with time; the recession is not motion through space but the stretching of space itself."
      },
      {
        "term": "Distance ladder",
        "definition": "A chain of methods — parallax, then standard candles such as Cepheids and supernovae — used to measure ever greater cosmic distances."
      }
    ],
    "equations": [
      {
        "label": "Hubble's law",
        "latex": "v = H_0 d",
        "variables": [
          {
            "symbol": "v",
            "meaning": "recession speed of the galaxy (km/s)"
          },
          {
            "symbol": "H_0",
            "meaning": "Hubble constant (km/s per megaparsec)"
          },
          {
            "symbol": "d",
            "meaning": "distance to the galaxy (megaparsecs)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "waves-and-sound",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Hubble's law",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Hubble's law — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hubble%27s_law"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  },
  {
    "slug": "cosmic-microwave-background",
    "title": "The cosmic microwave background",
    "subject": "physics",
    "category": "astronomy",
    "summary": "The cosmic microwave background is relic radiation from the early universe, released when it cooled enough for neutral atoms to form. It fills the sky at about 2.725 K, with tiny temperature ripples that trace the seeds of galaxies.",
    "aliases": [
      "CMB",
      "relic radiation"
    ],
    "keyConcepts": [
      {
        "term": "Recombination",
        "definition": "The epoch about 380,000 years after the Big Bang when electrons and protons combined into neutral hydrogen, letting light travel freely."
      },
      {
        "term": "Anisotropy",
        "definition": "Tiny temperature variations across the CMB sky, about one part in 100,000, marking density ripples in the early universe."
      },
      {
        "term": "Blackbody spectrum",
        "definition": "The CMB matches a nearly perfect blackbody at 2.725 K, peaking in the microwave band."
      },
      {
        "term": "Acoustic peaks",
        "definition": "Regular patterns in the CMB's angular power spectrum, produced by sound waves in the early plasma, that pin down cosmological parameters."
      }
    ],
    "equations": [
      {
        "label": "CMB temperature with redshift",
        "latex": "T = T_0(1 + z)",
        "variables": [
          {
            "symbol": "T",
            "meaning": "CMB temperature at redshift z (kelvin)"
          },
          {
            "symbol": "T_0",
            "meaning": "present CMB temperature, about 2.725 K"
          },
          {
            "symbol": "z",
            "meaning": "redshift of the epoch"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "refraction-and-snells-law",
      "waves-and-sound",
      "work-energy-theorem"
    ],
    "wikipediaTitle": "Cosmic microwave background",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Cosmic microwave background — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cosmic_microwave_background"
      },
      {
        "label": "OpenStax Astronomy 2e",
        "url": "https://openstax.org/books/astronomy-2e"
      }
    ]
  }
];
