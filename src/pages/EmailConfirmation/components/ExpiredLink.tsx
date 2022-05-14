import React from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, Box, Button, Container, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { EmailConfirmationProps } from '..';
import { words } from '../words';
import { setRedirectPath } from '../../../utils/setRedirectPath';

const { expiredLink } = words;

export type ExpiredLinkProps = Pick<
  EmailConfirmationProps,
  | 'isButtonLoading'
  | 'networkRequestStatus'
  | 'emailAddress'
  | 'onClickResendEmail'
  | 'isLoggedIn'
>;

export const ExpiredLink: React.FC<ExpiredLinkProps> = ({
  isButtonLoading,
  networkRequestStatus,
  emailAddress,
  onClickResendEmail,
  isLoggedIn,
}) => {
  const history = useHistory();

  return (
    <>
      {!isLoggedIn && (
        <Alert
          severity="warning"
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {expiredLink.loginMessage}
          <Button
            variant="contained"
            color="warning"
            size="small"
            sx={{ marginLeft: '10px' }}
            onClick={() => history.push(setRedirectPath('/login'))}
          >
            {expiredLink.loginButton}
          </Button>
        </Alert>
      )}
      {networkRequestStatus === 'success' && (
        <Alert severity="success" sx={{ justifyContent: 'center' }}>
          {expiredLink.successMessage}
        </Alert>
      )}
      {networkRequestStatus === 'failure' && (
        <Alert severity="error" sx={{ justifyContent: 'center' }}>
          {expiredLink.failureMessage}
        </Alert>
      )}
      <Container maxWidth="sm">
        <Box
          marginY="50px"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <MarkEmailReadOutlinedIcon
            sx={{ fontSize: '3.5rem', marginBottom: '25px' }}
          />
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontWeight: '600',
              marginBottom: '25px',
              textAlign: 'center',
            }}
          >
            {expiredLink.heading}
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontWeight: '300',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            {expiredLink.description(emailAddress)}
          </Typography>
          <LoadingButton
            type="submit"
            variant="contained"
            size="large"
            sx={{ pt: 1, pr: 7, pb: 1, pl: 7, marginBottom: '25px' }}
            onClick={onClickResendEmail}
            loading={isButtonLoading}
            disabled={!isLoggedIn}
          >
            {expiredLink.resendButton}
          </LoadingButton>
        </Box>
      </Container>
    </>
  );
};
