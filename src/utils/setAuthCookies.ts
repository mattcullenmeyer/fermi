import { DjRestAuthData } from '../types/authentication';
import { FERMI_ACCESS_TOKEN, FERMI_REFRESH_TOKEN } from '../constants/cookies';
import Cookies from 'js-cookie';

export const setAuthCookies = (
  data: DjRestAuthData
) => {
  const fermiAccessToken = data.access_token;
  const fermiRefreshToken = data.refresh_token;

  const inOneHour = 1/24;
  const inTwoWeeks = 14;
  
  // Token expirations must align with backend
  Cookies.set(FERMI_ACCESS_TOKEN, fermiAccessToken, { 
    expires: inOneHour,
    sameSite: 'Lax', 
    secure: true,
  });
  Cookies.set(FERMI_REFRESH_TOKEN, fermiRefreshToken, {
    expires: inTwoWeeks,
    sameSite: 'Lax', 
    secure: true,
  });
};