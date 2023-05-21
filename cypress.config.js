const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

    viewportWidth: 1800,//1440
    viewportHeight: 1200,//900
    baseUrl: "https://demoqa.com/",
  },
});
