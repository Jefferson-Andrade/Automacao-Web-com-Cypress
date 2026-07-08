const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const mochawesomePlugin = require("cypress-mochawesome-reporter/plugin");

// O Cypress so guarda um handler por evento. Como o plugin do Cucumber e o
// do Mochawesome usam os dois os eventos "before:run"/"after:run", um deles
// sobrescreveria o outro. Por isso "on" e envolvido aqui para chamar todos
// os handlers registrados para esses dois eventos, em vez de so o ultimo.
function permitirVariosHandlers(on) {
  const handlers = { "before:run": [], "after:run": [] };

  return function onComBaseNosHandlers(evento, handler) {
    if (evento !== "before:run" && evento !== "after:run") {
      return on(evento, handler);
    }

    handlers[evento].push(handler);
    on(evento, async (...args) => {
      for (const handlerRegistrado of handlers[evento]) {
        await handlerRegistrado(...args);
      }
    });
  };
}

async function setupNodeEvents(on, config) {
  const onCombinado = permitirVariosHandlers(on);

  mochawesomePlugin(onCombinado);

  await addCucumberPreprocessorPlugin(onCombinado, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportPageTitle: "Relatorio de testes - Automation Exercise",
  },
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true,
  screenshotOnRunFailure: true,
});
