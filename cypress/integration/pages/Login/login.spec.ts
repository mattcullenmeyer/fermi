import { EMAIL, PASSWORD } from '../../../../src/constants/credentials';
import { QuerySelectors } from '../../../../src/pages/Login/testIds';

const { emailTextField, passwordTextField } = QuerySelectors;

describe('Login', () => {
  const loginPage = '/login';

  it('should redirect to home page after logging in successfully', () => {
    cy.visit(loginPage);

    cy.getBySelector(emailTextField).type(EMAIL);
    cy.getBySelector(passwordTextField).type(PASSWORD);

    cy.get('button[type=submit]').click();

    // cy.url().should('equal', `${Cypress.config().baseUrl}/`);
    cy.url().should('contain', '/store');
  });
});
