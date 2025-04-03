const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
  },
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false, // I removed the support file option, as this test is pretty simple and there's no need of base URL.
  },
})