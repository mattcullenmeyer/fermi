import React, { useEffect, useState } from 'react';
import Crypto from './index';
import { useParams, useLocation } from 'react-router-dom';
import useAxios, { RequestTypes } from '../../services/useAxios';

export interface CryptoData {
  id: number;
  symbol: string;
  name: string;
  slug: string;
}

export interface CryptoPrices {
  date: string;
  price: number;
  volume: number;
  ema5: number;
  ema50: number;
}

export const CryptoContainer: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData>();
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices[]>([]);

  interface Params {
    coin: string;
  }

  const { coin } = useParams<Params>();

  const location = useLocation();

  useEffect(() => {
    getCrypto(coin);
  }, [location]);

  useEffect(() => {
    if (cryptoData) {
      getCryptoPrices(cryptoData.id);
    }
  }, [cryptoData]);

  const getCrypto = async (coin: string) => {
    const response = await useAxios<CryptoData>({
      path: `crypto/${coin}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200 && response.data) {
      setCryptoData(response.data);
    }
  };

  const getCryptoPrices = async (coin_id: number) => {
    const response = await useAxios<CryptoPrices[]>({
      path: `crypto/prices/live/${coin_id}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200 && response.data) {
      setCryptoPrices(response.data);
    }
  };

  return <Crypto cryptoPrices={cryptoPrices} />;
};
