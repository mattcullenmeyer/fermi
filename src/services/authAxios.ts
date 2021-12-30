import Cookies from 'js-cookie';
// Services
import { tokenRefresh } from './tokenRefresh';
import { useAxios, RequestParameters, ResponseBody } from './useAxios';
// Utils
import { setAuthCookies } from '../utils/setAuthCookies';
// Constants
import { FERMI_ACCESS_TOKEN } from '../constants/cookies';

export const authAxios = async<T> ({
  path,
  method,
  data = {},
  params = {},
}: Omit<RequestParameters, 'headers'>): Promise<ResponseBody<T>> => {
  let fermiAccessToken = Cookies.get(FERMI_ACCESS_TOKEN); 

  if (!fermiAccessToken) {
    const tokenRefreshResponse = await tokenRefresh();

    if (tokenRefreshResponse.status === 200 && tokenRefreshResponse.data) {
      setAuthCookies(tokenRefreshResponse.data);
      fermiAccessToken = Cookies.get(FERMI_ACCESS_TOKEN); 
    } else {
      console.error('Failed to refresh authorization token.')
    }
  }
  
  const response = await useAxios<T>({
    method,
    path,
    data,
    params,
    headers: {
      Authorization: `Bearer ${fermiAccessToken}`
    },
  });
  return response;
};