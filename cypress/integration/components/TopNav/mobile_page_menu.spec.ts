import { QuerySelectors } from '../../../../src/components/TopNav/testIds';
import { EMAIL, PASSWORD } from '../../../../src/constants/credentials';

const {
  pageMenu,
  loginMenuItem,
  libraryMenuItem,
  storeMenuItem,
  signupMenuItem,
} = QuerySelectors;

describe('TopNav PageMenu', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
  });

  describe('User logged in', () => {
    beforeEach(() => {
      cy.login(EMAIL, PASSWORD);
      cy.getBySelector(pageMenu).click();
    });

    it('should redirect to library after clicking library menu', () => {
      cy.getBySelector(libraryMenuItem).click();
      cy.url().should('contain', '/library');
    });
  });

  describe('User not logged in', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.getBySelector(pageMenu).click();
    });
    it('should redirect to store after clicking store menu', () => {
      cy.getBySelector(storeMenuItem).click();
      cy.url().should('contain', '/store');
    });

    it('should redirect to login page after clicking login menu', () => {
      cy.getBySelector(loginMenuItem).click();
      cy.url().should('contain', '/login');
    });

    it('should redirect to signup page after clicking signup menu', () => {
      cy.getBySelector(signupMenuItem).click();
      cy.url().should('contain', '/signup');
    });
  });
});
