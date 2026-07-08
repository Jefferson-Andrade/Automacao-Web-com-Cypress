class HomePage {
  visitar() {
    cy.visit("/");
  }

  validarUsuarioLogado(nome) {
    cy.contains("Logged in as").should("be.visible");
    cy.contains("Logged in as").find("b").should("have.text", nome);
  }

  clicarLogout() {
    cy.get('a[href="/logout"]').click();
  }

  irParaProdutos() {
    cy.get('a[href="/products"]').click();
  }

  buscarProduto(nomeProduto) {
    cy.get("#search_product").clear().type(nomeProduto);
    cy.get("#submit_search").click();
  }

  validarTituloResultadoBusca() {
    cy.contains("Searched Products").should("be.visible");
  }

  validarProdutoNaLista(nomeProduto) {
    cy.get(".product-image-wrapper").contains(nomeProduto).should("be.visible");
  }

  validarQuantidadeDeProdutos(quantidadeEsperada) {
    cy.get(".product-image-wrapper").should("have.length", quantidadeEsperada);
  }

  abrirCategoria(categoria) {
    cy.get("#accordian").contains(categoria).click();
  }

  clicarSubcategoria(categoria, subcategoria) {
    cy.get(`#${categoria}`).contains(subcategoria).click();
  }

  clicarMarca(marca) {
    cy.get(".brands-name").contains(marca).click();
  }

  validarTituloDaListagem(titulo) {
    cy.get("h2.title").should("contain.text", titulo);
  }

  adicionarProdutoAoCarrinho(nomeProduto) {
    cy.contains(".product-image-wrapper", nomeProduto)
      .find(".add-to-cart")
      .first()
      .click({ force: true });
    cy.get("#cartModal").should("be.visible");
  }

  continuarComprando() {
    cy.get(".close-modal").click();
  }

  irParaCarrinhoPeloModal() {
    cy.get("#cartModal").contains("View Cart").click();
  }
}

module.exports = new HomePage();
