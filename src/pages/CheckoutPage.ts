import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async isCheckoutStepOneDisplayed() {
    return await this.page.isVisible('[data-test="checkout-info-container"]');
  }

  async isCheckoutStepTwoDisplayed() {
    return await this.page.isVisible('[data-test="checkout-summary-container"]');
  }

  async isCheckoutCompleteDisplayed() {
    return await this.page.isVisible('[data-test="checkout-complete-container"]');
  }

  async enterFirstName(firstName: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.fill('[data-test="lastName"]', lastName);
  }

  async enterPostalCode(postalCode: string) {
    await this.page.fill('[data-test="postalCode"]', postalCode);
  }

  async clickContinueButton() {
    await this.page.click('[data-test="continue"]');
  }

  async clickFinishButton() {
    await this.page.click('[data-test="finish"]');
  }

  async getCheckoutErrorMessage() {
    await this.page.waitForSelector('[data-test="error"]', { timeout: 5000 });
    return await this.page.textContent('[data-test="error"]');
  }

  async isCheckoutErrorMessageVisible() {
    return await this.page.isVisible('[data-test="error"]');
  }

  async getOrderTotal() {
    const total = await this.page.locator('[data-test="total-label"]').textContent();
    return total ? total.trim() : '$0.00';
  }

  async getConfirmationMessage() {
    return await this.page.textContent('[data-test="complete-header"]');
  }

  async getOrderItems() {
    return await this.page.locator('[data-test="checkout-summary-container"] .cart_item_label').allTextContents();
  }

  async isErrorMessageVisible() {
    return await this.page.isVisible('[data-test="error"]');
  }
}
