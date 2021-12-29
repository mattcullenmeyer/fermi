import React from 'react';
// Components
import { 
  Container, 
  Box, 
  Typography,
  Button
} from '@mui/material';
// Services
import { userLogout } from '../../services/userLogout';
// Utils
import { removeAuthCookies } from '../../utils/removeAuthCookies';

export const Logout: React.FC = () => {
  const onButtonClick = async () => { 
    const response = await userLogout();

    if (response.status === 200) {
      removeAuthCookies();
    } else {
      console.error('Failed to log out user.');
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