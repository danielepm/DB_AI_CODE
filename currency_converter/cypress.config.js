const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:8000/currency_converter",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
