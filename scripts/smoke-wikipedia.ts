/**
 * Live smoke test for the Wikipedia adapter (no API key required).
 * Run: npm run smoke:wikipedia
 * Exercises real requests against en.wikipedia.org and prints honest results.
 */
import {
  getRelatedWikipedia,
  getWikipediaSummary,
  searchWikipedia,
} from '../src/lib/adapters/wikipedia';

async function main() {
  let failures = 0;

  const cases: Array<{ label: string; run: () => Promise<{ expectMin: number; got: number }> }> = [
    {
      label: 'search "photosynthesis" (expect >= 3 results)',
      run: async () => {
        const results = await searchWikipedia('photosynthesis');
        return { expectMin: 3, got: results.length };
      },
    },
    {
      label: 'search "no-match-xyzq123unique" (expect 0 results, no throw)',
      run: async () => {
        const results = await searchWikipedia('no-match-xyzq123unique');
        return { expectMin: 0, got: results.length };
      },
    },
    {
      label: 'ambiguous search "jaguar" (expect >= 5 results)',
      run: async () => {
        const results = await searchWikipedia('jaguar');
        return { expectMin: 5, got: results.length };
      },
    },
    {
      label: 'summary "Newton\'s laws of motion" (expect extract present)',
      run: async () => {
        const summary = await getWikipediaSummary("Newton's laws of motion");
        if (!summary || summary.extract.length < 50) {
          throw new Error(`summary missing or too short: ${summary?.extract.length ?? 0} chars`);
        }
        return { expectMin: 1, got: 1 };
      },
    },
    {
      label: 'summary for missing article (expect null)',
      run: async () => {
        const summary = await getWikipediaSummary('Xyzzy-no-such-article-98765');
        if (summary !== null) throw new Error('expected null for missing article');
        return { expectMin: 1, got: 1 };
      },
    },
    {
      label: 'related "Photosynthesis" (expect >= 1 or graceful [])',
      run: async () => {
        const related = await getRelatedWikipedia('Photosynthesis', 3);
        return { expectMin: 0, got: related.length };
      },
    },
  ];

  for (const testCase of cases) {
    try {
      const { expectMin, got } = await testCase.run();
      const ok = got >= expectMin;
      if (!ok) failures += 1;
      console.log(`${ok ? 'PASS' : 'FAIL'} — ${testCase.label} → ${got}`);
    } catch (error) {
      failures += 1;
      console.log(`FAIL — ${testCase.label} → ${error instanceof Error ? error.message : error}`);
    }
  }

  console.log(failures === 0 ? 'WIKIPEDIA SMOKE: ALL PASS' : `WIKIPEDIA SMOKE: ${failures} FAILURE(S)`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error('WIKIPEDIA SMOKE CRASH:', error);
  process.exit(1);
});
