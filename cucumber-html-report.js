const reporter = require('multiple-cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, 'reports', 'cucumber-report.json'),
  output: path.join(__dirname, 'reports', 'cucumber-report.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': process.env.ENVIRONMENT || 'QA',
    'Browser': process.env.BROWSER || 'Chromium',
    'Platform': process.platform,
    'Executed': 'Local',
    'Execution Time': new Date().toISOString()
  }
};

reporter.generate(options);
console.log('Cucumber HTML Report generated successfully!');
