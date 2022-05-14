import React from 'react';
import { BasicCard } from '../BasicCard';
import { Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { words } from './words';

export interface ErrorCardProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export const ErrorCard: React.FC<ErrorCardProps> = ({
  heading = words.heading,
  description = words.description,
  buttonText = words.buttonText,
}) => {
  const errorIcon: React.ReactNode = (
    <ErrorOutlineIcon
      fontSize="large"
      sx={{ fontSize: '3.5rem', marginBottom: '25px' }}
    />
  );

  const errorButton: React.ReactNode = (
    <Button
      variant="contained"
      size="large"
      sx={{ pt: 1, pr: 7, pb: 1, pl: 7 }}
      onClick={() => window.location.reload()}
    >
      {buttonText}
    </Button>
  );

  return (
    <BasicCard
      icon={errorIcon}
      heading={heading}
      description={description}
      button={errorButton}
    />
  );
};
