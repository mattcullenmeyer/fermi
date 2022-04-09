import React from 'react';
import { useHistory } from 'react-router-dom';
// Components
import { AppBar, Box, Toolbar } from '@mui/material';
import { LogoHeading } from '../LogoHeading';
import { ProfileMenu } from './components/ProfileMenu';
import { DarkModeButton } from './components/DarkModeButton';
import { NavigationButtons } from './components/NavigationButtons';
import { AccessButtons } from './components/AccessButtons';
// State
import { useAppSelector } from '../../state/store';
import { RequestStatus } from '../../state/requestStatusTypes';
// Other
import './index.css';

// TODO: Handle mobile devices

export const NavBar: React.FC = () => {
  const { user } = useAppSelector((state) => state);
  const isLoggedIn = user.status === RequestStatus.Success;

  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit" sx={{ top: 0, height: '64px' }}>
        <Toolbar>
          <Box onClick={() => history.push('/')} sx={{ cursor: 'pointer' }}>
            <LogoHeading variant={'h6'} />
          </Box>
          <NavigationButtons isLoggedIn={isLoggedIn} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <DarkModeButton />
            {isLoggedIn ? <ProfileMenu /> : <AccessButtons />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
