const { test, expect } = require('@playwright/test');

test.describe('Health endpoint', () => {
  test('GET /health returns 200 with status UP', async ({ request }) => {
    const response = await request.get('/health');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ status: 'UP' });
  });
});

test.describe('Homepage', () => {
  test('displays the app heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'WebApp React + Express' })).toBeVisible();
  });
});
