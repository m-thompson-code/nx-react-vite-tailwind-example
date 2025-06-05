import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Hello Second App');
});

test('has shared component', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h2').innerText()).toContain('Hello Shared Component');
});

test('has public env variable', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h3').innerText()).toContain('public environment variable for second app');
});

test('does not have private env variable', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h4').innerText()).toContain('DB_PASSWORD is not available on client');
});
