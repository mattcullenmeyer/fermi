import React from 'react';
import { useAppSelector } from '../../state/store';

export const Account: React.FC = () => {
  const { user } = useAppSelector((state) => state);
  console.log(user.data);
  return <h1>Account</h1>;
};
