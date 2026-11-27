import { expect, test } from "@playwright/test";

test.describe("Application smoke tests", () => {
  test("homepage loads successfully", async ({ page }) => {
    const response = await page.goto("/");

    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toBeVisible();
  });

  test("homepage has a document title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/\S+/);
  });
});
