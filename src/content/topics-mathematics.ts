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
  },
  {
    "slug": "fractions-and-decimals",
    "title": "Fractions and decimals",
    "subject": "mathematics",
    "category": "arithmetic",
    "summary": "A fraction writes a number as a quotient of integers, such as 3/4, while a decimal writes it using base-ten place value, such as 0.75. Converting between the two uses division and place-value expansion, so 3/4 = 3 ÷ 4 = 0.75.",
    "aliases": [
      "decimal fractions",
      "rational numbers as decimals"
    ],
    "keyConcepts": [
      {
        "term": "Numerator and denominator",
        "definition": "The denominator says how many equal parts make one whole; the numerator counts how many of those parts are taken."
      },
      {
        "term": "Equivalent fractions",
        "definition": "Multiplying or dividing numerator and denominator by the same nonzero number gives an equal value, so 2/3 = 8/12."
      },
      {
        "term": "Terminating and repeating decimals",
        "definition": "A fraction in lowest terms has a terminating decimal exactly when its denominator has no prime factors other than 2 and 5; otherwise the decimal repeats."
      },
      {
        "term": "Decimal to fraction",
        "definition": "Write the decimal over the power of ten matching its last place, then simplify: 0.36 = 36/100 = 9/25."
      }
    ],
    "equations": [
      {
        "label": "A fraction is a division",
        "latex": "\\frac{a}{b} = a \\div b",
        "variables": [
          {
            "symbol": "a",
            "meaning": "numerator, the number of parts taken"
          },
          {
            "symbol": "b",
            "meaning": "denominator, parts per whole; b ≠ 0"
          }
        ]
      },
      {
        "label": "Decimal place value",
        "latex": "0.d_1 d_2 d_3 = \\frac{d_1}{10} + \\frac{d_2}{100} + \\frac{d_3}{1000}",
        "variables": [
          {
            "symbol": "d_i",
            "meaning": "the digit in the i-th decimal place"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "percentages",
      "ratio-and-proportion",
      "order-of-operations"
    ],
    "wikipediaTitle": "Fraction",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Fraction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fraction"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "prime-numbers",
    "title": "Prime numbers",
    "subject": "mathematics",
    "category": "number-theory",
    "summary": "A prime number is an integer greater than 1 whose only positive divisors are 1 and itself, such as 2, 3, 5, and 7. Every integer above 1 is either prime or a product of primes, and there are infinitely many primes.",
    "aliases": [
      "primality",
      "prime"
    ],
    "keyConcepts": [
      {
        "term": "Trial division test",
        "definition": "n is prime if no prime p with p² ≤ n divides it; a factor larger than √n would have to pair with a factor smaller than √n."
      },
      {
        "term": "One is not prime",
        "definition": "1 has a single positive divisor, so it is neither prime nor composite; 2 is the only even prime."
      },
      {
        "term": "Euclid on infinitude",
        "definition": "If p₁ through pₖ were all the primes, then p₁p₂⋯pₖ + 1 leaves remainder 1 on division by each, so it needs a prime factor outside the list."
      },
      {
        "term": "Sieve of Eratosthenes",
        "definition": "List the integers from 2 to n and cross out multiples of each surviving prime up to √n; the numbers left are exactly the primes up to n."
      }
    ],
    "equations": [
      {
        "label": "Trial division bound",
        "latex": "n = ab \\;\\Rightarrow\\; a \\le \\sqrt{n} \\ \\text{ or } \\ b \\le \\sqrt{n}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "integer being tested for primality"
          },
          {
            "symbol": "a, b",
            "meaning": "integer factors of n greater than 1"
          }
        ]
      },
      {
        "label": "Euclid's construction",
        "latex": "N = p_1 p_2 \\cdots p_k + 1",
        "variables": [
          {
            "symbol": "p_i",
            "meaning": "the listed primes"
          },
          {
            "symbol": "N",
            "meaning": "a number with a prime factor not in the list"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "fundamental-theorem-of-arithmetic",
      "greatest-common-divisor-and-least-common-multiple",
      "divisibility-and-modular-arithmetic"
    ],
    "wikipediaTitle": "Prime number",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Prime number — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prime_number"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "order-of-operations",
    "title": "Order of operations",
    "subject": "mathematics",
    "category": "arithmetic",
    "summary": "Order of operations fixes how an expression is evaluated: grouping symbols first, then exponents, then multiplication and division left to right, then addition and subtraction left to right. Without a convention, 2 + 3 × 4 would have two different values.",
    "aliases": [
      "operator precedence",
      "BODMAS"
    ],
    "keyConcepts": [
      {
        "term": "Grouping symbols first",
        "definition": "Parentheses, brackets, fraction bars, and radicals group subexpressions and are evaluated from the innermost outward."
      },
      {
        "term": "Equal-precedence pairs",
        "definition": "Multiplication and division share one level and are applied left to right, as are addition and subtraction: 8 ÷ 4 × 2 = 4, not 1."
      },
      {
        "term": "Exponents before products",
        "definition": "In 3x² only x is squared, giving 3 · x · x; write (3x)² when the whole product should be squared."
      },
      {
        "term": "Unary minus",
        "definition": "Exponentiation binds tighter than negation, so −3² means −(3²) = −9, while (−3)² = 9."
      }
    ],
    "equations": [
      {
        "label": "Exponents evaluated before multiplication",
        "latex": "2 + 3 \\times 4^2 = 2 + 3 \\times 16 = 50",
        "variables": [
          {
            "symbol": "2, 3, 4",
            "meaning": "the numbers in the expression being evaluated"
          }
        ]
      },
      {
        "label": "Division and multiplication left to right",
        "latex": "8 \\div 4 \\times 2 = (8 \\div 4) \\times 2 = 4",
        "variables": [
          {
            "symbol": "8, 4, 2",
            "meaning": "numbers combined at the same precedence level"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "fractions-and-decimals",
      "linear-equations",
      "exponents-and-logarithms"
    ],
    "wikipediaTitle": "Order of operations",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Order of operations — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Order_of_operations"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "percentages",
    "title": "Percentages",
    "subject": "mathematics",
    "category": "arithmetic",
    "summary": "A percentage expresses a number as parts per hundred, so 35% means 35/100 = 0.35. Percentage change compares a new value with the original using (new − old)/old, and successive changes multiply rather than add.",
    "aliases": [
      "percent",
      "percentage"
    ],
    "keyConcepts": [
      {
        "term": "Converting forms",
        "definition": "Divide by 100 to turn a percentage into a decimal or fraction, and multiply by 100 to reverse it: 12.5% = 0.125 = 1/8."
      },
      {
        "term": "Percentage of a quantity",
        "definition": "Multiply the quantity by the decimal form: 18% of 250 is 0.18 × 250 = 45."
      },
      {
        "term": "Percentage change",
        "definition": "(new − old)/old × 100% is positive for an increase and negative for a decrease; the denominator is always the original value."
      },
      {
        "term": "Successive changes multiply",
        "definition": "A 20% rise followed by a 20% fall gives 1.2 × 0.8 = 0.96, a net decrease of 4%, not 0%."
      }
    ],
    "equations": [
      {
        "label": "Percentage as a fraction",
        "latex": "p\\% = \\frac{p}{100}",
        "variables": [
          {
            "symbol": "p",
            "meaning": "the number of parts per hundred"
          }
        ]
      },
      {
        "label": "Percentage change",
        "latex": "\\text{change}\\% = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%",
        "variables": [
          {
            "symbol": "new",
            "meaning": "value after the change"
          },
          {
            "symbol": "old",
            "meaning": "original value before the change"
          }
        ]
      },
      {
        "label": "Successive percentage multipliers",
        "latex": "\\text{overall multiplier} = (1 + r_1)(1 + r_2)",
        "variables": [
          {
            "symbol": "r_1, r_2",
            "meaning": "each change written as a decimal, negative for a decrease"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "fractions-and-decimals",
      "ratio-and-proportion",
      "arithmetic-and-geometric-sequences"
    ],
    "wikipediaTitle": "Percentage",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Percentage — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Percentage"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "ratio-and-proportion",
    "title": "Ratio and proportion",
    "subject": "mathematics",
    "category": "arithmetic",
    "summary": "A ratio compares two quantities of the same kind, written 3:4 or 3/4, and a proportion states that two ratios are equal. Cross-multiplication turns a proportion into a linear equation, which solves scaling problems.",
    "aliases": [
      "proportion",
      "proportional reasoning"
    ],
    "keyConcepts": [
      {
        "term": "Simplifying a ratio",
        "definition": "Divide every term by a common factor to reach simplest form: 18:24 becomes 3:4 after dividing by 6."
      },
      {
        "term": "Direct proportion",
        "definition": "Two quantities are directly proportional when their ratio is constant, so doubling one doubles the other: y = kx."
      },
      {
        "term": "Inverse proportion",
        "definition": "When the product is constant one quantity halves as the other doubles, described by y = k/x."
      },
      {
        "term": "Cross-multiplication",
        "definition": "From a/b = c/d, multiplying both sides by bd gives ad = bc, which isolates an unknown term."
      }
    ],
    "equations": [
      {
        "label": "Cross-multiplication",
        "latex": "\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "terms of the first ratio; b ≠ 0"
          },
          {
            "symbol": "c, d",
            "meaning": "terms of the equal ratio; d ≠ 0"
          }
        ]
      },
      {
        "label": "Direct proportion",
        "latex": "y = kx",
        "variables": [
          {
            "symbol": "k",
            "meaning": "constant of proportionality"
          },
          {
            "symbol": "x, y",
            "meaning": "the two proportional quantities"
          }
        ]
      },
      {
        "label": "Inverse proportion",
        "latex": "y = \\frac{k}{x}",
        "variables": [
          {
            "symbol": "k",
            "meaning": "constant product xy"
          },
          {
            "symbol": "x, y",
            "meaning": "the two inversely related quantities"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "fractions-and-decimals",
      "similarity-and-scaling",
      "percentages"
    ],
    "wikipediaTitle": "Ratio",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Ratio — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ratio"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "linear-equations",
    "title": "Linear equations",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "A linear equation in one variable can be written ax + b = 0 with a ≠ 0, and its graph is a straight line. Solving means applying the same operation to both sides until the variable stands alone.",
    "aliases": [
      "first-degree equation",
      "one-variable equations"
    ],
    "keyConcepts": [
      {
        "term": "Balance principle",
        "definition": "Adding, subtracting, multiplying, or dividing both sides by the same nonzero quantity keeps the equation true."
      },
      {
        "term": "Isolating the variable",
        "definition": "Undo operations in reverse order — clear additions first, then multiplications — to reach x = −b/a."
      },
      {
        "term": "No solution or all solutions",
        "definition": "Simplification giving a false statement such as 0 = 5 means no solution; a true statement such as 0 = 0 means every number solves it."
      },
      {
        "term": "Clearing denominators",
        "definition": "Multiply every term by the lowest common denominator to remove fractions before isolating the variable."
      }
    ],
    "equations": [
      {
        "label": "Standard form of a linear equation",
        "latex": "ax + b = 0",
        "variables": [
          {
            "symbol": "x",
            "meaning": "the unknown variable"
          },
          {
            "symbol": "a",
            "meaning": "nonzero coefficient of x"
          },
          {
            "symbol": "b",
            "meaning": "constant term"
          }
        ]
      },
      {
        "label": "Solution of a linear equation",
        "latex": "x = -\\frac{b}{a}",
        "variables": [
          {
            "symbol": "a",
            "meaning": "nonzero coefficient of x"
          },
          {
            "symbol": "b",
            "meaning": "constant term"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "systems-of-linear-equations",
      "inequalities",
      "functions-and-graphs"
    ],
    "wikipediaTitle": "Linear equation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Linear equation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Linear_equation"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "systems-of-linear-equations",
    "title": "Systems of linear equations",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "A system of linear equations asks for values that satisfy several equations at once, geometrically the point where lines meet. Substitution and elimination reduce the system to one equation in one unknown.",
    "aliases": [
      "simultaneous equations",
      "linear system"
    ],
    "keyConcepts": [
      {
        "term": "Substitution",
        "definition": "Solve one equation for a variable, substitute that expression into the other equation, then solve the resulting single-variable equation."
      },
      {
        "term": "Elimination",
        "definition": "Add or subtract multiples of the equations to cancel a variable; the multipliers are chosen so the target coefficients become opposites."
      },
      {
        "term": "Graphical meaning",
        "definition": "Each equation is a line; the solution is their intersection — one point, no point for parallel lines, or infinitely many for the same line."
      },
      {
        "term": "Consistency and dependence",
        "definition": "A system is consistent when at least one solution exists and dependent when the equations describe exactly the same set of points."
      }
    ],
    "equations": [
      {
        "label": "A system of two linear equations",
        "latex": "a_1x + b_1y = c_1, \\qquad a_2x + b_2y = c_2",
        "variables": [
          {
            "symbol": "x, y",
            "meaning": "the unknowns"
          },
          {
            "symbol": "a_i, b_i",
            "meaning": "coefficients of the i-th equation"
          },
          {
            "symbol": "c_i",
            "meaning": "constant term of the i-th equation"
          }
        ]
      },
      {
        "label": "Cramer's rule for x",
        "latex": "x = \\frac{c_1b_2 - c_2b_1}{a_1b_2 - a_2b_1}",
        "variables": [
          {
            "symbol": "a_i, b_i, c_i",
            "meaning": "coefficients and constants of the two equations"
          },
          {
            "symbol": "a_1b_2 \\ne a_2b_1",
            "meaning": "the determinant must be nonzero for a unique solution"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "linear-equations",
      "inequalities",
      "coordinate-geometry"
    ],
    "wikipediaTitle": "System of linear equations",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "System of linear equations — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/System_of_linear_equations"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "inequalities",
    "title": "Inequalities",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "An inequality compares expressions with <, ≤, >, or ≥, and its solution is a range of values rather than a single number. Solving follows the same steps as an equation, except multiplying or dividing by a negative reverses the sign.",
    "aliases": [
      "linear inequalities",
      "solving inequalities"
    ],
    "keyConcepts": [
      {
        "term": "Solution sets as intervals",
        "definition": "Solutions are written as inequalities or interval notation: x > 2 is (2, ∞) and 1 ≤ x < 5 is [1, 5)."
      },
      {
        "term": "Sign reversal",
        "definition": "Multiplying or dividing both sides by a negative number reverses the direction, so −2x > 6 becomes x < −3."
      },
      {
        "term": "Compound inequalities",
        "definition": "A statement such as −1 < 2x + 3 ≤ 7 is solved by applying each operation to all three parts simultaneously."
      },
      {
        "term": "Half-plane graphs",
        "definition": "A linear inequality in two variables shades one side of a boundary line, drawn solid for ≤ or ≥ and dashed for < or >."
      }
    ],
    "equations": [
      {
        "label": "Dividing by a negative reverses the sign",
        "latex": "-2x > 6 \\;\\Rightarrow\\; x < -3",
        "variables": [
          {
            "symbol": "x",
            "meaning": "the variable being solved for"
          }
        ]
      },
      {
        "label": "Absolute value inequality",
        "latex": "|x| < a \\iff -a < x < a",
        "variables": [
          {
            "symbol": "a",
            "meaning": "a positive bound"
          },
          {
            "symbol": "x",
            "meaning": "the variable being solved for"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "linear-equations",
      "functions-and-graphs",
      "quadratic-equations"
    ],
    "wikipediaTitle": "Inequality (mathematics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Inequality (mathematics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Inequality_(mathematics)"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "polynomials",
    "title": "Polynomials",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "A polynomial is a sum of terms axⁿ with non-negative integer exponents, such as 3x⁴ − 2x + 7. Its degree bounds the number of real roots, and the degree with the leading coefficient determines how the graph behaves for large inputs.",
    "aliases": [
      "polynomial expression"
    ],
    "keyConcepts": [
      {
        "term": "Degree and leading term",
        "definition": "The degree is the largest exponent present; the leading coefficient sets the end behaviour and the degree bounds the number of real roots."
      },
      {
        "term": "Adding and multiplying",
        "definition": "Like terms combine by adding coefficients; products use the distributive law, with every term of one polynomial multiplying every term of the other."
      },
      {
        "term": "Remainder theorem",
        "definition": "Dividing p(x) by (x − a) leaves remainder p(a), so p(a) = 0 exactly when (x − a) is a factor."
      },
      {
        "term": "End behaviour",
        "definition": "For large |x| a polynomial behaves like its leading term, so even degree with positive leading coefficient rises at both ends."
      }
    ],
    "equations": [
      {
        "label": "General polynomial",
        "latex": "p(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0",
        "variables": [
          {
            "symbol": "a_n",
            "meaning": "leading coefficient, nonzero"
          },
          {
            "symbol": "n",
            "meaning": "degree of the polynomial"
          },
          {
            "symbol": "a_0",
            "meaning": "constant term"
          }
        ]
      },
      {
        "label": "Division with remainder",
        "latex": "p(x) = (x - a)q(x) + p(a)",
        "variables": [
          {
            "symbol": "q(x)",
            "meaning": "quotient polynomial"
          },
          {
            "symbol": "p(a)",
            "meaning": "remainder, equal to the value at x = a"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "factorisation-of-polynomials",
      "quadratic-equations",
      "functions-and-graphs"
    ],
    "wikipediaTitle": "Polynomial",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Polynomial — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Polynomial"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "factorisation-of-polynomials",
    "title": "Factorisation of polynomials",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "Factorisation rewrites a polynomial as a product of lower-degree pieces, turning x² − 5x + 6 into (x − 2)(x − 3). The factors reveal the roots immediately, because a product is zero only when one factor is zero.",
    "aliases": [
      "factoring polynomials",
      "polynomial factorization"
    ],
    "keyConcepts": [
      {
        "term": "Common factor first",
        "definition": "Remove the highest common factor of all terms before anything else: 6x³ − 9x² = 3x²(2x − 3)."
      },
      {
        "term": "Monic quadratic pattern",
        "definition": "For x² + bx + c, find two numbers that multiply to c and add to b, giving (x + p)(x + q)."
      },
      {
        "term": "Difference of squares and cubes",
        "definition": "a² − b² = (a − b)(a + b) and a³ − b³ = (a − b)(a² + ab + b²) are identities worth recognising on sight."
      },
      {
        "term": "Factor theorem",
        "definition": "(x − a) divides p(x) exactly when p(a) = 0, so one known root lets division reduce a cubic to a quadratic."
      }
    ],
    "equations": [
      {
        "label": "Difference of two squares",
        "latex": "a^2 - b^2 = (a - b)(a + b)",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "the squared terms being subtracted"
          }
        ]
      },
      {
        "label": "Factorising a monic quadratic",
        "latex": "x^2 + bx + c = (x + p)(x + q), \\quad p + q = b, \\ p q = c",
        "variables": [
          {
            "symbol": "b, c",
            "meaning": "coefficients of the quadratic"
          },
          {
            "symbol": "p, q",
            "meaning": "the two numbers found"
          }
        ]
      },
      {
        "label": "Difference and sum of cubes",
        "latex": "a^3 \\mp b^3 = (a \\mp b)(a^2 \\pm ab + b^2)",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "the cubed terms"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "polynomials",
      "quadratic-equations",
      "functions-and-graphs"
    ],
    "wikipediaTitle": "Factorization of polynomials",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Factorization of polynomials — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Factorization_of_polynomials"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "exponents-and-logarithms",
    "title": "Exponents and logarithms",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "Exponents record repeated multiplication, and the logarithm answers the inverse question: logₐ x is the power to which a must be raised to give x. The law aˣaʸ = aˣ⁺ʸ mirrors logₐ(xy) = logₐx + logₐy.",
    "aliases": [
      "indices and logarithms",
      "exponential and logarithmic functions"
    ],
    "keyConcepts": [
      {
        "term": "Laws of exponents",
        "definition": "To multiply powers of the same base add the exponents, to divide subtract them, and to raise a power to a power multiply them; a⁰ = 1 and a⁻ˣ = 1/aˣ for a ≠ 0."
      },
      {
        "term": "Definition of logarithm",
        "definition": "logₐ x = y means exactly aʸ = x, with base a > 0, a ≠ 1, and argument x > 0."
      },
      {
        "term": "Laws of logarithms",
        "definition": "Products become sums, quotients become differences, and powers become multipliers: logₐ(xy) = logₐx + logₐy and logₐ(xᵖ) = p logₐx."
      },
      {
        "term": "Change of base",
        "definition": "logₐx = log_b x / log_b a for any consistent base b, so a calculator key for common or natural logs evaluates any base."
      }
    ],
    "equations": [
      {
        "label": "Laws of exponents",
        "latex": "a^x a^y = a^{x+y}, \\quad \\frac{a^x}{a^y} = a^{x-y}, \\quad (a^x)^y = a^{xy}",
        "variables": [
          {
            "symbol": "a",
            "meaning": "positive base, a ≠ 1"
          },
          {
            "symbol": "x, y",
            "meaning": "real exponents"
          }
        ]
      },
      {
        "label": "Logarithm as an inverse",
        "latex": "\\log_a x = y \\iff a^y = x",
        "variables": [
          {
            "symbol": "a",
            "meaning": "base, a > 0 and a ≠ 1"
          },
          {
            "symbol": "x",
            "meaning": "positive argument"
          },
          {
            "symbol": "y",
            "meaning": "the logarithm"
          }
        ]
      },
      {
        "label": "Logarithm of a product",
        "latex": "\\log_a(xy) = \\log_a x + \\log_a y",
        "variables": [
          {
            "symbol": "x, y",
            "meaning": "positive numbers"
          },
          {
            "symbol": "a",
            "meaning": "base of the logarithms"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "functions-and-graphs",
      "arithmetic-and-geometric-sequences",
      "polynomials"
    ],
    "wikipediaTitle": "Logarithm",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Logarithm — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Logarithm"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "functions-and-graphs",
    "title": "Functions and graphs",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "A function assigns exactly one output to each input, written f(x), and its graph is the set of points (x, f(x)). Domain, range, and rate of change describe the rule and its behaviour.",
    "aliases": [
      "function notation",
      "graphing functions"
    ],
    "keyConcepts": [
      {
        "term": "Domain and range",
        "definition": "The domain is the set of permitted inputs and the range the set of outputs produced; f(x) = 1/x excludes x = 0 from its domain."
      },
      {
        "term": "Vertical line test",
        "definition": "A curve is a function graph only if no vertical line meets it more than once, since each input may have just one output."
      },
      {
        "term": "Transformations",
        "definition": "Replacing x by x − h shifts the graph h units right, adding k outside shifts it k units up, and −f(x) reflects it in the x-axis."
      },
      {
        "term": "Average rate of change",
        "definition": "(f(b) − f(a))/(b − a) is the slope of the secant line through two points and measures change per unit input."
      }
    ],
    "equations": [
      {
        "label": "Function notation",
        "latex": "y = f(x)",
        "variables": [
          {
            "symbol": "x",
            "meaning": "input, an element of the domain"
          },
          {
            "symbol": "y",
            "meaning": "output, an element of the range"
          }
        ]
      },
      {
        "label": "Shifted graph",
        "latex": "y = f(x - h) + k",
        "variables": [
          {
            "symbol": "h",
            "meaning": "horizontal shift in units right"
          },
          {
            "symbol": "k",
            "meaning": "vertical shift in units up"
          }
        ]
      },
      {
        "label": "Average rate of change",
        "latex": "\\frac{f(b) - f(a)}{b - a}",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "two distinct inputs"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "linear-equations",
      "polynomials",
      "coordinate-geometry"
    ],
    "wikipediaTitle": "Function (mathematics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Function (mathematics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Function_(mathematics)"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "arithmetic-and-geometric-sequences",
    "title": "Arithmetic and geometric sequences",
    "subject": "mathematics",
    "category": "algebra",
    "summary": "An arithmetic sequence adds a constant difference at each step (3, 7, 11, …), while a geometric sequence multiplies by a constant ratio (2, 6, 18, …). Each has a closed-form nth term and a matching sum formula.",
    "aliases": [
      "sequences and series",
      "AP and GP"
    ],
    "keyConcepts": [
      {
        "term": "Common difference and ratio",
        "definition": "Arithmetic sequences have a constant difference d = a_{n+1} − a_n; geometric sequences have a constant ratio r = a_{n+1}/a_n."
      },
      {
        "term": "Nth term formulas",
        "definition": "aₙ = a₁ + (n − 1)d for arithmetic and aₙ = a₁rⁿ⁻¹ for geometric sequences."
      },
      {
        "term": "Sum formulas",
        "definition": "The arithmetic sum is n/2 (2a₁ + (n − 1)d); the finite geometric sum is a₁(1 − rⁿ)/(1 − r) for r ≠ 1."
      },
      {
        "term": "Convergence",
        "definition": "An infinite geometric series with |r| < 1 converges to a₁/(1 − r); with |r| ≥ 1 it diverges."
      }
    ],
    "equations": [
      {
        "label": "Arithmetic nth term",
        "latex": "a_n = a_1 + (n - 1)d",
        "variables": [
          {
            "symbol": "a_1",
            "meaning": "first term"
          },
          {
            "symbol": "d",
            "meaning": "common difference"
          },
          {
            "symbol": "n",
            "meaning": "term index"
          }
        ]
      },
      {
        "label": "Geometric nth term",
        "latex": "a_n = a_1 r^{n-1}",
        "variables": [
          {
            "symbol": "a_1",
            "meaning": "first term"
          },
          {
            "symbol": "r",
            "meaning": "common ratio"
          }
        ]
      },
      {
        "label": "Sum of a finite geometric series",
        "latex": "S_n = a_1\\frac{1 - r^n}{1 - r}, \\quad r \\neq 1",
        "variables": [
          {
            "symbol": "S_n",
            "meaning": "sum of the first n terms"
          },
          {
            "symbol": "r",
            "meaning": "common ratio"
          }
        ]
      },
      {
        "label": "Sum of an infinite geometric series",
        "latex": "S = \\frac{a_1}{1 - r}, \\quad |r| < 1",
        "variables": [
          {
            "symbol": "S",
            "meaning": "limiting sum of the series"
          },
          {
            "symbol": "r",
            "meaning": "common ratio with |r| < 1"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "functions-and-graphs",
      "exponents-and-logarithms",
      "percentages"
    ],
    "wikipediaTitle": "Geometric progression",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Geometric progression — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Geometric_progression"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      },
      {
        "label": "Arithmetic progression — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Arithmetic_progression"
      }
    ]
  },
  {
    "slug": "triangles-and-congruence",
    "title": "Triangles and congruence",
    "subject": "mathematics",
    "category": "geometry",
    "summary": "Two triangles are congruent when one can be moved onto the other by translation, rotation, or reflection, so all corresponding sides and angles match. SSS, SAS, and ASA are sufficient tests, while AAA proves only similarity.",
    "aliases": [
      "congruent triangles",
      "congruence tests"
    ],
    "keyConcepts": [
      {
        "term": "SSS, SAS, ASA",
        "definition": "Three matching sides, or two sides with the included angle, or two angles with the included side each force congruence; the angle in SAS must lie between the given sides."
      },
      {
        "term": "Why SSA fails",
        "definition": "Two sides and a non-included angle can fit two different triangles, the ambiguous case, so SSA is not a congruence test."
      },
      {
        "term": "AAA gives similarity only",
        "definition": "Three equal angles fix the shape but not the size, so equal angles alone prove similarity rather than congruence."
      },
      {
        "term": "CPCTC",
        "definition": "After proving congruence, corresponding parts of congruent triangles are congruent, which transfers a known length or angle to the unknown one."
      }
    ],
    "equations": [
      {
        "label": "Angle sum of a triangle",
        "latex": "\\angle A + \\angle B + \\angle C = 180^\\circ",
        "variables": [
          {
            "symbol": "A, B, C",
            "meaning": "the three interior angles"
          }
        ]
      },
      {
        "label": "Corresponding parts of congruent triangles",
        "latex": "\\triangle ABC \\cong \\triangle DEF \\;\\Rightarrow\\; AB = DE,\\ BC = EF,\\ CA = FD",
        "variables": [
          {
            "symbol": "AB = DE",
            "meaning": "one pair of corresponding sides"
          },
          {
            "symbol": "ABC, DEF",
            "meaning": "the two congruent triangles"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "pythagorean-theorem",
      "similarity-and-scaling",
      "sine-and-cosine-rules"
    ],
    "wikipediaTitle": "Congruence (geometry)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Congruence (geometry) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Congruence_(geometry)"
      },
      {
        "label": "Khan Academy — Geometry",
        "url": "https://www.khanacademy.org/math/geometry"
      }
    ]
  },
  {
    "slug": "circles",
    "title": "Circles",
    "subject": "mathematics",
    "category": "geometry",
    "summary": "A circle is the set of points a fixed distance r from a centre, with circumference 2πr and area πr². Its chords, arcs, and tangents obey angle rules, including the inscribed angle theorem.",
    "aliases": [
      "circle geometry"
    ],
    "keyConcepts": [
      {
        "term": "Chord, arc, and sector",
        "definition": "A chord joins two points on the circle, an arc is part of the circumference, and a sector is the region bounded by two radii and an arc."
      },
      {
        "term": "Inscribed angle theorem",
        "definition": "An inscribed angle is half the central angle standing on the same arc, so any angle in a semicircle is a right angle."
      },
      {
        "term": "Tangents",
        "definition": "A tangent meets the circle at exactly one point and is perpendicular to the radius drawn to that point."
      },
      {
        "term": "Cyclic quadrilaterals",
        "definition": "A quadrilateral whose four vertices lie on one circle has opposite angles summing to 180°."
      }
    ],
    "equations": [
      {
        "label": "Circumference",
        "latex": "C = 2\\pi r",
        "variables": [
          {
            "symbol": "C",
            "meaning": "circumference"
          },
          {
            "symbol": "r",
            "meaning": "radius"
          }
        ]
      },
      {
        "label": "Area of a circle",
        "latex": "A = \\pi r^2",
        "variables": [
          {
            "symbol": "A",
            "meaning": "area enclosed"
          },
          {
            "symbol": "r",
            "meaning": "radius"
          }
        ]
      },
      {
        "label": "Inscribed angle theorem",
        "latex": "\\angle BOC = 2\\,\\angle BAC",
        "variables": [
          {
            "symbol": "O",
            "meaning": "centre of the circle"
          },
          {
            "symbol": "\\angle BOC",
            "meaning": "central angle on arc BC"
          },
          {
            "symbol": "\\angle BAC",
            "meaning": "inscribed angle on the same arc"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "area-and-perimeter",
      "radians-and-arc-length",
      "unit-circle"
    ],
    "wikipediaTitle": "Circle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Circle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Circle"
      },
      {
        "label": "Khan Academy — Geometry",
        "url": "https://www.khanacademy.org/math/geometry"
      }
    ]
  },
  {
    "slug": "area-and-perimeter",
    "title": "Area and perimeter",
    "subject": "mathematics",
    "category": "geometry",
    "summary": "Perimeter is the distance around a plane figure, measured in linear units, and area is the surface it covers, measured in square units. Each shape has its own formulas, and composite figures are split into standard pieces.",
    "aliases": [
      "perimeter and area",
      "mensuration"
    ],
    "keyConcepts": [
      {
        "term": "Different units",
        "definition": "Perimeter is measured in linear units such as cm and area in square units such as cm²; doubling every length multiplies area by four."
      },
      {
        "term": "Rectangle and triangle",
        "definition": "A rectangle has area base × height, and a triangle has half of that, ½ × base × perpendicular height."
      },
      {
        "term": "Parallelogram and trapezium",
        "definition": "A parallelogram has area base × height; a trapezium averages its parallel sides with ½(a + b)h."
      },
      {
        "term": "Composite figures",
        "definition": "Split an irregular region into non-overlapping standard shapes, add their areas, and subtract any cut-out parts."
      }
    ],
    "equations": [
      {
        "label": "Area of a triangle",
        "latex": "A = \\frac{1}{2}bh",
        "variables": [
          {
            "symbol": "b",
            "meaning": "base length"
          },
          {
            "symbol": "h",
            "meaning": "perpendicular height"
          }
        ]
      },
      {
        "label": "Area of a trapezium",
        "latex": "A = \\frac{1}{2}(a + b)h",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "the two parallel side lengths"
          },
          {
            "symbol": "h",
            "meaning": "distance between them"
          }
        ]
      },
      {
        "label": "Perimeter of a rectangle",
        "latex": "P = 2(l + w)",
        "variables": [
          {
            "symbol": "l",
            "meaning": "length"
          },
          {
            "symbol": "w",
            "meaning": "width"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "circles",
      "volume-and-surface-area",
      "triangles-and-congruence"
    ],
    "wikipediaTitle": "Area",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Area — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Area"
      },
      {
        "label": "Khan Academy — Geometry",
        "url": "https://www.khanacademy.org/math/geometry"
      }
    ]
  },
  {
    "slug": "volume-and-surface-area",
    "title": "Volume and surface area",
    "subject": "mathematics",
    "category": "geometry",
    "summary": "Volume measures the space a solid occupies in cubic units, and surface area measures the total area of its faces in square units. Prisms and cylinders multiply a base area by a height, while pyramids and cones take one third of that.",
    "aliases": [
      "solid geometry",
      "volumes of solids"
    ],
    "keyConcepts": [
      {
        "term": "Prisms and cylinders",
        "definition": "Volume is base area × height, whether the base is a rectangle, a triangle, or a circle."
      },
      {
        "term": "Pyramids and cones",
        "definition": "A pyramid or cone has one third the volume of the prism or cylinder with the same base and height."
      },
      {
        "term": "Spheres",
        "definition": "A sphere of radius r has volume 4/3 πr³ and surface area 4πr²."
      },
      {
        "term": "Surface area from nets",
        "definition": "Unfold the solid into its net and add the area of every face; the curved surface of a cylinder contributes 2πrh."
      }
    ],
    "equations": [
      {
        "label": "Volume of a prism or cylinder",
        "latex": "V = Bh",
        "variables": [
          {
            "symbol": "B",
            "meaning": "area of the base"
          },
          {
            "symbol": "h",
            "meaning": "perpendicular height"
          }
        ]
      },
      {
        "label": "Volume of a pyramid or cone",
        "latex": "V = \\frac{1}{3}Bh",
        "variables": [
          {
            "symbol": "B",
            "meaning": "area of the base"
          },
          {
            "symbol": "h",
            "meaning": "perpendicular height"
          }
        ]
      },
      {
        "label": "Volume and surface area of a sphere",
        "latex": "V = \\frac{4}{3}\\pi r^3, \\qquad S = 4\\pi r^2",
        "variables": [
          {
            "symbol": "r",
            "meaning": "radius of the sphere"
          },
          {
            "symbol": "V",
            "meaning": "volume"
          },
          {
            "symbol": "S",
            "meaning": "surface area"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "area-and-perimeter",
      "circles",
      "similarity-and-scaling"
    ],
    "wikipediaTitle": "Volume",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Volume — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Volume"
      },
      {
        "label": "Khan Academy — Geometry",
        "url": "https://www.khanacademy.org/math/geometry"
      },
      {
        "label": "Surface area — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Surface_area"
      }
    ]
  },
  {
    "slug": "coordinate-geometry",
    "title": "Coordinate geometry",
    "subject": "mathematics",
    "category": "geometry",
    "summary": "Coordinate geometry places figures on the Cartesian plane so distances, midpoints, and slopes follow from coordinates. A line through (x₁, y₁) with slope m satisfies y − y₁ = m(x − x₁).",
    "aliases": [
      "analytic geometry",
      "Cartesian geometry"
    ],
    "keyConcepts": [
      {
        "term": "Distance formula",
        "definition": "d = √((x₂ − x₁)² + (y₂ − y₁)²) follows from the Pythagorean theorem applied to the horizontal and vertical gaps."
      },
      {
        "term": "Midpoint",
        "definition": "The midpoint averages the coordinates: ((x₁ + x₂)/2, (y₁ + y₂)/2)."
      },
      {
        "term": "Slope",
        "definition": "m = (y₂ − y₁)/(x₂ − x₁) is rise over run; parallel lines share m and perpendicular lines satisfy m₁m₂ = −1."
      },
      {
        "term": "Forms of a line",
        "definition": "Point-slope y − y₁ = m(x − x₁) and slope-intercept y = mx + b describe the same line in different convenient forms."
      }
    ],
    "equations": [
      {
        "label": "Distance formula",
        "latex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
        "variables": [
          {
            "symbol": "(x_1, y_1)",
            "meaning": "first point"
          },
          {
            "symbol": "(x_2, y_2)",
            "meaning": "second point"
          },
          {
            "symbol": "d",
            "meaning": "distance between them"
          }
        ]
      },
      {
        "label": "Slope of a line",
        "latex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
        "variables": [
          {
            "symbol": "m",
            "meaning": "slope, rise over run"
          },
          {
            "symbol": "(x_1, y_1)",
            "meaning": "first point on the line"
          },
          {
            "symbol": "(x_2, y_2)",
            "meaning": "second point on the line"
          }
        ]
      },
      {
        "label": "Point-slope form",
        "latex": "y - y_1 = m(x - x_1)",
        "variables": [
          {
            "symbol": "m",
            "meaning": "slope"
          },
          {
            "symbol": "(x_1, y_1)",
            "meaning": "a known point on the line"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "pythagorean-theorem",
      "linear-equations",
      "functions-and-graphs"
    ],
    "wikipediaTitle": "Analytic geometry",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Analytic geometry — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Analytic_geometry"
      },
      {
        "label": "Khan Academy — Geometry",
        "url": "https://www.khanacademy.org/math/geometry"
      }
    ]
  },
  {
    "slug": "similarity-and-scaling",
    "title": "Similarity and scaling",
    "subject": "mathematics",
    "category": "geometry",
    "summary": "Two figures are similar when corresponding angles are equal and corresponding lengths share one ratio, the scale factor k. Lengths then scale by k, areas by k², and volumes by k³.",
    "aliases": [
      "similar figures",
      "scale factor"
    ],
    "keyConcepts": [
      {
        "term": "Scale factor",
        "definition": "Multiplying every length by k gives a similar figure, and the ratio of any pair of corresponding lengths equals k."
      },
      {
        "term": "Area scales as k²",
        "definition": "Doubling the sides of a triangle multiplies its area by four, because area depends on two length dimensions."
      },
      {
        "term": "Volume scales as k³",
        "definition": "Tripling a solid's dimensions multiplies its volume by 27, which is why model volumes differ sharply from real ones."
      },
      {
        "term": "Tests for similar triangles",
        "definition": "AA, SAS with equal ratios about the included angle, and SSS with all three side ratios equal each establish similarity."
      }
    ],
    "equations": [
      {
        "label": "Equal ratios of corresponding lengths",
        "latex": "\\frac{a'}{a} = \\frac{b'}{b} = \\frac{c'}{c} = k",
        "variables": [
          {
            "symbol": "a, b, c",
            "meaning": "lengths in the original figure"
          },
          {
            "symbol": "a', b', c'",
            "meaning": "corresponding lengths in the image"
          },
          {
            "symbol": "k",
            "meaning": "scale factor"
          }
        ]
      },
      {
        "label": "Area ratio",
        "latex": "\\frac{A'}{A} = k^2",
        "variables": [
          {
            "symbol": "A, A'",
            "meaning": "areas of original and image"
          },
          {
            "symbol": "k",
            "meaning": "scale factor"
          }
        ]
      },
      {
        "label": "Volume ratio",
        "latex": "\\frac{V'}{V} = k^3",
        "variables": [
          {
            "symbol": "V, V'",
            "meaning": "volumes of original and image"
          },
          {
            "symbol": "k",
            "meaning": "scale factor"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "triangles-and-congruence",
      "area-and-perimeter",
      "volume-and-surface-area"
    ],
    "wikipediaTitle": "Similarity (geometry)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Similarity (geometry) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Similarity_(geometry)"
      },
      {
        "label": "Khan Academy — Geometry",
        "url": "https://www.khanacademy.org/math/geometry"
      }
    ]
  },
  {
    "slug": "pythagorean-theorem",
    "title": "The Pythagorean theorem",
    "subject": "mathematics",
    "category": "geometry",
    "summary": "In a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides: a² + b² = c². Its converse detects right angles from side lengths, and it underlies the distance formula.",
    "aliases": [
      "Pythagoras' theorem",
      "Pythagorean relation"
    ],
    "keyConcepts": [
      {
        "term": "Identifying the hypotenuse",
        "definition": "The hypotenuse c lies opposite the right angle and is always the longest side of the triangle."
      },
      {
        "term": "Finding a missing side",
        "definition": "When a leg is unknown, rearrange to a² = c² − b² and take the positive square root; lengths are never negative."
      },
      {
        "term": "Converse",
        "definition": "If a² + b² = c² for the three sides of a triangle, the angle opposite c is exactly 90°."
      },
      {
        "term": "Pythagorean triples",
        "definition": "Whole-number solutions such as (3, 4, 5) and (5, 12, 13) generate further triples when multiplied by a common factor."
      }
    ],
    "equations": [
      {
        "label": "Pythagorean theorem",
        "latex": "a^2 + b^2 = c^2",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "the two legs"
          },
          {
            "symbol": "c",
            "meaning": "the hypotenuse"
          }
        ]
      },
      {
        "label": "Solving for the hypotenuse",
        "latex": "c = \\sqrt{a^2 + b^2}",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "the two legs"
          },
          {
            "symbol": "c",
            "meaning": "the hypotenuse"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "triangles-and-congruence",
      "coordinate-geometry",
      "sine-and-cosine-rules"
    ],
    "wikipediaTitle": "Pythagorean theorem",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Pythagorean theorem — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pythagorean_theorem"
      },
      {
        "label": "Khan Academy — Geometry",
        "url": "https://www.khanacademy.org/math/geometry"
      }
    ]
  },
  {
    "slug": "sine-and-cosine-rules",
    "title": "The sine and cosine rules",
    "subject": "mathematics",
    "category": "trigonometry",
    "summary": "The sine rule states that each side divided by the sine of its opposite angle gives the same value, and the cosine rule extends Pythagoras to triangles with no right angle. Together they solve a triangle from three suitable measurements.",
    "aliases": [
      "law of sines and cosines",
      "sine rule and cosine rule"
    ],
    "keyConcepts": [
      {
        "term": "Sine rule",
        "definition": "a/sin A = b/sin B = c/sin C in any triangle; use it with a known side and its opposite angle plus one further part."
      },
      {
        "term": "Cosine rule",
        "definition": "c² = a² + b² − 2ab cos C gives the third side from two sides and the angle between them."
      },
      {
        "term": "Finding an angle safely",
        "definition": "cos C = (a² + b² − c²)/(2ab) avoids the ambiguous case that the sine rule can produce for obtuse angles."
      },
      {
        "term": "Area from two sides",
        "definition": "Area = ½ab sin C uses two sides and the included angle, so no perpendicular height is needed."
      }
    ],
    "equations": [
      {
        "label": "Sine rule",
        "latex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}",
        "variables": [
          {
            "symbol": "a, b, c",
            "meaning": "side lengths"
          },
          {
            "symbol": "A, B, C",
            "meaning": "angles opposite the matching sides"
          }
        ]
      },
      {
        "label": "Cosine rule",
        "latex": "c^2 = a^2 + b^2 - 2ab\\cos C",
        "variables": [
          {
            "symbol": "C",
            "meaning": "angle between sides a and b"
          },
          {
            "symbol": "c",
            "meaning": "side opposite angle C"
          }
        ]
      },
      {
        "label": "Area of a triangle",
        "latex": "\\text{Area} = \\tfrac{1}{2}ab\\sin C",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "two side lengths"
          },
          {
            "symbol": "C",
            "meaning": "included angle between them"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "trigonometry-basics",
      "triangles-and-congruence",
      "pythagorean-theorem"
    ],
    "wikipediaTitle": "Law of sines",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Law of sines — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Law_of_sines"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      },
      {
        "label": "Law of cosines — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Law_of_cosines"
      }
    ]
  },
  {
    "slug": "trigonometric-identities",
    "title": "Trigonometric identities",
    "subject": "mathematics",
    "category": "trigonometry",
    "summary": "Trigonometric identities are equations true for every angle in their domain, such as sin²θ + cos²θ = 1 and the angle-sum formulas. They allow expressions to be simplified and exact values to be derived from known ones.",
    "aliases": [
      "trig identities",
      "trigonometric formulae"
    ],
    "keyConcepts": [
      {
        "term": "Pythagorean identities",
        "definition": "Dividing sin²θ + cos²θ = 1 by cos²θ gives 1 + tan²θ = sec²θ; dividing by sin²θ gives 1 + cot²θ = csc²θ."
      },
      {
        "term": "Angle sum and difference",
        "definition": "sin(A ± B) = sin A cos B ± cos A sin B and cos(A ± B) = cos A cos B ∓ sin A sin B."
      },
      {
        "term": "Double angle formulas",
        "definition": "sin 2θ = 2 sin θ cos θ, while cos 2θ = cos²θ − sin²θ = 1 − 2sin²θ = 2cos²θ − 1."
      },
      {
        "term": "Proving an identity",
        "definition": "Work on one side only, rewriting in terms of sine and cosine, until it equals the other side; never assume the identity being proved."
      }
    ],
    "equations": [
      {
        "label": "Derived Pythagorean identities",
        "latex": "\\sec^2\\theta = 1 + \\tan^2\\theta, \\qquad \\csc^2\\theta = 1 + \\cot^2\\theta",
        "variables": [
          {
            "symbol": "\\theta",
            "meaning": "any angle where the functions are defined"
          }
        ]
      },
      {
        "label": "Sine of a sum",
        "latex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
        "variables": [
          {
            "symbol": "A, B",
            "meaning": "angles measured in radians or degrees"
          }
        ]
      },
      {
        "label": "Cosine of a sum",
        "latex": "\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B",
        "variables": [
          {
            "symbol": "A, B",
            "meaning": "angles measured in radians or degrees"
          }
        ]
      },
      {
        "label": "Double angle for sine",
        "latex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
        "variables": [
          {
            "symbol": "\\theta",
            "meaning": "any angle"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "trigonometry-basics",
      "unit-circle",
      "sine-and-cosine-rules"
    ],
    "wikipediaTitle": "List of trigonometric identities",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "List of trigonometric identities — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/List_of_trigonometric_identities"
      },
      {
        "label": "OpenStax Precalculus 2e",
        "url": "https://openstax.org/books/precalculus-2e"
      }
    ]
  },
  {
    "slug": "unit-circle",
    "title": "The unit circle",
    "subject": "mathematics",
    "category": "trigonometry",
    "summary": "The unit circle is the circle x² + y² = 1 centred at the origin. Rotating an angle θ from the positive x-axis lands on the point (cos θ, sin θ), which extends trigonometry beyond right-angled triangles.",
    "aliases": [
      "unit circle trigonometry"
    ],
    "keyConcepts": [
      {
        "term": "Coordinates are cosine and sine",
        "definition": "The point at angle θ is (cos θ, sin θ), so cosine is the horizontal displacement and sine the vertical one."
      },
      {
        "term": "Signs by quadrant",
        "definition": "All functions are positive in quadrant I, sine in II, tangent in III, and cosine in IV, the ASTC pattern."
      },
      {
        "term": "Reference angles",
        "definition": "Any angle reduces to a first-quadrant reference angle, giving exact values such as sin 210° = −½."
      },
      {
        "term": "Periodicity",
        "definition": "Sine and cosine repeat every 360° or 2π, while tangent repeats every 180° or π."
      }
    ],
    "equations": [
      {
        "label": "Equation of the unit circle",
        "latex": "x^2 + y^2 = 1",
        "variables": [
          {
            "symbol": "x, y",
            "meaning": "coordinates of a point on the circle"
          }
        ]
      },
      {
        "label": "Point at angle theta",
        "latex": "(x, y) = (\\cos\\theta, \\sin\\theta)",
        "variables": [
          {
            "symbol": "\\theta",
            "meaning": "angle measured from the positive x-axis"
          }
        ]
      },
      {
        "label": "Tangent from sine and cosine",
        "latex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
        "variables": [
          {
            "symbol": "\\theta",
            "meaning": "angle where cos θ ≠ 0"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "trigonometry-basics",
      "radians-and-arc-length",
      "trigonometric-identities"
    ],
    "wikipediaTitle": "Unit circle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Unit circle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Unit_circle"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "radians-and-arc-length",
    "title": "Radians and arc length",
    "subject": "mathematics",
    "category": "trigonometry",
    "summary": "A radian measures an angle by the arc it cuts on a circle: one radian subtends an arc equal to the radius. With θ in radians, arc length is s = rθ and sector area is ½r²θ.",
    "aliases": [
      "radian measure",
      "angular measure"
    ],
    "keyConcepts": [
      {
        "term": "Converting degrees and radians",
        "definition": "180° equals π radians, so multiply degrees by π/180 and radians by 180/π."
      },
      {
        "term": "Arc length",
        "definition": "For θ in radians, s = rθ; in degrees the same length is s = 2πr × θ/360."
      },
      {
        "term": "Sector area",
        "definition": "A sector with angle θ has area ½r²θ, the fraction θ/2π of the whole circle."
      },
      {
        "term": "Angular and linear speed",
        "definition": "Angular speed ω = θ/t in radians per second links to linear speed along the circle by v = rω."
      }
    ],
    "equations": [
      {
        "label": "Degree to radian conversion",
        "latex": "\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}",
        "variables": [
          {
            "symbol": "\\theta_{\\text{rad}}",
            "meaning": "angle in radians"
          },
          {
            "symbol": "\\theta_{\\text{deg}}",
            "meaning": "angle in degrees"
          }
        ]
      },
      {
        "label": "Arc length",
        "latex": "s = r\\theta",
        "variables": [
          {
            "symbol": "s",
            "meaning": "arc length"
          },
          {
            "symbol": "r",
            "meaning": "radius"
          },
          {
            "symbol": "\\theta",
            "meaning": "central angle in radians"
          }
        ]
      },
      {
        "label": "Area of a sector",
        "latex": "A = \\tfrac{1}{2}r^2\\theta",
        "variables": [
          {
            "symbol": "A",
            "meaning": "sector area"
          },
          {
            "symbol": "\\theta",
            "meaning": "central angle in radians"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "unit-circle",
      "circles",
      "trigonometry-basics"
    ],
    "wikipediaTitle": "Radian",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Radian — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radian"
      },
      {
        "label": "OpenStax Algebra and Trigonometry 2e",
        "url": "https://openstax.org/books/algebra-and-trigonometry-2e"
      }
    ]
  },
  {
    "slug": "divisibility-and-modular-arithmetic",
    "title": "Divisibility and modular arithmetic",
    "subject": "mathematics",
    "category": "number-theory",
    "summary": "Modular arithmetic works with remainders: a ≡ b (mod n) means n divides a − b. Congruent numbers can be added, subtracted, and multiplied while staying congruent, which is why clocks and checksums use it.",
    "aliases": [
      "modular arithmetic",
      "clock arithmetic"
    ],
    "keyConcepts": [
      {
        "term": "Congruence",
        "definition": "a ≡ b (mod n) exactly when n divides a − b; 17 ≡ 2 (mod 5) because 17 − 2 = 15 is a multiple of 5."
      },
      {
        "term": "Divisibility rules",
        "definition": "A number is divisible by 3 if its digit sum is, by 4 if its last two digits form a multiple of 4, and by 9 if its digit sum is divisible by 9."
      },
      {
        "term": "Arithmetic with congruences",
        "definition": "Congruences may be added, subtracted, and multiplied term by term, which justifies casting out nines and modular checksums."
      },
      {
        "term": "Cancellation needs care",
        "definition": "A common factor may be cancelled only when it is coprime to the modulus: 2x ≡ 2 (mod 4) allows x ≡ 1 or 3 (mod 4)."
      }
    ],
    "equations": [
      {
        "label": "Definition of congruence",
        "latex": "a \\equiv b \\pmod{n} \\iff n \\mid (a - b)",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "integers being compared"
          },
          {
            "symbol": "n",
            "meaning": "positive modulus"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "greatest-common-divisor-and-least-common-multiple",
      "euclidean-algorithm",
      "prime-numbers"
    ],
    "wikipediaTitle": "Modular arithmetic",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Modular arithmetic — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Modular_arithmetic"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "greatest-common-divisor-and-least-common-multiple",
    "title": "Greatest common divisor and least common multiple",
    "subject": "mathematics",
    "category": "number-theory",
    "summary": "The greatest common divisor of two integers is the largest number dividing both, and the least common multiple is the smallest number both divide. For positive a and b, gcd(a, b) × lcm(a, b) = ab.",
    "aliases": [
      "GCD and LCM",
      "HCF and LCM"
    ],
    "keyConcepts": [
      {
        "term": "Prime factorisation method",
        "definition": "Use the lowest power of each shared prime for the GCD and the highest power of every prime for the LCM: 12 = 2²·3 and 18 = 2·3² give gcd 6 and lcm 36."
      },
      {
        "term": "Product relationship",
        "definition": "gcd(a, b) · lcm(a, b) = |ab| for two integers, which gives a fast LCM once the GCD is known."
      },
      {
        "term": "Coprime numbers",
        "definition": "Two integers with gcd 1 are coprime, so their least common multiple is simply their product."
      },
      {
        "term": "More than two numbers",
        "definition": "The product identity does not extend naively to three numbers; instead reduce pairwise, using gcd(a, b, c) = gcd(gcd(a, b), c)."
      }
    ],
    "equations": [
      {
        "label": "GCD–LCM product identity",
        "latex": "\\gcd(a,b) \\cdot \\operatorname{lcm}(a,b) = |ab|",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "two integers"
          }
        ]
      },
      {
        "label": "GCD from prime exponents",
        "latex": "\\gcd(a,b) = \\prod_p p^{\\min(e_p, f_p)}",
        "variables": [
          {
            "symbol": "e_p, f_p",
            "meaning": "exponents of prime p in a and b"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "euclidean-algorithm",
      "prime-numbers",
      "fundamental-theorem-of-arithmetic"
    ],
    "wikipediaTitle": "Greatest common divisor",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Greatest common divisor — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Greatest_common_divisor"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "euclidean-algorithm",
    "title": "The Euclidean algorithm",
    "subject": "mathematics",
    "category": "number-theory",
    "summary": "The Euclidean algorithm finds a greatest common divisor by repeated division with remainder: gcd(a, b) = gcd(b, a mod b), stopping when the remainder is zero. The last nonzero remainder is the GCD.",
    "aliases": [
      "Euclid's algorithm"
    ],
    "keyConcepts": [
      {
        "term": "Division with remainder",
        "definition": "Write a = bq + r with 0 ≤ r < |b|; any common divisor of a and b also divides r, so the pair (a, b) can be replaced by (b, r)."
      },
      {
        "term": "Worked example",
        "definition": "gcd(1071, 462): 1071 = 2·462 + 147, 462 = 3·147 + 21, 147 = 7·21 + 0, so the GCD is 21."
      },
      {
        "term": "Fibonacci worst case",
        "definition": "Consecutive Fibonacci numbers give the longest remainder chains, so the number of steps is at most about five times the count of decimal digits."
      },
      {
        "term": "Extended algorithm",
        "definition": "Back-substituting the remainders writes gcd(a, b) = ax + by with integers x and y, called Bézout coefficients."
      }
    ],
    "equations": [
      {
        "label": "Recursive step",
        "latex": "\\gcd(a,b) = \\gcd(b,\\ a \\bmod b)",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "integers, b ≠ 0"
          },
          {
            "symbol": "a \\bmod b",
            "meaning": "remainder when a is divided by b"
          }
        ]
      },
      {
        "label": "Division with remainder",
        "latex": "a = bq + r, \\qquad 0 \\le r < |b|",
        "variables": [
          {
            "symbol": "q",
            "meaning": "quotient"
          },
          {
            "symbol": "r",
            "meaning": "remainder"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "greatest-common-divisor-and-least-common-multiple",
      "divisibility-and-modular-arithmetic",
      "prime-numbers"
    ],
    "wikipediaTitle": "Euclidean algorithm",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Euclidean algorithm — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Euclidean_algorithm"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "fundamental-theorem-of-arithmetic",
    "title": "The fundamental theorem of arithmetic",
    "subject": "mathematics",
    "category": "number-theory",
    "summary": "Every integer greater than 1 factors into primes, and that factorisation is unique apart from the order of the factors. This is why primes are regarded as the multiplicative building blocks of the integers.",
    "aliases": [
      "unique prime factorisation",
      "unique factorization theorem"
    ],
    "keyConcepts": [
      {
        "term": "Existence",
        "definition": "Repeatedly split any composite number into smaller factors; the process must stop at primes because every factor is smaller than the number it came from."
      },
      {
        "term": "Uniqueness",
        "definition": "If p₁⋯pₖ = q₁⋯qₘ with all factors prime, each pᵢ equals some qⱼ, so the lists agree up to reordering."
      },
      {
        "term": "Canonical form",
        "definition": "Collecting equal primes into powers gives a unique signature of n: distinct primes in increasing order, each raised to a positive exponent."
      },
      {
        "term": "Consequences",
        "definition": "Unique factorisation makes GCDs and LCMs well defined, proves √2 is irrational, and supports Euclid's proof that primes are infinite."
      }
    ],
    "equations": [
      {
        "label": "Prime factorisation of an integer",
        "latex": "n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}",
        "variables": [
          {
            "symbol": "p_i",
            "meaning": "distinct primes in increasing order"
          },
          {
            "symbol": "e_i",
            "meaning": "positive integer exponents"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "prime-numbers",
      "greatest-common-divisor-and-least-common-multiple",
      "euclidean-algorithm"
    ],
    "wikipediaTitle": "Fundamental theorem of arithmetic",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Fundamental theorem of arithmetic — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
      },
      {
        "label": "Khan Academy — Algebra",
        "url": "https://www.khanacademy.org/math/algebra"
      }
    ]
  },
  {
    "slug": "limits",
    "title": "Limits",
    "subject": "mathematics",
    "category": "calculus",
    "summary": "A limit describes the value a function approaches as its input approaches a point, whether or not the function is defined there. Limits formalise continuity, derivatives, and integrals, and one-sided or infinite limits describe different ways an approach can fail.",
    "aliases": [
      "limit of a function",
      "limiting behaviour"
    ],
    "keyConcepts": [
      {
        "term": "Two-sided limit",
        "definition": "lim_{x→a} f(x) = L means f(x) can be made arbitrarily close to L by taking x close enough to a but not equal to a."
      },
      {
        "term": "One-sided limits",
        "definition": "The left-hand limit uses x approaching a from below and the right-hand limit from above; the two-sided limit exists exactly when both one-sided limits exist and agree."
      },
      {
        "term": "Continuity",
        "definition": "A function f is continuous at a when the limit exists, f(a) is defined, and the limit equals f(a)."
      },
      {
        "term": "Indeterminate forms",
        "definition": "Expressions such as 0/0 or ∞/∞ signal that algebra, factoring, or another technique is needed before the limit can be evaluated."
      }
    ],
    "equations": [
      {
        "label": "Definition of a finite limit",
        "latex": "\\lim_{x \\to a} f(x) = L",
        "variables": [
          {
            "symbol": "x",
            "meaning": "input value approaching a"
          },
          {
            "symbol": "a",
            "meaning": "point being approached"
          },
          {
            "symbol": "L",
            "meaning": "value the function approaches"
          }
        ]
      },
      {
        "label": "Continuity at a point",
        "latex": "\\lim_{x \\to a} f(x) = f(a)",
        "variables": [
          {
            "symbol": "f",
            "meaning": "function defined near a"
          },
          {
            "symbol": "a",
            "meaning": "point in the domain"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "derivatives",
      "integrals",
      "fundamental-theorem-of-calculus"
    ],
    "wikipediaTitle": "Limit of a function",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Limit of a function — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Limit_of_a_function"
      },
      {
        "label": "OpenStax Calculus Volume 1",
        "url": "https://openstax.org/books/calculus-volume-1"
      }
    ]
  },
  {
    "slug": "derivatives",
    "title": "Derivatives",
    "subject": "mathematics",
    "category": "calculus",
    "summary": "The derivative measures the instantaneous rate at which a function changes. Geometrically it is the slope of the tangent line, defined as the limit of difference quotients; when position depends on time, the derivative is velocity.",
    "aliases": [
      "differentiation",
      "instantaneous rate of change"
    ],
    "keyConcepts": [
      {
        "term": "Difference quotient",
        "definition": "The average rate of change over an interval of width h is [f(x+h) − f(x)]/h; the derivative is the limit of this quotient as h approaches 0."
      },
      {
        "term": "Tangent line",
        "definition": "The line through (a, f(a)) with slope f′(a); near x = a it gives the best linear approximation to the graph."
      },
      {
        "term": "Differentiability implies continuity",
        "definition": "If f′(a) exists then f is continuous at a, but continuity does not guarantee a derivative, as |x| at x = 0 shows."
      },
      {
        "term": "Notation",
        "definition": "f′(x), dy/dx, and Df(x) all denote the same derivative; dy/dx emphasises the change in y produced by a change in x."
      }
    ],
    "equations": [
      {
        "label": "Derivative as a limit",
        "latex": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
        "variables": [
          {
            "symbol": "f",
            "meaning": "function being differentiated"
          },
          {
            "symbol": "x",
            "meaning": "point where the derivative is taken"
          },
          {
            "symbol": "h",
            "meaning": "step size tending to zero"
          }
        ]
      },
      {
        "label": "Tangent line at x = a",
        "latex": "y - f(a) = f'(a)(x - a)",
        "variables": [
          {
            "symbol": "a",
            "meaning": "point of tangency"
          },
          {
            "symbol": "f'(a)",
            "meaning": "slope of the tangent line"
          },
          {
            "symbol": "x, y",
            "meaning": "coordinates of a point on the line"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "limits",
      "differentiation-rules",
      "applications-of-derivatives"
    ],
    "wikipediaTitle": "Derivative",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Derivative — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Derivative"
      },
      {
        "label": "OpenStax Calculus Volume 1",
        "url": "https://openstax.org/books/calculus-volume-1"
      }
    ]
  },
  {
    "slug": "differentiation-rules",
    "title": "Differentiation rules",
    "subject": "mathematics",
    "category": "calculus",
    "summary": "Differentiation rules turn the limit definition into fast formulas. Power, product, quotient, and chain rules let you differentiate combinations of standard functions without recomputing a limit each time.",
    "aliases": [
      "derivative rules",
      "rules of differentiation"
    ],
    "keyConcepts": [
      {
        "term": "Power rule",
        "definition": "d/dx xⁿ = n xⁿ⁻¹ for any real exponent n at points where xⁿ is differentiable."
      },
      {
        "term": "Product and quotient rules",
        "definition": "(fg)′ = f′g + fg′, and (f/g)′ = (f′g − fg′)/g² wherever g is nonzero."
      },
      {
        "term": "Chain rule",
        "definition": "For g differentiable at x and f differentiable at g(x), d/dx f(g(x)) = f′(g(x)) g′(x): differentiate the outer function, then multiply by the derivative of the inner function."
      },
      {
        "term": "Standard derivatives",
        "definition": "sin x, cos x, eˣ, and ln x have derivatives cos x, −sin x, eˣ, and 1/x, which the rules combine for composite expressions."
      }
    ],
    "equations": [
      {
        "label": "Power rule",
        "latex": "\\frac{d}{dx} x^n = n x^{n-1}",
        "variables": [
          {
            "symbol": "x",
            "meaning": "variable"
          },
          {
            "symbol": "n",
            "meaning": "constant real exponent"
          }
        ]
      },
      {
        "label": "Product rule",
        "latex": "\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
        "variables": [
          {
            "symbol": "f, g",
            "meaning": "differentiable functions of x"
          }
        ]
      },
      {
        "label": "Quotient rule",
        "latex": "\\frac{d}{dx}\\left(\\frac{f(x)}{g(x)}\\right) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}",
        "variables": [
          {
            "symbol": "f, g",
            "meaning": "differentiable functions with g(x) ≠ 0"
          }
        ]
      },
      {
        "label": "Chain rule",
        "latex": "\\frac{d}{dx} f(g(x)) = f'(g(x))\\,g'(x)",
        "variables": [
          {
            "symbol": "f",
            "meaning": "outer function"
          },
          {
            "symbol": "g",
            "meaning": "inner function"
          },
          {
            "symbol": "g \\text{ at } x",
            "meaning": "inner function differentiable at x"
          },
          {
            "symbol": "f \\text{ at } g(x)",
            "meaning": "outer function differentiable at g(x)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "derivatives",
      "applications-of-derivatives",
      "integrals"
    ],
    "wikipediaTitle": "Differentiation rules",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Differentiation rules — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Differentiation_rules"
      },
      {
        "label": "OpenStax Calculus Volume 1",
        "url": "https://openstax.org/books/calculus-volume-1"
      }
    ]
  },
  {
    "slug": "applications-of-derivatives",
    "title": "Applications of derivatives: maxima and minima",
    "subject": "mathematics",
    "category": "calculus",
    "summary": "Derivatives locate where a function rises, falls, and turns. Setting f′(x) = 0 finds critical points, and the second derivative or a sign change classifies each as a local maximum, local minimum, or neither, which solves optimisation problems.",
    "aliases": [
      "maxima and minima",
      "calculus optimisation"
    ],
    "keyConcepts": [
      {
        "term": "Critical point",
        "definition": "A point c in the domain where f′(c) = 0 or f′ does not exist; these are the candidates for local extrema."
      },
      {
        "term": "First-derivative test",
        "definition": "If f′ changes from positive to negative at c, f has a local maximum there; a change from negative to positive gives a local minimum."
      },
      {
        "term": "Second-derivative test",
        "definition": "At a critical point, f″(c) > 0 gives a local minimum and f″(c) < 0 gives a local maximum; f″(c) = 0 is inconclusive."
      },
      {
        "term": "Closed-interval method",
        "definition": "On [a, b], evaluate f at every critical point and at both endpoints; the largest and smallest values are the global extrema."
      }
    ],
    "equations": [
      {
        "label": "Critical point condition",
        "latex": "f'(c) = 0",
        "variables": [
          {
            "symbol": "c",
            "meaning": "candidate location of an extremum"
          },
          {
            "symbol": "f'",
            "meaning": "first derivative of f"
          }
        ]
      },
      {
        "label": "Second-derivative test for a minimum",
        "latex": "f'(c) = 0,\\; f''(c) > 0 \\;\\Rightarrow\\; \\text{local minimum at } c",
        "variables": [
          {
            "symbol": "c",
            "meaning": "critical point"
          },
          {
            "symbol": "f''",
            "meaning": "second derivative of f"
          }
        ]
      },
      {
        "label": "Second-derivative test for a maximum",
        "latex": "f'(c) = 0,\\; f''(c) < 0 \\;\\Rightarrow\\; \\text{local maximum at } c",
        "variables": [
          {
            "symbol": "c",
            "meaning": "critical point"
          },
          {
            "symbol": "f''",
            "meaning": "second derivative of f"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "derivatives",
      "differentiation-rules",
      "limits"
    ],
    "wikipediaTitle": "Maximum and minimum",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Maximum and minimum — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Maximum_and_minimum"
      },
      {
        "label": "OpenStax Calculus Volume 1",
        "url": "https://openstax.org/books/calculus-volume-1"
      }
    ]
  },
  {
    "slug": "integrals",
    "title": "Integrals",
    "subject": "mathematics",
    "category": "calculus",
    "summary": "An integral accumulates infinitely many infinitesimal contributions. The definite integral is a limit of Riemann sums and gives signed area under a curve, while the indefinite integral is an antiderivative that reverses differentiation.",
    "aliases": [
      "integration",
      "Riemann integral"
    ],
    "keyConcepts": [
      {
        "term": "Riemann sum",
        "definition": "Partition [a, b] into n subintervals and add f(xᵢ*)Δx; the definite integral is the limit of these sums as the partition becomes finer."
      },
      {
        "term": "Signed area",
        "definition": "Area below the x-axis counts as negative, so the integral measures net accumulation rather than geometric area."
      },
      {
        "term": "Antiderivative",
        "definition": "A function F with F′ = f; all antiderivatives differ by a constant, written ∫f(x)dx = F(x) + C."
      },
      {
        "term": "Linearity and additivity",
        "definition": "∫(af + bg) = a∫f + b∫g, and the integral over [a, c] equals the sum of the integrals over [a, b] and [b, c], so integrals can be scaled, combined, and split over adjacent intervals."
      }
    ],
    "equations": [
      {
        "label": "Definite integral as a limit of Riemann sums",
        "latex": "\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^{*})\\,\\Delta x",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "lower and upper limits of integration"
          },
          {
            "symbol": "x_i^{*}",
            "meaning": "sample point in the i-th subinterval"
          },
          {
            "symbol": "Δx",
            "meaning": "width of each subinterval"
          }
        ]
      },
      {
        "label": "Indefinite integral as an antiderivative",
        "latex": "\\int f(x)\\,dx = F(x) + C, \\quad F'(x) = f(x)",
        "variables": [
          {
            "symbol": "F",
            "meaning": "an antiderivative of f"
          },
          {
            "symbol": "C",
            "meaning": "arbitrary constant of integration"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "fundamental-theorem-of-calculus",
      "derivatives",
      "applications-of-derivatives"
    ],
    "wikipediaTitle": "Integral",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Integral — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Integral"
      },
      {
        "label": "OpenStax Calculus Volume 1",
        "url": "https://openstax.org/books/calculus-volume-1"
      }
    ]
  },
  {
    "slug": "fundamental-theorem-of-calculus",
    "title": "Fundamental theorem of calculus",
    "subject": "mathematics",
    "category": "calculus",
    "summary": "The fundamental theorem links the two operations of calculus: differentiating an accumulation function recovers the integrand, and the definite integral of a rate equals the net change in its antiderivative. It makes exact area calculations possible.",
    "aliases": [
      "FTC",
      "Newton-Leibniz theorem"
    ],
    "keyConcepts": [
      {
        "term": "First part",
        "definition": "If f is continuous on an interval containing a, then A(x) = ∫ₐˣ f(t)dt is differentiable there and A′(x) = f(x)."
      },
      {
        "term": "Second part",
        "definition": "If f is continuous on [a, b] and F is any antiderivative of f on [a, b], then ∫ₐᵇ f(x)dx = F(b) − F(a)."
      },
      {
        "term": "Net change",
        "definition": "The integral of a rate of change over an interval equals the total change in the quantity over that interval."
      },
      {
        "term": "Inverse processes",
        "definition": "Under continuity, differentiation and integration undo each other, which connects tangent slopes with accumulated area."
      }
    ],
    "equations": [
      {
        "label": "Derivative of an accumulation function",
        "latex": "\\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x)",
        "variables": [
          {
            "symbol": "f",
            "meaning": "continuous integrand"
          },
          {
            "symbol": "a",
            "meaning": "fixed lower limit"
          },
          {
            "symbol": "x",
            "meaning": "variable upper limit"
          }
        ]
      },
      {
        "label": "Evaluation of a definite integral",
        "latex": "\\int_a^b f(x)\\,dx = F(b) - F(a)",
        "variables": [
          {
            "symbol": "F",
            "meaning": "any antiderivative of f"
          },
          {
            "symbol": "a, b",
            "meaning": "endpoints of the interval"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "integrals",
      "derivatives",
      "differential-equations"
    ],
    "wikipediaTitle": "Fundamental theorem of calculus",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Fundamental theorem of calculus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
      },
      {
        "label": "OpenStax Calculus Volume 1",
        "url": "https://openstax.org/books/calculus-volume-1"
      }
    ]
  },
  {
    "slug": "differential-equations",
    "title": "Differential equations",
    "subject": "mathematics",
    "category": "calculus",
    "summary": "A differential equation relates an unknown function to its derivatives. Its solution is a family of functions rather than a single number; an initial condition selects one member, and the order is the highest derivative present.",
    "aliases": [
      "ordinary differential equation",
      "ODE"
    ],
    "keyConcepts": [
      {
        "term": "Order and solution",
        "definition": "The order is the highest derivative in the equation; a solution is any function that satisfies it on an interval."
      },
      {
        "term": "General and particular solutions",
        "definition": "Integration introduces arbitrary constants, producing a family of solutions; initial values fix those constants and select one solution."
      },
      {
        "term": "Separation of variables",
        "definition": "An equation of the form dy/dx = g(x)h(y) is solved by collecting y-terms with dy and x-terms with dx, then integrating both sides on intervals where h(y) ≠ 0. Zeros of h give constant solutions that the division would miss."
      },
      {
        "term": "Exponential model",
        "definition": "dy/dt = ky has solutions y = Ce^{kt}, describing growth when k > 0 and decay when k < 0."
      }
    ],
    "equations": [
      {
        "label": "General first-order equation",
        "latex": "\\frac{dy}{dx} = f(x, y)",
        "variables": [
          {
            "symbol": "y",
            "meaning": "unknown function of x"
          },
          {
            "symbol": "f",
            "meaning": "given function of x and y"
          }
        ]
      },
      {
        "label": "Separable equation",
        "latex": "\\frac{dy}{dx} = g(x)h(y) \\;\\Rightarrow\\; \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx",
        "variables": [
          {
            "symbol": "g",
            "meaning": "function of x only"
          },
          {
            "symbol": "h",
            "meaning": "function of y only"
          },
          {
            "symbol": "h(y) \\ne 0",
            "meaning": "intervals where h is nonzero; zeros of h are constant solutions"
          }
        ]
      },
      {
        "label": "Exponential growth or decay",
        "latex": "\\frac{dy}{dt} = ky \\;\\Rightarrow\\; y = C e^{kt}",
        "variables": [
          {
            "symbol": "k",
            "meaning": "constant growth rate"
          },
          {
            "symbol": "C",
            "meaning": "initial value determined by a condition"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "derivatives",
      "integrals",
      "fundamental-theorem-of-calculus"
    ],
    "wikipediaTitle": "Differential equation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Differential equation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Differential_equation"
      },
      {
        "label": "OpenStax Calculus Volume 2",
        "url": "https://openstax.org/books/calculus-volume-2"
      }
    ]
  },
  {
    "slug": "conditional-probability",
    "title": "Conditional probability",
    "subject": "mathematics",
    "category": "probability",
    "summary": "Conditional probability is the probability of an event once another event is known to have occurred. It restricts the sample space to the known event, giving P(A|B) = P(A∩B)/P(B) when P(B) > 0.",
    "aliases": [
      "probability of A given B",
      "conditional chance"
    ],
    "keyConcepts": [
      {
        "term": "Reduced sample space",
        "definition": "Conditioning on B treats B as the new universe, so only outcomes inside B contribute to the probability."
      },
      {
        "term": "Multiplication rule",
        "definition": "Rearranging the definition gives P(A∩B) = P(A|B)P(B) = P(B|A)P(A), used to combine events stage by stage."
      },
      {
        "term": "Independence",
        "definition": "Events A and B are independent exactly when P(A|B) = P(A), equivalently P(A∩B) = P(A)P(B)."
      },
      {
        "term": "Tree diagrams",
        "definition": "For multi-stage experiments, multiply probabilities along each branch and add the probabilities of branches that produce the same outcome."
      }
    ],
    "equations": [
      {
        "label": "Definition of conditional probability",
        "latex": "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0",
        "variables": [
          {
            "symbol": "A, B",
            "meaning": "events, with B known to occur"
          },
          {
            "symbol": "P(A \\mid B)",
            "meaning": "probability of A given B"
          }
        ]
      },
      {
        "label": "Multiplication rule",
        "latex": "P(A \\cap B) = P(A \\mid B)\\,P(B)",
        "variables": [
          {
            "symbol": "A ∩ B",
            "meaning": "event that both A and B occur"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "probability-basics",
      "bayes-theorem",
      "random-variables-and-distributions"
    ],
    "wikipediaTitle": "Conditional probability",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Conditional probability — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Conditional_probability"
      },
      {
        "label": "Khan Academy — Statistics and probability",
        "url": "https://www.khanacademy.org/math/statistics-probability"
      }
    ]
  },
  {
    "slug": "bayes-theorem",
    "title": "Bayes' theorem",
    "subject": "mathematics",
    "category": "probability",
    "summary": "Bayes' theorem updates a prior probability when new evidence arrives. It expresses P(A|B) using the likelihood P(B|A), the prior P(A), and the total probability of the evidence, explaining why rare conditions can produce many false positives.",
    "aliases": [
      "Bayes' rule",
      "Bayes' formula"
    ],
    "keyConcepts": [
      {
        "term": "Prior and posterior",
        "definition": "P(A) is the belief before evidence; P(A|B) is the updated belief after observing B."
      },
      {
        "term": "Likelihood",
        "definition": "P(B|A) measures how well hypothesis A predicts the observed evidence B."
      },
      {
        "term": "Normalisation",
        "definition": "The denominator P(B) is the total probability of the evidence, summing P(B|Aᵢ)P(Aᵢ) over mutually exclusive and exhaustive hypotheses."
      },
      {
        "term": "Base-rate effect",
        "definition": "When a condition is rare, even an accurate test can produce more false positives than true positives, because the prior is small."
      }
    ],
    "equations": [
      {
        "label": "Bayes' theorem",
        "latex": "P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)}",
        "variables": [
          {
            "symbol": "P(A)",
            "meaning": "prior probability of hypothesis A"
          },
          {
            "symbol": "P(B \\mid A)",
            "meaning": "likelihood of evidence B under A"
          },
          {
            "symbol": "P(A \\mid B)",
            "meaning": "posterior probability of A given B"
          },
          {
            "symbol": "P(B)",
            "meaning": "probability of the evidence; must be greater than 0"
          }
        ]
      },
      {
        "label": "Law of total probability",
        "latex": "P(B) = \\sum_{i} P(B \\mid A_i)\\,P(A_i)",
        "variables": [
          {
            "symbol": "A_i",
            "meaning": "mutually exclusive and exhaustive hypotheses"
          },
          {
            "symbol": "P(A_i) > 0",
            "meaning": "each hypothesis must have nonzero prior probability"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "conditional-probability",
      "probability-basics",
      "hypothesis-testing"
    ],
    "wikipediaTitle": "Bayes' theorem",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Bayes' theorem — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bayes%27_theorem"
      },
      {
        "label": "Khan Academy — Statistics and probability",
        "url": "https://www.khanacademy.org/math/statistics-probability"
      }
    ]
  },
  {
    "slug": "random-variables-and-distributions",
    "title": "Random variables and distributions",
    "subject": "mathematics",
    "category": "probability",
    "summary": "A random variable assigns a numerical value to each outcome of a random experiment. Its distribution lists the possible values and their probabilities in the discrete case, or describes probability by area under a density curve in the continuous case.",
    "aliases": [
      "random variable",
      "probability distribution"
    ],
    "keyConcepts": [
      {
        "term": "Discrete random variable",
        "definition": "Takes countably many values; its probability mass function p(x) = P(X = x) is nonnegative and sums to 1."
      },
      {
        "term": "Continuous random variable",
        "definition": "Probability is given by a density f with P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx; any single exact value has probability 0."
      },
      {
        "term": "Cumulative distribution",
        "definition": "F(x) = P(X ≤ x) increases from 0 to 1 and works for both discrete and continuous variables."
      },
      {
        "term": "Parameters",
        "definition": "Distributions are indexed by parameters, such as n and p for a binomial distribution or μ and σ for a normal distribution."
      }
    ],
    "equations": [
      {
        "label": "Probability mass function sums to one",
        "latex": "\\sum_x p(x) = 1",
        "variables": [
          {
            "symbol": "p(x)",
            "meaning": "probability that X equals x"
          }
        ]
      },
      {
        "label": "Probability from a density",
        "latex": "P(a \\le X \\le b) = \\int_a^b f(x)\\,dx",
        "variables": [
          {
            "symbol": "f",
            "meaning": "probability density function"
          },
          {
            "symbol": "a, b",
            "meaning": "endpoints of an interval"
          }
        ]
      },
      {
        "label": "Cumulative distribution function",
        "latex": "F(x) = P(X \\le x)",
        "variables": [
          {
            "symbol": "F",
            "meaning": "cumulative probability up to x"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "probability-basics",
      "binomial-distribution",
      "expected-value"
    ],
    "wikipediaTitle": "Random variable",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Random variable — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Random_variable"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "binomial-distribution",
    "title": "Binomial distribution",
    "subject": "mathematics",
    "category": "probability",
    "summary": "The binomial distribution counts successes in n independent trials, each with the same success probability p. Its probability mass function is C(n,k)pᵏ(1−p)ⁿ⁻ᵏ, with mean np and variance np(1−p).",
    "aliases": [
      "binomial model",
      "repeated Bernoulli trials"
    ],
    "keyConcepts": [
      {
        "term": "Bernoulli trial",
        "definition": "A single experiment with two outcomes, success with probability p and failure with probability 1 − p."
      },
      {
        "term": "Conditions",
        "definition": "A fixed number n of trials, independence, constant p, and exactly two outcomes are required for a binomial model."
      },
      {
        "term": "Binomial coefficient",
        "definition": "C(n,k) counts the orders in which k successes and n − k failures can occur among n trials."
      },
      {
        "term": "Mean and variance",
        "definition": "E[X] = np and Var(X) = np(1 − p); the distribution is symmetric only when p = 0.5."
      }
    ],
    "equations": [
      {
        "label": "Binomial probability mass function",
        "latex": "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of independent trials"
          },
          {
            "symbol": "k",
            "meaning": "number of successes"
          },
          {
            "symbol": "p",
            "meaning": "probability of success on one trial"
          }
        ]
      },
      {
        "label": "Mean and variance",
        "latex": "E[X] = np, \\quad \\operatorname{Var}(X) = np(1-p)",
        "variables": [
          {
            "symbol": "E[X]",
            "meaning": "expected number of successes"
          },
          {
            "symbol": "Var(X)",
            "meaning": "variance of the number of successes"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "random-variables-and-distributions",
      "expected-value",
      "permutations-and-combinations"
    ],
    "wikipediaTitle": "Binomial distribution",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Binomial distribution — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Binomial_distribution"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "expected-value",
    "title": "Expected value",
    "subject": "mathematics",
    "category": "probability",
    "summary": "The expected value is the probability-weighted average of a random variable's values. It need not be a possible outcome; it predicts the long-run mean of repeated observations and is linear even when variables are dependent.",
    "aliases": [
      "mathematical expectation",
      "mean of a random variable"
    ],
    "keyConcepts": [
      {
        "term": "Discrete expectation",
        "definition": "E[X] = Σ x P(X = x), summing over all possible values of the random variable."
      },
      {
        "term": "Continuous expectation",
        "definition": "E[X] = ∫ x f(x)dx for a density f, provided the integral converges absolutely."
      },
      {
        "term": "Linearity",
        "definition": "E[aX + bY] = aE[X] + bE[Y] always holds, even when X and Y are dependent."
      },
      {
        "term": "Variance link",
        "definition": "Var(X) = E[(X − μ)²] = E[X²] − μ² measures spread around the expected value."
      }
    ],
    "equations": [
      {
        "label": "Expected value of a discrete random variable",
        "latex": "E[X] = \\sum_x x\\,P(X = x)",
        "variables": [
          {
            "symbol": "x",
            "meaning": "a possible value of X"
          },
          {
            "symbol": "P(X = x)",
            "meaning": "probability of that value"
          }
        ]
      },
      {
        "label": "Expected value of a continuous random variable",
        "latex": "E[X] = \\int_{-\\infty}^{\\infty} x f(x)\\,dx",
        "variables": [
          {
            "symbol": "f",
            "meaning": "probability density function of X"
          }
        ]
      },
      {
        "label": "Linearity of expectation",
        "latex": "E[aX + bY] = aE[X] + bE[Y]",
        "variables": [
          {
            "symbol": "a, b",
            "meaning": "constant coefficients"
          },
          {
            "symbol": "X, Y",
            "meaning": "random variables, possibly dependent"
          }
        ]
      },
      {
        "label": "Variance in terms of moments",
        "latex": "\\operatorname{Var}(X) = E[X^2] - (E[X])^2",
        "variables": [
          {
            "symbol": "E[X²]",
            "meaning": "expected value of the square of X"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "random-variables-and-distributions",
      "binomial-distribution",
      "law-of-large-numbers"
    ],
    "wikipediaTitle": "Expected value",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Expected value — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Expected_value"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "law-of-large-numbers",
    "title": "Law of large numbers",
    "subject": "mathematics",
    "category": "probability",
    "summary": "The law of large numbers says that the average of many independent observations of a random variable with finite expected value tends to that expected value. The weak law describes convergence in probability, and the strong law describes almost-sure convergence.",
    "aliases": [
      "LLN",
      "law of averages"
    ],
    "keyConcepts": [
      {
        "term": "Sample mean",
        "definition": "The average of n observations; its expected value is μ and its variance is σ²/n, so it concentrates as n grows."
      },
      {
        "term": "Weak law",
        "definition": "For every ε > 0, P(|X̄ₙ − μ| ≥ ε) → 0 as n → ∞; this is convergence in probability."
      },
      {
        "term": "Strong law",
        "definition": "P(lim X̄ₙ = μ) = 1, meaning the sample mean converges almost surely, a stronger statement than the weak law."
      },
      {
        "term": "Misconception",
        "definition": "The law does not make past results balance out; it says the influence of early fluctuations shrinks as the number of observations grows."
      }
    ],
    "equations": [
      {
        "label": "Sample mean",
        "latex": "\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^{n} X_i",
        "variables": [
          {
            "symbol": "X_i",
            "meaning": "i-th independent observation"
          },
          {
            "symbol": "n",
            "meaning": "number of observations"
          }
        ]
      },
      {
        "label": "Weak law of large numbers",
        "latex": "\\lim_{n \\to \\infty} P\\left(\\left|\\bar{X}_n - \\mu\\right| \\ge \\varepsilon\\right) = 0",
        "variables": [
          {
            "symbol": "μ",
            "meaning": "expected value of each observation"
          },
          {
            "symbol": "ε",
            "meaning": "any positive tolerance"
          }
        ]
      },
      {
        "label": "Variance of the sample mean",
        "latex": "\\operatorname{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n}",
        "variables": [
          {
            "symbol": "σ²",
            "meaning": "variance of one observation"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "expected-value",
      "random-variables-and-distributions",
      "standard-deviation"
    ],
    "wikipediaTitle": "Law of large numbers",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Law of large numbers — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Law_of_large_numbers"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "mean-median-and-mode",
    "title": "Mean, median, and mode",
    "subject": "mathematics",
    "category": "statistics",
    "summary": "Mean, median, and mode are three measures of central tendency. The mean averages all values, the median is the middle of the ordered data, and the mode is the most frequent value; each responds differently to skew and outliers.",
    "aliases": [
      "measures of central tendency",
      "central tendency"
    ],
    "keyConcepts": [
      {
        "term": "Arithmetic mean",
        "definition": "The sum of the values divided by n; it uses every observation and is pulled toward outliers."
      },
      {
        "term": "Median",
        "definition": "The middle value when the data are ordered, or the average of the two middle values when n is even; it is resistant to outliers."
      },
      {
        "term": "Mode",
        "definition": "The value that occurs most often; a data set may have one mode, several modes, or no repeated value."
      },
      {
        "term": "Choosing a measure",
        "definition": "Use the median for skewed data, the mean for symmetric data and further algebra, and the mode for categorical or frequency data."
      }
    ],
    "equations": [
      {
        "label": "Sample mean",
        "latex": "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i",
        "variables": [
          {
            "symbol": "x_i",
            "meaning": "i-th data value"
          },
          {
            "symbol": "n",
            "meaning": "number of values"
          }
        ]
      },
      {
        "label": "Median for an even number of values",
        "latex": "\\text{median} = \\frac{x_{(n/2)} + x_{(n/2 + 1)}}{2}",
        "variables": [
          {
            "symbol": "x_{(k)}",
            "meaning": "k-th value in ascending order"
          },
          {
            "symbol": "n",
            "meaning": "even number of values"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "standard-deviation",
      "normal-distribution",
      "sampling-and-surveys"
    ],
    "wikipediaTitle": "Average",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Average — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Average"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "standard-deviation",
    "title": "Standard deviation",
    "subject": "mathematics",
    "category": "statistics",
    "summary": "Standard deviation measures the typical distance of data values from their mean. It is the square root of the variance, so it returns to the original units and is large when observations are spread widely.",
    "aliases": [
      "SD",
      "root mean square deviation"
    ],
    "keyConcepts": [
      {
        "term": "Variance",
        "definition": "The average squared deviation from the mean; its square root is the standard deviation."
      },
      {
        "term": "Population and sample forms",
        "definition": "Dividing the sum of squared deviations by N gives the population variance σ², whose square root is the population standard deviation σ. Dividing by n − 1 gives the sample variance s², an unbiased estimate of σ², whose square root is the sample standard deviation s."
      },
      {
        "term": "Empirical rule",
        "definition": "For roughly normal data, about 68% of values lie within one standard deviation of the mean, 95% within two, and 99.7% within three."
      },
      {
        "term": "Units and shifts",
        "definition": "Standard deviation is in the same units as the data; adding a constant leaves it unchanged, while multiplying every value by c multiplies it by |c|."
      }
    ],
    "equations": [
      {
        "label": "Population standard deviation",
        "latex": "\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}(x_i - \\mu)^2}",
        "variables": [
          {
            "symbol": "σ",
            "meaning": "population standard deviation"
          },
          {
            "symbol": "μ",
            "meaning": "population mean"
          },
          {
            "symbol": "N",
            "meaning": "population size"
          }
        ]
      },
      {
        "label": "Sample standard deviation",
        "latex": "s = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2}",
        "variables": [
          {
            "symbol": "s",
            "meaning": "sample standard deviation"
          },
          {
            "symbol": "x̄",
            "meaning": "sample mean"
          },
          {
            "symbol": "n",
            "meaning": "sample size"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "mean-median-and-mode",
      "normal-distribution",
      "expected-value"
    ],
    "wikipediaTitle": "Standard deviation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Standard deviation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Standard_deviation"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "normal-distribution",
    "title": "Normal distribution",
    "subject": "mathematics",
    "category": "statistics",
    "summary": "The normal distribution is a symmetric bell-shaped probability distribution fixed by its mean μ and standard deviation σ. Standardising with z = (x − μ)/σ turns any normal variable into the standard normal, whose probabilities come from one table.",
    "aliases": [
      "Gaussian distribution",
      "bell curve"
    ],
    "keyConcepts": [
      {
        "term": "Density",
        "definition": "f(x) = 1/(σ√(2π)) exp(−(x − μ)²/(2σ²)); the curve is symmetric about μ and never touches zero."
      },
      {
        "term": "68–95–99.7 rule",
        "definition": "About 68.27%, 95.45%, and 99.73% of values lie within one, two, and three standard deviations of the mean."
      },
      {
        "term": "Standard score",
        "definition": "z = (x − μ)/σ measures how many standard deviations x lies from the mean and allows comparison across different normal distributions."
      },
      {
        "term": "Central limit theorem",
        "definition": "Sums and averages of many independent, identically distributed variables with finite variance are approximately normal, which is why the model appears so widely."
      }
    ],
    "equations": [
      {
        "label": "Normal probability density",
        "latex": "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
        "variables": [
          {
            "symbol": "μ",
            "meaning": "mean of the distribution"
          },
          {
            "symbol": "σ",
            "meaning": "standard deviation"
          },
          {
            "symbol": "e",
            "meaning": "base of the natural logarithm"
          }
        ]
      },
      {
        "label": "Standard score",
        "latex": "z = \\frac{x - \\mu}{\\sigma}",
        "variables": [
          {
            "symbol": "z",
            "meaning": "number of standard deviations from the mean"
          },
          {
            "symbol": "x",
            "meaning": "observed value"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "standard-deviation",
      "random-variables-and-distributions",
      "hypothesis-testing"
    ],
    "wikipediaTitle": "Normal distribution",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Normal distribution — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Normal_distribution"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "correlation-and-regression",
    "title": "Correlation and regression",
    "subject": "mathematics",
    "category": "statistics",
    "summary": "Correlation measures the strength and direction of a linear association between two variables, while regression fits an equation that predicts one variable from another. Both describe association, not causation.",
    "aliases": [
      "correlation and linear regression",
      "least-squares regression"
    ],
    "keyConcepts": [
      {
        "term": "Correlation coefficient",
        "definition": "Pearson's r lies between −1 and 1; its sign gives the direction and its magnitude how closely points follow a straight line."
      },
      {
        "term": "Least squares",
        "definition": "The regression line minimises the sum of squared vertical residuals, with slope b = r(s_y/s_x)."
      },
      {
        "term": "Coefficient of determination",
        "definition": "r² is the fraction of the variance in y explained by the linear regression on x."
      },
      {
        "term": "Correlation is not causation",
        "definition": "A strong association can arise from confounding variables, reverse causation, or coincidence, so it alone cannot establish cause."
      }
    ],
    "equations": [
      {
        "label": "Pearson correlation coefficient",
        "latex": "r = \\frac{1}{n-1}\\sum_{i=1}^{n}\\left(\\frac{x_i-\\bar{x}}{s_x}\\right)\\left(\\frac{y_i-\\bar{y}}{s_y}\\right)",
        "variables": [
          {
            "symbol": "x_i, y_i",
            "meaning": "paired observations"
          },
          {
            "symbol": "s_x, s_y",
            "meaning": "sample standard deviations"
          }
        ]
      },
      {
        "label": "Least-squares regression line",
        "latex": "\\hat{y} = a + bx, \\quad b = r\\frac{s_y}{s_x}",
        "variables": [
          {
            "symbol": "b",
            "meaning": "slope of the regression line"
          },
          {
            "symbol": "a",
            "meaning": "intercept of the regression line"
          },
          {
            "symbol": "r",
            "meaning": "correlation coefficient"
          }
        ]
      },
      {
        "label": "Coefficient of determination",
        "latex": "r^2 = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}",
        "variables": [
          {
            "symbol": "ŷ_i",
            "meaning": "predicted value for observation i"
          },
          {
            "symbol": "ȳ",
            "meaning": "mean of the observed y values"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "standard-deviation",
      "normal-distribution",
      "sampling-and-surveys"
    ],
    "wikipediaTitle": "Simple linear regression",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Simple linear regression — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Simple_linear_regression"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "sampling-and-surveys",
    "title": "Sampling and surveys",
    "subject": "mathematics",
    "category": "statistics",
    "summary": "Sampling selects a subset of a population to estimate properties of the whole. Probability sampling gives every unit a known chance of selection, which supports unbiased estimates and quantifiable margins of error.",
    "aliases": [
      "survey sampling",
      "statistical sampling"
    ],
    "keyConcepts": [
      {
        "term": "Population and sample",
        "definition": "The population is the entire group of interest; the sample is the subset actually measured."
      },
      {
        "term": "Simple random sampling",
        "definition": "Every subset of size n has an equal chance of selection, removing selection bias in expectation."
      },
      {
        "term": "Stratified sampling",
        "definition": "Divide the population into homogeneous strata and sample within each to reduce variance and guarantee representation."
      },
      {
        "term": "Bias and margin of error",
        "definition": "Non-response, leading questions, and undercoverage distort estimates; random sampling error shrinks roughly in proportion to 1/√n."
      }
    ],
    "equations": [
      {
        "label": "Sample mean",
        "latex": "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i",
        "variables": [
          {
            "symbol": "x_i",
            "meaning": "value from the i-th sampled unit"
          },
          {
            "symbol": "n",
            "meaning": "sample size"
          }
        ]
      },
      {
        "label": "Standard error of the mean",
        "latex": "SE = \\frac{s}{\\sqrt{n}}",
        "variables": [
          {
            "symbol": "s",
            "meaning": "sample standard deviation"
          },
          {
            "symbol": "n",
            "meaning": "sample size"
          }
        ]
      },
      {
        "label": "Margin of error",
        "latex": "MOE = z^{*}\\,\\frac{s}{\\sqrt{n}}",
        "variables": [
          {
            "symbol": "z*",
            "meaning": "critical value for the chosen confidence level"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "mean-median-and-mode",
      "standard-deviation",
      "hypothesis-testing"
    ],
    "wikipediaTitle": "Sampling (statistics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Sampling (statistics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sampling_(statistics)"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "hypothesis-testing",
    "title": "Hypothesis testing",
    "subject": "mathematics",
    "category": "statistics",
    "summary": "Hypothesis testing decides whether sample data give enough evidence to reject a null hypothesis. A test statistic is compared with a sampling distribution to obtain a p-value, which is judged against a pre-chosen significance level.",
    "aliases": [
      "significance testing",
      "statistical hypothesis testing"
    ],
    "keyConcepts": [
      {
        "term": "Null and alternative",
        "definition": "The null H₀ states no effect or no difference; the alternative H₁ states the effect the test is designed to detect."
      },
      {
        "term": "p-value",
        "definition": "The probability, assuming H₀ is true, of a test statistic at least as extreme as the one observed; it is not the probability that H₀ is true."
      },
      {
        "term": "Significance level",
        "definition": "α is the threshold chosen in advance; rejecting H₀ when p < α carries a Type I error probability of at most α (exactly α for a size-α continuous test, often less for discrete tests)."
      },
      {
        "term": "Type I and Type II errors",
        "definition": "A Type I error rejects a true null; a Type II error fails to reject a false null, and power is one minus the Type II error probability."
      }
    ],
    "equations": [
      {
        "label": "z test statistic for a mean",
        "latex": "z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
        "variables": [
          {
            "symbol": "x̄",
            "meaning": "sample mean"
          },
          {
            "symbol": "μ₀",
            "meaning": "mean claimed by the null hypothesis"
          },
          {
            "symbol": "σ",
            "meaning": "population standard deviation"
          },
          {
            "symbol": "n",
            "meaning": "sample size"
          }
        ]
      },
      {
        "label": "Two-sided p-value",
        "latex": "p = P\\left(|Z| \\ge |z_{\\text{obs}}| \\mid H_0\\right)",
        "variables": [
          {
            "symbol": "Z",
            "meaning": "standard normal test statistic under H₀"
          },
          {
            "symbol": "z_obs",
            "meaning": "observed value of the test statistic"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "sampling-and-surveys",
      "normal-distribution",
      "correlation-and-regression"
    ],
    "wikipediaTitle": "Statistical hypothesis test",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Statistical hypothesis test — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Statistical_hypothesis_test"
      },
      {
        "label": "OpenStax Introductory Statistics 2e",
        "url": "https://openstax.org/books/introductory-statistics-2e"
      }
    ]
  },
  {
    "slug": "vectors",
    "title": "Vectors",
    "subject": "mathematics",
    "category": "vectors-and-matrices",
    "summary": "A vector is a quantity with both magnitude and direction, represented by an arrow or an ordered list of components. Vectors add tip-to-tail, scale by numbers, and use the same componentwise algebra in two, three, or more dimensions.",
    "aliases": [
      "vector quantity",
      "geometric vector"
    ],
    "keyConcepts": [
      {
        "term": "Components",
        "definition": "A vector in the plane is written ⟨a, b⟩ or a i + b j; each component measures displacement along an axis."
      },
      {
        "term": "Magnitude",
        "definition": "The length ‖v‖ = √(v₁² + ⋯ + vₙ²), which follows from the distance formula."
      },
      {
        "term": "Addition and scalar multiplication",
        "definition": "Combine components separately: (u + v)ᵢ = uᵢ + vᵢ and (cv)ᵢ = cvᵢ."
      },
      {
        "term": "Unit vector",
        "definition": "A vector of length 1, obtained as v/‖v‖ when v is nonzero, which captures pure direction."
      }
    ],
    "equations": [
      {
        "label": "Component form",
        "latex": "\\mathbf{v} = \\langle v_1, v_2, \\dots, v_n \\rangle",
        "variables": [
          {
            "symbol": "v_i",
            "meaning": "i-th component of v"
          }
        ]
      },
      {
        "label": "Magnitude of a vector",
        "latex": "\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}",
        "variables": [
          {
            "symbol": "‖v‖",
            "meaning": "length of the vector v"
          }
        ]
      },
      {
        "label": "Vector addition",
        "latex": "\\mathbf{u} + \\mathbf{v} = \\langle u_1 + v_1, \\dots, u_n + v_n \\rangle",
        "variables": [
          {
            "symbol": "u, v",
            "meaning": "vectors of the same dimension"
          }
        ]
      },
      {
        "label": "Unit vector in the direction of v",
        "latex": "\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}",
        "variables": [
          {
            "symbol": "v̂",
            "meaning": "unit vector parallel to v"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "dot-and-cross-products",
      "matrices-and-matrix-operations",
      "trigonometry-basics"
    ],
    "wikipediaTitle": "Euclidean vector",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Euclidean vector — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Euclidean_vector"
      },
      {
        "label": "MIT OpenCourseWare 18.06 Linear Algebra",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ]
  },
  {
    "slug": "dot-and-cross-products",
    "title": "Dot and cross products",
    "subject": "mathematics",
    "category": "vectors-and-matrices",
    "summary": "The dot product combines two vectors into a scalar measuring alignment, while the cross product combines two vectors in space into a perpendicular vector. Dot products test perpendicularity; cross products measure area and torque.",
    "aliases": [
      "scalar and vector products",
      "inner product and vector product"
    ],
    "keyConcepts": [
      {
        "term": "Dot product",
        "definition": "u·v = ‖u‖‖v‖cos θ = Σuᵢvᵢ; it is zero exactly when nonzero vectors are perpendicular."
      },
      {
        "term": "Projection",
        "definition": "The scalar projection of u onto v is (u·v)/‖v‖; multiplying by the unit vector v/‖v‖ gives the vector projection."
      },
      {
        "term": "Cross product",
        "definition": "u × v is perpendicular to both, with magnitude ‖u‖‖v‖sin θ equal to the area of the parallelogram they span."
      },
      {
        "term": "Orientation",
        "definition": "The cross product is anticommutative, u × v = −v × u, is defined for three-dimensional vectors, and its direction follows the right-hand rule."
      }
    ],
    "equations": [
      {
        "label": "Dot product",
        "latex": "\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta = \\sum_{i=1}^{n} u_i v_i",
        "variables": [
          {
            "symbol": "θ",
            "meaning": "angle between u and v"
          },
          {
            "symbol": "u_i, v_i",
            "meaning": "corresponding components"
          }
        ]
      },
      {
        "label": "Magnitude of the cross product",
        "latex": "\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\sin\\theta",
        "variables": [
          {
            "symbol": "θ",
            "meaning": "angle between the vectors"
          }
        ]
      },
      {
        "label": "Cross product as a determinant",
        "latex": "\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}",
        "variables": [
          {
            "symbol": "i, j, k",
            "meaning": "standard basis vectors in three dimensions"
          },
          {
            "symbol": "u_i, v_i",
            "meaning": "components of u and v"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "vectors",
      "matrices-and-matrix-operations",
      "determinants-and-inverses"
    ],
    "wikipediaTitle": "Dot product",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Dot product — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dot_product"
      },
      {
        "label": "MIT OpenCourseWare 18.06 Linear Algebra",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      },
      {
        "label": "Cross product — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cross_product"
      }
    ]
  },
  {
    "slug": "matrices-and-matrix-operations",
    "title": "Matrices and matrix operations",
    "subject": "mathematics",
    "category": "vectors-and-matrices",
    "summary": "A matrix is a rectangular array of numbers that encodes a linear transformation or a system of equations. Addition is entrywise, multiplication combines rows of the first matrix with columns of the second, and order matters.",
    "aliases": [
      "matrix algebra",
      "matrix arithmetic"
    ],
    "keyConcepts": [
      {
        "term": "Shape and entries",
        "definition": "An m × n matrix has m rows and n columns; entry aᵢⱼ sits in row i and column j."
      },
      {
        "term": "Matrix multiplication",
        "definition": "(AB)ᵢⱼ = Σₖ aᵢₖbₖⱼ; the product is defined when the inner dimensions match, and generally AB ≠ BA."
      },
      {
        "term": "Identity and transpose",
        "definition": "I has ones on the diagonal and zeros elsewhere; the transpose has (Aᵀ)ᵢⱼ = aⱼᵢ, flipping rows and columns."
      },
      {
        "term": "Linear systems",
        "definition": "Ax = b represents simultaneous linear equations; row reduction solves the system or reveals that it is inconsistent."
      }
    ],
    "equations": [
      {
        "label": "Matrix multiplication",
        "latex": "(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}",
        "variables": [
          {
            "symbol": "A",
            "meaning": "m × n matrix"
          },
          {
            "symbol": "B",
            "meaning": "n × p matrix"
          },
          {
            "symbol": "n",
            "meaning": "shared inner dimension"
          }
        ]
      },
      {
        "label": "Transpose",
        "latex": "(A^{\\mathsf{T}})_{ij} = a_{ji}",
        "variables": [
          {
            "symbol": "Aᵀ",
            "meaning": "transpose of A"
          }
        ]
      },
      {
        "label": "Identity matrix",
        "latex": "AI = IA = A",
        "variables": [
          {
            "symbol": "I",
            "meaning": "identity matrix of compatible size"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "vectors",
      "determinants-and-inverses",
      "eigenvalues-and-eigenvectors"
    ],
    "wikipediaTitle": "Matrix (mathematics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Matrix (mathematics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Matrix_(mathematics)"
      },
      {
        "label": "MIT OpenCourseWare 18.06 Linear Algebra",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ]
  },
  {
    "slug": "determinants-and-inverses",
    "title": "Determinants and inverses",
    "subject": "mathematics",
    "category": "vectors-and-matrices",
    "summary": "The determinant is a scalar assigned to a square matrix that is nonzero exactly when the matrix is invertible. For a 2×2 matrix it is ad − bc, and the inverse, when it exists, undoes the linear transformation.",
    "aliases": [
      "matrix determinant and inverse",
      "inverse of a matrix"
    ],
    "keyConcepts": [
      {
        "term": "2×2 determinant",
        "definition": "For A with rows (a, b) and (c, d), det A = ad − bc; det A = 0 means the columns are linearly dependent."
      },
      {
        "term": "Geometric meaning",
        "definition": "The absolute determinant is the area or volume scale factor of the transformation; a negative sign indicates orientation reversal."
      },
      {
        "term": "Inverse formula",
        "definition": "For a 2×2 matrix with det A ≠ 0, A⁻¹ = (1/det A)[[d, −b], [−c, a]]; a zero determinant means no inverse exists."
      },
      {
        "term": "Solving systems",
        "definition": "When A is invertible, Ax = b has the unique solution x = A⁻¹b."
      }
    ],
    "equations": [
      {
        "label": "Determinant of a 2×2 matrix",
        "latex": "\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc",
        "variables": [
          {
            "symbol": "a, b, c, d",
            "meaning": "entries of the matrix"
          }
        ]
      },
      {
        "label": "Inverse of a 2×2 matrix",
        "latex": "A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
        "variables": [
          {
            "symbol": "det A",
            "meaning": "determinant of A, assumed nonzero"
          }
        ]
      },
      {
        "label": "Defining property of an inverse",
        "latex": "AA^{-1} = A^{-1}A = I",
        "variables": [
          {
            "symbol": "I",
            "meaning": "identity matrix"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "matrices-and-matrix-operations",
      "eigenvalues-and-eigenvectors",
      "vectors"
    ],
    "wikipediaTitle": "Determinant",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Determinant — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Determinant"
      },
      {
        "label": "MIT OpenCourseWare 18.06 Linear Algebra",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ]
  },
  {
    "slug": "eigenvalues-and-eigenvectors",
    "title": "Eigenvalues and eigenvectors",
    "subject": "mathematics",
    "category": "vectors-and-matrices",
    "summary": "An eigenvector of a square matrix is a nonzero vector whose direction is unchanged by the transformation; the eigenvalue is the factor by which it is stretched or flipped. Eigenvalues are found from det(A − λI) = 0.",
    "aliases": [
      "eigenvectors and eigenvalues",
      "characteristic values"
    ],
    "keyConcepts": [
      {
        "term": "Eigen-equation",
        "definition": "Av = λv with v ≠ 0; the matrix only scales v, possibly reversing it when λ is negative."
      },
      {
        "term": "Characteristic polynomial",
        "definition": "det(A − λI) = 0 is a polynomial equation in λ whose roots are the eigenvalues."
      },
      {
        "term": "Eigenspaces",
        "definition": "For each eigenvalue, the eigenvectors together with the zero vector form a subspace, the null space of A − λI."
      },
      {
        "term": "Diagonalisation",
        "definition": "A matrix with n linearly independent eigenvectors can be written A = PDP⁻¹, making powers and repeated transformations easy to compute."
      }
    ],
    "equations": [
      {
        "label": "Eigenvalue equation",
        "latex": "A\\mathbf{v} = \\lambda\\mathbf{v}, \\quad \\mathbf{v} \\neq \\mathbf{0}",
        "variables": [
          {
            "symbol": "A",
            "meaning": "square matrix"
          },
          {
            "symbol": "v",
            "meaning": "nonzero eigenvector"
          },
          {
            "symbol": "λ",
            "meaning": "eigenvalue"
          }
        ]
      },
      {
        "label": "Characteristic equation",
        "latex": "\\det(A - \\lambda I) = 0",
        "variables": [
          {
            "symbol": "I",
            "meaning": "identity matrix of the same size as A"
          }
        ]
      },
      {
        "label": "Diagonalisation",
        "latex": "A = PDP^{-1}",
        "variables": [
          {
            "symbol": "D",
            "meaning": "diagonal matrix of eigenvalues"
          },
          {
            "symbol": "P",
            "meaning": "matrix whose columns are eigenvectors"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "matrices-and-matrix-operations",
      "determinants-and-inverses",
      "vectors"
    ],
    "wikipediaTitle": "Eigenvalues and eigenvectors",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Eigenvalues and eigenvectors — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors"
      },
      {
        "label": "MIT OpenCourseWare 18.06 Linear Algebra",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ]
  },
  {
    "slug": "sets-and-set-operations",
    "title": "Sets and set operations",
    "subject": "mathematics",
    "category": "discrete-mathematics",
    "summary": "A set is a collection of distinct objects. Union, intersection, difference, and complement combine sets, while subsets and Cartesian products describe relationships; these operations obey algebraic laws such as distributivity and De Morgan's laws.",
    "aliases": [
      "set algebra",
      "basic set operations"
    ],
    "keyConcepts": [
      {
        "term": "Membership and subsets",
        "definition": "x ∈ A means x is an element of A; A ⊆ B means every element of A is also an element of B."
      },
      {
        "term": "Union and intersection",
        "definition": "A ∪ B contains elements in either set; A ∩ B contains elements in both."
      },
      {
        "term": "Complement and difference",
        "definition": "A ∖ B contains elements of A not in B; the complement Aᶜ is taken relative to a stated universal set."
      },
      {
        "term": "De Morgan's laws",
        "definition": "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ and (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ, swapping union and intersection under complement."
      }
    ],
    "equations": [
      {
        "label": "Union",
        "latex": "A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}",
        "variables": [
          {
            "symbol": "A, B",
            "meaning": "sets"
          }
        ]
      },
      {
        "label": "Intersection",
        "latex": "A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}",
        "variables": [
          {
            "symbol": "A, B",
            "meaning": "sets"
          }
        ]
      },
      {
        "label": "De Morgan's law",
        "latex": "(A \\cup B)^{c} = A^{c} \\cap B^{c}",
        "variables": [
          {
            "symbol": "Aᶜ",
            "meaning": "complement of A in the universal set"
          }
        ]
      },
      {
        "label": "Inclusion–exclusion for two sets",
        "latex": "|A \\cup B| = |A| + |B| - |A \\cap B|",
        "variables": [
          {
            "symbol": "|A|",
            "meaning": "number of elements in A"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "probability-basics",
      "graph-theory",
      "permutations-and-combinations"
    ],
    "wikipediaTitle": "Set (mathematics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Set (mathematics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Set_(mathematics)"
      },
      {
        "label": "Khan Academy — Algorithms",
        "url": "https://www.khanacademy.org/computing/computer-science/algorithms"
      }
    ]
  },
  {
    "slug": "graph-theory",
    "title": "Graph theory",
    "subject": "mathematics",
    "category": "discrete-mathematics",
    "summary": "Graph theory studies vertices connected by edges. It models networks, routes, and relationships, and asks questions about paths, cycles, connectivity, colouring, and the degrees of vertices.",
    "aliases": [
      "network theory",
      "graph analysis"
    ],
    "keyConcepts": [
      {
        "term": "Vertices and edges",
        "definition": "A graph G = (V, E) consists of a vertex set V and an edge set E joining pairs of vertices."
      },
      {
        "term": "Degree",
        "definition": "The degree of a vertex is the number of edges incident to it; the handshaking lemma says the degrees sum to twice the number of edges."
      },
      {
        "term": "Paths and cycles",
        "definition": "A path follows edges without repeating vertices; a cycle returns to its starting vertex, and a connected graph has a path between every pair of vertices."
      },
      {
        "term": "Trees",
        "definition": "A connected graph with no cycles on n vertices has exactly n − 1 edges and a unique path between any two vertices."
      }
    ],
    "equations": [
      {
        "label": "Handshaking lemma",
        "latex": "\\sum_{v \\in V} \\deg(v) = 2|E|",
        "variables": [
          {
            "symbol": "deg(v)",
            "meaning": "degree of vertex v"
          },
          {
            "symbol": "|E|",
            "meaning": "number of edges"
          }
        ]
      },
      {
        "label": "Edge count of a tree",
        "latex": "|E| = |V| - 1",
        "variables": [
          {
            "symbol": "|V|",
            "meaning": "number of vertices"
          }
        ]
      },
      {
        "label": "Definition of a graph",
        "latex": "G = (V, E)",
        "variables": [
          {
            "symbol": "V",
            "meaning": "set of vertices"
          },
          {
            "symbol": "E",
            "meaning": "set of edges"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "sets-and-set-operations",
      "permutations-and-combinations",
      "matrices-and-matrix-operations"
    ],
    "wikipediaTitle": "Graph theory",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Graph theory — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Graph_theory"
      },
      {
        "label": "Khan Academy — Algorithms",
        "url": "https://www.khanacademy.org/computing/computer-science/algorithms"
      }
    ]
  },
  {
    "slug": "permutations-and-combinations",
    "title": "Permutations and combinations",
    "subject": "mathematics",
    "category": "discrete-mathematics",
    "summary": "Permutations count ordered arrangements, while combinations count unordered selections. The multiplication principle builds both: P(n,r) = n!/(n−r)! and C(n,r) = n!/(r!(n−r)!), differing by whether order matters.",
    "aliases": [
      "ordered and unordered selections",
      "nPr and nCr"
    ],
    "keyConcepts": [
      {
        "term": "Multiplication principle",
        "definition": "If one choice has m options and a second has n, the pair has mn options; this builds factorials and counting tree diagrams."
      },
      {
        "term": "Permutations",
        "definition": "P(n,r) = n(n−1)⋯(n−r+1) counts ordered selections of r distinct objects from n."
      },
      {
        "term": "Combinations",
        "definition": "C(n,r) = P(n,r)/r! divides out the r! orderings of each selected set, leaving unordered selections."
      },
      {
        "term": "With repetition",
        "definition": "Allowing repeats gives n^r ordered strings of length r, and C(n+r−1,r) multisets when order does not matter."
      }
    ],
    "equations": [
      {
        "label": "Number of permutations",
        "latex": "P(n, r) = \\frac{n!}{(n-r)!}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "total number of distinct objects"
          },
          {
            "symbol": "r",
            "meaning": "number selected, with order counted"
          }
        ]
      },
      {
        "label": "Number of combinations",
        "latex": "C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}",
        "variables": [
          {
            "symbol": "C(n, r)",
            "meaning": "unordered selections of r objects from n"
          }
        ]
      },
      {
        "label": "Combinations from permutations",
        "latex": "C(n, r) = \\frac{P(n, r)}{r!}",
        "variables": [
          {
            "symbol": "r!",
            "meaning": "number of orderings of r chosen objects"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "binomial-distribution",
      "sets-and-set-operations",
      "probability-basics"
    ],
    "wikipediaTitle": "Combination",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Combination — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Combination"
      },
      {
        "label": "Khan Academy — Algorithms",
        "url": "https://www.khanacademy.org/computing/computer-science/algorithms"
      }
    ]
  },
  {
    "slug": "mathematical-induction",
    "title": "Mathematical induction",
    "subject": "mathematics",
    "category": "discrete-mathematics",
    "summary": "Mathematical induction proves a statement for all natural numbers in two steps: establish a base case, then show that if the statement holds for n it must hold for n + 1. Strong induction allows any or all smaller cases as the hypothesis.",
    "aliases": [
      "proof by induction",
      "inductive proof"
    ],
    "keyConcepts": [
      {
        "term": "Base case",
        "definition": "Verify the statement for the smallest value, usually n = 1 or n = 0; without it the chain of implications has no starting point."
      },
      {
        "term": "Inductive step",
        "definition": "Assume the statement for n and prove it for n + 1; the assumption is called the inductive hypothesis."
      },
      {
        "term": "Strong induction",
        "definition": "Assume the statement for every k ≤ n to prove it for n + 1; this is equivalent in power to ordinary induction but often more convenient."
      },
      {
        "term": "Well-ordering",
        "definition": "Induction is equivalent to the well-ordering principle: every nonempty set of natural numbers has a least element."
      }
    ],
    "equations": [
      {
        "label": "Principle of mathematical induction",
        "latex": "P(1) \\land \\left(\\forall n\\,(P(n) \\Rightarrow P(n+1))\\right) \\Rightarrow \\forall n\\,P(n)",
        "variables": [
          {
            "symbol": "P(n)",
            "meaning": "statement depending on a natural number n"
          }
        ]
      },
      {
        "label": "Sum of the first n positive integers",
        "latex": "1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of terms"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "sets-and-set-operations",
      "graph-theory",
      "permutations-and-combinations"
    ],
    "wikipediaTitle": "Mathematical induction",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Mathematical induction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mathematical_induction"
      },
      {
        "label": "Khan Academy — Algorithms",
        "url": "https://www.khanacademy.org/computing/computer-science/algorithms"
      }
    ]
  }
];
