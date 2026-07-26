import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getWorld } from './world';

const world = getWorld();

When('User clicks checkout button', async () => {
  await world.cartPage.clickCheckoutButton();
  await expect(world.page).toHaveURL(/.*checkout-step-one.html/);
});

Then('Checkout information page should be displayed', async () => {
  await expect(world.page).toHaveURL(/.*checkout-step-one.html/);
});

When('User enters first name {string}', async (firstName: string) => {
  await world.checkoutPage.enterFirstName(firstName);
});

When('User enters last name {string}', async (lastName: string) => {
  await world.checkoutPage.enterLastName(lastName);
});

When('User enters postal code {string}', async (postalCode: string) => {
  await world.checkoutPage.enterPostalCode(postalCode);
});

When('User clicks continue button', async () => {
  await world.checkoutPage.clickContinueButton();
});

Then('Order review page should be displayed', async () => {
  await expect(world.page).toHaveURL(/.*checkout-step-two.html/);
});

Then('Order total should be calculated correctly', async () => {
  const total = await world.checkoutPage.getOrderTotal();
  expect(Number(total)).toBeGreaterThan(0);
});

When('User clicks finish button', async () => {
  await world.checkoutPage.clickFinishButton();
  await expect(world.page).toHaveURL(/.*checkout-complete.html/);
});

Then('Order confirmation page should be displayed', async () => {
  await expect(world.page).toHaveURL(/.*checkout-complete.html/);
});

Then('Confirmation message should contain {string}', async (expectedMessage: string) => {
  expect(await world.checkoutPage.getConfirmationMessage()).toContain(expectedMessage);
});

Then('Checkout error message should be displayed', async () => {
  expect(await world.checkoutPage.isErrorMessageVisible()).toBe(true);
});