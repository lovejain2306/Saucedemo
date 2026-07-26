import { Page } from '@playwright/test';

export class ProductDetailsPage {
  constructor(private page: Page) {}

  async isProductDetailsPageDisplayed() {
    return await this.page.isVisible('[data-test="inventory-item-container"]');
  }

  async isProductDetailsDisplayed() {
    return await this.page.isVisible('[data-test="inventory-item-container"]');
  }

  async getProductName() {
    return await this.page.textContent('[data-test="product-title"]');
  }

  async getProductPrice() {
    const price = await this.page.textContent('[data-test="inventory-item-price"]');
    return price ? parseFloat(price.replace(/[^\d.]/g, '')) : 0;
  }

  async getProductDescription() {
    return await this.page.textContent('[data-test="inventory-item-desc"]');
  }

  async isProductImageDisplayed() {
    return await this.page.isVisible('[data-test="inventory-item-img"]');
  }

  async clickAddToCart() {
    await this.page.click('[data-test="add-to-cart"]');
  }

  async clickBackButton() {
    await this.page.click('[data-test="back-to-products"]');
  }

  async getAddToCartButtonText() {
    return await this.page.textContent('[data-test="add-to-cart"]');
  }
}
