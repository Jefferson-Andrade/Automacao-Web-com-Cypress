// Comandos usados para preparar e limpar os dados de teste
// usando a API publica do automationexercise.com, sem precisar
// passar pela tela de cadastro toda vez que um teste precisa de um usuario.

Cypress.Commands.add("criarContaViaApi", (usuario) => {
  return cy.request({
    method: "POST",
    url: "/api/createAccount",
    form: true,
    body: usuario,
  });
});

Cypress.Commands.add("excluirContaViaApi", (email, password) => {
  return cy.request({
    method: "DELETE",
    url: "/api/deleteAccount",
    form: true,
    body: { email, password },
    failOnStatusCode: false,
  });
});
