import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Components
import { Box, Typography, TextField, Alert, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// Words
import { words } from './words';

const { heading, loginButton, forgotPassword, welcomeBack, pleaseLogin } =
  words;

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
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          justifyContent: 'center',
          width: '50%',
          padding: '25px',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <DoubleArrowIcon fontSize="large" color="primary" />
            <Typography component="h1" variant="h4" sx={{ fontWeight: '600' }}>
              {heading}
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={onFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <Box
              sx={{ display: 'flex', justifyContent: 'right', marginTop: 1 }}
            >
              <Link
                component={RouterLink}
                to="#"
                underline="hover"
                variant="body1"
                sx={{ color: 'gray' }}
              >
                {forgotPassword}
              </Link>
            </Box>
            <Box display="flex" justifyContent="center">
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 3, pt: 1, pr: 7, pb: 1, pl: 7 }}
                size="large"
                loading={isLoading}
              >
                {loginButton}
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '50%',
          backgroundColor: '#1976d2',
          height: '100vh',
          padding: '25px',
        }}
      >
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{ fontWeight: '600' }}
            color="white"
          >
            {welcomeBack}
          </Typography>
          <Typography variant="h6" color="white">
            {pleaseLogin}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
