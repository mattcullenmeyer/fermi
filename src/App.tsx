import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Routes } from './routes';
import { fetchUser } from './state/slices/userSlice';
import { useAppDispatch } from './state/store';
import { FERMI_ACCESS_TOKEN } from './constants/cookies';

export const App = () => {
  const dispatch = useAppDispatch();

  const fermiAuthToken = Cookies.get(FERMI_ACCESS_TOKEN);

  useEffect(() => {
    if (fermiAuthToken) {
      dispatch(fetchUser(fermiAuthToken));
    }
  }, []);

  return <Routes />;
};
