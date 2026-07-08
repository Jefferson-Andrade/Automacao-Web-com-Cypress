// Objeto simples para guardar dados entre os steps de um mesmo cenario
// (ex: o usuario criado no Dado, usado depois no Quando e no Entao).
const estado = {
  usuario: null,
};

module.exports = estado;
