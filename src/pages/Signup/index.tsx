import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
// Components
import { 
  Container, 
  Box, 
  Typography,
  TextField,
  Button
} from '@mui/material';
// Services
import useAxios, { RequestTypes } from '../../services/useAxios';
import { userSignup } from '../../services/userSignup';
// Words
import { words } from './words';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleOnEmailChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailErrorMessage('');
  }

  const handleOnPasswordChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordErrorMessage('');
  }

  const handleOnEmailBlur = async () => {
    if (!isEmail(email)) {
      setEmailErrorMessage(words.invalidEmail);
      return;
    }

    const response = await useAxios({
      path: `api/v1/signup/email/${email}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200) {
      setEmailErrorMessage(words.emailUnavailable);
    }
  }

  const handleOnPasswordBlur = () => {
    if (password.length < 10) {
      setPasswordErrorMessage(words.invalidPassword)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const response = await userSignup({
      email,
      username: email,
      password,
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
          {words.header}
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
            value={email}
            onChange={handleOnEmailChange}
            onBlur={handleOnEmailBlur}
            error={emailErrorMessage ? true : false}
            helperText={emailErrorMessage}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handleOnPasswordChange}
            onBlur={handleOnPasswordBlur}
            error={passwordErrorMessage ? true : false}
            helperText={passwordErrorMessage}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={emailErrorMessage || passwordErrorMessage ? true : false}
          >
            {words.createAccount}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;