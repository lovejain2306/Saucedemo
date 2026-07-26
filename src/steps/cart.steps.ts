import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getWorld } from './world';

const world = getWorld();

When('User clicks on shopping cart', async () => {
  await world.inventoryPage.clickShoppingCart();
  await expect(world.page).toHaveURL(/.*cart.html/);
});

Then('Cart page should display {string} items', async (count: string) => {
  expect(await world.cartPage.getCartItemsCount()).toBe(Number(count));
});

Then('Cart should display {string} item', async (count: string) => {
  expect(await world.cartPage.getCartItemsCount()).toBe(Number(count));
});

Then('Cart should not contain {string}', async (productName: string) => {
  expect(await world.cartPage.isProductInCart(productName)).toBe(false);
});

When('User clicks continue shopping button', async () => {
  await world.cartPage.clickContinueShoppingButton();
  await expect(world.page).toHaveURL(/.*inventory.html/);
});

Then('Inventory page should be displayed', async () => {
  await expect(world.page).toHaveURL(/.*inventory.html/);
});

Then('Cart badge should still show {string} item', async (count: string) => {
  expect(await world.inventoryPage.getCartBadgeCount()).toBe(Number(count));
});