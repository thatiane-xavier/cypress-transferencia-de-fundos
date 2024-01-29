const moment = require('moment-timezone');

describe('Realização de 3 transações de transferência, verificação e armazenamento', () => {

  beforeEach(() => {
    cy.login();
  });

  it('Verifica se ao realizar 3 transferências com valores aleatórios na seção "Transfer Funds", elas são corretamente listadas na seção "View Recent Transactions"', () => {
    
    const randomValues = Array.from({ length: 3 }, () => (Math.random() * 1000).toFixed(2));
    let currentTransactionsData = [];
    
    randomValues.forEach((value) => {
      cy.makeTransfer("800002", "800003", value)
    })

    const currentDate = moment().tz('America/Guatemala').format('YYYY-MM-DD'); //Fuso horário da apicação
    cy.get("#MenuHyperLink2").click();
    cy.get("#startDate").type(currentDate);
    cy.get("#endDate").type(currentDate);
    cy.get('#Form1').submit();

    cy.get("#_ctl0__ctl0_Content_Main_MyTransactions").find("tr").each(($row) => {
      const transactionID = $row.find("td:nth-child(1)").text();
      const transactionTime = $row.find("td:nth-child(2)").text();
      const transactionAmount = $row.find("td:nth-child(5)").text();

      randomValues.forEach((value) => {
        if (transactionAmount.includes(value)) {
          currentTransactionsData.push({
            transactionID: transactionID,
            transactionTime: transactionTime,
            transactionAmount: transactionAmount,
          });
        }
      });
    });

    cy.wrap(currentTransactionsData).should('have.lengthOf', 6); // 3 transações de saída e 3 transações de entrada
    
    cy.readFile('./cypress/jsons/transferencias.json').then((fileData) => {
      let transactions = fileData;
      transactions = [...currentTransactionsData, ...transactions];
      cy.writeFile('./cypress/jsons/transferencias.json', transactions);
    })
  })
  
})
