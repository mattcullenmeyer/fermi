import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { words } from '../words';
import { WriteSelectors } from '../testSelectors';

const { pages } = words;

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
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Button
        key="store"
        onClick={() => history.push('/')}
        color="inherit"
        sx={{ mx: 1, display: 'block' }}
        {...WriteSelectors.storeLink}
      >
        {pages.store}
      </Button>
      {isLoggedIn && (
        <Button
          key="library"
          onClick={() => history.push('/library')}
          color="inherit"
          sx={{ mx: 1, display: 'block' }}
          {...WriteSelectors.libraryLink}
        >
          {pages.library}
        </Button>
      )}
    </Box>
  );
};
