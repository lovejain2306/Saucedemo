# Quick Start Guide

## Setup Complete! 🎉

Your Playwright BDD framework for Sauce Demo is ready to use!

## File Structure Created

```
saucedemo-playwright-bdd/
├── features/
│   ├── login.feature
│   ├── inventory.feature
│   ├── checkout.feature
│   └── logout.feature
├── src/
│   ├── pages/ (LoginPage, InventoryPage, CartPage, CheckoutPage, ProductDetailsPage)
│   ├── steps/ (stepDefinitions.ts)
│   ├── fixtures/ (fixtures.ts - custom page fixtures)
│   └── utils/ (Logger, Config, TestUtils)
├── reports/ (auto-generated test reports)
├── .env (environment configuration)
├── playwright.config.ts (Playwright setup)
├── tsconfig.json (TypeScript configuration)
├── package.json (dependencies)
└── README.md (full documentation)
```

## Next Steps

### 1. **Install browsers** (first time only):
```bash
npx playwright install
```

### 2. **Run all tests**:
```bash
npm test
```

### 3. **Run tests in UI mode** (interactive debugging):
```bash
npm run test:ui
```

### 4. **View HTML report**:
```bash
npm run test:report
```

## Key Features

✅ **4 Complete Feature Files**
- login.feature: 5 test scenarios
- inventory.feature: 6 test scenarios  
- checkout.feature: 4 test scenarios
- logout.feature: 3 test scenarios

✅ **5 Page Objects**
- LoginPage
- InventoryPage
- CartPage
- CheckoutPage
- ProductDetailsPage

✅ **Complete Utilities**
- Winston Logger (console & file logging)
- Config Manager (environment variables)
- TestUtils (common helper functions)

✅ **Custom Fixtures**
- page fixture with logging
- loginPage, inventoryPage, cartPage, checkoutPage, productDetailsPage
- authenticatedPage (pre-logged in for faster tests)

✅ **Comprehensive Reporting**
- HTML reports
- JSON reports
- JUnit reports
- Screenshots on failure
- Video recordings on failure
- Execution logs

## Configuration

Edit `.env` to customize:
```env
BASE_URL=https://www.saucedemo.com/
BROWSER=chromium
HEADLESS=true
TIMEOUT=30000
LOG_LEVEL=info
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:ui` | Interactive UI mode |
| `npm run test:headed` | Tests with browser visible |
| `npm run test:debug` | Debug mode with inspector |
| `npm run test:report` | View HTML report |

## Test Data

Default test credentials (from .env):
- Username: `standard_user`
- Password: `secret_sauce`

Additional test users available:
- `locked_out_user` (cannot login)
- `problem_user` (visual issues)
- `performance_glitch_user` (slow loading)

## Project Highlights

🔹 **BDD with Cucumber** - Write tests in Gherkin for non-technical stakeholders
🔹 **Page Object Model** - Maintainable and reusable page objects
🔹 **Type-Safe** - Full TypeScript support
🔹 **Comprehensive Logging** - Track every step with Winston logger
🔹 **Custom Fixtures** - Reusable test fixtures with setup/teardown
🔹 **Professional Reports** - Beautiful HTML reports with screenshots & videos
🔹 **Cross-Browser** - Chrome, Firefox, Safari + mobile browsers
🔹 **Environment Configuration** - Easily switch configurations via .env

## Debugging Tips

1. **Debug with UI**: `npm run test:ui` - Step through tests interactively
2. **Check logs**: `reports/logs/combined.log` - Detailed execution logs
3. **View screenshots**: `reports/html/` - Failure screenshots
4. **Debug in code**: Add `await page.pause()` to pause execution

## Common Issues

**Tests not finding elements?**
- Check the element selectors in page objects
- Use Playwright Inspector: `npx playwright codegen https://www.saucedemo.com/`

**Slow test execution?**
- Adjust `TIMEOUT` in `.env`
- Check `WORKERS` for parallel execution count

**Logs not appearing?**
- Check `LOG_LEVEL` in `.env` (try 'debug')
- Ensure `reports/logs/` directory exists

## Next: Writing Your First Test

1. Open `features/login.feature` to see scenario syntax
2. Add new scenarios following the same BDD format
3. Step definitions are automatically matched in `src/steps/stepDefinitions.ts`
4. Use page objects from `src/pages/` for interactions

## Need Help?

- See `README.md` for detailed documentation
- Check `.github/copilot-instructions.md` for framework guidelines
- Review existing feature files for examples
- All page object methods are documented with JSDoc comments

---

**Happy Testing! 🚀**
