import React, { useState } from 'react';
// Components
import { Login } from './index';
// State
import { useAppDispatch } from '../../state/store';
import { fetchUser } from '../../state/slices/userSlice';
// Services
import { userLogin } from '../../services/userLogin';
// Utils
import { setAuthCookies } from '../../utils/setAuthCookies';

export const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onEmailChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const response = await userLogin({
      email,
      username: email,
      password,
    });
    
    if (response.status === 200 && response.data) {
      setAuthCookies(response.data);
      dispatch(fetchUser());
    } else {
      setErrorMessage('Your email address or password is invalid.');
    }
  };

  return (
    <Login 
      email={email}
      password={password}
      errorMessage={errorMessage}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onFormSubmit={onFormSubmit}
    />
  );
};
