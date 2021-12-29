import { DjRestAuthData } from '../types/authentication';
import { FERMI_ACCESS_TOKEN, FERMI_REFRESH_TOKEN } from '../constants/cookies';
import Cookies from 'js-cookie';

export const setAuthCookies = (
  data: DjRestAuthData
) => {
  const fermiAccessToken = data.access_token;
  const fermiRefreshToken = data.refresh_token;
  
  // Token expirations must align with backend
  Cookies.set(FERMI_ACCESS_TOKEN, fermiAccessToken, { 
    expires: 7,
    sameSite: 'Lax', 
    secure: true,
  });
  Cookies.set(FERMI_REFRESH_TOKEN, fermiRefreshToken, {
    expires: 14,
    sameSite: 'Lax', 
    secure: true,
  });
};