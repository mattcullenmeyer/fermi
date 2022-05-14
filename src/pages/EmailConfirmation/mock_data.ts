import { EmailConfirmationProps } from '.';
import { EMAIL } from '../../constants/credentials';

export const defaultProps: EmailConfirmationProps = {
  isInitialLoading: false,
  isInitialLoadFailure: false,
  isExpiredLink: false,
  isButtonLoading: false,
  networkRequestStatus: 'unrequested',
  emailAddress: EMAIL,
  onClickConfirmEmail: () => {},
  onClickResendEmail: () => {},
  isLoggedIn: true,
};
