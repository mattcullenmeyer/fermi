import { EmailConfirmation } from '../../../../src/pages/EmailConfirmation/Container';
import { EMAIL, PASSWORD } from '../../../../src/constants/credentials';
import { words } from '../../../../src/pages/EmailConfirmation/words';

describe('EmailConfirmation', () => {
  const confirmationKey = 'some_confirmation_key';
  const emailConfirmationPage = `/confirm-email/${confirmationKey}`;

  const emailConfrimationResponse: EmailConfirmation = {
    email_address: EMAIL,
    key_expired: false,
  };

  it('should get email address from key and confirm email on button click', () => {
    cy.intercept('GET', `**/email-confirmation/${confirmationKey}`, {
      statusCode: 200,
      body: emailConfrimationResponse,
    });

    cy.visit(emailConfirmationPage);
    cy.contains(EMAIL);

    cy.intercept('POST', '**/account-confirm-email', {
      statusCode: 200,
    });

    cy.contains(words.confirmEmail.button).click();
    cy.contains(words.confirmEmail.successMessage);
  });

  it('if logged in and key is expired, should resend email confirmation on clicking resend button', () => {
    cy.login(EMAIL, PASSWORD);

    cy.intercept('GET', `**/email-confirmation/${confirmationKey}`, {
      statusCode: 200,
      body: {
        ...emailConfrimationResponse,
        key_expired: true,
      },
    });

    cy.visit(emailConfirmationPage);
    cy.contains(EMAIL);

    cy.intercept('POST', '**/resend-email', {
      statusCode: 200,
    });

    cy.contains(words.expiredLink.resendButton).click();
    cy.contains(words.expiredLink.successMessage);
  });

  it('if not logged in and key is expired, should redirect to login page on clicking Log In button', () => {
    cy.intercept('GET', `**/email-confirmation/${confirmationKey}`, {
      statusCode: 200,
      body: {
        ...emailConfrimationResponse,
        key_expired: true,
      },
    });

    cy.visit(emailConfirmationPage);
    cy.contains(EMAIL);

    cy.intercept('POST', '**/resend-email', {
      statusCode: 200,
    });

    cy.contains(words.expiredLink.resendButton).should('be.disabled');
    cy.contains(words.expiredLink.loginButton).click();
    cy.url().should('contain', '/login');
  });
});
