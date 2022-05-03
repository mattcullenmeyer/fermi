import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { words } from '../words';
import { WriteSelectors } from '../testIds';

const { pages } = words;

interface PageMenuProps {
  isLoggedIn: boolean;
}

export const PageMenu: React.FC<PageMenuProps> = ({ isLoggedIn }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const onClickStore = () => {
    handleCloseMenu();
    history.push('/');
  };

  const onClickLibrary = () => {
    handleCloseMenu();
    history.push('/library');
  };

  const onClickLogIn = () => {
    handleCloseMenu();
    history.push('/login');
  };

  const onClickSignUp = () => {
    handleCloseMenu();
    history.push('/signup');
  };

  return (
    <Box
      sx={{ display: { xs: 'flex', md: 'none' } }}
      {...WriteSelectors.pageMenu}
    >
      <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
        <MenuIcon sx={{ height: '1.15em', width: '1.15em' }} />
      </IconButton>
      <Menu
        sx={{ mt: '6px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem
          key="store"
          onClick={onClickStore}
          {...WriteSelectors.storeMenu}
        >
          <Typography>{pages.store}</Typography>
        </MenuItem>
        {isLoggedIn && (
          <MenuItem
            key="library"
            onClick={onClickLibrary}
            {...WriteSelectors.libraryMenu}
          >
            <Typography>{pages.library}</Typography>
          </MenuItem>
        )}
        {!isLoggedIn && (
          <MenuItem
            key="login"
            onClick={onClickLogIn}
            {...WriteSelectors.loginMenu}
          >
            <Typography>{pages.logIn}</Typography>
          </MenuItem>
        )}
        {!isLoggedIn && (
          <MenuItem
            key="signup"
            onClick={onClickSignUp}
            {...WriteSelectors.signupMenu}
          >
            <Typography>{pages.signUp}</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};
