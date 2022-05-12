import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { words } from './words';

export interface ErrorCardProps {
  heading?: string;
  description?: string;
}

export const ErrorCard: React.FC<ErrorCardProps> = ({
  heading,
  description,
}) => {
  return (
    <Card variant="outlined" sx={{ margin: '150px 15px' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '50px 0px',
          }}
        >
          <ErrorOutlineIcon
            fontSize="large"
            sx={{ fontSize: '3.5rem', marginBottom: '25px' }}
          />
          <Typography
            component="h1"
            variant="h4"
            sx={{ textAlign: 'center', marginBottom: '10px' }}
          >
            {heading ? heading : words.heading}
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontWeight: '300',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            {description ? description : words.description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ pt: 1, pr: 7, pb: 1, pl: 7 }}
            onClick={() => window.location.reload()}
          >
            {words.button}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
