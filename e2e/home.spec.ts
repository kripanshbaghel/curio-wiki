import { expect, test } from '@playwright/test';

test('home loads with six subject cards and a working search', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  // Six subject cards (physics, chemistry, biology, mathematics, technology, engineering)
  const subjectLinks = page.locator('a[href^="/subjects/"]');
  await expect(subjectLinks).toHaveCount(6);

  // Search box submits to /search?q=
  const searchInput = page.locator('input[type="search"], input[name="q"]').first();
  await searchInput.fill('photosynthesis');
  await searchInput.press('Enter');
  await expect(page).toHaveURL(/\/search\?q=photosynthesis/);
  await expect(
    page.getByRole('heading', { name: /search results/i }),
  ).toBeVisible({ timeout: 15_000 });
});

test('internal links from homepage and nav all resolve', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((anchors) =>
    [...new Set(anchors.map((a) => (a as HTMLAnchorElement).getAttribute('href')!))],
  );
  expect(hrefs.length).toBeGreaterThan(3);

  for (const href of hrefs) {
    const path = href.startsWith('/') ? href : `/${href}`;
    if (path.includes('?')) continue; // dynamic query links checked elsewhere
    const response = await request.get(path);
    expect(response.status(), `${path} should resolve`).toBeLessThan(400);
  }

  // Audit nav destinations too
  for (const path of ['/topics', '/experiments', '/videos', '/resources']) {
    const response = await request.get(path);
    expect(response.status(), `${path} should resolve`).toBeLessThan(400);
  }
});
