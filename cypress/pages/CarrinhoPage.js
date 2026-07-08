class CarrinhoPage {
  visitar() {
    cy.visit("/view_cart");
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.get("#cart_info").contains(nomeProduto).should("be.visible");
  }

  removerProduto(nomeProduto) {
    cy.get("#cart_info")
      .contains("tr", nomeProduto)
      .find(".cart_quantity_delete")
      .click();
  }

  validarProdutoRemovido(nomeProduto) {
    cy.get("#cart_info").should("not.contain", nomeProduto);
  }

  clicarProsseguirParaCheckout() {
    cy.get(".check_out").click();
  }
}

module.exports = new CarrinhoPage();
