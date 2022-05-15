import React from 'react';
import { useHistory } from 'react-router-dom';
import { BasicCard } from '../../../components/BasicCard';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Button } from '@mui/material';
import { getRedirectPath } from '../../../utils/getRedirectPath';
import { words } from '../words';

const { signupSuccessCard } = words;

export const SignupSuccessCard: React.FC = () => {
  const history = useHistory();
  const redirectPath = getRedirectPath();

  const onClickContinue = () => {
    if (redirectPath && redirectPath !== '/signup') {
      history.push(redirectPath);
    } else {
      history.push('/');
    }
  };

  const signupSuccessIcon: React.ReactNode = (
    <CheckCircleOutlinedIcon
      fontSize="large"
      sx={{ fontSize: '3.5rem', marginBottom: '25px' }}
    />
  );

  const signupSuccessButton: React.ReactNode = (
    <Button
      variant="contained"
      size="large"
      sx={{ pt: 1, pr: 7, pb: 1, pl: 7 }}
      onClick={onClickContinue}
    >
      {signupSuccessCard.buttonText}
    </Button>
  );

  return (
    <BasicCard
      icon={signupSuccessIcon}
      heading={signupSuccessCard.heading}
      description={signupSuccessCard.description}
      button={signupSuccessButton}
    />
  );
};
