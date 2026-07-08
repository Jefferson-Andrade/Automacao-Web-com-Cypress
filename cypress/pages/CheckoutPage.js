class CheckoutPage {
  validarEnderecos() {
    cy.get("#address_delivery").should("be.visible");
    cy.get("#address_invoice").should("be.visible");
  }

  escreverComentario(texto) {
    cy.get('textarea[name="message"]').type(texto);
  }

  clicarFinalizarPedido() {
    cy.contains("a", "Place Order").click();
  }

  preencherPagamento(cartao) {
    cy.get('[data-qa="name-on-card"]').type(cartao.nomeNoCartao);
    cy.get('[data-qa="card-number"]').type(cartao.numeroCartao);
    cy.get('[data-qa="cvc"]').type(cartao.cvc);
    cy.get('[data-qa="expiry-month"]').type(cartao.mesValidade);
    cy.get('[data-qa="expiry-year"]').type(cartao.anoValidade);
  }

  clicarPagar() {
    cy.get('[data-qa="pay-button"]').click();
  }

  validarPedidoRealizado() {
    cy.contains("Order Placed!").should("be.visible");
  }
}

module.exports = new CheckoutPage();
