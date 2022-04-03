import React, { FocusEvent, FormEvent } from 'react';
// Components
import { Box } from '@mui/material';
import { SignupHeading } from './components/SignupHeading';
import { SignupForm } from './components/SignupForm';
import { SignupPromo } from './components/SignupPromo';
// Other
import './index.scss';

export interface SignupProps {
  email: string;
  password: string;
  signupErrorMessage: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  onEmailChange: (event: FocusEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: FocusEvent<HTMLInputElement>) => void;
  onEmailBlur: () => void;
  onPasswordBlur: () => void;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const Signup: React.FC<SignupProps> = ({
  email,
  password,
  signupErrorMessage,
  emailErrorMessage,
  passwordErrorMessage,
  onEmailChange,
  onPasswordChange,
  onEmailBlur,
  onPasswordBlur,
  onFormSubmit,
  isLoading,
}) => {
  return (
    <Box className="signup-container">
      <Box className="signup-form-container">
        <Box className="signup-form">
          <SignupHeading />
          <SignupForm
            email={email}
            password={password}
            signupErrorMessage={signupErrorMessage}
            emailErrorMessage={emailErrorMessage}
            passwordErrorMessage={passwordErrorMessage}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            onEmailBlur={onEmailBlur}
            onPasswordBlur={onPasswordBlur}
            onFormSubmit={onFormSubmit}
            isLoading={isLoading}
          />
        </Box>
      </Box>
      <Box className="signup-divider"></Box>
      <Box className="signup-promo-container">
        <Box className="signup-promo">
          <SignupPromo />
        </Box>
      </Box>
    </Box>
  );
};
