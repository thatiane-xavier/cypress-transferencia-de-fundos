const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://demo.testfire.net/bank',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
