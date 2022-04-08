import React from 'react';
// Components
import { AppBar, Box, Toolbar } from '@mui/material';
import { LogoHeading } from '../LogoHeading';
import { ProfileMenu } from './components/ProfileMenu';
import { DarkModeButton } from './components/DarkModeButton';
import { NavigationButtons } from './components/NavigationButtons';
// Other
import './index.css';

// TODO: Handle mobile devices
// TODO: Display different buttons based on whether user is logged in or not

export const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit" sx={{ top: 0, height: '64px' }}>
        <Toolbar>
          <LogoHeading variant={'h6'} />
          <NavigationButtons />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <DarkModeButton />
            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
