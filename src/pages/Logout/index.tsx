import React, { useEffect } from 'react';
// Components
import { 
  Container, 
  Box, 
  Typography,
  Button
} from '@mui/material';
// State
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import { resetUser } from '../../state/slices/userSlice';
// Utils
import { removeAuthCookies } from '../../utils/removeAuthCookies';

export const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);

  const onButtonClick = () => { 
    dispatch(resetUser());
  };

  useEffect(() => {
    if (user.isUserReset) {
      removeAuthCookies();
    };
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
        
        <Button
          onClick={onButtonClick}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
};