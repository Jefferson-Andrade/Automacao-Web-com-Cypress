const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const CarrinhoPage = require("../../pages/CarrinhoPage");
const CheckoutPage = require("../../pages/CheckoutPage");
const { gerarCartao } = require("../../support/dadosFake");

When("eu clicar em prosseguir para o checkout", () => {
  CarrinhoPage.clicarProsseguirParaCheckout();
});

Then("devo ver os enderecos de entrega e cobranca", () => {
  CheckoutPage.validarEnderecos();
});

When("eu escrever um comentario no pedido", () => {
  CheckoutPage.escreverComentario("Entregar em horario comercial, por favor.");
});

When("clicar em finalizar pedido", () => {
  CheckoutPage.clicarFinalizarPedido();
});

When("preencher os dados do cartao", () => {
  const cartao = gerarCartao();
  CheckoutPage.preencherPagamento(cartao);
});

When("clicar em pagar", () => {
  CheckoutPage.clicarPagar();
});

Then("devo ver a mensagem de pedido realizado", () => {
  CheckoutPage.validarPedidoRealizado();
});
