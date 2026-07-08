const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const LoginPage = require("../../pages/LoginPage");
const CadastroPage = require("../../pages/CadastroPage");
const estado = require("../../support/estado");
const { gerarUsuario } = require("../../support/dadosFake");

When("eu preencher o nome e o email de um usuario novo", () => {
  estado.usuario = gerarUsuario();
  LoginPage.preencherNomeECadastro(estado.usuario.name, estado.usuario.email);
});

When("clicar no botao de cadastro", () => {
  LoginPage.clicarBotaoCadastro();
});

When("preencher o restante do formulario de cadastro", () => {
  CadastroPage.preencherFormularioCompleto(estado.usuario);
});

When("clicar em criar conta", () => {
  CadastroPage.clicarCriarConta();
});

Then("devo ver a mensagem de conta criada", () => {
  CadastroPage.validarContaCriada();
});

When("eu clicar em continuar", () => {
  CadastroPage.clicarContinuar();
});

When("eu excluir a minha conta", () => {
  CadastroPage.excluirConta();
});

Then("devo ver a mensagem de conta excluida", () => {
  CadastroPage.validarContaExcluida();
  estado.usuario = null;
});

When("eu tentar cadastrar usando um email ja cadastrado", () => {
  const outroUsuario = gerarUsuario();
  LoginPage.preencherNomeECadastro(outroUsuario.name, estado.usuario.email);
});

Then("devo ver a mensagem de email ja existente", () => {
  LoginPage.validarEmailJaExistente();
});
