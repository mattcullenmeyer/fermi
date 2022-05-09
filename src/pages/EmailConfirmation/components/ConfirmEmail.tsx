import React from 'react';
import { Alert, Box, Container, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { EmailConfirmationProps } from '..';
import { words } from '../words';

const { confirmEmail } = words;

export type ConfirmEmailProps = Pick<
  EmailConfirmationProps,
  | 'isButtonLoading'
  | 'networkRequestStatus'
  | 'emailAddress'
  | 'onClickConfirmEmail'
>;

export const ConfirmEmail: React.FC<ConfirmEmailProps> = ({
  isButtonLoading,
  networkRequestStatus,
  emailAddress,
  onClickConfirmEmail,
}) => {
  return (
    <>
      {networkRequestStatus === 'success' && (
        <Alert severity="success" sx={{ justifyContent: 'center' }}>
          {confirmEmail.successMessage}
        </Alert>
      )}
      {networkRequestStatus === 'failure' && (
        <Alert severity="error" sx={{ justifyContent: 'center' }}>
          {confirmEmail.failureMessage}
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
            sx={{ fontWeight: '600', marginBottom: '25px' }}
          >
            {confirmEmail.heading}
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
            {confirmEmail.description(emailAddress)}
          </Typography>
          <LoadingButton
            type="submit"
            variant="contained"
            size="large"
            sx={{ pt: 1, pr: 7, pb: 1, pl: 7, marginBottom: '25px' }}
            onClick={onClickConfirmEmail}
            loading={isButtonLoading}
          >
            {confirmEmail.button}
          </LoadingButton>
        </Box>
      </Container>
    </>
  );
};
