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
  username: string;
  password: string;
  signupErrorMessage: string;
  emailErrorMessage: string;
  usernameErrorMessage: string;
  passwordErrorMessage: string;
  onEmailChange: (event: FocusEvent<HTMLInputElement>) => void;
  onUsernameChange: (event: FocusEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: FocusEvent<HTMLInputElement>) => void;
  onEmailBlur: () => void;
  onUsernameBlur: () => void;
  onPasswordBlur: () => void;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const Signup: React.FC<SignupProps> = ({
  email,
  username,
  password,
  signupErrorMessage,
  emailErrorMessage,
  usernameErrorMessage,
  passwordErrorMessage,
  onEmailChange,
  onUsernameChange,
  onPasswordChange,
  onEmailBlur,
  onUsernameBlur,
  onPasswordBlur,
  onFormSubmit,
  isLoading,
}) => {
  return (
    <Box className="signup-container">
      <Box
        className="signup-form-container"
        style={{ marginBottom: signupErrorMessage ? '50px' : '' }}
      >
        <Box className="signup-form">
          <SignupHeading />
          <SignupForm
            email={email}
            username={username}
            password={password}
            signupErrorMessage={signupErrorMessage}
            emailErrorMessage={emailErrorMessage}
            usernameErrorMessage={usernameErrorMessage}
            passwordErrorMessage={passwordErrorMessage}
            onEmailChange={onEmailChange}
            onUsernameChange={onUsernameChange}
            onPasswordChange={onPasswordChange}
            onEmailBlur={onEmailBlur}
            onUsernameBlur={onUsernameBlur}
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
