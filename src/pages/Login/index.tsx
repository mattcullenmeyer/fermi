import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Components
import { Box, Typography, TextField, Alert, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { LoginHeading } from '../../components/LogoHeading';
// Other
import './index.scss';
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
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '25px',
          paddingLeft: '25px',
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
              <Typography sx={{ marginRight: 0.5, fontWeight: '300' }}>
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
                sx={{ color: 'black', fontWeight: '300' }}
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
        className="divider"
        sx={{
          width: '1px',
          height: '350px',
          borderRight: '1px solid lightgray',
          marginTop: 10,
        }}
      ></Box>
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
          paddingRight: '25px',
          paddingLeft: '25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '400px',
          }}
        >
          <Typography
            component="div"
            variant="h4"
            sx={{ fontWeight: '400', fontSize: '2.5rem' }}
          >
            {words.welcomeBack}
          </Typography>
          <LoginHeading variant="h4" fontWeight="400" fontSize="2.5rem" />
          <Typography
            component="div"
            variant="h6"
            sx={{ mt: 2, fontWeight: '300' }}
          >
            {words.pleaseLogin}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
