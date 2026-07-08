class CadastroPage {
  preencherFormularioCompleto(usuario) {
    cy.get("#id_gender1").click();
    cy.get("#password").type(usuario.password);
    cy.get("#days").select(usuario.birth_date);
    cy.get("#months").select(usuario.birth_month);
    cy.get("#years").select(usuario.birth_year);

    cy.get("#first_name").type(usuario.firstname);
    cy.get("#last_name").type(usuario.lastname);
    cy.get("#company").type(usuario.company);
    cy.get("#address1").type(usuario.address1);
    cy.get("#country").select(usuario.country);
    cy.get("#state").type(usuario.state);
    cy.get("#city").type(usuario.city);
    cy.get("#zipcode").type(usuario.zipcode);
    cy.get("#mobile_number").type(usuario.mobile_number);
  }

  clicarCriarConta() {
    cy.get('[data-qa="create-account"]').click();
  }

  validarContaCriada() {
    cy.get('[data-qa="account-created"]').should("be.visible");
  }

  clicarContinuar() {
    cy.get('[data-qa="continue-button"]').click();
  }

  excluirConta() {
    cy.get('a[href="/delete_account"]').click();
  }

  validarContaExcluida() {
    cy.get('[data-qa="account-deleted"]').should("be.visible");
  }
}

module.exports = new CadastroPage();
