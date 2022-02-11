describe('Login', () => {
  const loginPage = '/login';

  it('should redirect to home page after logging in successfully', () => {
    cy.visit(loginPage);

    cy.get('[data-testid="emailTextField"]').type('bob@email.com');
    cy.get('[data-testid="passwordTextField"]').type('testing123456789');

    cy.get('button[type=submit]').click();

    cy.url().should('equal', Cypress.config().baseUrl);
  });
});
