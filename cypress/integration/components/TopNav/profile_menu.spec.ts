import { QuerySelectors } from '../../../../src/components/TopNav/testSelectors';
import { EMAIL, PASSWORD } from '../../../../src/constants/credentials';

const { profileMenu, profileMenuItem, logoutMenuItem } = QuerySelectors;

describe('TopNav ProfileMenu', () => {
  // ProfileMenu is only displayed when user is logged in
  beforeEach(() => {
    cy.login(EMAIL, PASSWORD);
    cy.getBySelector(profileMenu).click();
  });

  it('should redirect to profile page after clicking profile menu item', () => {
    cy.getBySelector(profileMenuItem).click();
    cy.url().should('contain', '/profile');
  });

  it('should redirect to login page after clicking logout menu item', () => {
    cy.getBySelector(logoutMenuItem).click();
    cy.url().should('contain', '/login');
  });
});
