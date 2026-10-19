/**
 * Live smoke test for the YouTube Data API adapter.
 * Run: npm run smoke:youtube
 * Prints SKIPPED (exit 0) when YOUTUBE_API_KEY is not configured.
 */
import { getServerEnv } from '../src/lib/config/env';
import { searchYouTube } from '../src/lib/adapters/youtube';

async function main() {
  if (!getServerEnv().hasYouTube) {
    console.log('SKIPPED: YOUTUBE_API_KEY not set — live YouTube verification not performed.');
    process.exit(0);
  }

  try {
    const videos = await searchYouTube('simple electric motor experiment', { maxResults: 5 });
    if (videos.length === 0) {
      console.log('FAIL: expected at least one video for "simple electric motor experiment"');
      process.exit(1);
    }
    for (const video of videos) {
      console.log(`- ${video.title} | ${video.channelTitle} | ${video.url}`);
    }
    const first = videos[0];
    const idMatches = first.url.endsWith(`watch?v=${first.id}`) && first.embedUrl.includes(first.id);
    console.log(idMatches ? 'PASS: ids consistent across url/embedUrl' : 'FAIL: id mismatch');
    process.exit(idMatches ? 0 : 1);
  } catch (error) {
    console.error('YOUTUBE SMOKE FAIL:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
