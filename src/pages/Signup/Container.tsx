import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
// State
import { useAppDispatch } from '../../state/store';
import { fetchUser } from '../../state/slices/userSlice';
// Services
import useAxios, { RequestTypes } from '../../services/useAxios';
import { userSignup } from '../../services/userSignup';
// Utils
import { setAuthCookies } from '../../utils/setAuthCookies';
// Components
import { Signup } from './index';
// Words
import { words } from './words';

export const SignupContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [signupErrorMessage, setSignupErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      setPasswordErrorMessage(words.invalidPassword);
    }
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await userSignup({
      email,
      username: email,
      password,
    });

    if (response.status === 200 && response.data) {
      setAuthCookies(response.data);
      dispatch(fetchUser());
      history.push('/');
    } else {
      setSignupErrorMessage(words.signupErrorMessage);
      setIsLoading(false);
    }
  };

  return (
    <Signup
      email={email}
      password={password}
      signupErrorMessage={signupErrorMessage}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onEmailBlur={onEmailBlur}
      onPasswordBlur={onPasswordBlur}
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
    />
  );
};
