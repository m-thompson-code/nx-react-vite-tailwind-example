import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h1').innerText()).toContain('Hello First App');
});

test('has shared component', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h2').innerText()).toContain('Hello Shared Component');
});

test('has public env variable', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h3').innerText()).toContain('public environment variable for first app');
});

test('does not have private env variable', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h4').innerText()).toContain('DB_PASSWORD is not available on client');
});
