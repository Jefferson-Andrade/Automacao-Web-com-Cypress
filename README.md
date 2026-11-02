# Automação Web com Cypress e Cucumber

Projeto de estudo de testes end-to-end do [Automation Exercise](https://automationexercise.com/), desenvolvido para praticar automação de fluxos de e-commerce com JavaScript, Cypress e cenários em Gherkin.

A suíte contém **12 cenários em 7 arquivos `.feature`**, com organização por Page Objects, geração de dados fictícios e integração com GitHub Actions.

## Comece por aqui

- [Cenários em Gherkin](cypress/e2e/features/): comportamentos esperados em português.
- [Step definitions](cypress/e2e/step_definitions/): implementação dos passos.
- [Page Objects](cypress/pages/): interação com as páginas e verificações da interface.
- [Execuções no GitHub Actions](https://github.com/Jefferson-Andrade/Automacao-Web-com-Cypress/actions/workflows/cypress.yml): resultados e artefatos de cada execução.

## Cenários implementados

| Funcionalidade | O que os cenários verificam | Quantidade |
| --- | --- | ---: |
| Cadastro | Criação de conta e rejeição de e-mail já cadastrado | 2 |
| Login | Credenciais corretas e senha incorreta | 2 |
| Logout | Retorno à página de login após sair da conta | 1 |
| Busca | Produto existente e busca sem resultados | 2 |
| Filtros | Títulos das listagens por categoria Women > Dress e marca Polo | 2 |
| Carrinho | Adição de dois produtos e remoção de um produto | 2 |
| Checkout | Endereços exibidos e confirmação do pedido com dados fictícios | 1 |
| **Total** | | **12** |

A quantidade descreve os cenários presentes no código, não o resultado da última execução nem a cobertura de todas as funcionalidades do site. Para conferir aprovação ou falha, consulte a execução correspondente ao commit na aba Actions.

## Validação registrada em 02/11/2026

A [execução do PR de atualização das dependências](https://github.com/Jefferson-Andrade/Automacao-Web-com-Cypress/actions/runs/41489168514), no commit [`e7b3c92`](https://github.com/Jefferson-Andrade/Automacao-Web-com-Cypress/commit/e7b3c922f767957242a5c79aedbbb2a96f1cc0d6), registrou:

| Verificação | Resultado |
| --- | --- |
| Auditoria npm, incluindo dependências de desenvolvimento | Zero vulnerabilidades reportadas |
| Cenários E2E no Chrome 156 headless | 12 aprovados em 7 arquivos |
| Falhas, testes pendentes ou ignorados | 0 |
| Relatório Mochawesome e vídeos | Gerados e publicados como artefatos |

A correção foi integrada à `main` pelo [PR #1](https://github.com/Jefferson-Andrade/Automacao-Web-com-Cypress/pull/1), no commit [`37b2dda`](https://github.com/Jefferson-Andrade/Automacao-Web-com-Cypress/commit/37b2dda492581e7668811727c825a2e60273485f). A atualização substituiu o resultado anterior de 28 alertas de dependências por zero na auditoria daquela execução.

Esse registro corresponde às versões e à base de avisos disponíveis na data da execução. Novos avisos podem aparecer; consulte a CI do commit desejado. Os artefatos seguem a retenção de 7 dias do workflow.

## Tecnologias e organização

| Tecnologia ou recurso | Uso no projeto |
| --- | --- |
| JavaScript / Node.js / npm | Implementação e gerenciamento das dependências |
| Cypress | Automação da interface web |
| Cucumber + Gherkin | Descrição dos cenários e ligação com os passos JavaScript |
| Page Objects | Organização das interações e verificações por página |
| Faker | Geração de usuários e dados de pagamento fictícios |
| Mochawesome | Relatórios HTML da execução |
| GitHub Actions | Execução automatizada e armazenamento dos artefatos |

As dependências e suas faixas de versão estão em [package.json](package.json); o [package-lock.json](package-lock.json) registra as versões resolvidas.

## Como executar

### Pré-requisitos

- Git.
- Node.js 24 e npm.
- Acesso à internet e disponibilidade do Automation Exercise.
- Google Chrome instalado, caso escolha executar com `--browser chrome`.

### 1. Baixar o projeto e instalar as dependências

```bash
git clone https://github.com/Jefferson-Andrade/Automacao-Web-com-Cypress.git
cd Automacao-Web-com-Cypress
npm ci
```

### 2. Executar os testes

Modo interativo:

```bash
npm run cypress:open
```

Na interface, selecione E2E Testing, um navegador e o arquivo de cenário desejado.

Modo headless:

```bash
npm run cypress:run
```

Para usar o Chrome, como no workflow:

```bash
npm run cypress:run -- --browser chrome
```

Para executar somente os cenários de login:

```bash
npm run cypress:run -- --spec "cypress/e2e/features/login.feature"
```

O comando `npm test` também executa `cypress run`. A URL base e as demais opções estão em [cypress.config.js](cypress.config.js).

## Preparação e limpeza dos dados

Os cenários que precisam de uma conta existente usam `POST /api/createAccount` para preparar o usuário. O hook `After` tenta remover a conta com `DELETE /api/deleteAccount` quando há um usuário registrado no estado do teste.

No cenário de cadastro com sucesso, a criação e a exclusão da conta são realizadas pela interface. Os dados são gerados em [dadosFake.js](cypress/support/dadosFake.js), com e-mails que combinam data/hora e um número aleatório.

As chamadas de API apoiam a preparação e a limpeza dos cenários de interface; não constituem uma suíte dedicada de testes de contrato da API. Uma interrupção abrupta pode impedir a limpeza.

## Relatórios e evidências

Após uma execução headless, consulte:

| Caminho | Conteúdo |
| --- | --- |
| `cypress/reports/` | Relatório HTML do Mochawesome |
| `cypress/screenshots/` | Capturas automáticas quando um teste falha |
| `cypress/videos/` | Vídeos da execução dos arquivos de teste |

Essas pastas são geradas durante a execução e estão no [.gitignore](.gitignore). A disponibilidade de arquivos depende de a execução alcançar a etapa que os produz.

Para limpar relatórios, capturas e vídeos locais:

```bash
npm run report:clean
```

Esse comando remove os artefatos gerados nessas três pastas.

## Integração contínua

O [workflow Cypress](.github/workflows/cypress.yml) executa os testes no Chrome, em Ubuntu, a cada push na `main` e em pull requests destinados à `main`.

Os artefatos configurados têm retenção de **7 dias**:

- `relatorio-mochawesome`: upload tentado ao final, inclusive quando há falha.
- `videos`: upload tentado ao final, inclusive quando há falha.
- `screenshots`: upload em caso de falha.

Abra uma execução na aba **Actions** para consultar os logs e baixar os artefatos disponíveis. A existência do workflow não significa que a execução mais recente foi aprovada.

## Auditoria das dependências

Com Node.js 24, execute:

```bash
npm run audit:dependencies
```

A CI executa essa auditoria antes dos testes e falha quando o npm identifica vulnerabilidades de gravidade baixa ou superior. A consulta depende da disponibilidade do registro npm.

O projeto atualiza Cucumber e Mochawesome e utiliza `overrides` para `glob` 14 e `minimatch` 11, pois as versões solicitadas por dependências indiretas ainda recebem alertas. Esses ajustes atravessam versões principais e devem ser reavaliados quando os pacotes de origem incorporarem as correções. As mudanças precisam passar pelos cenários E2E e pela geração dos relatórios.

## Estrutura do repositório

```text
.github/workflows/cypress.yml
cypress/
  e2e/
    features/           # 7 arquivos Gherkin
    step_definitions/   # Implementação dos passos e hooks
  pages/                # Page Objects
  support/              # Comandos, dados fictícios e estado dos testes
cypress.config.js
package.json
package-lock.json
README.md
SOBRE_O_PROJETO.md
```

## Escopo e continuidade

A suíte depende de um site público externo: alterações de páginas, anúncios, lentidão ou indisponibilidade podem afetar os resultados. O checkout utiliza dados fictícios em ambiente de demonstração; não há validação de pagamento real.

Possíveis evoluções incluem ampliar os cenários negativos, verificar os produtos retornados pelos filtros além dos títulos e investigar falhas recorrentes a partir dos logs e relatórios.

O projeto de [testes manuais do Automation Exercise](https://github.com/Jefferson-Andrade/qa-automation-exercise) apresenta outra parte do portfólio. Os 12 cenários automatizados não representam a automação integral dos 42 casos manuais.

## Autor

**Jefferson Andrade Coelho**  
Estudante de Análise e Desenvolvimento de Sistemas na UNINTER.
