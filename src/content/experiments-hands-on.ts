import type { Experiment } from './types';

/**
 * Hands-on home/classroom experiment seeds (existing + agent B additions).
 * Owned by content agent B — extend this array with new entries.
 * Topic slugs available: newtons-laws-of-motion, simple-pendulum, energy-and-work,
 * electric-circuits, waves-and-sound, optics-light, atomic-structure, chemical-bonding,
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
    topic: 'energy-and-work',
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
];
