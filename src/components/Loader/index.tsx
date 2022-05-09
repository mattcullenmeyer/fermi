import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loader: React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}>
    <CircularProgress size={75} color="inherit" thickness={2} />
  </Box>
);
