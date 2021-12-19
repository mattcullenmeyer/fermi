import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography,
  TextField,
  Button
} from '@mui/material';
import useAxios, { RequestTypes } from '../../services/useAxios';

export const Registration: React.FC = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');

  const handleOnEmailBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const email = event.target.value;

    const response = await useAxios({
      path: `api/v1/signup/email/${email}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200) {
      setEmailErrorMessage('Email already exists');
    }
  }

  const handleOnEmailChange = () => {
    setEmailErrorMessage('');
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    
    const response = await useAxios({
      path: 'dj-rest-auth/registration',
      method: RequestTypes.Post,
      data: {
        email,
        username: email,
        password1: password,
        password2: password,
      },
    });
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
          Register
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
            onChange={handleOnEmailChange}
            onBlur={handleOnEmailBlur}
            error={emailErrorMessage ? true : false}
            helperText={emailErrorMessage}
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
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};