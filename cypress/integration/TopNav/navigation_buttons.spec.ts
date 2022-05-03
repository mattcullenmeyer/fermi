import { QuerySelectors } from '../../../src/components/TopNav/testIds';
import { EMAIL, PASSWORD } from '../../../src/constants/credentials';

const { libraryLink, storeLink } = QuerySelectors;

describe('TopNav NavigationButtons', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to library after clicking library link if logged in', () => {
    cy.login(EMAIL, PASSWORD);
    cy.getBySelector(libraryLink).click();
    cy.url().should('contain', '/library');
  });

  it('should redirect to store after clicking store link', () => {
    cy.getBySelector(storeLink).click();
    cy.url().should('contain', '/store');
  });
});
