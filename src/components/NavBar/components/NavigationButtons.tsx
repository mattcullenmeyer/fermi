import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { words } from '../words';

interface NavigationButtonsProps {
  isLoggedIn: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  isLoggedIn,
}) => {
  const history = useHistory();

  return (
    <Box
      sx={{
        marginLeft: 4,
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Button
        key={words.store}
        onClick={() => history.push('/')}
        color="inherit"
        sx={{ mx: 1, display: 'block' }}
      >
        {words.store}
      </Button>
      {isLoggedIn && (
        <Button
          key={words.library}
          onClick={() => history.push('/library')}
          color="inherit"
          sx={{ mx: 1, display: 'block' }}
        >
          {words.library}
        </Button>
      )}
    </Box>
  );
};
