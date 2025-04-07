import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.a1.net/');
  await page.getByRole('button', { name: 'Cookies akzeptieren' }).click();
  await page.getByRole('link', { name: 'Zu den Angeboten' }).click();
  await page.getByRole('link', { name: 'Internet für zu Hause' }).click();
  await page.getByRole('textbox', { name: 'PLZ' }).click();
  await page.getByRole('textbox', { name: 'PLZ' }).fill('1100');
  await page.getByRole('textbox', { name: 'Straße' }).fill('Sahulka');
  await page.getByText('Sahulkastraße (1100, Wien,').click();
  await page.getByRole('textbox', { name: 'Nr.' }).fill('32');
  await page.getByRole('menuitem', { name: 'Stiege 2' }).click();
  await page.getByRole('menuitem', { name: '4' }).click();
  await page.locator('[data-test-id="address-check-button"]').click();
});