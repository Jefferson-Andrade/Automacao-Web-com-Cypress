const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const HomePage = require("../../pages/HomePage");

When("eu clicar em logout", () => {
  HomePage.clicarLogout();
});

Then("devo voltar para a pagina de login", () => {
  cy.url().should("include", "/login");
});
