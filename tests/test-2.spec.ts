import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.a1.net/');
  await page.getByRole('button', { name: 'Cookies akzeptieren' }).click();
  await page.goto('https://www.a1.net/startseite-none-t');
  await page.getByRole('link', { name: 'Business' }).click();
  await page.getByRole('link', { name: 'Jetzt informieren' }).click();
  await page.getByRole('button', { name: 'Externes Video laden' }).click();
  await page.locator('iframe[title="Externes Video laden"]').contentFrame().getByRole('button', { name: 'Pause Tastenkombination k' }).click();
});
