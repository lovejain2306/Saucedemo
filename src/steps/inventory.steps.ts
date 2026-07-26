import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getWorld } from './world';

const world = getWorld();

Given('User is logged in with username {string}', async (username: string) => {
  await world.loginPage.navigate();
  if (world.page.url().includes('inventory.html')) return;
  await world.loginPage.enterUsername(username);
  await world.loginPage.enterPassword('secret_sauce');
  await world.loginPage.clickLoginButton();
  await expect(world.page).toHaveURL(/.*inventory.html/);
});

Given('User is on inventory page', async () => {
  await expect(world.page).toHaveURL(/.*inventory.html/);
});

Then('Inventory page should display {string} products', async (count: string) => {
  expect(await world.inventoryPage.getAllProducts()).toBe(Number(count));
});

Then('Each product should have name, price and add to cart button', async () => {
  const names = await world.inventoryPage.getProductNames();
  const prices = await world.inventoryPage.getProductPrices();
  expect(names.length).toBeGreaterThan(0);
  expect(prices.length).toBeGreaterThan(0);
  expect(names.length).toBe(prices.length);
});

When('User adds {string} to cart', async (productName: string) => {
  await world.inventoryPage.addProductToCart(productName);
});

Then('Cart badge should show {string} item', async (count: string) => {
  expect(await world.inventoryPage.getCartBadgeCount()).toBe(Number(count));
});

Then('Cart badge should show {string} items', async (count: string) => {
  expect(await world.inventoryPage.getCartBadgeCount()).toBe(Number(count));
});

Then('{string} button should change to {string}', async (_, newText: string) => {
  const buttons = await world.page.locator(`button:has-text("${newText}")`).count();
  expect(buttons).toBeGreaterThan(0);
});

When('User removes {string} from cart', async (productName: string) => {
  await world.inventoryPage.removeProductFromCart(productName);
});

Then('Cart badge should not be visible', async () => {
  expect(await world.inventoryPage.isCartBadgeVisible()).toBe(false);
});

Then('{string} button should change back to {string}', async (_, newText: string) => {
  const buttons = await world.page.locator(`button:has-text("${newText}")`).count();
  expect(buttons).toBeGreaterThan(0);
});

When('User sorts products by {string}', async (sortOption: string) => {
  await world.inventoryPage.sortProducts(sortOption);
});

Then('Products should be sorted in ascending order by price', async () => {
  const prices = await world.inventoryPage.getSortedProductPrices();
  const numericPrices = prices.map(price => parseFloat(price.replace('$', '')));
  for (let i = 0; i < numericPrices.length - 1; i++) {
    expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
  }
});

Then('Products should be sorted alphabetically', async () => {
  const names = await world.inventoryPage.getSortedProductNames();
  expect(names).toEqual([...names].sort());
});

When('User clicks on product {string}', async (productName: string) => {
  await world.inventoryPage.clickOnProduct(productName);
  await expect(world.page).toHaveURL(/.*inventory-item.html/);
});

Then('Product details page should be displayed', async () => {
  await expect(world.page).toHaveURL(/.*inventory-item.html/);
});

Then('Product details should show name, description, price and image', async () => {
  expect(await world.productDetailsPage.isProductDetailsDisplayed()).toBe(true);
});