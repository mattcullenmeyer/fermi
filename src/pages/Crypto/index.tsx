import React from 'react';
import { Line } from 'react-chartjs-2';
// Components
import { Container } from '@mui/material';
// Types
import { CryptoPrices } from './Container';

interface CryptoProps {
  cryptoPrices: CryptoPrices[];
}

export const PriceChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb'], //cryptoPrices.map((record) => record.date),
    datasets: [
      {
        label: 'Prices',
        lineTension: 0.5,
        data: [1, 2], //cryptoPrices.map((record) => record.price),
        // borderColor: '#2f87fc',
        // backgroundColor: '#9ac9f8',
      },
    ],
  };

  return <Line data={data} />;
};

export const Crypto: React.FC<CryptoProps> = ({ cryptoPrices }) => {
  console.log(cryptoPrices);

  return (
    // <Container>
    //   <PriceChart />
    // </Container>
    <Container>
      {/* <div>hello</div> */}
      <PriceChart />
    </Container>
  );
};

export default Crypto;
