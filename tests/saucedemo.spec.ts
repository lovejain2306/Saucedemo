import { test, expect } from '../src/fixtures/fixtures';
import { Config } from '../src/utils/Config';

test.describe('Login Tests', () => {
  test('Successful login with valid credentials', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.navigate();
    await loginPage.enterUsername(Config.VALID_USERNAME);
    await loginPage.enterPassword(Config.VALID_PASSWORD);
    await loginPage.clickLoginButton();
    expect(await inventoryPage.isInventoryPageDisplayed()).toBe(true);
  });

  test('Login failure with invalid credentials', async ({ page, loginPage }) => {
    await loginPage.navigate();
    await loginPage.enterUsername('invalid_user');
    await loginPage.enterPassword('wrong_password');
    await loginPage.clickLoginButton();
    expect(await loginPage.isErrorMessageVisible()).toBe(true);
  });
});

test.describe('Inventory Tests', () => {
  test('View all products on inventory page', async ({ authenticatedPage, inventoryPage }) => {
    await inventoryPage.isInventoryPageDisplayed();
    const count = await inventoryPage.getAllProducts();
    expect(count).toBeGreaterThan(0);
  });

  test('Add product to cart', async ({ authenticatedPage, inventoryPage }) => {
    const productName = 'Sauce Labs Backpack';
    await inventoryPage.addProductToCart(productName);
    const cartCount = await inventoryPage.getCartBadgeCount();
    expect(cartCount).toBe(1);
  });
});

test.describe('Logout Tests', () => {
  test('User logout from inventory page', async ({ authenticatedPage, inventoryPage, loginPage }) => {
    await inventoryPage.clickHamburgerMenu();
    await inventoryPage.clickLogout();
    await authenticatedPage.waitForLoadState('networkidle');
    expect(await loginPage.isLoginButtonVisible()).toBe(true);
  });
});
