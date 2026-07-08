# language: pt

Funcionalidade: Logout
  Como usuario logado no site
  Quero poder sair da minha conta
  Para proteger meus dados

  Contexto:
    Dado que exista um usuario cadastrado
    E que eu faca login com esse usuario

  Cenario: Sair da conta com sucesso
    Quando eu clicar em logout
    Entao devo voltar para a pagina de login
