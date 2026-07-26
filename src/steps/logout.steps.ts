import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getWorld } from './world';
import { Config } from '../utils/Config';

const world = getWorld();

When('User clicks hamburger menu button', async () => {
  await world.inventoryPage.clickHamburgerMenu();
});

Then('Menu should display logout option', async () => {
  expect(await world.page.locator('#logout_sidebar_link').isVisible()).toBe(true);
});

When('User clicks logout button', async () => {
  await world.inventoryPage.clickLogout();
});

Then('User should be redirected to login page', async () => {
  await expect(world.page).toHaveURL(/.*index.html/);
});

Then('Login form should be visible', async () => {
  expect(await world.loginPage.isLoginButtonVisible()).toBe(true);
});

When('User navigates back to inventory page', async () => {
  const baseUrl = Config.BASE_URL.endsWith('/') ? Config.BASE_URL : `${Config.BASE_URL}/`;
  await world.page.goto(`${baseUrl}inventory.html`);
});

Then('Login page should be displayed', async () => {
  await expect(world.page).toHaveURL(/.*index.html/);
});

Then('User should not have access to inventory page', async () => {
  await expect(world.page).toHaveURL(/.*index.html/);
});

When('User logs in again with username {string}', async (username: string) => {
  await world.loginPage.enterUsername(username);
  await world.loginPage.enterPassword('secret_sauce');
  await world.loginPage.clickLoginButton();
  await expect(world.page).toHaveURL(/.*inventory.html/);
});