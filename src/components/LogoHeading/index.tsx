import React from 'react';
import { Box, Typography } from '@mui/material';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import { Variant } from '@mui/material/styles/createTypography';

interface LoginHeadingProps {
  variant: Variant;
}

export const LoginHeading: React.FC<LoginHeadingProps> = ({ variant }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <DoubleArrowRoundedIcon fontSize="large" color="primary" />
      <Typography component="div" variant={variant} sx={{ fontWeight: '600' }}>
        TinyTrader
      </Typography>
    </Box>
  );
};

export default LoginHeading;
