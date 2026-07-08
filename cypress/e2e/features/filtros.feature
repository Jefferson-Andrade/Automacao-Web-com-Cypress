# language: pt

Funcionalidade: Filtros de produtos
  Como visitante do site
  Quero filtrar produtos por categoria e por marca
  Para achar mais rapido o que eu quero

  Contexto:
    Dado que eu esteja na pagina de produtos

  Cenario: Filtrar produtos pela categoria Women > Dress
    Quando eu abrir a categoria "Women"
    E clicar na subcategoria "Women" "Dress"
    Entao devo ver o titulo da listagem "Women - Dress Products"

  Cenario: Filtrar produtos pela marca Polo
    Quando eu clicar na marca "Polo"
    Entao devo ver o titulo da listagem "Brand - Polo Products"
