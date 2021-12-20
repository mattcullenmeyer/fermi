import React, { useState } from 'react';
import Cookies from 'js-cookie';
// Components
import { 
  Container, 
  Box, 
  Typography,
  TextField,
  Button,
  Alert
} from '@mui/material';
// State
import { useAppDispatch } from '../../state/store';
import { fetchUser } from '../../state/slices/userSlice';
// Services
import { userLogin } from '../../services/userLogin';
// Constants
import { FERMI_ACCESS_TOKEN, FERMI_REFRESH_TOKEN } from '../../constants/cookies';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onEmailChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const onPasswordChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const response = await userLogin({
      email,
      username: email,
      password,
    });
    
    if (response.status === 200 && response.data) {
      const fermiAccessToken = response.data.access_token;
      const fermiRefreshToken = response.data.refresh_token;
      
      // token expirations must align with backend
      Cookies.set(FERMI_ACCESS_TOKEN, fermiAccessToken, { 
        expires: 7,
        sameSite: 'Lax', 
        secure: true,
      });
      Cookies.set(FERMI_REFRESH_TOKEN, fermiRefreshToken, {
        expires: 14,
        sameSite: 'Lax', 
        secure: true,
      });

      dispatch(fetchUser());
    } else {
      setErrorMessage('Your email address or password is invalid.')
    }
  };

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
          Log In
        </Typography>
        <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ mt: 1 }}>
          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2, mb: 1 }}>{errorMessage}</Alert>
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
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};