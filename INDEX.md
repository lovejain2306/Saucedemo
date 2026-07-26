# Sauce Demo Playwright BDD Test Framework
## Complete Setup and Ready to Use! ✅

Welcome to your professional-grade test automation framework!

---

## 📦 What You Have

A fully-functional **Playwright + Cucumber + TypeScript** BDD framework for testing [https://www.saucedemo.com/](https://www.saucedemo.com/)

### Framework Components

**📝 Feature Files** (BDD Scenarios)
- 4 feature files with 18 comprehensive test scenarios
- Tests for Login, Inventory, Checkout, and Logout functionality
- Written in Gherkin language (human-readable)

**🏗️ Page Objects** (Element Selectors & Methods)
- 5 page objects covering all screens
- LoginPage, InventoryPage, CartPage, CheckoutPage, ProductDetailsPage
- Encapsulated element interactions

**⚡ Custom Fixtures** (Test Setup/Teardown)
- Pre-initialized page objects
- Authenticated pages (pre-logged in)
- Event handlers and logging

**🛠️ Utilities**
- Logger: Winston-based file and console logging
- Config: Environment variable management
- TestUtils: 20+ common helper functions

**📊 Reports & Logging**
- HTML reports with screenshots and videos
- Execution logs saved to file
- Multiple report formats (HTML, JSON, JUnit)

---

## 🚀 Getting Started

### First Time Setup
```bash
# Install browser binaries (run once)
npx playwright install
```

### Run Tests
```bash
# Run all tests
npm test

# Run in interactive UI mode
npm run test:ui

# Run with visible browser
npm run test:headed

# Debug mode with inspector
npm run test:debug

# View HTML report
npm run test:report
```

---

## 📂 Project Structure

```
saucedemo-playwright-bdd/
├── features/                 # BDD Feature Files
│   ├── login.feature         # 5 scenarios
│   ├── inventory.feature     # 6 scenarios
│   ├── checkout.feature      # 4 scenarios
│   └── logout.feature        # 3 scenarios
│
├── src/
│   ├── pages/               # Page Object Models
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   └── ProductDetailsPage.ts
│   │
│   ├── steps/               # Step Definitions
│   │   └── stepDefinitions.ts (100+ step implementations)
│   │
│   ├── fixtures/            # Custom Fixtures
│   │   └── fixtures.ts (page objects + authenticated page)
│   │
│   ├── utils/               # Utilities
│   │   ├── Logger.ts       (Winston logging)
│   │   ├── Config.ts       (Environment config)
│   │   └── TestUtils.ts    (Helper functions)
│   │
│   └── config/              # Configuration
│
├── reports/                 # Generated Reports
│   ├── html/               # Playwright HTML reports
│   ├── logs/               # Execution logs
│   └── screenshots/        # Failure screenshots
│
├── Configuration Files
│   ├── playwright.config.ts # Playwright setup
│   ├── tsconfig.json       # TypeScript config
│   ├── .cucumber.json      # Cucumber config
│   ├── .env                # Environment variables
│   └── package.json        # Dependencies
│
├── Documentation
│   ├── README.md           # Full documentation
│   ├── QUICKSTART.md       # Quick start guide
│   ├── PROJECT_SUMMARY.md  # Project overview
│   └── .github/copilot-instructions.md
```

---

## 🔑 Key Features

✅ **BDD with Cucumber** - Human-readable test scenarios  
✅ **Page Object Model** - Maintainable and scalable  
✅ **TypeScript** - Full type safety  
✅ **Custom Fixtures** - Reusable test setup  
✅ **Professional Logging** - Track every action  
✅ **HTML Reports** - Beautiful test reports  
✅ **Cross-Browser** - Chrome, Firefox, Safari, Mobile  
✅ **Environment Config** - Easy customization via .env  
✅ **Test Utilities** - 20+ helper functions  
✅ **Screenshots & Videos** - Automatic on failures  

---

## 🧪 Example Test Scenario

```gherkin
Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given User navigates to Sauce Demo application
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks login button
    Then User should be redirected to inventory page
    And Inventory page should display all products
```

---

## ⚙️ Configuration (.env)

```env
# Application
BASE_URL=https://www.saucedemo.com/

# Browser
BROWSER=chromium
HEADLESS=true
TIMEOUT=30000

# Test Data
VALID_USERNAME=standard_user
VALID_PASSWORD=secret_sauce

# Logging
LOG_LEVEL=info

# Reports
SCREENSHOT_ON_FAILURE=true
VIDEO_ON_FAILURE=true
```

---

## 📊 Test Coverage

| Feature | Scenarios | Details |
|---------|-----------|---------|
| Login | 5 | Valid/invalid credentials, locked user, empty fields |
| Inventory | 6 | Product display, sorting, cart operations |
| Checkout | 4 | Complete checkout, form validation, cart management |
| Logout | 3 | Session clearing, redirects, cart persistence |
| **Total** | **18** | Comprehensive coverage |

---

## 🎓 Learning Path

1. **Start Here**: Read `QUICKSTART.md`
2. **Understand**: Review feature files in `features/`
3. **Explore**: Check page objects in `src/pages/`
4. **Learn**: Study step definitions in `src/steps/`
5. **Run**: Execute `npm test`
6. **Review**: Open reports with `npm run test:report`

---

## 🧑‍💻 File Reference

| File | Purpose |
|------|---------|
| `features/*.feature` | BDD test scenarios in Gherkin |
| `src/pages/*.ts` | Element selectors & page methods |
| `src/steps/stepDefinitions.ts` | BDD step implementations |
| `src/fixtures/fixtures.ts` | Reusable test fixtures |
| `src/utils/Logger.ts` | Winston logger setup |
| `src/utils/Config.ts` | Environment configuration |
| `src/utils/TestUtils.ts` | Common test helpers |
| `playwright.config.ts` | Playwright & browser setup |
| `.env` | Environment variables |
| `package.json` | npm dependencies |

---

## 🔍 Debugging Tips

### Debug Mode with Inspector
```bash
npm run test:debug
```

### View Execution Logs
```bash
# Windows
type reports\logs\combined.log

# macOS/Linux
cat reports/logs/combined.log
```

### Check Failure Screenshots
```
reports/html/ (after running npm run test:report)
```

### Run Single Feature
```bash
npx playwright test features/login.feature
```

### Use Playwright Inspector
```bash
npx playwright codegen https://www.saucedemo.com/
```

---

## 📚 Documentation Files

| File | Content |
|------|---------|
| `README.md` | Complete framework documentation |
| `QUICKSTART.md` | Quick start & common commands |
| `PROJECT_SUMMARY.md` | Project overview & statistics |
| `.github/copilot-instructions.md` | Framework guidelines |

---

## ✨ Professional Highlights

✓ Industry-standard POM pattern  
✓ Type-safe TypeScript throughout  
✓ Comprehensive error logging  
✓ Beautiful HTML reports  
✓ Cross-browser compatibility  
✓ Mobile device testing support  
✓ CI/CD ready  
✓ Well-documented  
✓ Production-ready  

---

## 🚀 Next Steps

1. ✅ Project is set up and ready
2. Run `npx playwright install` (first time only)
3. Run `npm test` to execute tests
4. Open `npm run test:report` to view results
5. Edit `features/*.feature` to add new tests
6. Customize `src/pages/` for your needs
7. Review `README.md` for advanced usage

---

## 💬 Quick Command Reference

```bash
# Setup
npm install                    # Install dependencies
npx playwright install         # Install browsers

# Testing
npm test                       # Run all tests
npm run test:ui               # Interactive mode
npm run test:headed           # See browser
npm run test:debug            # Debug mode

# Reports
npm run test:report           # View HTML report

# Verification
npx tsc --noEmit              # Check TypeScript
```

---

## 🎉 You're All Set!

Your professional Playwright BDD framework is ready to use.

**Start with**: `npm test`

**Questions?** Check the relevant documentation file above.

**Happy Testing!** 🚀

---

*Framework created with Playwright, Cucumber, TypeScript, and Winston Logger*
