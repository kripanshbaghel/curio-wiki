import { expect, test } from '@playwright/test';

test('experiment page shows safety section and numbered procedure', async ({ page }) => {
  await page.goto('/experiments');
  await expect(page.getByRole('heading', { name: 'Experiments', exact: true })).toBeVisible();

  // Open the first experiment card
  const firstCard = page.locator('a[href^="/experiments/"]').first();
  await firstCard.click();
  await expect(page).toHaveURL(/\/experiments\/[a-z0-9-]+/);

  // Safety section is always rendered
  await expect(page.getByRole('heading', { name: /safety first/i })).toBeVisible();

  // Procedure steps > 0 (numbered list items rendered as li)
  const steps = page.locator('ol li');
  expect(await steps.count()).toBeGreaterThan(0);

  // Editorial-selection note is always present
  await expect(page.getByText(/editorial selection/i)).toBeVisible();
});
