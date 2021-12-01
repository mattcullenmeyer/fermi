import React from 'react';
import { 
  Container, 
  Box, 
  Typography,
  TextField,
  Button
} from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';

export const Logout: React.FC = () => {

  const handleClick = async () => { 
    const response = await axios.post(
      'http://127.0.0.1:8000/dj-rest-auth/logout/'
    );

    console.log(response);
    Cookies.remove('auth');
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