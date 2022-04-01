import React from 'react';
import { Box, Typography } from '@mui/material';
import { LogoHeading } from '../../../components/LogoHeading';
import { words } from '../words';

export const LoginPromo: React.FC = () => {
  return (
    <>
      <Typography
        component="div"
        variant="h4"
        sx={{ fontWeight: '400', fontSize: '2.5rem' }}
      >
        {words.welcomeBack}
      </Typography>
      <LogoHeading variant="h4" fontWeight="400" fontSize="2.5rem" />
      <Typography
        component="div"
        variant="h6"
        sx={{ mt: 2, fontWeight: '300' }}
      >
        {words.pleaseLogin}
      </Typography>
    </>
  );
};
