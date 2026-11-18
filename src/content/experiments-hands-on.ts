import type { Experiment } from './types';

/**
 * Hands-on home/classroom experiment seeds (existing + agent B additions).
 * Owned by content agent B — extend this array with new entries.
 * Topic slugs available: newtons-laws-of-motion, simple-pendulum, work-energy-theorem,
 * electric-circuits, waves-and-sound, refraction-and-snells-law, atomic-structure, chemical-bonding,
 * states-of-matter, quadratic-equations, trigonometry-basics, probability-basics,
 * photosynthesis, cell-biology, human-circulatory-system, genetics-basics,
 * ecology-and-ecosystems, computer-hardware-basics, programming-algorithms, simple-machines.
 */
export const handsOnExperimentSeeds: Experiment[] = [

  {
    slug: 'simple-pendulum-period',
    title: "Measure a pendulum's period",
    subject: 'physics',
    topic: 'simple-pendulum',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Measure how long a pendulum takes for one swing and check how the period changes with string length.',
    concept:
      'A pendulum’s period depends on its length and on gravity, not on the mass or the width of the swing (for small angles).',
    materials: [
      'String or light thread (about 1 metre)',
      'A small soft weight (for example a steel nut or a wrapped eraser)',
      'Tape',
      'Ruler or measuring tape',
      'Stopwatch or phone timer',
    ],
    procedure: [
      'Tape one end of the string to the edge of a table so the weight hangs freely.',
      'Measure the length of the string from the table edge to the top of the weight and write it down.',
      'Pull the weight sideways a small angle (about 10–15 degrees) and release it without pushing.',
      'Time 10 complete swings with the stopwatch and divide by 10 to get the period.',
      'Shorten the string by 25 cm and repeat the measurement.',
      'Compare the periods: a shorter pendulum swings faster.',
    ],
    observations: [
      'Record string length and measured period for each trial in a small table.',
      'Note whether changing the release angle (still small) changes the period much.',
    ],
    explanation:
      'For small release angles a pendulum’s period is T = 2π√(L/g): it grows with the square root of the length L. The mass of the weight and the amplitude (small angle) do not appear in the formula, so they have little effect. Doubling the length increases the period by about 40%, not by half or double.',
    safety: [
      'Use a soft weight and keep the area below the pendulum clear of people and objects.',
      'Do not swing the weight near faces or screens.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: ['simple pendulum period experiment', 'pendulum physics demonstration'],
    sources: [
      { label: 'Wikipedia: Pendulum', url: 'https://en.wikipedia.org/wiki/Pendulum' },
      {
        label: 'HyperPhysics: Pendulum',
        url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/Pend/pend.html',
      },
    ],
    featured: true,
  },
  {
    slug: 'vinegar-volcano',
    title: 'Baking soda and vinegar volcano',
    subject: 'chemistry',
    topic: 'acid-base-reaction',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Create a safe model volcano using kitchen materials and observe the gas produced by an acid–base reaction.',
    concept:
      'Vinegar (an acid) reacts with baking soda (a base) to form carbon dioxide gas, which escapes as bubbles — the same gas that fizzes in fizzy drinks.',
    materials: [
      'Small plastic bottle or container',
      'Baking soda (2–3 tablespoons)',
      'Vinegar (about 100 ml)',
      'Dish soap (a squirt, optional)',
      'Food colouring (a few drops, optional)',
      'Tray, baking sheet, or outdoor surface',
      'Spoon',
    ],
    procedure: [
      'Place the bottle upright in the middle of the tray to catch the overflow.',
      'Add baking soda to the bottle, then the dish soap and food colouring if you have them.',
      'Pour the vinegar into the bottle in one go.',
      'Watch the bubbles rise and overflow — that gas is carbon dioxide.',
      'Record how long the fizzing lasts and try changing the amounts to compare.',
    ],
    observations: [
      'Describe the size and duration of the bubbles for different amounts of baking soda.',
      'Note whether warming the vinegar (gently, by an adult) changes the reaction speed.',
    ],
    explanation:
      'Acetic acid in vinegar donates protons to hydrogencarbonate in baking soda, producing carbonic acid that quickly breaks into water and carbon dioxide. The carbon dioxide escapes as bubbles. Adding dish soap traps the gas in foam, making the “lava” flow slower and look bigger.',
    safety: [
      'Adult supervision required; do the experiment on a tray or outdoors.',
      'Keep the mixture away from eyes; splash it out carefully rather than shaking the bottle.',
      'Do not seal the bottle — the gas must be able to escape.',
    ],
    durationMinutes: 15,
    relatedVideoQueries: ['baking soda vinegar volcano experiment', 'acid base reaction for kids'],
    sources: [
      {
        label: 'Wikipedia: Neutralization (chemistry)',
        url: 'https://en.wikipedia.org/wiki/Neutralization_(chemistry)',
      },
    ],
    featured: true,
  },
  {
    slug: 'leaf-starch-test',
    title: 'Test a leaf for starch',
    subject: 'biology',
    topic: 'photosynthesis',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Use an iodine test to show that a leaf exposed to light contains starch, evidence that photosynthesis happened.',
    concept:
      'Photosynthesis produces glucose, which plants store as starch. Iodine solution turns blue-black in the presence of starch.',
    materials: [
      'A leaf from a houseplant or garden plant (e.g. geranium or coleus)',
      'Small pot of water',
      'Kettle or adult-helped hot water',
      'Small jar of rubbing alcohol (methylated spirit)',
      'Iodine solution (dilute, from a pharmacy)',
      'White plate or tile',
      'Tongs or forceps',
      'Gloves',
    ],
    procedure: [
      'Leave the chosen plant in a dark cupboard for about two days so its leaves use up stored starch (destarching).',
      'Take one leaf and keep the plant in bright light for several hours.',
      'An adult heats the water. Boil the leaf in water for about two minutes with tongs.',
      'An adult places the jar of alcohol in the hot-water bath (never on a direct heat source) and the leaf into the alcohol until it turns pale.',
      'Rinse the pale leaf in cool water and spread it flat on the white plate.',
      'An adult drops a few drops of iodine solution onto the leaf. A blue-black colour means starch is present.',
    ],
    observations: [
      'Compare a leaf kept in the light with one kept in the dark (if available): the light leaf usually turns darker blue-black.',
      'Sketch or photograph the leaf colour before and after adding iodine.',
    ],
    explanation:
      'Iodine is an indicator for starch: it changes from brown to blue-black when starch is present. The light-treated leaf contains starch made from the glucose of photosynthesis, so it stains strongly. The destarched control leaf stains much less, showing the starch was made in the light, not left over from earlier.',
    safety: [
      'Adult supervision required throughout.',
      'Alcohol is flammable — warm it only in the hot-water bath, never on a stove or near flames.',
      'Iodine stains skin and clothes; wear gloves and clean spills immediately.',
    ],
    durationMinutes: 45,
    relatedVideoQueries: ['iodine starch test leaf photosynthesis', 'photosynthesis starch experiment'],
    sources: [{ label: 'Wikipedia: Starch', url: 'https://en.wikipedia.org/wiki/Starch' }],
    featured: false,
  },
  {
    slug: 'yeast-fermentation-balloon',
    title: 'Yeast fermentation balloon',
    subject: 'biology',
    topic: 'cell-biology',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Show that living yeast cells release carbon dioxide during fermentation, and collect the gas in a balloon so the process becomes visible.',
    concept:
      'Yeast cells break down sugar without oxygen (fermentation), producing ethanol and carbon dioxide. The carbon dioxide rises out of the liquid and inflates the balloon fitted over the bottle.',
    materials: [
      'Dry active yeast (1 teaspoon)',
      'Table sugar (2 teaspoons)',
      'Warm water (about 100 ml, adult-poured)',
      'Empty plastic bottle (500 ml)',
      'Balloon',
      'Funnel',
      'Measuring spoon',
      'Marker pen',
    ],
    procedure: [
      'An adult pours comfortably warm — not hot — water into the plastic bottle.',
      'Add the sugar and swirl until it dissolves, then spoon in the yeast using the funnel.',
      'Inflate the balloon once, let the air out, and stretch it a few times so it is easy to inflate later.',
      'Stretch the balloon mouth over the bottle opening, leaving it loosely fitted so excess gas can still escape rather than building pressure.',
      'Write the start time on the bottle with the marker and stand it somewhere warm and draft-free.',
      'Check the balloon every 10 minutes for an hour, sketching or measuring its size at each check.',
    ],
    observations: [
      'Record balloon size (sketch or circumference) at each 10-minute check.',
      'Note how long it takes before the balloon first begins to stand upright.',
      'Look for bubbles or foam forming at the surface of the liquid in the bottle.',
      'Try the experiment again with cold water and compare how quickly the balloon inflates.',
    ],
    explanation:
      'Yeast is a single-celled fungus. When oxygen is scarce it ferments sugar: each glucose molecule is broken down into ethanol and two molecules of carbon dioxide, and the yeast captures a little of the released energy for itself. The carbon dioxide molecules escape from the liquid and collect in the balloon, so its growth is a direct measure of how much gas the yeast has produced. Warm (not hot) water speeds the enzymes at work, which is why the balloon inflates faster in warm conditions.',
    safety: [
      'An adult handles the warm water; water that is too hot can scald skin and kills the yeast.',
      'Do not seal the bottle rigidly — keep the balloon loosely fitted so excess gas can vent instead of building up pressure.',
      'Do not drink the mixture; it is for observation only.',
    ],
    durationMinutes: 30,
    relatedVideoQueries: [
      'yeast fermentation balloon experiment',
      'yeast sugar carbon dioxide demonstration',
      'anaerobic respiration explained for kids',
    ],
    sources: [
      { label: 'Wikipedia: Yeast', url: 'https://en.wikipedia.org/wiki/Yeast' },
      {
        label: 'Wikipedia: Ethanol fermentation',
        url: 'https://en.wikipedia.org/wiki/Ethanol_fermentation',
      },
    ],
    featured: false,
  },
  {
    slug: 'osmosis-potato-cores',
    title: 'Osmosis in potato cores',
    subject: 'biology',
    topic: 'cell-biology',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Show how water moves across cell membranes by comparing the mass of potato cubes soaked in plain water with cubes soaked in saltwater.',
    concept:
      'Osmosis is the movement of water through a selectively permeable membrane from a weaker solution towards a stronger one. In saltwater the potato cells lose water, so the cubes shrink and lose mass; in plain water they gain mass.',
    materials: [
      'One large potato',
      'Plain water',
      'Table salt',
      'Two glasses or jars',
      'Sharp knife (for adult use)',
      'Chopping board',
      'Kitchen scales',
      'Paper towels',
      'Measuring spoon',
      'Labels or marker pen',
    ],
    procedure: [
      'An adult cuts the potato into six cubes of similar size (about 2 cm across) using the knife and chopping board.',
      'Pat the cubes dry with a paper towel and weigh each one on the kitchen scales, recording the starting mass.',
      'Label one glass “plain water” and fill it halfway with plain water.',
      'Label the other glass “saltwater”, fill it halfway with water, and stir in two spoonfuls of salt until no more dissolves.',
      'Place three cubes in each glass and leave them for 30 minutes.',
      'Remove the cubes, pat them dry gently, and weigh each one again.',
      'Calculate the change in mass for each cube and the average change for each group.',
    ],
    observations: [
      'Record the starting and final mass of every cube in a table.',
      'Note any difference in firmness — press each cube gently between finger and thumb.',
      'Describe the appearance of the saltwater cubes compared with the plain-water cubes.',
      'Repeat with distilled water or a stronger salt solution if you have them, and compare.',
    ],
    explanation:
      'A potato cell is surrounded by a selectively permeable cell membrane inside its rigid cell wall. Plain water outside the cells is weaker than the cell contents, so water moves in by osmosis and the cubes swell and gain mass. Saltwater outside is stronger than the cell contents, so water moves out of the cells, the cubes soften and lose mass, and the vacuoles shrink. The cell wall stops the cells from bursting in plain water. The balance point, where no net water movement occurs, is called an isotonic solution.',
    safety: [
      'An adult does all cutting with the knife; keep fingers well clear of the blade.',
      'Do not taste or eat the potato or the soaking liquids — they are for measurement only.',
      'Wash hands and wipe the work surface after handling raw potato.',
    ],
    durationMinutes: 45,
    relatedVideoQueries: [
      'osmosis potato experiment',
      'potato salt water osmosis demonstration',
      'osmosis explained for kids',
    ],
    sources: [
      { label: 'Wikipedia: Osmosis', url: 'https://en.wikipedia.org/wiki/Osmosis' },
      { label: 'Wikipedia: Tonicity', url: 'https://en.wikipedia.org/wiki/Tonicity' },
    ],
    featured: false,
  },
  {
    slug: 'density-column-liquids',
    title: 'Density column of household liquids',
    subject: 'chemistry',
    topic: 'states-of-matter',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Layer several household liquids by density in a clear glass, then use the finished column to predict where everyday objects will settle.',
    concept:
      'Density is mass per unit volume. Less dense liquids float on denser ones, so they form distinct layers, and a dropped object sinks until it reaches a layer denser than itself.',
    materials: [
      'Honey',
      'Washing-up liquid',
      'Water (a drop of food colouring optional)',
      'Vegetable oil',
      'Clear tall glass or jar',
      'Small objects to test: a grape, a paper clip, a plastic bead, a cork, a popcorn kernel',
      'Spoon',
      'Measuring jug',
    ],
    procedure: [
      'Stand the clear glass on a tray or mat in case of spills.',
      'Pour honey into the glass to a depth of about 2 cm.',
      'Slowly pour washing-up liquid down the inside wall of the glass so it settles on top of the honey.',
      'Tint the water with a drop of food colouring if you have it, then pour it gently over the back of a spoon so it layers on top of the washing-up liquid.',
      'Finish by pouring vegetable oil gently over the spoon.',
      'Wait a minute for the layers to settle and sketch their order and relative thickness.',
      'Drop the small test objects in one at a time and record the layer where each one comes to rest.',
    ],
    observations: [
      'Draw and label the finished column, noting the approximate thickness of each layer.',
      'Record the resting position of every test object.',
      'Note any mixing or cloudiness at the boundaries between layers.',
      'Re-test the objects in the individual liquids to check your predictions.',
    ],
    explanation:
      'Each liquid has its own density: honey is the densest, then washing-up liquid, water, and finally oil, which is least dense. Because the liquids do not mix readily, each pours on top of the one below it, forming stable layers. A dropped object displaces liquid, and the buoyant force on it equals the weight of liquid displaced. The object therefore keeps sinking until it reaches a layer denser than itself, where it can float; it will bob at the surface of a layer less dense than itself.',
    safety: [
      'None of the liquids may be drunk — this is an observation experiment only.',
      'Wipe spills straight away; honey and washing-up liquid make benches and floors slippery.',
      'Wash hands after handling the liquids, and keep the glass away from the edge of the bench.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: [
      'density column experiment liquids',
      'liquid density tower for kids',
      'why does oil float on water',
    ],
    sources: [
      { label: 'Wikipedia: Density', url: 'https://en.wikipedia.org/wiki/Density' },
      { label: 'Wikipedia: Buoyancy', url: 'https://en.wikipedia.org/wiki/Buoyancy' },
    ],
    featured: false,
  },
  {
    slug: 'growing-salt-crystals',
    title: 'Grow salt crystals on a string',
    subject: 'chemistry',
    topic: 'states-of-matter',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Grow visible salt crystals from a saturated solution over several days and observe the shapes crystals form as water evaporates.',
    concept:
      'A saturated solution holds as much dissolved salt as it can. As water evaporates the remaining solution can no longer hold the salt, so dissolved salt leaves the solution and builds up on the string as an orderly crystal lattice.',
    materials: [
      'Table salt (4–6 tablespoons)',
      'Boiling water (about 250 ml, adult-poured)',
      'Clear glass jar',
      'String or cotton thread',
      'Pencil or skewer',
      'Paper clip or small weight',
      'Stirring spoon',
      'Paper towel',
    ],
    procedure: [
      'An adult pours the boiling water into the jar and lets it cool for a minute or two.',
      'Stir in spoonfuls of salt, one at a time, until no more dissolves; a few grains resting on the bottom are fine.',
      'Tie the string to the middle of the pencil and hang a paper clip from the lower end as a weight.',
      'Lower the weighted string into the solution so it hangs freely without touching the sides or the bottom.',
      'Rest the pencil across the rim of the jar and put the jar somewhere it will not be knocked.',
      'Leave it uncovered for several days, topping up with a little saturated solution if the level drops too low.',
      'After three to seven days, lift the string out gently and examine the crystals with a hand lens or magnifier.',
    ],
    observations: [
      'Sketch or photograph the crystals on the string each day and note their size.',
      'Compare crystals that formed on the string with those that formed on the sides of the jar.',
      'Describe the crystal faces — are they cubes, prisms, or irregular shapes?',
      'Compare your results with those of a classmate who used a different string thickness.',
    ],
    explanation:
      'When salt dissolves in water, water molecules surround and separate the sodium and chloride ions. A saturated solution holds the maximum ions at that temperature. Water evaporates slowly from the uncovered jar, so the same amount of salt is left in less and less water and the solution becomes supersaturated. Ions then leave the solution and lock into an ordered cubic lattice, growing outwards layer by layer into visible crystals. Cooler, still conditions and a rough string give the crystals convenient places to start growing.',
    safety: [
      'An adult handles the boiling water; scalds happen quickly, so keep the jar on a stable surface away from the bench edge.',
      'The salt solution and the grown crystals are not for consumption — do not taste them.',
      'Wipe up spills promptly so wet surfaces do not become slippery.',
    ],
    durationMinutes: null,
    relatedVideoQueries: [
      'growing salt crystals experiment',
      'crystallisation from solution for kids',
      'how crystals form chemistry',
    ],
    sources: [
      { label: 'Wikipedia: Crystallization', url: 'https://en.wikipedia.org/wiki/Crystallization' },
      {
        label: 'Wikipedia: Saturation (chemistry)',
        url: 'https://en.wikipedia.org/wiki/Saturation_(chemistry)',
      },
    ],
    featured: false,
  },
  {
    slug: 'straw-bridge-load-test',
    title: 'Straw bridge load test',
    subject: 'engineering',
    topic: 'simple-machines',
    level: 'intermediate',
    supervision: 'none',
    objective:
      'Build a small bridge from drinking straws and tape spanning a gap, then find how many coins it can carry before it fails.',
    concept:
      'A bridge must carry its own weight plus the load above it. Triangular trusses spread the load so the straws work mainly in tension and compression rather than bending, and deeper or wider supports carry more weight.',
    materials: [
      'Drinking straws, paper or plastic (about 20)',
      'Masking tape or sticky tape',
      'Two stacks of books or blocks to act as supports',
      'Small coins or identical washers',
      'Ruler',
      'Scissors',
      'Small cup or cardboard tray to hold the load',
    ],
    procedure: [
      'Place the two book stacks about 30 cm apart to form a gap.',
      'Lay straws across the gap and tape them side by side into a flat deck, recording how many straws you used.',
      'Fold or bend extra straws into triangles and tape them underneath the deck to form a truss.',
      'Rest the finished deck across the two supports and check that it sits level and stable.',
      'Place the cup or tray in the middle of the span to hold the load.',
      'Add coins one at a time, counting as you go, until the bridge visibly bends or collapses.',
      'Rebuild with a different design — more straws, a deeper truss, or a double layer — and repeat the test, changing only the design.',
    ],
    observations: [
      'Record the number of coins each design held before failing.',
      'Note where the failure started: the middle of the span, a taped joint, or a crushed straw.',
      'Describe the shape of the failure — did the deck sag, twist, or snap?',
      'Compare the load held by the plain deck with the trussed deck and explain the difference.',
    ],
    explanation:
      'The load of the coins creates bending in the deck, largest at the centre of the span. Triangles underneath turn much of that bending into forces along the straws themselves: the top straws are squeezed (compression) while the bottom ones are stretched (tension), and triangles cannot easily change shape, so the structure holds firm. Extra straws share the load between them, and a deeper truss has a bigger lever arm to resist the bending, so both changes raise the number of coins the bridge can carry before a straw buckles or a taped joint gives way.',
    safety: [
      'Coins are a choking hazard for younger children — keep them counted and out of reach of mouths, and supervise younger helpers.',
      'Clear straw offcuts, tape scraps, and fallen coins from the floor after the test so nothing is left underfoot.',
      'Build the bridge low to the bench so a collapse cannot land on anyone’s feet.',
    ],
    durationMinutes: 30,
    relatedVideoQueries: [
      'straw bridge engineering challenge',
      'truss bridge load test classroom',
      'how triangles make structures strong',
    ],
    sources: [
      { label: 'Wikipedia: Truss', url: 'https://en.wikipedia.org/wiki/Truss' },
      { label: 'Wikipedia: Simple machine', url: 'https://en.wikipedia.org/wiki/Simple_machine' },
    ],
    featured: false,
  },
  {
    slug: 'solar-oven-smores',
    title: 'Solar oven s’mores',
    subject: 'engineering',
    topic: 'work-energy-theorem',
    level: 'intermediate',
    supervision: 'adult-required',
    objective:
      'Build a solar oven from a cardboard box and foil, then use sunlight to melt a s’more and show light energy turning into thermal energy.',
    concept:
      'A solar oven traps incoming sunlight and converts it to heat. The foil flap reflects light onto a dark surface that absorbs it, and the clear cover slows heat loss, so the temperature inside rises enough to melt chocolate and marshmallow.',
    materials: [
      'Small cardboard box with a lid (a takeaway box works well)',
      'Aluminium foil',
      'Black paper or black card',
      'Clear plastic wrap or a freezer bag',
      'Tape or glue stick',
      'Scissors or a craft knife (adult use)',
      'Ruler',
      'A cracker, a piece of chocolate, and a marshmallow',
      'Thermometer (optional)',
    ],
    procedure: [
      'An adult cuts a flap in the lid of the box along three sides, leaving one side attached so it can be propped open as a reflector.',
      'Line the inside of the box with aluminium foil, shiny side facing in, and tape the black paper over the base.',
      'Cover the opening of the box with clear plastic wrap or the freezer bag and seal the edges with tape to keep warm air inside.',
      'Wrap the flap in foil with the shiny side out and prop it open at an angle so it reflects light down into the box.',
      'Assemble the s’more on the black paper, close the covered lid, and carry the oven outside into direct sunlight.',
      'Angle the foil flap towards the sun and note the start time; check every 10 minutes, lifting the cover for as short a time as possible.',
      'Record how long the chocolate takes to soften and the marshmallow to melt, then compare with an identical s’more left indoors.',
    ],
    observations: [
      'Record the temperature inside the oven every 10 minutes if you have a thermometer.',
      'Note the melting time compared with the indoor control s’more.',
      'Describe how the shadows move during the test and whether re-aiming the flap changes the heating.',
      'Try a cloudy day versus a sunny day and compare the results honestly.',
    ],
    explanation:
      'Sunlight arriving at the oven carries radiant energy. The foil flap reflects extra rays down through the clear cover onto the black paper, which absorbs light and warms up, re-radiating it as thermal energy that the plastic wrap largely keeps inside. The air and surfaces inside the box then heat the s’more by conduction and convection until the chocolate softens and the marshmallow melts. The same principles — absorption, reflection, and reduced heat loss — are used in real solar cookers, which can reach temperatures high enough to cook food without any fuel.',
    safety: [
      'An adult does all cutting with scissors or a craft knife and supervises the assembly.',
      'Only use in-date food handled with clean hands; wash hands before and after, and eat the s’more straight away.',
      'Never look directly at the sun while aiming the flap, and do not search the sky for the sun with bare eyes.',
    ],
    durationMinutes: 60,
    relatedVideoQueries: [
      'solar oven s’mores experiment',
      'cardboard box solar cooker for kids',
      'how solar cookers work',
    ],
    sources: [
      { label: 'Wikipedia: Solar cooker', url: 'https://en.wikipedia.org/wiki/Solar_cooker' },
      { label: 'Wikipedia: Solar energy', url: 'https://en.wikipedia.org/wiki/Solar_energy' },
    ],
    featured: false,
  },
  {
    slug: 'paper-glider-lift',
    title: 'Paper glider lift test',
    subject: 'engineering',
    topic: 'airfoil-wing',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Build paper gliders with different wing shapes and measure how far they fly to see how wing design affects lift.',
    concept:
      'A wing generates lift by deflecting air downward, creating an upward reaction force. Wing shape, especially curvature and aspect ratio, changes how efficiently lift is produced for a given speed.',
    materials: [
      'A4 or letter paper',
      'Ruler',
      'Pencil',
      'Scissors',
      'Tape',
      'Marker pen',
      'Large open indoor space or calm outdoor area',
      'Tape measure or measuring tape',
    ],
    procedure: [
      'Fold a standard paper glider using a symmetric wing shape.',
      'Mark a starting line on the floor and stand with your toes behind it.',
      'Throw the glider with a consistent, gentle forward motion.',
      'Measure the distance from the starting line to where the glider first lands.',
      'Repeat three times with the same design and record the average distance.',
      'Fold a second glider with a different wing shape (e.g. narrower or wider wings) using the same paper.',
      'Throw the second glider three times using the same technique and record the average distance.',
      'Compare the two averages and describe which wing shape flew farther.',
    ],
    observations: [
      'Record the landing distance for every throw in a table.',
      'Note whether each glider flew straight, turned, or stalled.',
      'Compare the average distances between the two wing shapes.',
    ],
    explanation:
      'Lift is created when the wing pushes air down and the air pushes the wing up. A well-shaped wing produces more lift for less drag, so the glider stays airborne longer and travels farther. Changing wing width or curvature alters the airflow pattern, which is why some designs fly farther than others. Real aircraft wings use the same principle, with carefully tested shapes for different flight conditions.',
    safety: [
      'Throw gently so the glider does not hit anyone.',
      'Make sure the throwing area is clear of people and breakable objects.',
      'Do not throw paper gliders toward faces or eyes.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: [
      'paper airplane flight distance experiment',
      'how wings generate lift',
      'paper glider aerodynamics for kids',
    ],
    sources: [
      {
        label: 'Wikipedia: Lift (force)',
        url: 'https://en.wikipedia.org/wiki/Lift_(force)',
      },
      {
        label: 'Wikipedia: Airfoil',
        url: 'https://en.wikipedia.org/wiki/Airfoil',
      },
    ],
    featured: false,
  },
  {
    slug: 'popsicle-stick-truss-bridge',
    title: 'Popsicle stick truss bridge',
    subject: 'engineering',
    topic: 'warren-truss-bridge',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Build a small bridge from popsicle sticks arranged in triangular trusses, then test how much weight it holds before failing.',
    concept:
      'Triangles are rigid shapes that resist deformation. A truss bridge spreads the load through its members so each stick works mainly in tension or compression rather than bending.',
    materials: [
      'Popsicle sticks (about 50)',
      'Wood glue or strong craft glue',
      'Two stacks of books or blocks',
      'Small coins or washers',
      'Small cup or cardboard tray',
      'Ruler',
      'Clothespins or binder clips (optional)',
    ],
    procedure: [
      'Place the two support stacks about 25 cm apart.',
      'Glue popsicle sticks side by side to make a flat bridge deck.',
      'Glue sticks underneath the deck in triangular patterns to form trusses.',
      'Let the glue dry fully before testing.',
      'Lay the bridge across the gap between the supports.',
      'Place the cup in the centre of the deck to hold the load.',
      'Add coins one at a time until the bridge bends or breaks.',
      'Record how many coins the bridge held.',
    ],
    observations: [
      'Record the number of coins held before failure.',
      'Describe where the bridge failed first: a joint, a stick, or the centre span.',
      'Note whether the deck sagged, twisted, or snapped.',
    ],
    explanation:
      'The load on the bridge creates bending forces, strongest at the centre of the span. Triangles in the truss convert much of that bending into forces along the sticks themselves: the top sticks are squeezed (compression) while the bottom ones are stretched (tension). Because triangles cannot change shape without changing side lengths, the truss stays rigid. More sticks and deeper trusses share the load better, so the bridge carries more weight before a stick buckles or a joint fails.',
    safety: [
      'Coins are a choking hazard for younger children — keep them counted and out of reach of mouths.',
      'Clear glue drips and stick fragments from the floor after testing.',
      'Build the bridge low to the bench so a collapse cannot land on anyone\'s feet.',
      'Use craft glue, not super glue, to avoid skin bonding.',
    ],
    durationMinutes: 40,
    relatedVideoQueries: [
      'popsicle stick bridge strength test',
      'truss bridge engineering challenge',
      'how triangles make bridges strong',
    ],
    sources: [
      {
        label: 'Wikipedia: Truss',
        url: 'https://en.wikipedia.org/wiki/Truss',
      },
      {
        label: 'Wikipedia: Truss bridge',
        url: 'https://en.wikipedia.org/wiki/Truss_bridge',
      },
    ],
    featured: false,
  },
  {
    slug: 'simple-dc-motor',
    title: 'Simple DC motor',
    subject: 'engineering',
    topic: 'electric-motor',
    level: 'intermediate',
    supervision: 'adult-required',
    objective:
      'Build a minimal DC motor using a battery, magnet, and coil of wire, then observe how the coil spins when current flows.',
    concept:
      'A current-carrying wire in a magnetic field experiences a force. In a coil, forces on opposite sides create torque that makes the coil rotate. A commutator reverses the current each half-turn to keep the coil spinning in one direction.',
    materials: [
      'AA battery',
      'Strong magnet (e.g. neodymium)',
      'Insulated copper wire (about 1 metre)',
      'Two large paper clips',
      'Rubber band',
      'Sandpaper',
      'Small piece of cardboard or foam',
      'Tape',
    ],
    procedure: [
      'Wrap the copper wire around the battery about 10 times to make a coil, leaving straight leads at each end.',
      'Carefully slide the coil off the battery and tape the leads to keep the coil shape.',
      'Sand the insulation off one lead completely, and sand only half the insulation off the other lead.',
      'Straighten the paper clips and tape them to the battery terminals to make electrical contacts.',
      'Place the magnet under the coil.',
      'Rest the coil leads on the paper clip contacts so the coil sits above the magnet.',
      'Give the coil a gentle spin and watch whether it keeps rotating.',
    ],
    observations: [
      'Note whether the coil spins continuously or only briefly.',
      'Observe which direction the coil spins.',
      'Try reversing the magnet or battery leads and note any change.',
    ],
    explanation:
      'When current flows through the coil in the magnetic field, each side of the coil experiences a force in opposite directions, creating torque that rotates the coil. Halfway through a turn, the sanded insulation pattern briefly breaks the circuit, and the coil\'s inertia carries it past the dead spot. Contact is restored with current flowing the other way, so the torque continues in the same direction and the coil keeps spinning.',
    safety: [
      'Adult supervision required for handling magnets and sharp wire ends.',
      'Keep magnets away from electronics, phones, and bank cards.',
      'Do not leave the coil connected to the battery for long periods — the wire and battery can overheat.',
      'Disconnect the battery when not actively testing.',
    ],
    durationMinutes: 30,
    relatedVideoQueries: [
      'simple DC motor homopolar experiment',
      'how electric motors work',
      'battery magnet wire motor demonstration',
    ],
    sources: [
      {
        label: 'Wikipedia: Electric motor',
        url: 'https://en.wikipedia.org/wiki/Electric_motor',
      },
      {
        label: 'Wikipedia: Electromagnetism',
        url: 'https://en.wikipedia.org/wiki/Electromagnetism',
      },
    ],
    featured: false,
  },
  {
    slug: 'water-wheel-power',
    title: 'Water wheel power test',
    subject: 'engineering',
    topic: 'steam-turbine',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Build a simple water wheel from household materials and measure how falling water makes it turn, demonstrating fluid power.',
    concept:
      'Moving water carries kinetic energy. When water strikes the blades of a wheel, it transfers momentum and makes the wheel rotate. The height and flow rate of the water determine how much power is available.',
    materials: [
      'Disposable plate or stiff cardboard',
      'Plastic bottle or paper cups',
      'Wooden skewer or pencil',
      'Waterproof tape',
      'Scissors',
      'Jug or bucket of water',
      'Sink, bathtub, or outdoor area',
      'Stopwatch',
    ],
    procedure: [
      'Cut six to eight blades from the plate or cardboard.',
      'Attach the blades evenly around the edge of a circular base made from the bottle or card.',
      'Push the skewer through the centre of the wheel as an axle.',
      'Support the axle so the wheel can spin freely, with the bottom blades dipping into flowing water.',
      'Pour water from the jug onto the top blades and watch the wheel turn.',
      'Time how long it takes for the wheel to make 10 rotations.',
      'Repeat with water poured from a greater height and compare the speed.',
    ],
    observations: [
      'Record the time for 10 rotations at each water height.',
      'Describe whether pouring from higher makes the wheel spin faster.',
      'Note where the water hits the blades most effectively.',
    ],
    explanation:
      'Water falling from a height has gravitational potential energy that converts to kinetic energy as it accelerates. When the water strikes the wheel blades, it pushes them in the direction of flow, creating torque on the axle. Water from a greater height arrives faster and carries more energy, so the wheel spins more quickly. This is the same principle as water wheels and steam turbines used to generate mechanical power.',
    safety: [
      'Use the experiment near a sink, bathtub, or outdoors where water spills are safe.',
      'Wipe up spills immediately so floors do not become slippery.',
      'Do not use near electrical outlets or appliances.',
    ],
    durationMinutes: 25,
    relatedVideoQueries: [
      'water wheel experiment for kids',
      'how water turbines work',
      'hydropower demonstration household materials',
    ],
    sources: [
      {
        label: 'Wikipedia: Water wheel',
        url: 'https://en.wikipedia.org/wiki/Water_wheel',
      },
      {
        label: 'Wikipedia: Turbine',
        url: 'https://en.wikipedia.org/wiki/Turbine',
      },
    ],
    featured: false,
  },
  {
    slug: 'breadboard-series-circuit',
    title: 'Breadboard series circuit',
    subject: 'engineering',
    topic: 'series-dc-circuit',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Build a series circuit on a breadboard with a battery, switch, and two LEDs, then measure how the voltage divides across the components.',
    concept:
      'In a series circuit there is only one path for current, so the same current flows through every component. The supply voltage is shared between components in proportion to their resistance.',
    materials: [
      'Breadboard',
      'AA battery pack with two AA cells only',
      'Two LEDs of different colours',
      'Two resistors (220 ohm to 470 ohm)',
      'Jumper wires',
      'Optional: multimeter',
    ],
    procedure: [
      'Check the battery pack uses AA cells only — never connect to household mains.',
      'Insert the battery pack wires into the breadboard power rails.',
      'Place the first resistor, LED, second resistor, and second LED in a single row on the breadboard.',
      'Connect jumper wires to make one continuous loop from battery positive through all components back to battery negative.',
      'Connect the battery and observe whether both LEDs light.',
      'If you have a multimeter, measure the voltage across each component.',
      'Disconnect the battery when finished.',
    ],
    observations: [
      'Note whether both LEDs light and how brightly they glow.',
      'Record the voltage across each resistor and LED if using a multimeter.',
      'Compare whether the voltages add up to the battery voltage.',
    ],
    explanation:
      'In a series circuit the current is the same everywhere because there is only one path. Each component causes a voltage drop, and the sum of all drops equals the supply voltage. Components with larger resistance take a larger share of the voltage. If one LED is disconnected or burns out, the circuit breaks and both LEDs go out because there is no alternative path for current.',
    safety: [
      'Use AA battery packs only — household mains voltage is lethal.',
      'If wires or the battery pack become warm, disconnect immediately.',
      'Do not short the battery terminals directly with a wire.',
      'Disconnect the battery when not in use.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: [
      'series circuit breadboard LED experiment',
      'voltage divider circuit for beginners',
      'how series circuits work',
    ],
    sources: [
      {
        label: 'Wikipedia: Series and parallel circuits',
        url: 'https://en.wikipedia.org/wiki/Series_and_parallel_circuits',
      },
      {
        label: 'Wikipedia: Voltage divider',
        url: 'https://en.wikipedia.org/wiki/Resistive_divider',
      },
    ],
    featured: false,
  },
  {
    slug: 'cantilever-beam-deflection',
    title: 'Cantilever beam deflection test',
    subject: 'engineering',
    topic: 'cantilever-beam',
    level: 'intermediate',
    supervision: 'none',
    objective:
      'Clamp a ruler to a table edge, add known weights to the free end, and measure how much it bends to verify beam deflection behaviour.',
    concept:
      'A cantilever beam fixed at one end bends when a load is applied at the free end. The deflection increases with load and beam length, and decreases with beam stiffness and cross-sectional shape.',
    materials: [
      'Metre ruler or stiff wooden strip',
      'G-clamp or heavy books',
      'Table or bench',
      'Small weights (coins or washers)',
      'String or small bucket to hold weights',
      'Ruler or millimetre graph paper',
      'Marker pen or tape',
    ],
    procedure: [
      'Clamp the ruler to the table edge so most of its length overhangs freely.',
      'Mark the free end position with tape or a marker when unloaded.',
      'Hang a small weight (e.g. five coins) from the free end.',
      'Measure the vertical distance the end has moved from its unloaded position.',
      'Record the weight and deflection.',
      'Add more weights one at a time and measure deflection after each addition.',
      'Remove the weights and confirm the ruler returns to its original position.',
    ],
    observations: [
      'Record the weight added and the measured deflection for each step.',
      'Plot deflection against weight and describe whether the relationship is linear.',
      'Note whether the ruler returns to its starting position after unloading.',
    ],
    explanation:
      'For a cantilever with a tip load, deflection is proportional to the load and to the cube of the beam length, and inversely proportional to the material stiffness and cross-section shape. Doubling the load doubles the deflection (within the elastic range). The ruler returns to its original position because the material is stressed below its elastic limit, so no permanent deformation occurs.',
    safety: [
      'Do not overload the ruler to the point where it snaps suddenly.',
      'Wear eye protection in case a weight or ruler breaks.',
      'Keep fingers clear of the clamp and falling weights.',
      'Use small, gradually increasing weights rather than sudden loads.',
    ],
    durationMinutes: 30,
    relatedVideoQueries: [
      'cantilever beam deflection experiment',
      'beam bending test ruler weights',
      'how beams bend under load',
    ],
    sources: [
      {
        label: 'Wikipedia: Cantilever',
        url: 'https://en.wikipedia.org/wiki/Cantilever',
      },
      {
        label: 'Wikipedia: Beam (structure)',
        url: 'https://en.wikipedia.org/wiki/Beam_(structure)',
      },
    ],
    featured: false,
  },
  {
    slug: 'fixed-pulley-lift',
    title: 'Fixed pulley lift test',
    subject: 'engineering',
    topic: 'simple-machines',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Use a fixed pulley to lift a load and measure the force needed compared with lifting the load directly.',
    concept:
      'A fixed pulley changes the direction of a force but does not reduce its magnitude. It lets you pull downward to lift a load upward, which is often more convenient than lifting directly.',
    materials: [
      'Fixed pulley or a smooth wheel on an axle',
      'Strong string or thin rope',
      'Small weight (e.g. a filled water bottle or bag of sand)',
      'Spring scale or force meter (optional)',
      'Table edge or beam to mount the pulley',
      'Tape or clamp',
    ],
    procedure: [
      'Mount the pulley at the edge of a table or beam so it can rotate freely.',
      'Thread the string over the pulley, tying one end to the weight.',
      'Hold the other end of the string and lift the weight by pulling downward.',
      'Note how much effort it feels like compared with lifting the weight directly by hand.',
      'If you have a spring scale, attach it to the free end and record the force reading.',
      'Compare the scale reading with the known weight of the object.',
    ],
    observations: [
      'Describe whether pulling downward feels easier than lifting directly, even if the force is the same.',
      'Record the spring scale reading if available.',
      'Note the direction of motion of the weight versus your pulling direction.',
    ],
    explanation:
      'An ideal fixed pulley has a mechanical advantage of one: the input force equals the output force. Its benefit is changing the direction of effort — you can pull down using your body weight rather than lifting up. Real pulleys have some friction and rope weight, so the input force is slightly more than the load. Adding more pulleys in a block and tackle system can reduce the force needed, but at the cost of pulling more rope.',
    safety: [
      'Mount the pulley securely so it cannot fall.',
      'Use weights that are light enough to handle safely.',
      'Keep fingers away from the pulley wheel and string to avoid pinching.',
      'Stand clear of the weight in case it slips.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: [
      'fixed pulley mechanical advantage experiment',
      'how pulleys work simple machine',
      'pulley force direction demonstration',
    ],
    sources: [
      {
        label: 'Wikipedia: Pulley',
        url: 'https://en.wikipedia.org/wiki/Pulley',
      },
      {
        label: 'Wikipedia: Simple machine',
        url: 'https://en.wikipedia.org/wiki/Simple_machine',
      },
    ],
    featured: false,
  },
];
