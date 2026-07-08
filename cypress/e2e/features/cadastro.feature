# language: pt

Funcionalidade: Cadastro de usuario
  Como visitante do site Automation Exercise
  Quero criar uma conta nova
  Para poder fazer compras

  Cenario: Cadastro de um usuario novo com sucesso
    Dado que eu esteja na pagina de login
    Quando eu preencher o nome e o email de um usuario novo
    E clicar no botao de cadastro
    E preencher o restante do formulario de cadastro
    E clicar em criar conta
    Entao devo ver a mensagem de conta criada
    Quando eu clicar em continuar
    Entao devo ver que o usuario esta logado
    Quando eu excluir a minha conta
    Entao devo ver a mensagem de conta excluida

  Cenario: Cadastro com um email que ja existe
    Dado que exista um usuario cadastrado
    E que eu esteja na pagina de login
    Quando eu tentar cadastrar usando um email ja cadastrado
    E clicar no botao de cadastro
    Entao devo ver a mensagem de email ja existente
