import { EmailConfirmation } from '../../../../src/pages/EmailConfirmation/Container';
import { EMAIL } from '../../../../src/constants/credentials';
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

  it('if key is expired, should resend email confirmation on button click', () => {
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

    cy.contains(words.expiredLink.button).click();
    cy.contains(words.expiredLink.successMessage);
  });
});
