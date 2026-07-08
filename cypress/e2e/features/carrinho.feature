# language: pt

Funcionalidade: Carrinho de compras
  Como usuario logado no site
  Quero adicionar e remover produtos do carrinho
  Para montar minha compra

  Contexto:
    Dado que exista um usuario cadastrado
    E que eu faca login com esse usuario
    E que eu esteja na pagina de produtos

  Cenario: Adicionar produtos ao carrinho
    Quando eu adicionar o produto "Blue Top" ao carrinho
    E continuar comprando
    E eu adicionar o produto "Men Tshirt" ao carrinho
    E ir para o carrinho pelo modal
    Entao devo ver o produto "Blue Top" no carrinho
    E devo ver o produto "Men Tshirt" no carrinho

  Cenario: Remover um produto do carrinho
    Quando eu adicionar o produto "Blue Top" ao carrinho
    E ir para o carrinho pelo modal
    E remover o produto "Blue Top" do carrinho
    Entao o produto "Blue Top" nao deve mais estar no carrinho
