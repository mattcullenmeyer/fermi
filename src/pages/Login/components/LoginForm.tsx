import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Components
import { Box, TextField, Alert, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { LoginProps } from '..';
// Other
import { words } from '../words';

export const LoginForm: React.FC<LoginProps> = ({
  email,
  password,
  errorMessage,
  onEmailChange,
  onPasswordChange,
  onFormSubmit,
  isLoading,
}) => {
  return (
    <Box component="form" onSubmit={onFormSubmit} noValidate>
      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2, mb: 1 }}>
          {errorMessage}
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
        inputProps={{
          'data-testid': 'emailTextField',
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
        inputProps={{
          'data-testid': 'passwordTextField',
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 1 }}>
        <Link
          component={RouterLink}
          to="#" // TODO: Add link to change password page
          underline="hover"
          variant="body1"
        >
          {words.forgotPassword}
        </Link>
      </Box>
      <Box display="flex" justifyContent="center">
        <LoadingButton
          type="submit"
          variant="contained"
          sx={{ mt: 4, pt: 1, pr: 7, pb: 1, pl: 7 }}
          size="large"
          loading={isLoading}
        >
          {words.loginButton}
        </LoadingButton>
      </Box>
    </Box>
  );
};
