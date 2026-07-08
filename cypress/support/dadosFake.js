const { faker } = require("@faker-js/faker");

// Gera um usuario novo e aleatorio para cada teste, assim nao corremos
// o risco de tentar cadastrar um e-mail que ja existe no site.
function gerarUsuario() {
  const nome = faker.person.firstName() + " " + faker.person.lastName();
  const email = `cypress.${Date.now()}.${faker.number.int(9999)}@teste.com`;

  return {
    name: nome,
    email: email,
    password: "Senha@123",
    title: "Mr",
    birth_date: "10",
    birth_month: "5",
    birth_year: "1995",
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: "",
    country: "United States",
    zipcode: "01000000",
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: "11987654321",
  };
}

function gerarCartao() {
  return {
    nomeNoCartao: faker.person.fullName(),
    numeroCartao: faker.finance.creditCardNumber("visa"),
    cvc: faker.finance.creditCardCVV(),
    mesValidade: "12",
    anoValidade: "2030",
  };
}

module.exports = { gerarUsuario, gerarCartao };
