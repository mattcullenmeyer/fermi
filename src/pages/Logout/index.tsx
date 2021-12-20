import React from 'react';
import Cookies from 'js-cookie';
// Components
import { 
  Container, 
  Box, 
  Typography,
  Button
} from '@mui/material';
// Services
import { userLogout } from '../../services/userLogout';
// Constants
import { FERMI_ACCESS_TOKEN, FERMI_REFRESH_TOKEN } from '../../constants/cookies';

export const Logout: React.FC = () => {
  const onButtonClick = async () => { 
    const response = await userLogout();

    if (response.status === 200) {
      Cookies.remove(FERMI_ACCESS_TOKEN);
      Cookies.remove(FERMI_REFRESH_TOKEN);
    }
  };
  
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