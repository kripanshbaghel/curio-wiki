import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 375, height: 812 } });

test('375px: hamburger visible, desktop nav hidden, no horizontal scroll', async ({ page }) => {
  await page.goto('/');

  // Hamburger menu button visible, desktop nav hidden.
  // The accessible name flips between "Open menu" and "Close menu", so match both.
  const hamburger = page.locator('header button[aria-expanded]');
  await expect(hamburger).toBeVisible();
  await expect(hamburger).toHaveAttribute('aria-expanded', 'false');

  const desktopNav = page.locator('nav[aria-label="Primary"]');
  await expect(desktopNav).toBeHidden();

  // Opening the menu reveals nav links
  await hamburger.click();
  await expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('a[href="/topics"]').last()).toBeVisible();
  await hamburger.click();

  // No horizontal overflow anywhere: home + a content-heavy page
  for (const path of ['/', '/search?q=photosynthesis', '/experiments', '/resources']) {
    await page.goto(path);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    expect(overflow, `${path} should not scroll horizontally at 375px`).toBe(false);
  }
});
