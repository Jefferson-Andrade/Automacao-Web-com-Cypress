# Automação de Testes E2E com Cypress

Projeto de automação de testes end-to-end do site [Automation Exercise](https://automationexercise.com), feito para a disciplina de automação de testes.

## Sobre o projeto

O objetivo é automatizar os principais fluxos de um site de e-commerce: login, cadastro, busca, filtros, carrinho, checkout e logout. Os testes seguem o padrão BDD (Behavior Driven Development), escritos em Gherkin (arquivos `.feature`) e executados com Cucumber + Cypress.

## Tecnologias usadas

Cypress 
Cucumber (@badeball/cypress-cucumber-preprocessor)
JavaScript / Node.js
Faker
Mochawesome
GitHub Actions

## Estrutura do projeto
```
## Estrutura do Projeto

```text
cypress/
├── e2e/
│   ├── features/          # Cenários BDD (.feature)
│   └── step_definitions/  # Implementação dos passos
├── pages/                 # Page Objects
├── fixtures/              # Dados de teste
├── reports/               # Relatórios gerados
└── support/               # Configurações e comandos customizados
```

```
```

## Cenários automatizados

- **Login**: login com credenciais corretas e com senha incorreta
- **Cadastro**: criação de conta nova e tentativa de cadastro com e-mail já existente
- **Logout**: sair da conta
- **Busca**: busca de produto existente e produto inexistente
- **Filtros**: filtro por categoria (Women > Dress) e por marca (Polo)
- **Carrinho**: adicionar produtos e remover produto do carrinho
- **Checkout**: fluxo completo de finalização de compra, do carrinho até a confirmação do pedido

Os usuários usados nos testes são criados e removidos automaticamente pela API do próprio site (`/api/createAccount` e `/api/deleteAccount`), então cada execução usa um e-mail novo, gerado com o Faker.

## Como rodar o projeto

Instalar as dependências:

```
npm install
```

Rodar os testes com a interface do Cypress (modo interativo):

```
npm run cypress:open
```

Rodar todos os testes pelo terminal (modo headless):

```
npm run cypress:run
```

## Relatórios, screenshots e vídeos

Depois de rodar `npm run cypress:run`, os resultados ficam em:

- `cypress/reports` -> relatório em HTML gerado pelo Mochawesome
- `cypress/screenshots` -> screenshots tiradas quando um teste falha
- `cypress/videos` -> vídeo da execução de cada spec

Esses três diretórios não vão para o repositório (estão no `.gitignore`), já que são gerados a cada execução.

## Integração contínua

O workflow em `.github/workflows/cypress.yml` roda os testes automaticamente a cada push ou pull request na branch `main`, e sobe o relatório, os vídeos e os screenshots como artefatos da execução.
