import React from 'react';
import 'chartjs-adapter-moment';
// Components
import { Line } from 'react-chartjs-2';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
// Types
import { CryptoData, CryptoPrices } from './Container';

interface CryptoProps {
  cryptoData: CryptoData | null;
  cryptoPrices: CryptoPrices[] | null;
}

export const Crypto: React.FC<CryptoProps> = ({ cryptoData, cryptoPrices }) => {
  if (!cryptoData || !cryptoPrices) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}
      >
        <CircularProgress size={100} />
      </Box>
    );
  }

  const data = {
    labels: cryptoPrices.map((record) => record.date),
    datasets: [
      {
        label: 'Exponential Moving Average (50)',
        lineTension: 0.5,
        data: cryptoPrices.map((record) => record.ema50),
        borderColor: '#d758e3',
        backgroundColor: '#d758e3',
        pointRadius: 1,
      },
      {
        label: 'Exponential Moving Average (5)',
        lineTension: 0.5,
        data: cryptoPrices.map((record) => record.ema5),
        borderColor: '#864ad0',
        backgroundColor: '#864ad0',
        pointRadius: 1,
      },
      {
        label: 'Prices',
        lineTension: 0.5,
        data: cryptoPrices.map((record) => record.price),
        borderColor: '#51a6f6',
        backgroundColor: '#51a6f6',
        pointRadius: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time' as 'time',
        time: {
          unit: 'month' as 'month',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as 'bottom',
        labels: {
          boxHeight: 1,
        },
        reverse: true,
      },
    },
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom component="div">
        {`${cryptoData.name} (${cryptoData.symbol}) Price Chart`}
      </Typography>
      <Line data={data} options={options} />
    </Container>
  );
};

export default Crypto;
