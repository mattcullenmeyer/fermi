import React from 'react';

export const words = {
  confirmEmail: {
    heading: 'Confirm your email address',
    description: (emailAddress: string) => {
      return (
        <>
          Please click the button below to confirm that{' '}
          <span style={{ fontWeight: 'bold' }}>{emailAddress}</span> is your
          email address.
        </>
      );
    },
    button: 'Confirm Email',
    successMessage: 'Your email was verified successfully!',
    failureMessage:
      'Sorry, we were unable to verify your email. Please try again later.',
  },
  expiredLink: {
    heading: 'Verification link expired',
    description: (emailAddress: string) => {
      return (
        <>
          The verification link for{' '}
          <span style={{ fontWeight: 'bold' }}>{emailAddress}</span> has
          expired. Not to worry, we can send another.
        </>
      );
    },
    resendButton: 'Resend Confirmation Email',
    successMessage: 'Your confirmation email was resent successfully.',
    failureMessage:
      'Sorry, we were unable to resend a confirmation email. Please try again later.',
    loginMessage: 'You must be logged in to resend.',
    loginButton: 'Log In',
  },
  initialLoadFailure: {
    description:
      'This email verification link does not exist or something went wrong.',
  },
};
