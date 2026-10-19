/**
 * Live smoke test for the web-search adapter (Tavily or Brave).
 * Run: npm run smoke:web
 * Prints SKIPPED (exit 0) when neither TAVILY_API_KEY nor BRAVE_SEARCH_API_KEY is set.
 */
import { getServerEnv } from '../src/lib/config/env';
import { searchWeb } from '../src/lib/adapters/web';

async function main() {
  const env = getServerEnv();
  if (!env.hasWebSearch) {
    console.log('SKIPPED: no TAVILY_API_KEY/BRAVE_SEARCH_API_KEY set — live web-search verification not performed.');
    process.exit(0);
  }
  console.log(`provider: ${env.TAVILY_API_KEY ? 'tavily' : 'brave'}`);

  let failures = 0;
  const queries = ['photosynthesis explained', 'solar system facts for students'];
  for (const query of queries) {
    try {
      const results = await searchWeb(query, { maxResults: 3 });
      if (results.length === 0) {
        failures += 1;
        console.log(`FAIL — "${query}" → 0 results`);
        continue;
      }
      for (const result of results) {
        console.log(`- [${result.domain}] ${result.title} — ${result.snippet.slice(0, 80)}`);
      }
      console.log(`PASS — "${query}" → ${results.length} results`);
    } catch (error) {
      failures += 1;
      console.log(`FAIL — "${query}" → ${error instanceof Error ? error.message : error}`);
    }
  }
  console.log(failures === 0 ? 'WEB SMOKE: ALL PASS' : `WEB SMOKE: ${failures} FAILURE(S)`);
  process.exit(failures === 0 ? 0 : 1);
}

main();
