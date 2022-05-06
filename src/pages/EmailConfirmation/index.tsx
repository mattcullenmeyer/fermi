import React from 'react';
import { Loader } from '../../components/Loader';
import { NetworkRequestStatus } from './Container';
import { ConfirmEmail } from './components/ConfirmEmail';
import { ExpiredLink } from './components/ExpiredLink';

export interface EmailConfirmationProps {
  isInitialLoading: boolean;
  isExpiredLink: boolean;
  isButtonLoading: boolean;
  networkRequestStatus: NetworkRequestStatus;
  emailAddress: string;
  onClickConfirmEmail: () => void;
  onClickResendEmail: () => void;
}

export const EmailConfirmation: React.FC<EmailConfirmationProps> = ({
  isInitialLoading,
  isExpiredLink,
  isButtonLoading,
  networkRequestStatus,
  emailAddress,
  onClickConfirmEmail,
  onClickResendEmail,
}) => {
  if (isInitialLoading) {
    return <Loader />;
  }

  if (isExpiredLink) {
    return (
      <ExpiredLink
        isButtonLoading={isButtonLoading}
        networkRequestStatus={networkRequestStatus}
        emailAddress={emailAddress}
        onClickResendEmail={onClickResendEmail}
      />
    );
  }

  return (
    <ConfirmEmail
      isButtonLoading={isButtonLoading}
      networkRequestStatus={networkRequestStatus}
      emailAddress={emailAddress}
      onClickConfirmEmail={onClickConfirmEmail}
    />
  );
};
