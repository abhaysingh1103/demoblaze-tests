import { test, expect } from '@playwright/test';

test('unsuccessful login with incorrect credentials', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

 
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.locator('#logInModal')).toBeVisible();
  await page.fill('#loginusername', 'invaliduser');
  await page.fill('#loginpassword', 'wrongpass');

  
  // Start waiting for the dialog before clicking
const dialogPromise = page.waitForEvent('dialog');
await page.getByRole('button', { name: 'Log in' }).click();
const dialog = await dialogPromise;

  expect(dialog.message()).toBe('Wrong password.');
  await dialog.accept();
  console.log(`Alert message verified: ${dialog.message()}`);
  await expect(page.locator('#logInModal')).toBeVisible();
  console.log('Login failed, modal remains open as expected.');
});
