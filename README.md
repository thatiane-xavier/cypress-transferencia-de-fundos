# Automação com Cypress - Transferência de Fundos

Este projeto demonstra testes automatizados usando Cypress para realizar transferências de fundos em um site bancário. Ele abrange os seguintes cenários:

- Login com credenciais de usuário.
- Realização de 3 transações de transferência com valores aleatórios.
- Aplicação de um filtro para visualizar transações recentes.
- Verificação de que as transferências aparecem na lista de transações.
- Salvando incrementalmente as transações em um arquivo JSON.

## Ferramentas Utilizadas

- Cypress: Um framework de teste de ponta a ponta moderno.
- Moment Timezone: Uma biblioteca para lidar com fusos horários.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter as seguintes dependências instaladas:

- Node.js: Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório em sua máquina local:
    ```
    git clone https://github.com/thatiane-xavier/cypress-transferencia-de-fundos.git
    ```

2. Navegue até o diretório do projeto:

    ```
    cd cypress-transferencia-de-fundos
    ```

3. Instale as dependências do projeto:

    ```
    npm install
    ```


## Executando os Testes

Os testes no Cypress podem ser executados em dois modos:

### Modo Interativo (GUI)

Para abrir o runner de testes do Cypress no modo interativo, use o seguinte comando:

    npx cypress open

Selecione "E2E Testing", depois selecione o navegador e, posteriormente selecione o arquivo .spec.cy.js para executá-lo.

### Modo Headless (Linha de Comando)

Para executar os testes no modo headless (linha de comando), use o seguinte comando:

    npx cypress run --browser chrome

O argumento "browser" pode ser definido como 'chrome', 'chromium', 'edge', 'electron' ou 'firefox' para iniciar um navegador detectado em seu sistema.

## Arquivos de Teste

Os cenários de teste são definidos em arquivos localizados no diretório `cypress/e2e`.

## Comandos Cypress Personalizados

Este projeto define comandos Cypress personalizados em `cypress/support/commands.js` para facilitar a automação dos testes. Esses comandos incluem:

- `cy.login()`: Faz login com o nome de usuário e senha.
- `cy.makeTransfer(fromAccount, toAccount, amount)`: Realiza uma transferência com as contas e o valor especificados.

## Autora

Thatiane Xavier


