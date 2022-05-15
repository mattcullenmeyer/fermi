import React from 'react';
// Components
import { Box, TextField, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { SignupProps } from '..';
// Other
import { words } from '../words';
import { WriteSelectors } from '../testSelectors';

type SignupFormProps = Omit<SignupProps, 'isSignupSuccess'>;

export const SignupForm: React.FC<SignupFormProps> = ({
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
  const isButtonDisabled =
    email === '' ||
    username === '' ||
    password === '' ||
    emailErrorMessage !== '' ||
    usernameErrorMessage !== '' ||
    passwordErrorMessage !== '';

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
        autoFocus
        value={email}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        error={emailErrorMessage ? true : false}
        helperText={emailErrorMessage}
        {...WriteSelectors.emailTextField}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        value={username}
        onChange={onUsernameChange}
        onBlur={onUsernameBlur}
        error={usernameErrorMessage ? true : false}
        helperText={usernameErrorMessage}
        {...WriteSelectors.usernameTextField}
      />
      <TextField
        margin="normal"
        autoComplete="new-password"
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        error={passwordErrorMessage ? true : false}
        helperText={
          passwordErrorMessage
            ? passwordErrorMessage
            : words.passwordRequirement
        }
        {...WriteSelectors.passwordTextField}
      />
      <Box display="flex" justifyContent="center">
        <LoadingButton
          type="submit"
          variant="contained"
          sx={{ mt: 4, pt: 1, pr: 7, pb: 1, pl: 7 }}
          size="large"
          disabled={isButtonDisabled}
          loading={isLoading}
        >
          {words.createAccount}
        </LoadingButton>
      </Box>
    </Box>
  );
};
