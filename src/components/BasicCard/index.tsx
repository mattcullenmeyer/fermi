import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

export interface BasicCardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
  button?: React.ReactNode;
}

export const BasicCard: React.FC<BasicCardProps> = ({
  icon,
  heading,
  description,
  button,
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
          {icon}
          <Typography
            component="h1"
            variant="h4"
            sx={{ textAlign: 'center', marginBottom: '10px' }}
          >
            {heading}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
          {button && <Box sx={{ marginTop: '40px' }}>{button}</Box>}
        </Box>
      </CardContent>
    </Card>
  );
};
