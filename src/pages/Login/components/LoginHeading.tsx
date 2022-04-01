import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import { words } from '../words';

export const LoginHeading: React.FC = () => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography component="h1" variant="h4" sx={{ fontWeight: '600' }}>
        {words.heading}
      </Typography>
      <Box sx={{ display: 'flex', marginTop: 1 }}>
        <Typography sx={{ marginRight: 0.5, fontWeight: '300' }}>
          {words.noAccount}
        </Typography>
        <Link component={RouterLink} to="/signup" variant="body1">
          {words.signUp}
        </Link>
      </Box>
    </Box>
  );
};
