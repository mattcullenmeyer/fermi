import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
// Components
import { Container, Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// State
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import { resetUser } from '../../state/slices/userSlice';
// Services
import { tokenRefresh } from '../../services/tokenRefresh';
// Utils
import { removeAuthCookies } from '../../utils/removeAuthCookies';
import { setAuthCookies } from '../../utils/setAuthCookies';
// Constants
import { FERMI_ACCESS_TOKEN } from '../../constants/cookies';

export const Logout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state);

  const history = useHistory();

  const onButtonClick = async () => {
    setIsLoading(true);
    const fermiAccessToken = Cookies.get(FERMI_ACCESS_TOKEN);

    if (!fermiAccessToken) {
      const response = await tokenRefresh();

      if (response.status === 200 && response.data) {
        setAuthCookies(response.data);
      } else {
        console.error('Failed to refresh authorization token.');
      }
    }

    dispatch(resetUser());
  };

  useEffect(() => {
    if (user.isUserReset) {
      setIsLoading(false);
      removeAuthCookies();
      history.push('/login');
    }
  }, [user]);

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Log Out
        </Typography>

        <LoadingButton
          onClick={onButtonClick}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          loading={isLoading}
        >
          Log Out
        </LoadingButton>
      </Box>
    </Container>
  );
};
