# Sobre o meu projeto

Esse é o projeto que eu fiz para a disciplina de automação de testes. A proposta era automatizar um site de e-commerce, cobrindo login, cadastro, carrinho, checkout, logout, busca e filtros, usando Cypress. Vou explicar aqui o que eu fiz, as escolhas que tomei e como rodar tudo.

## Por que esse site

Eu escolhi o site **automationexercise.com** para automatizar. Ele é um site feito justamente para prática de automação de testes, então ele tem todos os fluxos que eu precisava: cadastro de usuário, login, busca de produtos, filtro por categoria e por marca, carrinho de compras e checkout completo até a confirmação do pedido. Além disso, ele tem uma API própria que eu uso para criar e apagar os usuários de teste, o que ajuda bastante (explico melhor isso mais abaixo).

## Tecnologias que usei

- **Cypress** para automatizar o navegador
- **Cucumber**, para escrever os testes no formato BDD (aqueles cenários em português, tipo "Dado, Quando, Então")
- **JavaScript / Node.js**
- **Page Object Model**, que é um jeito de organizar o código separando "o que a tela faz" de "o que o teste verifica"
- **Faker**, para gerar dados de usuário aleatórios (nome, email, endereço) a cada execução
- **Mochawesome**, para gerar o relatório em HTML dos testes
- **Git / GitHub Actions**, para rodar os testes automaticamente

## Como o projeto está organizado

```
cypress/
  e2e/
    features/            -> os cenários escritos em Gherkin (arquivos .feature)
    step_definitions/     -> o código que "traduz" cada linha do Gherkin em ações no navegador
  pages/                  -> um arquivo por tela do site (LoginPage, HomePage, CarrinhoPage, etc)
  support/                -> comandos que eu criei (tipo criar usuário pela API) e o gerador de dados falsos
cypress.config.js         -> configuração do Cypress, Cucumber e do relatório
.github/workflows/        -> o arquivo que faz o GitHub rodar os testes sozinho
```

A ideia do Page Object Model é: cada página do site vira uma classe, com métodos tipo `preencherEmailLogin()` ou `clicarBotaoLogin()`. Assim, se o site mudar um seletor no futuro, eu só preciso arrumar em um lugar (na página), e não em todos os testes que usam aquele botão.

## O que cada teste faz

- **login.feature**: testa entrar com email e senha certos, e também testa o que acontece quando a senha está errada
- **cadastro.feature**: cria uma conta nova do zero (preenchendo todo o formulário) e também testa tentar cadastrar de novo com um email que já existe
- **logout.feature**: faz login e depois testa se o logout volta para a tela de login
- **busca.feature**: busca um produto que existe e um que não existe, e confere o resultado
- **filtros.feature**: filtra os produtos por categoria (Women > Dress) e por marca (Polo)
- **carrinho.feature**: adiciona mais de um produto no carrinho e depois testa remover um produto
- **checkout.feature**: faz o fluxo inteiro, desde adicionar produto no carrinho até finalizar o pedido e ver a mensagem de confirmação

Uma coisa que eu fiz para não sujar o site com várias contas de teste: em vez de criar cada usuário passando pela tela de cadastro toda vez, eu uso a API do próprio automationexercise.com para criar o usuário antes do teste e apagar depois que o teste termina. Isso deixa os testes mais rápidos e mais independentes uns dos outros. A única exceção é o teste de cadastro, que testa a tela de cadastro de verdade, porque é justamente isso que precisa ser validado ali.

## Como rodar o projeto

Primeiro, instala as dependências (só precisa fazer isso uma vez):

```
npm install
```

Para abrir o Cypress numa janela e ver os testes rodando (bom para acompanhar visualmente):

```
npm run cypress:open
```

Depois é só clicar em "E2E Testing", escolher um navegador e clicar em cada arquivo `.feature` da lista para rodar.

Para rodar tudo direto pelo terminal, sem abrir janela nenhuma:

```
npm run cypress:run
```

## Relatórios, prints e vídeos

Depois de rodar `npm run cypress:run`, esses arquivos são gerados automaticamente:

- `cypress/reports/index.html` -> relatório completo em HTML com o resultado de cada cenário
- `cypress/screenshots` -> só é gerado se algum teste falhar
- `cypress/videos` -> um vídeo de cada arquivo de teste rodando

Esses arquivos não ficam no repositório do Git porque são gerados de novo a cada execução (por isso estão no `.gitignore`).

## GitHub Actions

Criei também um workflow (`.github/workflows/cypress.yml`) que roda todos os testes automaticamente toda vez que alguém sobe código para a branch principal ou abre um pull request. Ele já sobe o relatório, os vídeos e os screenshots como resultado da execução, então dá pra ver o que aconteceu sem precisar rodar localmente.
