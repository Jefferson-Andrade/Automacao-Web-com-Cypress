const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const LoginPage = require("../../pages/LoginPage");
const HomePage = require("../../pages/HomePage");
const estado = require("../../support/estado");

When("eu preencher o email e a senha corretos", () => {
  LoginPage.preencherEmailLogin(estado.usuario.email);
  LoginPage.preencherSenhaLogin(estado.usuario.password);
});

When("eu preencher o email correto e uma senha errada", () => {
  LoginPage.preencherEmailLogin(estado.usuario.email);
  LoginPage.preencherSenhaLogin("senhaErrada123");
});

When("clicar no botao de login", () => {
  LoginPage.clicarBotaoLogin();
});

Then("devo ver que o usuario esta logado", () => {
  HomePage.validarUsuarioLogado(estado.usuario.name);
});

Then("devo ver a mensagem de erro de login", () => {
  LoginPage.validarErroLogin();
});
