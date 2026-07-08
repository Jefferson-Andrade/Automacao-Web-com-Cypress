# language: pt

Funcionalidade: Busca de produtos
  Como visitante do site
  Quero buscar produtos pelo nome
  Para encontrar o que eu quero comprar

  Contexto:
    Dado que eu esteja na pagina de produtos

  Cenario: Buscar por um produto que existe
    Quando eu buscar pelo produto "Dress"
    Entao devo ver o titulo de resultado da busca
    E devo ver o produto "Sleeveless Dress" na lista

  Cenario: Buscar por um produto que nao existe
    Quando eu buscar pelo produto "produtoquenaoexiste123"
    Entao devo ver o titulo de resultado da busca
    E a lista de produtos deve estar vazia
