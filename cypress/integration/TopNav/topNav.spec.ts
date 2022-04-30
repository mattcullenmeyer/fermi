import { QuerySelectors } from './../../../src/components/TopNav/testIds';

const { pageMenu } = QuerySelectors;

describe('TopNav', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
    const homePage = '/';
    cy.visit(homePage);
  });

  it('should redirect to login page after clicking login menu', () => {
    cy.getBySelector(pageMenu).click();
  });
});
