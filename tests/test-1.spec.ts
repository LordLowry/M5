import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(10000);
  await page.goto('https://m.skybet.com/match-5');
  await page.goto('https://rte.ie');
  await page.goto('https://m.skybet.com/match-5');
});