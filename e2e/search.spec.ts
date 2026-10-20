import { expect, test } from '@playwright/test';

test('searching photosynthesis renders sections with sources or honest states', async ({ page }) => {
  await page.goto('/search?q=photosynthesis');

  await expect(
    page.getByRole('heading', { name: /search results/i }),
  ).toBeVisible({ timeout: 15_000 });

  // Wikipedia section must exist and contain a wikipedia.org link when live.
  // Tolerate transient network failure: the section heading must still render
  // together with either results or an honest error/empty state.
  // Exact name — "Related on Wikipedia" h3 and article-title headings also match loosely.
  const wikiHeading = page.getByRole('heading', { name: 'Wikipedia', exact: true });
  await expect(wikiHeading).toBeVisible({ timeout: 15_000 });

  const wikiLinks = page.locator('a[href*="wikipedia.org"]');
  const sectionPanel = page.locator('section').filter({ has: wikiHeading });
  if ((await wikiLinks.count()) === 0) {
    // Honest degradation: some error/empty copy inside the Wikipedia section
    await expect(sectionPanel.getByText(/failed|unavailable|no results|not configured|couldn/i).first()).toBeVisible();
  } else {
    await expect(wikiLinks.first()).toBeVisible();
  }

  // Local content section (experiments or topics) renders something usable
  await expect(
    page.getByRole('heading', { name: /experiment|topic/i }).first(),
  ).toBeVisible();
});

test('empty search shows feedback without crashing', async ({ page }) => {
  const response = await page.goto('/search?q=');
  expect(response?.status()).toBeLessThan(400);

  await expect(page.getByText(/empty search|enter a search|type a query|invalid/i).first()).toBeVisible();
  // No raw exception banner
  await expect(page.getByText(/unhandled runtime|application error/i)).toHaveCount(0);
});
