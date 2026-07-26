import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async isCartPageDisplayed() {
    return await this.page.isVisible('[data-test="cart"]');
  }

  async getCartItemsCount() {
    // Try multiple selectors as the page structure might vary
    let count = await this.page.locator('[data-test="cart-list-container"] .cart_item').count();
    if (count === 0) {
      count = await this.page.locator('.cart_item').count();
    }
    if (count === 0) {
      count = await this.page.locator('[data-test^="inventory-item-"]').count();
    }
    return count;
  }

  async getCartItemNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async removeItemFromCart(productName: string) {
    await this.page.click(`text=${productName}`, { trial: false });
    const removeButton = this.page.locator(`[data-test^="remove-"]`).first();
    await removeButton.click();
  }

  async clickCheckoutButton() {
    await this.page.click('[data-test="checkout"]');
  }

  async clickContinueShoppingButton() {
    await this.page.click('[data-test="continue-shopping"]');
  }

  async isCartEmpty() {
    const cartContainer = await this.page.locator('[data-test="cart-list-container"]');
    return (await cartContainer.locator('.cart_item').count()) === 0;
  }

  async getCartTotal() {
    const total = await this.page.locator('[data-test="subtotal-label"]').textContent();
    return total ? parseFloat(total.replace(/[^\d.]/g, '')) : 0;
  }

  async isProductInCart(productName: string) {
    const count = await this.page.locator(`text=${productName}`).count();
    return count > 0;
  }
}
