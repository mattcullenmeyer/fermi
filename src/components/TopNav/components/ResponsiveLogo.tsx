import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import { LogoHeading } from '../../LogoHeading';

export const ResponsiveLogo: React.FC = () => {
  const history = useHistory();

  return (
    <Box onClick={() => history.push('/')} sx={{ cursor: 'pointer' }}>
      <LogoHeading variant={'h6'} />
    </Box>
  );
};
