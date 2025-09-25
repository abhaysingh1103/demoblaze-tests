import { test, expect, Page } from '@playwright/test';

// New test case to verify the sign-up and subsequent login flow.
test('sign up and log in with new user', async ({ page }) => {
    // Generate a unique username based on a timestamp.
    const uniqueUsername = `testuser_${Date.now()}`;
    const password = 'testpass';

    // Navigate to the DemoBlaze website.
    await page.goto('https://www.demoblaze.com/index.html');

    // --- Step 1: Sign up a new user ---
    await test.step('Sign up a new user', async () => {
        // Click the "Sign up" link.
        await page.getByRole('link', { name: 'Sign up' }).click();

        // Fill in the sign-up form.
        await page.locator('#sign-username').fill(uniqueUsername);
        await page.locator('#sign-password').fill(password);

        // Listen for the dialog that confirms successful sign-up.
        page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Sign up successful.');
            console.log(`Dialog message verified: ${dialog.message()}`);
            await dialog.accept();
        });

        // Click the "Sign up" button to submit the form.
        await page.getByRole('button', { name: 'Sign up' }).click();
        
        console.log(`User signed up: ${uniqueUsername}`);
    });

    // --- Step 2: Log in with the newly created user ---
    await test.step('Log in with the new user', async () => {
        // Click the "Log in" link.
        await page.getByRole('link', { name: 'Log in' }).click();

        // Fill in the login form with the new user's credentials.
        await page.locator('#loginusername').fill(uniqueUsername);
        await page.locator('#loginpassword').fill(password);

        // Click the "Log in" button.
        await page.getByRole('button', { name: 'Log in' }).click();

        // Verify that the new user is successfully logged in.
        await expect(page.getByRole('link', { name: `Welcome ${uniqueUsername}` })).toBeVisible();
        console.log('Successfully logged in with the new user.');
    });
});
