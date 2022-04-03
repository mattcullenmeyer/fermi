import React from 'react';
// Components
import { Box, TextField, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { SignupProps } from '..';
// Other
import { words } from '../words';

export const SignupForm: React.FC<SignupProps> = ({
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
    <Box component="form" onSubmit={onFormSubmit} noValidate>
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
      <Box display="flex" justifyContent="center">
        <LoadingButton
          type="submit"
          variant="contained"
          sx={{ mt: 4, pt: 1, pr: 7, pb: 1, pl: 7 }}
          size="large"
          disabled={emailErrorMessage || passwordErrorMessage ? true : false}
          loading={isLoading}
        >
          {words.createAccount}
        </LoadingButton>
      </Box>
    </Box>
  );
};
