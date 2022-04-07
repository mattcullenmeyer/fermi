import React from 'react';
import { useHistory } from 'react-router-dom';
// Components
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { LogoHeading } from '../LogoHeading';
// State
import { useGlobalContext } from '../../state/context';
// Icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// Other
import { THEME_MODE } from '../../constants/localStorage';
import { words } from './words';
import './index.css';

export const NavBar: React.FC = () => {
  const history = useHistory();
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem(THEME_MODE, isDarkMode ? 'dark' : 'light');
    // TODO: Update user account's dark mode setting
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit" sx={{ top: 0, height: '64px' }}>
        <Toolbar>
          <LogoHeading variant={'h6'} />
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
            <Button
              key={words.library}
              // onClick={() => history.push('/library')} TODO: Uncomment
              color="inherit"
              sx={{ mx: 1, display: 'block' }}
            >
              {words.library}
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip
              title={
                isDarkMode
                  ? words.enableLightModeTooltip
                  : words.enableDarkModeTooltip
              }
            >
              <IconButton
                size="large"
                color="inherit"
                onClick={handleThemeChange}
              >
                {isDarkMode ? (
                  <LightModeOutlinedIcon
                    sx={{ height: '1.15em', width: '1.15em' }}
                  />
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{ height: '1.15em', width: '1.15em' }}
                  />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title={words.accountTooltip}>
              <IconButton size="large" color="inherit">
                <AccountCircle sx={{ height: '1.15em', width: '1.15em' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
