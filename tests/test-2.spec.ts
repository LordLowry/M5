import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skybet.com');
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
});


