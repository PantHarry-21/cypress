const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wqw6u6",

  // component: {
  //   devServer: {
  //     framework: "react",
  //     bundler: "webpack",
  //   },
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "cypress/Integration/Examples",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
