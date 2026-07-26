# Sauce Demo Playwright BDD Framework

Complete test automation framework for Sauce Demo application using Playwright, Cucumber/BDD, and TypeScript.

## 🎯 Features

- **BDD with Cucumber**: Write tests in Gherkin language for better readability and collaboration
- **Playwright**: Modern browser automation with multiple browser support
- **TypeScript**: Type-safe test code with full IDE support
- **Page Object Model**: Well-organized page objects for maintainability
- **Custom Fixtures**: Reusable test fixtures with automatic setup/teardown
- **Comprehensive Logging**: Winston logger integration for detailed test execution logs
- **HTML Reports**: Beautiful HTML test reports with Playwright and Cucumber reports
- **Environment Variables**: Flexible configuration through .env file
- **Cross-browser Testing**: Support for Chromium, Firefox, WebKit
- **Mobile Testing**: Pre-configured mobile device testing (Pixel 5, iPhone 12)
- **Screenshots & Videos**: Automatic capture on test failures
- **Utilities**: Common test helper functions

## 📁 Project Structure

```
saucedemo-playwright-bdd/
├── features/                    # Gherkin feature files
│   ├── login.feature           # Login functionality tests
│   ├── inventory.feature       # Product inventory tests
│   ├── checkout.feature        # Checkout process tests
│   └── logout.feature          # Logout functionality tests
├── src/
│   ├── pages/                  # Page Object Models
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   └── ProductDetailsPage.ts
│   ├── steps/                  # Step definitions
│   │   └── stepDefinitions.ts
│   ├── fixtures/               # Custom Playwright fixtures
│   │   └── fixtures.ts
│   ├── utils/                  # Utility functions
│   │   ├── Logger.ts          # Winston logger configuration
│   │   ├── Config.ts          # Configuration management
│   │   └── TestUtils.ts       # Common test utilities
│   └── config/                 # Configuration files
├── reports/                    # Test reports (generated)
│   ├── html/                  # Playwright HTML report
│   ├── logs/                  # Execution logs
│   └── screenshots/           # Failure screenshots
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── tsconfig.json              # TypeScript configuration
├── playwright.config.ts        # Playwright configuration
├── .cucumber.json             # Cucumber configuration
├── cucumber-html-report.js    # Cucumber report generator
└── package.json               # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

1. **Clone/Navigate to the project:**
```bash
cd saucedemo-playwright-bdd
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment (optional):**
Edit `.env` file to customize:
```env
BASE_URL=https://www.saucedemo.com/
BROWSER=chromium
HEADLESS=true
TIMEOUT=30000
LOG_LEVEL=info
```

## 📝 Feature Files

The framework includes comprehensive test scenarios:

### Login Tests
- Successful login with valid credentials
- Failed login with invalid credentials
- Empty username/password validation
- Locked out user handling

### Inventory Tests
- View all products
- Add/remove products from cart
- Product sorting (by price, name)
- Product details navigation

### Checkout Tests
- Complete checkout process
- Form validation
- Cart management during checkout
- Order confirmation

### Logout Tests
- Logout functionality
- Session clearing
- Cart persistence

## ▶️ Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run specific feature
```bash
npx playwright test features/login.feature
```

### Run in debug mode
```bash
npm run test:debug
```

### Generate test report
```bash
npm run test:report
```

## 📊 Reports

### Playwright HTML Report
After test execution:
```bash
npm run test:report
```
Opens detailed Playwright HTML report with:
- Test execution timeline
- Screenshots of failures
- Video recordings
- Browser logs
- Network requests

### Cucumber Report
Generated at `reports/cucumber-report.html`
Shows BDD scenario execution details

### Logs
Execution logs stored in `reports/logs/`:
- `combined.log` - All log levels
- `error.log` - Error-only logs

## 🔧 Configuration

### Environment Variables (.env)

| Variable | Default | Description |
|----------|---------|-------------|
| BASE_URL | https://www.saucedemo.com/ | Application URL |
| BROWSER | chromium | Browser to use |
| HEADLESS | true | Run in headless mode |
| TIMEOUT | 30000 | Action timeout (ms) |
| RETRIES | 2 | Retry failed tests |
| WORKERS | 4 | Parallel workers |
| LOG_LEVEL | info | Logging level |
| SCREENSHOT_ON_FAILURE | true | Capture screenshots |
| VIDEO_ON_FAILURE | true | Record videos |
| VALID_USERNAME | standard_user | Test username |
| VALID_PASSWORD | secret_sauce | Test password |

## 📚 Page Object Examples

### Using Page Objects
```typescript
const loginPage = new LoginPage(page);
await loginPage.navigate();
await loginPage.enterUsername('standard_user');
await loginPage.enterPassword('secret_sauce');
await loginPage.clickLoginButton();
```

### Using Custom Fixtures
```typescript
test('Login test', async ({ loginPage, inventoryPage, page }) => {
  await loginPage.navigate();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLoginButton();
  expect(await inventoryPage.isInventoryPageDisplayed()).toBe(true);
});
```

### Using Authenticated Fixture
```typescript
test('Add product to cart', async ({ authenticatedPage, inventoryPage }) => {
  // User is already logged in
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  const count = await inventoryPage.getCartBadgeCount();
  expect(count).toBe(1);
});
```

## 🛠️ Utilities

### Logger
```typescript
import logger from './src/utils/Logger';

logger.info('User login initiated');
logger.error('Login failed');
logger.warn('Retrying login');
```

### TestUtils
Common test helper functions:
```typescript
import { TestUtils } from './src/utils/TestUtils';

await TestUtils.waitForElement(page, '.product-item');
await TestUtils.fillField(page, '#username', 'user123');
await TestUtils.takeScreenshot(page, 'login-screen');
```

### Config
Access configuration values:
```typescript
import { Config } from './src/utils/Config';

const baseUrl = Config.BASE_URL;
const username = Config.VALID_USERNAME;
const timeout = Config.TIMEOUT;
```

## 📦 Dependencies

### Testing
- `@playwright/test` - Browser automation
- `@cucumber/cucumber` - BDD framework
- `ts-node` - TypeScript execution

### Utilities
- `winston` - Logging
- `dotenv` - Environment configuration
- `typescript` - Type safety

### Reporting
- `multiple-cucumber-html-reporter` - Cucumber HTML reports

## 🎓 Best Practices

1. **Feature Files**: Keep scenarios focused and descriptive
2. **Page Objects**: One page object per page
3. **Step Definitions**: Reuse steps across features
4. **Fixtures**: Use custom fixtures for common setup
5. **Logging**: Log important actions for debugging
6. **Waits**: Use explicit waits, avoid hardcoded delays
7. **Error Handling**: Include meaningful error messages

## 🐛 Debugging

### Debug mode with inspector:
```bash
npm run test:debug
```

### View generated reports:
```bash
npm run test:report
```

### Check logs:
```bash
tail -f reports/logs/combined.log
```

### Take manual screenshots:
```typescript
await page.screenshot({ path: 'screenshot.png' });
```

## 📝 Writing New Tests

### Add Feature File
Create `features/new-feature.feature`:
```gherkin
Feature: New Feature

  Scenario: New test scenario
    Given User navigates to Sauce Demo application
    When User enters username "standard_user"
    Then User should see products
```

### Add Step Definitions
Add steps to `src/steps/stepDefinitions.ts`:
```typescript
Then('User should see products', async function () {
  const count = await globalThis.inventoryPage.getAllProducts();
  expect(count).toBeGreaterThan(0);
});
```

## 🔄 CI/CD Integration

Set environment variable for CI:
```bash
npm test -- --workers=1
```

## 📄 License
ISC

## 👥 Contributing
Feel free to submit issues and enhancement requests!

## 📞 Support
For issues or questions, check the test reports in `reports/` directory.

---
**Happy Testing! 🎉**
