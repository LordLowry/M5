import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(10000);
  await page.goto('https://m.skybet.com');
  await page.locator('#top-sports-nav').getByRole('link', { name: 'In-Play' }).click();
 });