import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [signupErrorMessage, setSignupErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const onEmailChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailErrorMessage('');
  };

  const onUsernameChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setUsernameErrorMessage('');
  };

  const onPasswordChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordErrorMessage('');
  };

  const onEmailBlur = async () => {
    if (email !== '' && !validator.isEmail(email)) {
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

  const onUsernameBlur = async () => {
    if (username !== '' && username.length < 3) {
      setUsernameErrorMessage(words.invalidUsername);
      return;
    }

    const response = await useAxios({
      path: `signup/username/${username}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200) {
      setUsernameErrorMessage(words.usernameUnavailable);
    }
  };

  const onPasswordBlur = () => {
    if (
      password !== '' &&
      !validator.isStrongPassword(password, {
        minLowercase: 0,
        minUppercase: 0,
      })
    ) {
      setPasswordErrorMessage(words.invalidPassword);
    }
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onEmailBlur();
    onUsernameBlur();
    onPasswordBlur();

    const isInvalidData =
      email === '' ||
      username === '' ||
      password === '' ||
      emailErrorMessage !== '' ||
      usernameErrorMessage !== '' ||
      passwordErrorMessage !== '';

    if (isInvalidData) {
      return;
    }

    setIsLoading(true);

    const response = await userSignup({
      email,
      username,
      password,
    });

    if (response.status === 201 && response.data) {
      setAuthCookies(response.data);
      dispatch(fetchUser());
      setIsLoading(false);
      setIsSignupSuccess(true);
    } else {
      setSignupErrorMessage(words.signupErrorMessage);
      setIsLoading(false);
    }
  };

  return (
    <Signup
      email={email}
      username={username}
      password={password}
      signupErrorMessage={signupErrorMessage}
      emailErrorMessage={emailErrorMessage}
      usernameErrorMessage={usernameErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      onEmailChange={onEmailChange}
      onUsernameChange={onUsernameChange}
      onPasswordChange={onPasswordChange}
      onEmailBlur={onEmailBlur}
      onUsernameBlur={onUsernameBlur}
      onPasswordBlur={onPasswordBlur}
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
      isSignupSuccess={isSignupSuccess}
    />
  );
};
