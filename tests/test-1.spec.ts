import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
await page.goto('https://m.skybet.com/');
await page.locator('#top-sports-nav').getByRole('link', { name: 'Football' }).click();});