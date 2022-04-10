import React from 'react';
// Components
import { AppBar, Box, Toolbar } from '@mui/material';
import { PageMenu } from './components/PageMenu';
import { ResponsiveLogo } from './components/ResponsiveLogo';
import { ProfileMenu } from './components/ProfileMenu';
import { DarkModeButton } from './components/DarkModeButton';
import { NavigationButtons } from './components/NavigationButtons';
import { AccessButtons } from './components/AccessButtons';
// State
import { useAppSelector } from '../../state/store';
import { RequestStatus } from '../../state/requestStatusTypes';

export const NavBar: React.FC = () => {
  const { user } = useAppSelector((state) => state);
  const isLoggedIn = user.status === RequestStatus.Success;

  return (
    <AppBar position="sticky" color="inherit" sx={{ top: 0, height: '64px' }}>
      <Toolbar>
        <PageMenu isLoggedIn={isLoggedIn} />
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
        <ResponsiveLogo />
        <NavigationButtons isLoggedIn={isLoggedIn} />
        <Box sx={{ flexGrow: 1 }} />
        <DarkModeButton />
        {isLoggedIn ? <ProfileMenu /> : <AccessButtons />}
      </Toolbar>
    </AppBar>
  );
};
