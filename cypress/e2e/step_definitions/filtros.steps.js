const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const HomePage = require("../../pages/HomePage");

When("eu abrir a categoria {string}", (categoria) => {
  HomePage.abrirCategoria(categoria);
});

When("clicar na subcategoria {string} {string}", (categoria, subcategoria) => {
  HomePage.clicarSubcategoria(categoria, subcategoria);
});

When("eu clicar na marca {string}", (marca) => {
  HomePage.clicarMarca(marca);
});

Then("devo ver o titulo da listagem {string}", (titulo) => {
  HomePage.validarTituloDaListagem(titulo);
});
