class LoginPage {
  visitar() {
    cy.visit("/login");
  }

  preencherEmailLogin(email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  }

  preencherSenhaLogin(senha) {
    cy.get('[data-qa="login-password"]').clear().type(senha);
  }

  clicarBotaoLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  fazerLogin(email, senha) {
    this.preencherEmailLogin(email);
    this.preencherSenhaLogin(senha);
    this.clicarBotaoLogin();
  }

  validarErroLogin() {
    cy.contains("Your email or password is incorrect!").should("be.visible");
  }

  preencherNomeECadastro(nome, email) {
    cy.get('[data-qa="signup-name"]').clear().type(nome);
    cy.get('[data-qa="signup-email"]').clear().type(email);
  }

  clicarBotaoCadastro() {
    cy.get('[data-qa="signup-button"]').click();
  }

  validarEmailJaExistente() {
    cy.contains("Email Address already exist!").should("be.visible");
  }
}

module.exports = new LoginPage();
