import { Page, expect } from '@playwright/test';
import logger from './Logger';

export class TestUtils {
  /**
   * Wait for an element to be visible
   */
  static async waitForElement(page: Page, selector: string, timeout = 5000) {
    logger.info(`Waiting for element: ${selector}`);
    await page.waitForSelector(selector, { timeout });
  }

  /**
   * Fill form field with text
   */
  static async fillField(page: Page, selector: string, text: string) {
    logger.info(`Filling field ${selector} with text: ${text}`);
    await page.fill(selector, text);
  }

  /**
   * Click element
   */
  static async clickElement(page: Page, selector: string) {
    logger.info(`Clicking element: ${selector}`);
    await page.click(selector);
  }

  /**
   * Get element text
   */
  static async getElementText(page: Page, selector: string) {
    await this.waitForElement(page, selector);
    const text = await page.textContent(selector);
    logger.info(`Element text: ${text}`);
    return text;
  }

  /**
   * Check if element is visible
   */
  static async isElementVisible(page: Page, selector: string) {
    const isVisible = await page.isVisible(selector);
    logger.info(`Element ${selector} visibility: ${isVisible}`);
    return isVisible;
  }

  /**
   * Get all text contents from elements
   */
  static async getAllElementTexts(page: Page, selector: string) {
    logger.info(`Getting all text from elements: ${selector}`);
    return await page.locator(selector).allTextContents();
  }

  /**
   * Select option from dropdown
   */
  static async selectDropdownOption(page: Page, selector: string, value: string) {
    logger.info(`Selecting option ${value} from dropdown ${selector}`);
    await page.selectOption(selector, value);
  }

  /**
   * Take screenshot
   */
  static async takeScreenshot(page: Page, filename: string) {
    logger.info(`Taking screenshot: ${filename}`);
    const screenshotPath = `reports/screenshots/${filename}.png`;
    await page.screenshot({ path: screenshotPath });
  }

  /**
   * Verify text contains expected string
   */
  static async verifyTextContains(page: Page, selector: string, expectedText: string) {
    logger.info(`Verifying text in ${selector} contains: ${expectedText}`);
    const text = await this.getElementText(page, selector);
    expect(text).toContain(expectedText);
  }

  /**
   * Verify element is in expected state
   */
  static async verifyElementState(page: Page, selector: string, state: 'visible' | 'hidden' | 'enabled' | 'disabled') {
    logger.info(`Verifying element ${selector} state: ${state}`);
    const locator = page.locator(selector);
    
    switch (state) {
      case 'visible':
        await expect(locator).toBeVisible();
        break;
      case 'hidden':
        await expect(locator).toBeHidden();
        break;
      case 'enabled':
        await expect(locator).toBeEnabled();
        break;
      case 'disabled':
        await expect(locator).toBeDisabled();
        break;
    }
  }

  /**
   * Clear text field
   */
  static async clearField(page: Page, selector: string) {
    logger.info(`Clearing field: ${selector}`);
    await page.fill(selector, '');
  }

  /**
   * Reload page
   */
  static async reloadPage(page: Page) {
    logger.info('Reloading page');
    await page.reload();
  }

  /**
   * Get current URL
   */
  static async getCurrentUrl(page: Page) {
    const url = page.url();
    logger.info(`Current URL: ${url}`);
    return url;
  }

  /**
   * Wait for navigation
   */
  static async waitForNavigation(page: Page, timeout = 5000) {
    logger.info('Waiting for page navigation');
    await page.waitForNavigation({ timeout });
  }

  /**
   * Get element count
   */
  static async getElementCount(page: Page, selector: string) {
    const count = await page.locator(selector).count();
    logger.info(`Element count for ${selector}: ${count}`);
    return count;
  }

  /**
   * Hover over element
   */
  static async hoverElement(page: Page, selector: string) {
    logger.info(`Hovering over element: ${selector}`);
    await page.hover(selector);
  }

  /**
   * Double click element
   */
  static async doubleClickElement(page: Page, selector: string) {
    logger.info(`Double-clicking element: ${selector}`);
    await page.dblclick(selector);
  }

  /**
   * Right click element
   */
  static async rightClickElement(page: Page, selector: string) {
    logger.info(`Right-clicking element: ${selector}`);
    await page.click(selector, { button: 'right' });
  }

  /**
   * Scroll to element
   */
  static async scrollToElement(page: Page, selector: string) {
    logger.info(`Scrolling to element: ${selector}`);
    await page.locator(selector).scrollIntoViewIfNeeded();
  }

  /**
   * Compare arrays (for sorting verification)
   */
  static isSortedAscending(arr: string[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Compare numeric arrays
   */
  static isSortedNumericAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Extract prices from text array
   */
  static extractPrices(priceTexts: string[]): number[] {
    return priceTexts.map(text => parseFloat(text.replace(/[^\d.]/g, '')));
  }
}
