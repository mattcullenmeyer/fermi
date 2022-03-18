import { LoginProps } from './index';
import { EMAIL, PASSWORD } from '../../constants/credentials';

export const defaultProps: LoginProps = {
  email: '',
  password: '',
  errorMessage: '',
  onEmailChange: () => {},
  onPasswordChange: () => {},
  onFormSubmit: () => {},
  isLoading: false,
};

export const populatedProps: LoginProps = {
  ...defaultProps,
  email: EMAIL,
  password: PASSWORD,
};
