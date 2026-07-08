const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const HomePage = require("../../pages/HomePage");
const CarrinhoPage = require("../../pages/CarrinhoPage");

When("eu adicionar o produto {string} ao carrinho", (nomeProduto) => {
  HomePage.adicionarProdutoAoCarrinho(nomeProduto);
});

When("continuar comprando", () => {
  HomePage.continuarComprando();
});

When("ir para o carrinho pelo modal", () => {
  HomePage.irParaCarrinhoPeloModal();
});

Then("devo ver o produto {string} no carrinho", (nomeProduto) => {
  CarrinhoPage.validarProdutoNoCarrinho(nomeProduto);
});

When("remover o produto {string} do carrinho", (nomeProduto) => {
  CarrinhoPage.removerProduto(nomeProduto);
});

Then("o produto {string} nao deve mais estar no carrinho", (nomeProduto) => {
  CarrinhoPage.validarProdutoRemovido(nomeProduto);
});

Given("que eu tenha adicionado o produto {string} ao carrinho", (nomeProduto) => {
  HomePage.adicionarProdutoAoCarrinho(nomeProduto);
  HomePage.continuarComprando();
});

Given("que eu esteja no carrinho", () => {
  CarrinhoPage.visitar();
});
