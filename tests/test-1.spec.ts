import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://m.skybet.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
});