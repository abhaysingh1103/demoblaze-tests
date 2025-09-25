import { test, expect, Page } from '@playwright/test';


test('complete e-commerce purchase flow', async ({ page }) => {
   
    await page.goto('https://www.demoblaze.com/index.html');

    // --- Step 1: Login ---
    await test.step('Log in to the application', async () => {

        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').fill('abhay1103');
        await page.locator('#loginpassword').fill('Sonu110385');
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect(page.getByRole('link', { name: 'Welcome abhay1103' })).toBeVisible();
        console.log('Successfully logged in.');
    });

    // --- Step 2: Add an item to the basket ---
    await test.step('Add an item to the basket', async () => {
        
        await page.getByRole('link', { name: 'Phones' }).click();
        await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

        // Listen for the dialog (alert) that pops up after adding an item.
        // This handler will automatically accept the "Product added" dialog.
        page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });

        await page.getByRole('link', { name: 'Add to cart' }).click();
        console.log('Item added to cart.');
    });

    // --- Step 3: Place the order ---
    await test.step('Place the order', async () => {
        
        await page.locator('#cartur').click();
        await page.getByRole('button', { name: 'Place Order' }).click();
        await page.locator('#name').fill('Abhay Singh');
        await page.locator('#country').fill('UK');
        await page.locator('#city').fill('Leeds');
        await page.locator('#card').fill('1234-5678-9012-3456');
        await page.locator('#month').fill('12');
        await page.locator('#year').fill('2025');
        await page.getByRole('button', { name: 'Purchase' }).click();
        await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
        console.log('Order placed successfully.');
        await page.getByRole('button', { name: 'OK' }).click();
    });
});
