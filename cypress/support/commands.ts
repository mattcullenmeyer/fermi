// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    getBySelector(selector: string): Chainable;
  }
}

Cypress.Commands.add('getBySelector', (selector, ...args) =>
  cy.get(`[data-testid="${selector}"]`, ...args)
);
