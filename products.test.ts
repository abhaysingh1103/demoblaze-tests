import { test, expect, Page } from '@playwright/test';

test('view phones category', async ({ page }) => {
    
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Phones' }).click();


    await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toBeVisible();
    console.log('Successfully navigated to the phones category.');

    // --- Step 1: Add item to cart ---
    await test.step('Add an item to the cart', async () => {
        // Click on the 'Samsung galaxy s6' product.
        await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
        
        // Wait for the 'Add to cart' button to be visible on the new product page.
        await expect(page.getByRole('link', { name: 'Add to cart' })).toBeVisible();

        // Listen for the dialog that pops up after adding an item.
        page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });

        // Click the "Add to cart" button.
        await page.getByRole('link', { name: 'Add to cart' }).click();
        console.log('Item added to cart.');
    });

    // --- Step 2: Remove item from cart ---
    await test.step('Remove the item from the cart', async () => {
        // Navigate to the cart page.
        await page.locator('#cartur').click();
        
        // Wait for the cart page to load and the item to be visible.
        await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
        
        // Click the 'Delete' link for the item.
        await page.getByRole('link', { name: 'Delete' }).click();
        
        // Wait for the item to disappear from the cart table.
    
        await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).not.toBeVisible();
        console.log('Item removed from cart.');
    });
});