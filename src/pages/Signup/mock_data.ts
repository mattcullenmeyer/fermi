import { SignupProps } from './index';
import { EMAIL, PASSWORD, USERNAME } from '../../constants/credentials';

export const defaultProps: SignupProps = {
  email: '',
  username: '',
  password: '',
  signupErrorMessage: '',
  emailErrorMessage: '',
  usernameErrorMessage: '',
  passwordErrorMessage: '',
  onEmailChange: () => {},
  onUsernameChange: () => {},
  onPasswordChange: () => {},
  onEmailBlur: () => {},
  onUsernameBlur: () => {},
  onPasswordBlur: () => {},
  onFormSubmit: () => {},
  isLoading: false,
  isSignupSuccess: false,
};

export const populatedProps: SignupProps = {
  ...defaultProps,
  email: EMAIL,
  username: USERNAME,
  password: PASSWORD,
};
