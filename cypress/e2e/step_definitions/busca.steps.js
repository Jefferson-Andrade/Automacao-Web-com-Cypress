const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const HomePage = require("../../pages/HomePage");

When("eu buscar pelo produto {string}", (nomeProduto) => {
  HomePage.buscarProduto(nomeProduto);
});

Then("devo ver o titulo de resultado da busca", () => {
  HomePage.validarTituloResultadoBusca();
});

Then("devo ver o produto {string} na lista", (nomeProduto) => {
  HomePage.validarProdutoNaLista(nomeProduto);
});

Then("a lista de produtos deve estar vazia", () => {
  HomePage.validarQuantidadeDeProdutos(0);
});
