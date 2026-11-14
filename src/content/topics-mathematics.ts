import type { Topic } from './types';

/**
 * Mathematics topic seeds.
 * Parsed at module load by `parseContent` — invalid content fails the build.
 */
export const mathematicsTopicSeeds: Topic[] = [
  {
    "slug": "quadratic-equations",
    "title": "Quadratic equations",
    "subject": "mathematics",
    "summary": "A quadratic equation has the form ax² + bx + c = 0 with a ≠ 0. The quadratic formula solves it for any coefficients, and the discriminant b² − 4ac tells you how many real solutions to expect.",
    "aliases": [
      "quadratic formula",
      "second-degree equation"
    ],
    "keyConcepts": [
      {
        "term": "Coefficients",
        "definition": "The numbers a, b, and c in ax² + bx + c = 0; a must not be zero or the equation is not quadratic."
      },
      {
        "term": "Discriminant",
        "definition": "The value b² − 4ac; positive gives two real roots, zero gives one repeated root, and negative gives no real roots."
      },
      {
        "term": "Roots",
        "definition": "The values of x that satisfy the equation, also called solutions or zeros of the quadratic."
      },
      {
        "term": "Parabola",
        "definition": "The graph of y = ax² + bx + c; it opens upwards when a > 0 and downwards when a < 0."
      }
    ],
    "equations": [
      {
        "label": "Quadratic formula",
        "latex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        "variables": [
          {
            "symbol": "x",
            "meaning": "the solutions (roots) of the equation"
          },
          {
            "symbol": "a",
            "meaning": "quadratic coefficient"
          },
          {
            "symbol": "b",
            "meaning": "linear coefficient"
          },
          {
            "symbol": "c",
            "meaning": "constant term"
          }
        ]
      },
      {
        "label": "Discriminant",
        "latex": "b^2 - 4ac",
        "variables": [
          {
            "symbol": "a",
            "meaning": "quadratic coefficient"
          },
          {
            "symbol": "b",
            "meaning": "linear coefficient"
          },
          {
            "symbol": "c",
            "meaning": "constant term"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Quadratic equation",
    "collectionSlugs": [
      "mathematics-toolkit"
    ],
    "category": "algebra",
    "relatedSlugs": [
      "trigonometry-basics",
      "probability-basics"
    ],
    "sources": [
      {
        "label": "Quadratic equation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Quadratic_equation"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "trigonometry-basics",
    "title": "Trigonometry basics",
    "subject": "mathematics",
    "summary": "Trigonometry relates the angles of a right-angled triangle to the ratios of its side lengths. Sine, cosine, and tangent — and the identity sin²θ + cos²θ = 1 — underpin navigation, waves, and circular motion.",
    "aliases": [
      "trig",
      "sine and cosine"
    ],
    "keyConcepts": [
      {
        "term": "Right-angled triangle",
        "definition": "A triangle with one 90° angle; the basic trigonometric ratios are defined for its two acute angles."
      },
      {
        "term": "Sine",
        "definition": "For an acute angle, the ratio of the length of the opposite side to the length of the hypotenuse."
      },
      {
        "term": "Cosine",
        "definition": "For an acute angle, the ratio of the length of the adjacent side to the length of the hypotenuse."
      },
      {
        "term": "Tangent",
        "definition": "For an acute angle, the ratio of the opposite side to the adjacent side, equal to sine divided by cosine."
      }
    ],
    "equations": [
      {
        "label": "Pythagorean identity",
        "latex": "\\sin^2\\theta + \\cos^2\\theta = 1",
        "variables": [
          {
            "symbol": "θ",
            "meaning": "angle in a right-angled triangle or on the unit circle"
          },
          {
            "symbol": "sin θ",
            "meaning": "sine of the angle"
          },
          {
            "symbol": "cos θ",
            "meaning": "cosine of the angle"
          }
        ]
      },
      {
        "label": "Sine (SOH)",
        "latex": "\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}",
        "variables": [
          {
            "symbol": "θ",
            "meaning": "acute angle in a right-angled triangle"
          },
          {
            "symbol": "opposite",
            "meaning": "side opposite the angle θ"
          },
          {
            "symbol": "hypotenuse",
            "meaning": "longest side, opposite the right angle"
          }
        ]
      },
      {
        "label": "Cosine (CAH)",
        "latex": "\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}",
        "variables": [
          {
            "symbol": "θ",
            "meaning": "acute angle in a right-angled triangle"
          },
          {
            "symbol": "adjacent",
            "meaning": "side next to the angle θ"
          },
          {
            "symbol": "hypotenuse",
            "meaning": "longest side, opposite the right angle"
          }
        ]
      },
      {
        "label": "Tangent (TOA)",
        "latex": "\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}",
        "variables": [
          {
            "symbol": "θ",
            "meaning": "acute angle in a right-angled triangle"
          },
          {
            "symbol": "opposite",
            "meaning": "side opposite the angle θ"
          },
          {
            "symbol": "adjacent",
            "meaning": "side next to the angle θ"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Trigonometry",
    "collectionSlugs": [
      "mathematics-toolkit"
    ],
    "category": "trigonometry",
    "relatedSlugs": [
      "quadratic-equations",
      "waves-and-sound"
    ],
    "sources": [
      {
        "label": "Trigonometry — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Trigonometry"
      },
      {
        "label": "Khan Academy — Trigonometry",
        "url": "https://www.khanacademy.org/math/trigonometry"
      }
    ]
  },
  {
    "slug": "probability-basics",
    "title": "Probability basics",
    "subject": "mathematics",
    "summary": "Probability measures how likely an event is, from 0 for impossible to 1 for certain. For equally likely outcomes it is the number of favourable outcomes divided by the total number of possible outcomes.",
    "aliases": [
      "chance",
      "likelihood"
    ],
    "keyConcepts": [
      {
        "term": "Event",
        "definition": "A possible outcome or set of outcomes from a random experiment, such as rolling a six."
      },
      {
        "term": "Equally likely outcomes",
        "definition": "Situations like a fair die where every outcome has the same chance of occurring."
      },
      {
        "term": "Complementary events",
        "definition": "An event and its opposite; their probabilities always add up to 1."
      },
      {
        "term": "Independent events",
        "definition": "Events where one outcome does not affect the other, so their probabilities multiply together."
      }
    ],
    "equations": [
      {
        "label": "Classical probability",
        "latex": "P(A) = \\frac{\\text{favourable}}{\\text{total}}",
        "variables": [
          {
            "symbol": "P(A)",
            "meaning": "probability of event A, between 0 and 1"
          },
          {
            "symbol": "favourable",
            "meaning": "number of outcomes where A occurs"
          },
          {
            "symbol": "total",
            "meaning": "number of equally likely outcomes"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Probability",
    "collectionSlugs": [
      "mathematics-toolkit"
    ],
    "category": "probability",
    "relatedSlugs": [
      "quadratic-equations"
    ],
    "sources": [
      {
        "label": "Probability — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Probability"
      },
      {
        "label": "Khan Academy — Statistics and probability",
        "url": "https://www.khanacademy.org/math/statistics-probability"
      }
    ]
  }
];
