import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Components
import { Box, Typography, TextField, Alert, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { LoginHeading } from '../../components/LogoHeading';
// Words
import { words } from './words';

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
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          paddingRight: '25px',
          paddingLeft: '25px',
          height: '350px',
          borderRight: '1px solid lightgray',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
          }}
        >
          <Box sx={{ marginBottom: 4 }}>
            <Typography component="h1" variant="h4" sx={{ fontWeight: '600' }}>
              {words.heading}
            </Typography>
            <Box sx={{ display: 'flex', marginTop: 1 }}>
              <Typography sx={{ marginRight: 0.5, color: 'slategray' }}>
                {words.noAccount}
              </Typography>
              <Link component={RouterLink} to="/signup" variant="body1">
                {words.signUp}
              </Link>
            </Box>
          </Box>
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
            <Box
              sx={{ display: 'flex', justifyContent: 'right', marginTop: 1 }}
            >
              <Link
                component={RouterLink}
                to="#"
                underline="hover"
                variant="body1"
                sx={{ color: 'slategray' }}
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
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '50%',
          padding: '25px',
        }}
      >
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
          }}
        >
          <Typography component="div" variant="h4" sx={{ fontWeight: '600' }}>
            {words.welcomeBack}
          </Typography>
          <LoginHeading variant="h4" />
          <Typography
            component="div"
            variant="h6"
            sx={{ mt: 2, color: 'slategray' }}
          >
            {words.pleaseLogin}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
