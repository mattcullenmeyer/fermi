import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { AutocompleteSearch } from '../AutocompleteSearch';
import './index.css';

export const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="navbar-title"
          >
            TinyTrader
          </Typography>
          <AutocompleteSearch />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
