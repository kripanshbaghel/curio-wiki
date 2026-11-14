/**
 * Live verification that every curated topic's `wikipediaTitle` resolves to a
 * real English Wikipedia article. Run per batch:
 *
 *   npx tsx scripts/verify-wikipedia-titles.ts [subject]
 *
 * Exits 1 if any title is missing, so a fabricated link can never slip in.
 */
import { topics } from '../src/content/topics';
import { missingWikipediaTitles } from '../src/lib/verify/wikipedia-titles';

async function main() {
  const subject = process.argv[2];
  const selected = subject ? topics.filter((topic) => topic.subject === subject) : topics;

  if (selected.length === 0) {
    console.error(`No topics found${subject ? ` for subject "${subject}"` : ''}.`);
    process.exitCode = 1;
    return;
  }

  console.log(`Checking ${selected.length} curated topic title(s) against Wikipedia…`);
  const missing = await missingWikipediaTitles(selected.map((topic) => topic.wikipediaTitle));

  if (missing.length === 0) {
    console.log(`PASS — all ${selected.length} article titles resolve.`);
    return;
  }

  console.error(`FAIL — ${missing.length} title(s) do not resolve:`);
  for (const title of missing) console.error(`  - ${title}`);
  process.exitCode = 1;
}

void main();
