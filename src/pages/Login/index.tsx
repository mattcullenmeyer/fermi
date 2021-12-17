import React from 'react';
import Cookies from 'js-cookie';
// Components
import { 
  Container, 
  Box, 
  Typography,
  TextField,
  Button
} from '@mui/material';
// State
import { useAppDispatch } from '../../state/store';
import { fetchUser } from '../../state/slices/userSlice';
// Services
import useAxios, { RequestTypes } from '../../services/useAxios';
// Constants
import { FERMI_ACCESS_TOKEN, FERMI_REFRESH_TOKEN } from '../../constants/cookies';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    interface Login {
      access_token: string;
      refresh_token: string;
    }
    
    const response = await useAxios<Login>({
      path: 'dj-rest-auth/login',
      method: RequestTypes.Post,
      data: {
        email,
        username: email,
        password,
      },
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

      dispatch(fetchUser(fermiAccessToken));
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};