const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://moserbus.local/',
     // Exclude certain test files or folders from being run
     excludeSpecPattern: ['./cypress/Integration/Examples/exclude'],
     // Folder where the test results will be saved
    supportFile: 'cypress/support/index.js',

    // Directory where Cypress should save screenshots taken during test runs
    screenshotsFolder: 'cypress/screenshots',

    // Command timeout value for the test runner
    defaultCommandTimeout: 10000,

    // Request timeout value for the test runner
    requestTimeout: 15000,

    // Number of retries for failed tests
    retries: {
      // Retry once for `cypress run`
      runMode: 1,

      // Retry twice for `cypress open`
      openMode: 2,
    },

    // setupNodeEvents(on, config) {
    //   // Add any node event listeners here if needed
    //   // For example, handling custom commands, logging, etc.
    //   on('task', {
    //     log(message) {
    //       console.log(message);
    //       return null;
        },

    // Set up the environment variables
    env: {
      apiUrl: 'http://moserbus.local/api',
      loginEmail: 'user@example.com',
      loginPassword: 'password123',
    },

    // Viewport configuration for the test runner
    viewportWidth: 1280,
    viewportHeight: 720,

    // Define a base URL for API requests, if different from the application base URL
    baseApiUrl: 'http://moserbus.local/api',

    // Custom reporter configuration
    reporter: 'spec',
    reporterOptions: {
      mochaFile: 'cypress/results/my-test-output.xml',
      toConsole: true,
    },

    // Specify the browser to be used for testing
    browser: 'chrome',

  // Configure the number of workers to run tests in parallel
  numTestsKeptInMemory: 10,

  // Set whether or not to watch for file changes and rerun tests automatically
  watchForFileChanges: true,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  }
})

  
