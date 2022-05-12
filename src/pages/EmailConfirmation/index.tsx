import React from 'react';
import { PageLoader } from '../../components/PageLoader';
import { NetworkRequestStatus } from './Container';
import { ConfirmEmail } from './components/ConfirmEmail';
import { ExpiredLink } from './components/ExpiredLink';
import { ErrorCard } from '../../components/ErrorCard';
import { words } from './words';

const { initialLoadFailure } = words;

export interface EmailConfirmationProps {
  isInitialLoading: boolean;
  isInitialLoadFailure: boolean;
  isExpiredLink: boolean;
  isButtonLoading: boolean;
  networkRequestStatus: NetworkRequestStatus;
  emailAddress: string;
  onClickConfirmEmail: () => void;
  onClickResendEmail: () => void;
}

export const EmailConfirmation: React.FC<EmailConfirmationProps> = ({
  isInitialLoading,
  isInitialLoadFailure,
  isExpiredLink,
  isButtonLoading,
  networkRequestStatus,
  emailAddress,
  onClickConfirmEmail,
  onClickResendEmail,
}) => {
  if (isInitialLoading) {
    return <PageLoader />;
  }

  if (isInitialLoadFailure) {
    return <ErrorCard description={initialLoadFailure.description} />;
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
