import React from 'react';
import { 
  Container, 
  Box, 
  Typography,
  Button
} from '@mui/material';
import Cookies from 'js-cookie';
import { FERMI_ACCESS_TOKEN, FERMI_REFRESH_TOKEN } from '../../constants/cookies';
import useAxios, { RequestTypes } from '../../services/useAxios';

export const Logout: React.FC = () => {

  const fermiAuthToken = Cookies.get(FERMI_ACCESS_TOKEN);

  const handleClick = async () => { 
    const response = await useAxios({
      path: 'dj-rest-auth/logout',
      method: RequestTypes.Post,
      headers: {
        Authorization: `Bearer ${fermiAuthToken}`
      },
    });

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
          onClick={handleClick}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
};