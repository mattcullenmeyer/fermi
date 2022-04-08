import React from 'react';
import { useAppSelector } from '../../state/store';

export const Profile: React.FC = () => {
  const { user } = useAppSelector((state) => state);
  console.log(user.data);
  return <h1>Profile</h1>;
};
