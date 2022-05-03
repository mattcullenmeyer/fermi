// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    getBySelector(selector: string): Chainable;
    login(email: string, password: string): Chainable;
  }
}

Cypress.Commands.add('getBySelector', (selector, ...args) =>
  cy.get(`[data-testid=${selector}]`, ...args)
);

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-testid=emailTextField]').type(email);
  cy.get('[data-testid=passwordTextField]').type(password);
  cy.get('button[type=submit').click();
  cy.url().should('contain', '/store');
});
