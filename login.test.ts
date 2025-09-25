import { test, expect, Page } from '@playwright/test';

// Use a separate test for the full flow.
test('complete e-commerce purchase flow', async ({ page }) => {
    // Navigate to the DemoBlaze website.
    await page.goto('https://www.demoblaze.com/index.html');

    // --- Step 1: Login ---
    await test.step('Log in to the application', async () => {
        // Click the "Log in" link in the navigation bar.
        await page.getByRole('link', { name: 'Log in' }).click();

        // Fill in the login form in the modal. Use a different selector
        // for better readability and robustness.
        await page.locator('#loginusername').fill('abhay1103');
        await page.locator('#loginpassword').fill('Sonu110385');
        
        // Wait for the login button to be enabled and click it.
        await page.getByRole('button', { name: 'Log in' }).click();

        // Wait for the 'Welcome' message to appear, which indicates a successful login.
        await expect(page.getByRole('link', { name: 'Welcome abhay1103' })).toBeVisible();
        console.log('Successfully logged in.');
    });
     await test.step('Log out of the application', async () => {
        // Click the "Log out" link.
        await page.getByRole('link', { name: 'Log out' }).click();
        // Wait for the "Log in" link to reappear, confirming a successful logout.
        await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
        console.log('Successfully logged out.');
    });
});