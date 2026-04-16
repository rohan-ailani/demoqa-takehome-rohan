const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // 1. Base URL: Allows you to use relative paths like cy.visit('/forms')
    baseUrl: "https://demoqa.com",

    // 2. Global Timeouts: Adjusted for DemoQA's high latency and script overhead
    defaultCommandTimeout: 10000, // Waits 10s for elements to appear
    pageLoadTimeout: 60000,       // Increased to 60s for heavy page loads
    requestTimeout: 15000,        // Timeout for API/Network requests

    // 3. Environment Stability: Handle flakiness automatically
    retries: {
      runMode: 2,  // Retries failed tests twice in headless mode (CI)
      openMode: 0, // No retries in the UI to speed up local debugging
    },

    // 4. Viewport Settings: Ensures consistent UI layout across runs
    viewportWidth: 1280,
    viewportHeight: 720,

    // 5. Artifacts: Helps in post-run analysis
    video: true,               // Record video of the run
    screenshotOnRunFailure: true, // Capture UI state on failure

    setupNodeEvents(on, config) {
      // Implement node event listeners here (e.g., reporting, file preprocessors)
    },
  },
});

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://demoqa.com",
//   },
// });
