import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Components
import { Login } from './index';
// State
import { useAppDispatch } from '../../state/store';
import { fetchUser } from '../../state/slices/userSlice';
// Services
import { userLogin } from '../../services/userLogin';
// Words
import { words } from './words';
// Utils
import { setAuthCookies } from '../../utils/setAuthCookies';
import { getRedirectPath } from '../../utils/getRedirectPath';

export const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const redirectPath = getRedirectPath();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    const response = await userLogin({
      email,
      // username: email,
      password,
    });

    if (response.status === 200 && response.data) {
      setAuthCookies(response.data);
      dispatch(fetchUser());

      if (redirectPath && redirectPath !== '/login') {
        history.push(redirectPath);
      } else {
        history.push('/');
      }
    } else {
      setErrorMessage(words.errorMessage);
      setIsLoading(false);
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
      isLoading={isLoading}
    />
  );
};
