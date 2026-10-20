import { expect, test } from '@playwright/test';

test('topics list navigates to a topic page with rendered equations', async ({ page }) => {
  await page.goto('/topics');
  await expect(page.getByRole('heading', { name: /topics/i }).first()).toBeVisible();

  // Newton's laws topic carries the F = ma equation
  const topicLink = page.locator('a[href="/topics/newtons-laws-of-motion"]');
  await expect(topicLink).toBeVisible();
  await topicLink.click();

  await expect(page).toHaveURL(/\/topics\/newtons-laws-of-motion/);
  await expect(page.getByRole('heading', { name: /newton/i }).first()).toBeVisible();

  // KaTeX rendered the equations
  await expect(page.locator('.katex').first()).toBeVisible();

  // Wikipedia panel present (live results or honest error state). Use the
  // exact name — /wikipedia/i would also match "Related Wikipedia articles".
  await expect(page.getByRole('heading', { name: 'From Wikipedia' })).toBeVisible({ timeout: 15_000 });
});
