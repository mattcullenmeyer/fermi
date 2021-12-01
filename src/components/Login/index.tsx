import React from 'react';
import { 
  Container, 
  Box, 
  Typography,
  TextField,
  Button
} from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FERMI_AUTH_TOKEN } from '../../constants';

export const Login: React.FC = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    
    interface Login {
      key: string;
    }

    const response = await axios.post<Login>(
      'http://127.0.0.1:8000/dj-rest-auth/login/',
      {
        email,
        username: email,
        password,
      },
    );

    Cookies.set(FERMI_AUTH_TOKEN, response.data.key, { secure: true, sameSite: 'lax' });
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