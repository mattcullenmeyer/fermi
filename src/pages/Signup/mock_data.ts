import { SignupProps } from './index';
import { EMAIL, PASSWORD } from '../../constants/credentials';

export const defaultProps: SignupProps = {
  email: '',
  password: '',
  signupErrorMessage: '',
  emailErrorMessage: '',
  passwordErrorMessage: '',
  onEmailChange: () => {},
  onPasswordChange: () => {},
  onEmailBlur: () => {},
  onPasswordBlur: () => {},
  onFormSubmit: () => {},
  isLoading: false,
};

export const populatedProps: SignupProps = {
  ...defaultProps,
  email: EMAIL,
  password: PASSWORD,
};
