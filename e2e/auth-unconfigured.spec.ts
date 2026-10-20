import { expect, test } from '@playwright/test';

test('unconfigured auth: /signin shows the setup state with no input fields', async ({
  page,
}) => {
  await page.goto('/signin');

  await expect(page.getByText(/authentication is not configured/i)).toBeVisible();
  expect(await page.locator('input').count()).toBe(0);

  // No fake form, no Google button either
  await expect(page.getByRole('button', { name: /google/i })).toHaveCount(0);
});

test('unconfigured auth: /account redirects to /signin', async ({ page }) => {
  await page.goto('/account');
  await expect(page).toHaveURL(/\/signin/);
  await expect(page.getByText(/authentication is not configured/i)).toBeVisible();
});
