import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async isInventoryPageDisplayed() {
    return await this.page.isVisible('.inventory_container');
  }

  async getAllProducts() {
    return await this.page.locator('.inventory_item').count();
  }

  async getProductNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async getProductPrices() {
    return await this.page.locator('.inventory_item_price').allTextContents();
  }

  async getCartBadgeCount() {
    const badge = await this.page.locator('.shopping_cart_badge').textContent();
    return badge ? parseInt(badge) : 0;
  }

  async isCartBadgeVisible() {
    return await this.page.isVisible('.shopping_cart_badge');
  }

  async addProductToCart(productName: string) {
    const productButton = this.page.locator(`[data-test="add-to-cart-${this.getProductId(productName)}"]`);
    await productButton.click();
  }

  async removeProductFromCart(productName: string) {
    const productButton = this.page.locator(`[data-test="remove-${this.getProductId(productName)}"]`);
    await productButton.click();
  }

  async getAddToCartButtonText(productName: string) {
    const productButton = this.page.locator(`[data-test^="add-to-cart-"], [data-test^="remove-"]`).filter({ hasText: productName });
    return await productButton.textContent();
  }

  async sortProducts(sortOption: string) {
    await this.page.selectOption('[data-test="product_sort_container"]', this.getSortValue(sortOption));
  }

  async getSortedProductPrices() {
    return await this.page.locator('.inventory_item_price').allTextContents();
  }

  async getSortedProductNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async clickOnProduct(productName: string) {
    await this.page.click(`text=${productName}`);
  }

  async clickShoppingCart() {
    await this.page.click('[data-test="shopping-cart-link"]');
  }

  async clickHamburgerMenu() {
    await this.page.click('#react-burger-menu-btn');
  }

  async clickLogout() {
    await this.page.click('#logout_sidebar_link');
  }

  private getProductId(productName: string): string {
    const idMap: { [key: string]: string } = {
      'Sauce Labs Backpack': 'sauce-labs-backpack',
      'Sauce Labs Bike Light': 'sauce-labs-bike-light',
      'Sauce Labs Bolt T-Shirt': 'sauce-labs-bolt-t-shirt',
      'Sauce Labs Fleece Jacket': 'sauce-labs-fleece-jacket',
      'Sauce Labs Onesie': 'sauce-labs-onesie',
      'Test.allTheThings() T-Shirt (Red)': 'test.allthethings-t-shirt-red'
    };
    return idMap[productName] || productName.toLowerCase().replace(/\s+/g, '-');
  }

  private getSortValue(sortOption: string): string {
    const sortMap: { [key: string]: string } = {
      'Name (A to Z)': 'az',
      'Name (Z to A)': 'za',
      'Price (low to high)': 'lohi',
      'Price (high to low)': 'hilo'
    };
    return sortMap[sortOption] || sortOption;
  }
}
