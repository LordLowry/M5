import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(10000);
  await page.goto('https://m.skybet.com/match-5');
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
  await page.getByRole('link', { name: 'Log In To Play' }).click();
  await page.frameLocator('iframe[name="SkyBetAccount"]').getByLabel('Username').click();
  await page.frameLocator('iframe[name="SkyBetAccount"]').getByLabel('Username').fill('reggmyster');
  await page.frameLocator('iframe[name="SkyBetAccount"]').getByLabel('PIN (4-6 numbers)').click();
  await page.frameLocator('iframe[name="SkyBetAccount"]').getByLabel('PIN (4-6 numbers)').fill('260675');
  await page.frameLocator('iframe[name="SkyBetAccount"]').getByRole('button', { name: 'Log in' }).click();
  await page.getByTestId('stickyButton').getByText('Play Match5').click();
  await page.frameLocator('iframe[title="match-5-iframe"]').frameLocator('iframe[name="lobby"]').frameLocator('iframe[title="gameFrame"]').getByTestId('UnrevealedCard__RevealButton').click();
  await page.frameLocator('iframe[title="match-5-iframe"]').frameLocator('iframe[name="lobby"]').frameLocator('iframe[title="gameFrame"]').getByRole('img', { name: 'shirts' }).nth(2).click();
  });