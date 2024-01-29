Cypress.Commands.add('login', () => {
    cy.visit('/transfer.jsp');
    cy.get("#uid").type('jsmith');
    cy.get("#passw").type('Demo1234');
    cy.get('#login').submit();
    cy.url().should('include', '/main')
  });
  
  Cypress.Commands.add('makeTransfer', (fromAccount, toAccount, amount) => {
      cy.get("#MenuHyperLink3").click();
      cy.get("#fromAccount").select(fromAccount);
      cy.get("#toAccount").select(toAccount);
      cy.get("#transferAmount").type(amount);
      cy.get('#tForm').submit();
      cy.get('#_ctl0__ctl0_Content_Main_postResp').should('contain', 'was successfully transferred');
  });
