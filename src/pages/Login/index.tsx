import React from 'react';
// Components
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { words } from './words';

const { heading, loginButton } = words;

interface LoginProps {
  email: string;
  password: string;
  errorMessage: string;
  onEmailChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Login: React.FC<LoginProps> = ({
  email,
  password,
  errorMessage,
  onEmailChange,
  onPasswordChange,
  onFormSubmit,
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
          {heading}
        </Typography>
        <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ mt: 1 }}>
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loginButton}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
