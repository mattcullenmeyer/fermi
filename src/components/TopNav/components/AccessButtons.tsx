import React from 'react';
import { Box, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { words } from '../words';

const { pages } = words;

export const AccessButtons: React.FC = () => {
  const history = useHistory();

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Box display="flex" alignItems="center" marginLeft={1}>
        <Button variant="outlined" onClick={() => history.push('/login')}>
          {pages.logIn}
        </Button>
      </Box>
      <Box display="flex" alignItems="center" marginLeft={2}>
        <Button variant="contained" onClick={() => history.push('/signup')}>
          {pages.signUp}
        </Button>
      </Box>
    </Box>
  );
};
