import React from 'react';
// Components
import { Box } from '@mui/material';
import { LoginHeading } from './components/LoginHeading';
import { LoginForm } from './components/LoginForm';
import { LoginPromo } from './components/LoginPromo';
// Other
import './index.scss';

export interface LoginProps {
  email: string;
  password: string;
  errorMessage: string;
  onEmailChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const Login: React.FC<LoginProps> = ({
  email,
  password,
  errorMessage,
  onEmailChange,
  onPasswordChange,
  onFormSubmit,
  isLoading,
}) => {
  return (
    <Box className="login-container">
      <Box className="login-form-container">
        <Box className="login-form">
          <LoginHeading />
          <LoginForm
            email={email}
            password={password}
            errorMessage={errorMessage}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            onFormSubmit={onFormSubmit}
            isLoading={isLoading}
          />
        </Box>
      </Box>
      <Box className="login-divider"></Box>
      <Box className="login-promo-container">
        <Box className="login-promo">
          <LoginPromo />
        </Box>
      </Box>
    </Box>
  );
};
