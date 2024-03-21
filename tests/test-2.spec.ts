import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.rte.ie/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.locator('#primary-nav-global').getByRole('link', { name: 'Sport' }).click();
  await page.locator('#secondary-nav').getByRole('link', { name: 'Soccer' }).click();
});