import { Container } from '@mui/material';
import React from 'react';
import { CryptoPrices } from './Container';

interface CryptoProps {
  cryptoPrices: CryptoPrices[];
}

export const Crypto: React.FC<CryptoProps> = ({ cryptoPrices }) => {
  console.log(cryptoPrices);

  const prices = cryptoPrices.map((record) => record.price);
  console.log(prices);

  return (
    <Container>
      <div>hello</div>
    </Container>
  );
};

export default Crypto;
