import React from 'react';
import { RootState, useAppSelector } from '../../state/store';

export const Account: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.user);
  console.log(user.data);
  return <h1>Account</h1>;
}