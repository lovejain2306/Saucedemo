import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { world } from './world';

setDefaultTimeout(60_000);

Before(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  world.browser = browser;
  world.context = context;
  world.page = page;
  world.loginPage = new LoginPage(page);
  world.inventoryPage = new InventoryPage(page);
  world.cartPage = new CartPage(page);
  world.checkoutPage = new CheckoutPage(page);
  world.productDetailsPage = new ProductDetailsPage(page);
});

After(async () => {
  if (world.page) await world.page.close();
  if (world.context) await world.context.close();
  if (world.browser) await world.browser.close();
  world.browser = undefined;
  world.context = undefined;
  world.page = undefined;
  world.loginPage = undefined;
  world.inventoryPage = undefined;
  world.cartPage = undefined;
  world.checkoutPage = undefined;
  world.productDetailsPage = undefined;
});