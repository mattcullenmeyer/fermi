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
// State
import { useAppDispatch } from '../../state/store';
import { fetchUser } from '../../state/slices/userSlice';
// Services
import useAxios, { RequestTypes } from '../../services/useAxios';
import { userSignup } from '../../services/userSignup';
// Utils
import { setAuthCookies } from '../../utils/setAuthCookies';
// Words
import { words } from './words';

export const Signup: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const onEmailChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailErrorMessage('');
  };

  const onPasswordChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordErrorMessage('');
  };

  const onEmailBlur = async () => {
    if (!isEmail(email)) {
      setEmailErrorMessage(words.invalidEmail);
      return;
    }

    const response = await useAxios({
      path: `signup/email/${email}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200) {
      setEmailErrorMessage(words.emailUnavailable);
    }
  };

  const onPasswordBlur = () => {
    if (password.length < 10) {
      setPasswordErrorMessage(words.invalidPassword)
    }
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const response = await userSignup({
      email,
      username: email,
      password,
    });

    if (response.status === 200 && response.data) {
      setAuthCookies(response.data);
      dispatch(fetchUser());
    } else {
      console.error('Failed to sign up user.');
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
          {words.header}
        </Typography>
        <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ mt: 1 }}>
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
            onBlur={onEmailBlur}
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
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
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