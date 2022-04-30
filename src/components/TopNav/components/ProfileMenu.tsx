import React from 'react';
import { useHistory } from 'react-router-dom';
// Components & Icons
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
// State
import { useAppDispatch } from '../../../state/store';
import { resetUser } from '../../../state/slices/userSlice';
// Other
import { removeAuthCookies } from '../../../utils/removeAuthCookies';
import { words } from '../words';
import { WriteSelectors } from '../testIds';

const { pages } = words;

export const ProfileMenu: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const onClickProfile = () => {
    handleCloseMenu();
    history.push('/profile');
  };

  const onClickLogout = () => {
    handleCloseMenu();
    removeAuthCookies();
    dispatch(resetUser());
    history.push('/login');
  };

  return (
    <Box {...WriteSelectors.profileMenu}>
      <Tooltip title={words.profileTooltip}>
        <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
          <AccountCircle sx={{ height: '1.15em', width: '1.15em' }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '48px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem key="profile" onClick={onClickProfile}>
          <Typography>{pages.profile}</Typography>
        </MenuItem>
        <MenuItem key="log-out" onClick={onClickLogout}>
          <Typography>{pages.logOut}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
