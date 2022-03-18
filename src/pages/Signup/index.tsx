import React, { FocusEvent, FormEvent } from 'react';
// Components
import { Container, Box, Typography, TextField, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// Words
import { words } from './words';

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
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {words.header}
        </Typography>
        <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ mt: 1 }}>
          {signupErrorMessage && (
            <Alert severity="error" sx={{ mt: 2, mb: 1 }}>
              {signupErrorMessage}
            </Alert>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
            error={emailErrorMessage ? true : false}
            helperText={emailErrorMessage}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
            error={passwordErrorMessage ? true : false}
            helperText={passwordErrorMessage}
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={emailErrorMessage || passwordErrorMessage ? true : false}
            loading={isLoading}
          >
            {words.createAccount}
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};
