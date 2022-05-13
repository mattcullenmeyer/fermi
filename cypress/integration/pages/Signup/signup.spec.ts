import {
  EMAIL,
  PASSWORD,
  USERNAME,
} from '../../../../src/constants/credentials';
import { QuerySelectors } from '../../../../src/pages/Signup/testSelectors';

const { emailTextField, usernameTextField, passwordTextField } = QuerySelectors;

describe('Signup', () => {
  const signupPage = '/signup';

  it('should redirect to store page after signing up successfully', () => {
    cy.visit(signupPage);

    cy.intercept('GET', '**/signup/email/*', {
      statusCode: 404,
    });
    cy.intercept('GET', '**/signup/username/*', {
      statusCode: 404,
    });

    cy.getBySelector(emailTextField).type(EMAIL);
    cy.getBySelector(usernameTextField).type(USERNAME);
    cy.getBySelector(passwordTextField).type(PASSWORD);

    cy.intercept('POST', '**/signup', {
      statusCode: 201,
      body: {
        access_token: 'some_access_token',
        refresh_token: 'some_refresh_token',
      },
    });

    cy.get('button[type=submit]').click();

    // cy.url().should('equal', `${Cypress.config().baseUrl}/`);
    cy.url().should('contain', '/store');
  });
});
