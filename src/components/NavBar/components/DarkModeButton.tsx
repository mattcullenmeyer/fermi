import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useGlobalContext } from '../../../state/context';
import { THEME_MODE } from '../../../constants/localStorage';
import { words } from '../words';

export const DarkModeButton: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  const handleThemeChange = () => {
    localStorage.setItem(THEME_MODE, isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
    // TODO: Update user account's dark mode setting
  };

  return (
    <Box>
      <Tooltip
        title={
          isDarkMode
            ? words.enableLightModeTooltip
            : words.enableDarkModeTooltip
        }
      >
        <IconButton size="large" color="inherit" onClick={handleThemeChange}>
          {isDarkMode ? (
            <LightModeOutlinedIcon sx={{ height: '1.15em', width: '1.15em' }} />
          ) : (
            <DarkModeOutlinedIcon sx={{ height: '1.15em', width: '1.15em' }} />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};
