import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(process.env.BASE_URL || 'https://www.saucedemo.com/');
  }

  async enterUsername(username: string) {
    await this.page.fill('#user-name', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('#password', password);
  }

  async clickLoginButton() {
    await this.page.click('#login-button');
  }

  async getLoginErrorMessage() {
    await this.page.waitForSelector('[data-test="error"]', { timeout: 5000 });
    return await this.page.textContent('[data-test="error"]');
  }

  async isErrorMessageVisible() {
    return await this.page.isVisible('[data-test="error"]');
  }

  async isLoginButtonVisible() {
    return await this.page.isVisible('#login-button');
  }
}
