import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
const envFile = path.join(process.cwd(), '.env');
dotenv.config({ path: envFile });

export class Config {
  static readonly BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com/';
  static readonly BROWSER = process.env.BROWSER || 'chromium';
  static readonly HEADLESS = process.env.HEADLESS !== 'false';
  static readonly TIMEOUT = parseInt(process.env.TIMEOUT || '30000');
  static readonly RETRIES = parseInt(process.env.RETRIES || '2');
  static readonly WORKERS = parseInt(process.env.WORKERS || '4');
  static readonly VIEWPORT_WIDTH = parseInt(process.env.VIEWPORT_WIDTH || '1280');
  static readonly VIEWPORT_HEIGHT = parseInt(process.env.VIEWPORT_HEIGHT || '720');
  static readonly LOG_LEVEL = process.env.LOG_LEVEL || 'info';
  static readonly SCREENSHOT_ON_FAILURE = process.env.SCREENSHOT_ON_FAILURE !== 'false';
  static readonly VIDEO_ON_FAILURE = process.env.VIDEO_ON_FAILURE !== 'false';
  static readonly REPORT_DIR = process.env.REPORT_DIR || 'reports';

  // Test data
  static readonly VALID_USERNAME = process.env.VALID_USERNAME || 'standard_user';
  static readonly VALID_PASSWORD = process.env.VALID_PASSWORD || 'secret_sauce';
  static readonly LOCKED_OUT_USER = process.env.LOCKED_OUT_USER || 'locked_out_user';
  static readonly PROBLEM_USER = process.env.PROBLEM_USER || 'problem_user';
  static readonly PERFORMANCE_GLITCH_USER = process.env.PERFORMANCE_GLITCH_USER || 'performance_glitch_user';

  static getConfig() {
    return {
      baseUrl: this.BASE_URL,
      browser: this.BROWSER,
      headless: this.HEADLESS,
      timeout: this.TIMEOUT,
      retries: this.RETRIES,
      workers: this.WORKERS,
      viewport: {
        width: this.VIEWPORT_WIDTH,
        height: this.VIEWPORT_HEIGHT
      },
      screenshotOnFailure: this.SCREENSHOT_ON_FAILURE,
      videoOnFailure: this.VIDEO_ON_FAILURE,
      reportDir: this.REPORT_DIR
    };
  }
}
