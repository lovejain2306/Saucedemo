import { test as base, Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import logger from '../utils/Logger';
import { Config } from '../utils/Config';

type TestFixtures = {
  page: Page;
  context: BrowserContext;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  productDetailsPage: ProductDetailsPage;
  authenticatedPage: Page;
};

/**
 * Extend base test with custom fixtures
 */
export const test = base.extend<TestFixtures>({
  // Custom page fixture with logging
  page: async ({ page }, use) => {
    logger.info('Setting up page fixture');
    
    // Add event listeners
    page.on('console', (msg) => {
      logger.info(`Page console: ${msg.type()} - ${msg.text()}`);
    });

    page.on('load', () => {
      logger.info(`Page loaded: ${page.url()}`);
    });

    await use(page);

    logger.info('Tearing down page fixture');
  },

  // Custom context fixture
  context: async ({ context }, use) => {
    logger.info('Setting up context fixture');
    
    context.on('page', (page) => {
      logger.info(`New page created: ${page.url()}`);
    });

    await use(context);

    logger.info('Tearing down context fixture');
  },

  // LoginPage fixture
  loginPage: async ({ page }, use) => {
    logger.info('Setting up LoginPage fixture');
    const loginPage = new LoginPage(page);
    await use(loginPage);
    logger.info('Tearing down LoginPage fixture');
  },

  // InventoryPage fixture
  inventoryPage: async ({ page }, use) => {
    logger.info('Setting up InventoryPage fixture');
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
    logger.info('Tearing down InventoryPage fixture');
  },

  // CartPage fixture
  cartPage: async ({ page }, use) => {
    logger.info('Setting up CartPage fixture');
    const cartPage = new CartPage(page);
    await use(cartPage);
    logger.info('Tearing down CartPage fixture');
  },

  // CheckoutPage fixture
  checkoutPage: async ({ page }, use) => {
    logger.info('Setting up CheckoutPage fixture');
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
    logger.info('Tearing down CheckoutPage fixture');
  },

  // ProductDetailsPage fixture
  productDetailsPage: async ({ page }, use) => {
    logger.info('Setting up ProductDetailsPage fixture');
    const productDetailsPage = new ProductDetailsPage(page);
    await use(productDetailsPage);
    logger.info('Tearing down ProductDetailsPage fixture');
  },

  // Authenticated page fixture (pre-logged in)
  authenticatedPage: async ({ page }, use) => {
    logger.info('Setting up authenticated page fixture');
    await page.goto(Config.BASE_URL);
    
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(Config.VALID_USERNAME);
    await loginPage.enterPassword(Config.VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await page.waitForLoadState('networkidle');

    logger.info('User authenticated successfully');
    await use(page);

    logger.info('Tearing down authenticated page fixture');
  }
});

export { expect } from '@playwright/test';
