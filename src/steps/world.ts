import type { Browser, BrowserContext, Page } from '@playwright/test';
import type { LoginPage } from '../pages/LoginPage';
import type { InventoryPage } from '../pages/InventoryPage';
import type { CartPage } from '../pages/CartPage';
import type { CheckoutPage } from '../pages/CheckoutPage';
import type { ProductDetailsPage } from '../pages/ProductDetailsPage';

export interface WorldState {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  loginPage?: LoginPage;
  inventoryPage?: InventoryPage;
  cartPage?: CartPage;
  checkoutPage?: CheckoutPage;
  productDetailsPage?: ProductDetailsPage;
}

export const world: WorldState = {};

export function getWorld(): Required<WorldState> {
  const { browser, context, page, loginPage, inventoryPage, cartPage, checkoutPage, productDetailsPage } = world;

  if (!browser || !context || !page || !loginPage || !inventoryPage || !cartPage || !checkoutPage || !productDetailsPage) {
    throw new Error('World is not initialized. Make sure hooks.ts is loaded before steps.');
  }

  return world as Required<WorldState>;
}