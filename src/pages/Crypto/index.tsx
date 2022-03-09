import React from 'react';
import 'chartjs-adapter-moment';
// Components
import { NavBar } from '../../components/NavBar';
import { Line } from 'react-chartjs-2';
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Chip,
} from '@mui/material';
// Types
import { CryptoData, CryptoPrices } from './Container';
// Styles
import './index.css';

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
        <CircularProgress size={75} color="inherit" thickness={2} />
      </Box>
    );
  }

  const data = {
    labels: cryptoPrices.map((record) => record.date),
    datasets: [
      {
        label: '50-day EMA',
        lineTension: 0.5,
        data: cryptoPrices.map((record) => record.ema50),
        borderColor: '#d758e3',
        backgroundColor: '#d758e3',
        pointRadius: 1,
      },
      {
        label: '5-day EMA',
        lineTension: 0.5,
        data: cryptoPrices.map((record) => record.ema5),
        borderColor: '#864ad0',
        backgroundColor: '#864ad0',
        pointRadius: 1,
      },
      {
        label: 'Price',
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

  const currentPrice = cryptoPrices[cryptoPrices.length - 1];
  const signal = currentPrice.ema5 > currentPrice.ema50 ? 'BUY' : 'SELL';
  const chipColor = signal === 'BUY' ? 'success' : 'error';

  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom component="div">
          {`${cryptoData.name} (${cryptoData.symbol})`}
        </Typography>
        <div
          style={{
            display: 'flex',
            columnGap: '10px',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <>
            <h6>Signal:</h6>
          </>
          <>
            <Chip
              label={signal}
              color={chipColor}
              sx={{ fontSize: '20px', fontWeight: 500 }}
            />
          </>
        </div>
        <Line data={data} options={options} />
      </Container>
    </>
  );
};

export default Crypto;
