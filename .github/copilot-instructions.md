# Playwright BDD Framework for Sauce Demo

## Project Overview
This is a professional-grade test automation framework using Playwright, TypeScript, and Cucumber BDD for testing the Sauce Demo e-commerce application.

## Project Structure
```
src/
├── pages/           - Page Object Models (LoginPage, InventoryPage, etc.)
├── steps/           - Cucumber step definitions
├── fixtures/        - Custom Playwright fixtures for page objects and authenticated sessions
├── utils/           - Logger, Config, and TestUtils
└── config/          - Configuration management

features/           - Gherkin BDD feature files
reports/            - Generated test reports, screenshots, videos, and logs
playwright.config.ts - Playwright configuration
.env               - Environment variables
tsconfig.json      - TypeScript configuration
```

## Key Technologies
- **Playwright**: Browser automation
- **Cucumber**: BDD framework for readable test scenarios
- **TypeScript**: Type-safe test code
- **Winston**: Logging with file and console output
- **Page Object Model**: For maintainable test code

## Running Tests

### All tests
```bash
npm test
```

### UI mode (interactive)
```bash
npm run test:ui
```

### Headed mode
```bash
npm run test:headed
```

### Specific feature
```bash
npx playwright test features/login.feature
```

### Debug mode
```bash
npm run test:debug
```

### View report
```bash
npm run test:report
```

## Architecture

### Page Objects
Each page has a dedicated class with methods for interactions and assertions:
- LoginPage: Username/password entry, login button, error handling
- InventoryPage: Product display, sorting, cart badge, logout
- CartPage: Cart items, checkout, continue shopping
- CheckoutPage: Form entry, address info, order confirmation
- ProductDetailsPage: Product info, add to cart, back button

### Custom Fixtures
Located in `src/fixtures/fixtures.ts`:
- **page**: Logged page with event handlers
- **loginPage**: Pre-initialized LoginPage instance
- **inventoryPage**: Pre-initialized InventoryPage instance
- **authenticatedPage**: Pre-logged-in page (ready for inventory tests)

### Utilities
- **Logger**: Winston-based logging (logs to console and file)
- **Config**: Environment variable management
- **TestUtils**: Common test helpers (wait, click, fill, screenshot, etc.)

## Feature Files
- **login.feature**: Login scenarios (valid/invalid/empty credentials, locked user)
- **inventory.feature**: Product display, sorting, cart management
- **checkout.feature**: Complete checkout process with validation
- **logout.feature**: Session termination and clearing

## Environment Variables
Configure in `.env` file:
- BASE_URL: Application URL
- BROWSER: chromium, firefox, or webkit
- HEADLESS: true/false for headed mode
- TIMEOUT: Action timeout in milliseconds
- LOG_LEVEL: info, warn, error, debug
- VALID_USERNAME, VALID_PASSWORD: Test credentials
- SCREENSHOT_ON_FAILURE, VIDEO_ON_FAILURE: Auto-capture on failure

## Best Practices
1. Use page objects for all element interactions
2. Use custom fixtures to reduce boilerplate
3. Log important steps using logger.info()
4. Write descriptive feature files with clear scenarios
5. Reuse step definitions across features
6. Use Config for environment-specific values
7. Check reports for failures: reports/html/index.html

## Reports Location
- HTML Report: `reports/html/index.html` (after `npm run test:report`)
- Screenshots: `reports/html/` (on failure)
- Logs: `reports/logs/combined.log`
- JSON Report: `reports/results.json`

## Common Commands
```bash
npm test                    # Run all tests
npm run test:headed         # Run with browser visible
npm run test:ui             # Interactive UI mode
npm run test:debug          # Debug mode with inspector
npm run test:report         # Show HTML report
npm run bdd                 # Run Cucumber BDD tests
```

## Debugging Tips
1. Use `npm run test:debug` for step-by-step execution
2. Check `reports/logs/combined.log` for execution details
3. Screenshots on failure saved in reports directory
4. Use `await page.pause()` in tests for debugging
5. View network requests in browser tools
