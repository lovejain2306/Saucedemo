import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getWorld } from './world';

const world = getWorld();

Given('User navigates to Sauce Demo application', async () => {
  await world.loginPage.navigate();
});

When('User enters username {string}', async (username: string) => {
  await world.loginPage.enterUsername(username);
});

When('User enters password {string}', async (password: string) => {
  await world.loginPage.enterPassword(password);
});

When('User clicks login button', async () => {
  await world.loginPage.clickLoginButton();
});

Then('User should be redirected to inventory page', async () => {
  await expect(world.page).toHaveURL(/.*inventory.html/);
});

Then('Inventory page should display all products', async () => {
  expect(await world.inventoryPage.isInventoryPageDisplayed()).toBe(true);
});

Then('Login error message should be displayed', async () => {
  expect(await world.loginPage.isErrorMessageVisible()).toBe(true);
});

Then('Error message should contain {string}', async (expectedMessage: string) => {
  expect(await world.loginPage.getLoginErrorMessage()).toContain(expectedMessage);
});