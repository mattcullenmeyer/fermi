import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Routes } from './routes';
import { fetchUser } from './state/slices/userSlice';
import { useAppDispatch } from './state/store';
import { FERMI_REFRESH_TOKEN } from './constants/cookies';

export const App = () => {
  const dispatch = useAppDispatch();
  const fermiRefreshToken = Cookies.get(FERMI_REFRESH_TOKEN);

  useEffect(() => {
    if (fermiRefreshToken) {
      dispatch(fetchUser());
    }
  }, [fermiRefreshToken]);

  return <Routes />;
};
