const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://github.com/jjvilar/Testes-F.-E2E-API-Rest-Interface-G.",
  },
});
