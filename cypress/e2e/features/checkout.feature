# language: pt

Funcionalidade: Checkout
  Como usuario logado no site
  Quero finalizar minha compra
  Para receber os produtos que escolhi

  Contexto:
    Dado que exista um usuario cadastrado
    E que eu faca login com esse usuario
    E que eu esteja na pagina de produtos
    E que eu tenha adicionado o produto "Blue Top" ao carrinho
    E que eu esteja no carrinho

  Cenario: Finalizar uma compra com sucesso
    Quando eu clicar em prosseguir para o checkout
    Entao devo ver os enderecos de entrega e cobranca
    Quando eu escrever um comentario no pedido
    E clicar em finalizar pedido
    E preencher os dados do cartao
    E clicar em pagar
    Entao devo ver a mensagem de pedido realizado
