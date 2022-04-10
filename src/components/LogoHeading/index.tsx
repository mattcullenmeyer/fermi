import React from 'react';
import { Box, Typography } from '@mui/material';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import { Variant } from '@mui/material/styles/createTypography';

export interface LogoHeadingProps {
  variant?: Variant;
  fontSize?: string | number;
  fontWeight?: string | number;
  iconOnly?: boolean;
}

export const LogoHeading: React.FC<LogoHeadingProps> = ({
  variant = 'h4',
  fontSize,
  fontWeight,
  iconOnly = false,
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <DoubleArrowRoundedIcon sx={{ fontSize: fontSize }} color="primary" />
      {!iconOnly && (
        <Typography
          component="div"
          variant={variant}
          sx={{ fontWeight: fontWeight, fontSize: fontSize }}
        >
          TinyTrader
        </Typography>
      )}
    </Box>
  );
};
