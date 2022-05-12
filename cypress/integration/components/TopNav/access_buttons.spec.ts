import { QuerySelectors } from '../../../../src/pages/Login/testSelectors';
import { words } from '../../../../src/components/TopNav/words';
import { EMAIL, PASSWORD } from '../../../../src/constants/credentials';

const { emailTextField, passwordTextField } = QuerySelectors;
const somePage = '/some/page';

describe('TopNav AccessButtons', () => {
  // AccessButtons are only displayed when user is not logged in
  beforeEach(() => {
    cy.visit(somePage);
  });
  it('should redirect to original page after logging in', () => {
    cy.get('button').contains(words.pages.logIn).click();

    cy.getBySelector(emailTextField).type(EMAIL);
    cy.getBySelector(passwordTextField).type(PASSWORD);
    cy.get('button[type=submit]').click();

    cy.url().should('contain', somePage);
  });

  it('should navigate to signup page on clicking Sign Up button', () => {
    cy.get('button').contains(words.pages.signUp).click();
    cy.url().should('contain', '/signup');
  });
});
