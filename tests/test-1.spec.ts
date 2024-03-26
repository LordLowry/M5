import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(10000);
  await page.goto('https://m.skybet.com');
  await page.getByRole('link', { name: 'Log in' }).click();
   });