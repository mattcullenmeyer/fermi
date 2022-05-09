import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmailConfirmation } from '.';
import useAxios, { RequestTypes } from '../../services/useAxios';

export type NetworkRequestStatus = 'unrequested' | 'success' | 'failure';

export const EmailConfirmationContainer: React.FC = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isInitialLoadFalure, setIsInitialLoadFailure] = useState(false);
  const [isExpiredLink, setIsExpiredLink] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [networkRequestStatus, setNetworkRequestStatus] =
    useState<NetworkRequestStatus>('unrequested');
  const [emailAddress, setEmailAddress] = useState('');

  interface Params {
    key: string;
  }
  const { key } = useParams<Params>();

  useEffect(() => {
    if (key) {
      getEmailAddress(key);
    }
  }, [key]);

  interface EmailConfirmation {
    email_address: string;
    key_expired: boolean;
  }

  const getEmailAddress = async (key: string) => {
    const response = await useAxios<EmailConfirmation>({
      path: `email-confirmation/${key}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200 && response.data) {
      setEmailAddress(response.data.email_address);
      setIsExpiredLink(response.data.key_expired);
      setIsInitialLoading(false);
    } else {
      setIsInitialLoadFailure(true);
      setIsInitialLoading(false);
    }
  };

  const onClickConfirmEmail = async () => {
    setIsButtonLoading(true);
    const response = await useAxios({
      path: 'account-confirm-email',
      method: RequestTypes.Post,
      data: {
        key,
      },
    });

    if (response.status === 200) {
      setNetworkRequestStatus('success');
      setIsButtonLoading(false);
    } else {
      setNetworkRequestStatus('failure');
      setIsButtonLoading(false);
    }
  };

  const onClickResendEmail = async () => {
    setIsButtonLoading(true);
    const response = await useAxios({
      path: 'resend-email',
      method: RequestTypes.Post,
      data: {
        email: emailAddress,
      },
    });

    if (response.status === 200) {
      setIsButtonLoading(false);
      setNetworkRequestStatus('success');
    } else {
      setIsButtonLoading(false);
      setNetworkRequestStatus('failure');
    }
  };

  return (
    <EmailConfirmation
      isInitialLoading={isInitialLoading}
      isInitialLoadFailure={isInitialLoadFalure}
      isExpiredLink={isExpiredLink}
      isButtonLoading={isButtonLoading}
      networkRequestStatus={networkRequestStatus}
      emailAddress={emailAddress}
      onClickConfirmEmail={onClickConfirmEmail}
      onClickResendEmail={onClickResendEmail}
    />
  );
};
