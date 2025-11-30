const { test, expect } = require('@playwright/test');

test.describe('Full-Stack Application E2E Tests', () => {
  test('should load homepage and display username', async ({ page }) => {
    // Navigate to the application
    await page.goto('/');
    
    // Wait for the API call to complete and check for username
    await expect(page.locator('h1')).toContainText('Hello', { timeout: 10000 });
    
    // Verify that we see a username (not just "Loading")
    const usernameText = await page.locator('h1').textContent();
    expect(usernameText).toMatch(/Hello .+/);
    
    // Verify the React image is displayed
    await expect(page.locator('img[alt="react"]')).toBeVisible();
  });

  test('should have correct page structure', async ({ page }) => {
    await page.goto('/');
    
    // FIX: Update to match the actual page title "DCS Editor"
    await expect(page).toHaveTitle(/DCS Editor/);
    
    // Check that we have exactly one h1 element
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check that we have exactly one image
    const imgCount = await page.locator('img').count();
    expect(imgCount).toBe(1);
  });

  test('should test API endpoint indirectly', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the username to load (proves API worked)
    await expect(page.locator('h1')).not.toContainText('Loading', { timeout: 10000 });
    
    // The username should be displayed (not empty)
    const finalText = await page.locator('h1').textContent();
    expect(finalText.length).toBeGreaterThan(10); // "Hello " + username
  });
});