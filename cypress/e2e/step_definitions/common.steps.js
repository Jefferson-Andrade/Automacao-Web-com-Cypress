const { Given, After } = require("@badeball/cypress-cucumber-preprocessor");
require("cypress-mochawesome-reporter/cucumberSupport");

const LoginPage = require("../../pages/LoginPage");
const HomePage = require("../../pages/HomePage");
const estado = require("../../support/estado");
const { gerarUsuario } = require("../../support/dadosFake");

Given("que exista um usuario cadastrado", () => {
  estado.usuario = gerarUsuario();
  cy.criarContaViaApi(estado.usuario);
});

Given("que eu esteja na pagina de login", () => {
  LoginPage.visitar();
});

Given("que eu faca login com esse usuario", () => {
  LoginPage.visitar();
  LoginPage.fazerLogin(estado.usuario.email, estado.usuario.password);
});

Given("que eu esteja na pagina de produtos", () => {
  HomePage.visitar();
  HomePage.irParaProdutos();
});

After(() => {
  if (estado.usuario) {
    cy.excluirContaViaApi(estado.usuario.email, estado.usuario.password);
    estado.usuario = null;
  }
});
