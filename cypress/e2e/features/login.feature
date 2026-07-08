# language: pt

Funcionalidade: Login
  Como usuario do site Automation Exercise
  Quero entrar com meu email e senha
  Para acessar minha conta

  Contexto:
    Dado que exista um usuario cadastrado
    E que eu esteja na pagina de login

  Cenario: Login com email e senha corretos
    Quando eu preencher o email e a senha corretos
    E clicar no botao de login
    Entao devo ver que o usuario esta logado

  Cenario: Login com senha incorreta
    Quando eu preencher o email correto e uma senha errada
    E clicar no botao de login
    Entao devo ver a mensagem de erro de login
