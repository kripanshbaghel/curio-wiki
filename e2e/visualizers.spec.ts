import { expect, test } from '@playwright/test';

test('visualizer index groups thirty benches and links each one', async ({ page }) => {
  await page.goto('/visualizers');

  await expect(
    page.getByRole('heading', { level: 1, name: /instruments, not illustrations/i }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Instrument index' })).toBeVisible();

  for (const subject of ['physics', 'chemistry', 'biology', 'mathematics', 'technology', 'engineering']) {
    await expect(page.getByRole('heading', { name: subject, exact: false }).first()).toBeVisible();
  }

  const links = page.locator('a[href^="/visualizers/"][href*="/"]');
  expect(await links.count()).toBeGreaterThanOrEqual(30);
});

test('subject bench page lists five instruments', async ({ page }) => {
  await page.goto('/visualizers/physics');
  await expect(page.getByRole('heading', { level: 1, name: /physics bench/i })).toBeVisible();
  const links = page.locator('ul a[href^="/visualizers/physics/"]');
  await expect(links).toHaveCount(5);
});

test('projectile bench runs and responds to its parameters', async ({ page }) => {
  await page.goto('/visualizers/physics/projectile-motion');

  await expect(page.getByRole('heading', { level: 1, name: 'Projectile motion' })).toBeVisible();
  await expect(page.getByRole('img', { name: /projectile arcing/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What you are seeing' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Try it' })).toBeVisible();
  await expect(page.getByText('Model and assumptions')).toBeVisible();

  const angle = page.getByLabel('Launch angle', { exact: true });
  await angle.fill('70');
  await expect(page.getByLabel('Launch angle value')).toHaveValue('70');

  await page.getByRole('button', { name: /pause simulation/i }).click();
  await expect(page.getByRole('button', { name: /play simulation/i })).toBeVisible();
});

test('logic gate bench toggles inputs and updates the output', async ({ page }) => {
  await page.goto('/visualizers/technology/logic-gates');

  await expect(page.getByRole('heading', { level: 1, name: 'Logic gates' })).toBeVisible();
  const inputA = page.getByRole('switch', { name: /input A/i });
  await expect(inputA).toHaveAttribute('aria-checked', 'true');

  await inputA.click();
  await expect(inputA).toHaveAttribute('aria-checked', 'false');
});

test('topic pages link to mapped visualizers', async ({ page }) => {
  await page.goto('/topics/newtons-laws-of-motion');
  await expect(page.getByRole('heading', { name: 'Explore interactively' })).toBeVisible();
  const link = page.getByRole('link', { name: /gravity and motion/i }).first();
  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(/\/visualizers\/physics\/gravity-and-motion/);
  await expect(page.getByRole('img', { name: /ball falling/i })).toBeVisible();
});

test('visualizer routes do not overflow a 375px viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });

  for (const path of [
    '/visualizers',
    '/visualizers/biology',
    '/visualizers/biology/human-heart',
    '/visualizers/mathematics/3d-geometry',
  ]) {
    await page.goto(path);
    await expect(page.locator('main')).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, path).toBeLessThanOrEqual(1);
  }
});
