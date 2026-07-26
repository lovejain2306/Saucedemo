import { defineConfig, devices } from '@playwright/test';

/**
 * Environment Configuration - Define all settings here
 */
const BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com/';
const BROWSER = process.env.BROWSER || 'chromium';
const HEADLESS = process.env.HEADLESS !== 'false';
const TIMEOUT = parseInt(process.env.TIMEOUT || '30000');
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const VALID_USERNAME = process.env.VALID_USERNAME || 'standard_user';
const VALID_PASSWORD = process.env.VALID_PASSWORD || 'secret_sauce';
const SCREENSHOT_ON_FAILURE = process.env.SCREENSHOT_ON_FAILURE !== 'false';
const VIDEO_ON_FAILURE = process.env.VIDEO_ON_FAILURE !== 'false';
const WORKERS = parseInt(process.env.WORKERS || '4');
const RETRIES = parseInt(process.env.RETRIES || '0');
const VIEWPORT_WIDTH = parseInt(process.env.VIEWPORT_WIDTH || '1280');
const VIEWPORT_HEIGHT = parseInt(process.env.VIEWPORT_HEIGHT || '720');

/**
 * Playwright configuration for Sauce Demo automation
 */
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  
  // Cucumber configuration
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: RETRIES,
  workers: process.env.CI ? 1 : WORKERS,
  
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['json', { outputFile: 'reports/results.json' }],
    ['junit', { outputFile: 'reports/junit.xml' }],
    ['list']
  ],
  
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: SCREENSHOT_ON_FAILURE ? 'only-on-failure' : 'off',
    video: VIDEO_ON_FAILURE ? 'retain-on-failure' : 'off',
    actionTimeout: TIMEOUT,
    navigationTimeout: TIMEOUT,
    viewport: {
      width: VIEWPORT_WIDTH,
      height: VIEWPORT_HEIGHT
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], headless: HEADLESS }
    }
  ],

  // Global timeout
  timeout: TIMEOUT,
  
  // Expect timeout
  expect: {
    timeout: TIMEOUT
  },

  webServer: undefined, // Set if you have a local web server
  
  // Global configuration object for step definitions and fixtures
  globalSetup: undefined,
});

// Export configuration for step definitions
export const testConfig = {
  BASE_URL,
  BROWSER,
  HEADLESS,
  TIMEOUT,
  LOG_LEVEL,
  VALID_USERNAME,
  VALID_PASSWORD,
  SCREENSHOT_ON_FAILURE,
  VIDEO_ON_FAILURE,
  WORKERS,
  RETRIES,
  VIEWPORT_WIDTH,
  VIEWPORT_HEIGHT
};
