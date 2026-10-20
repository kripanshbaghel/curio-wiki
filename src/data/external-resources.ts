export interface ExternalResource {
  title: string;
  url: string;
  description: string;
  category: string;
}

/**
 * Curated reputable educational organizations. Every URL must be https and
 * unique — enforced by tests/unit/external-resources.test.ts.
 */
export const EXTERNAL_RESOURCES: ExternalResource[] = [
  {
    title: 'NASA Science',
    url: 'https://science.nasa.gov/',
    description: 'NASA missions, discoveries, and educational material on space and Earth science.',
    category: 'Space & Earth science',
  },
  {
    title: 'ESA — European Space Agency',
    url: 'https://www.esa.int/Education',
    description: 'European space agency resources, classroom activities, and mission data.',
    category: 'Space & Earth science',
  },
  {
    title: 'MIT OpenCourseWare',
    url: 'https://ocw.mit.edu/',
    description: 'Free lecture notes, problem sets, and videos from MIT courses across all sciences.',
    category: 'University-level courses',
  },
  {
    title: 'Khan Academy',
    url: 'https://www.khanacademy.org/science',
    description: 'Free lessons and practice exercises for physics, chemistry, biology, and more.',
    category: 'Interactive learning',
  },
  {
    title: 'Wolfram MathWorld',
    url: 'https://mathworld.wolfram.com/',
    description: 'Extensive illustrated mathematics encyclopedia maintained by Wolfram Research.',
    category: 'Mathematics',
  },
  {
    title: 'PhET Interactive Simulations',
    url: 'https://phet.colorado.edu/',
    description: 'Free interactive physics, chemistry, math, and Earth science simulations.',
    category: 'Interactive learning',
  },
  {
    title: 'Exploratorium',
    url: 'https://www.exploratorium.edu/',
    description: 'Hands-on science museum content covering physics, biology, and perception.',
    category: 'Interactive learning',
  },
  {
    title: 'NIST',
    url: 'https://www.nist.gov/',
    description: 'U.S. standards and measurement institute — reference data and science resources.',
    category: 'Physics & engineering',
  },
  {
    title: 'Smithsonian National Museum of Natural History',
    url: 'https://naturalhistory.si.edu/',
    description: 'Collections and educational content on biology, geology, and human origins.',
    category: 'Biology & Earth science',
  },
  {
    title: 'Internet Archive',
    url: 'https://archive.org/',
    description: 'Open library of public-domain books, including classic science texts.',
    category: 'Open libraries',
  },
  {
    title: 'Project Gutenberg',
    url: 'https://www.gutenberg.org/',
    description: 'Free public-domain ebooks, including foundational scientific works.',
    category: 'Open libraries',
  },
  {
    title: 'CK-12 Foundation',
    url: 'https://www.ck12.org/',
    description: 'Free customizable STEM textbooks, practice, and simulations for students.',
    category: 'Interactive learning',
  },
];
