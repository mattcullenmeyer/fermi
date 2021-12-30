import Cookies from 'js-cookie';
import { RequestTypes, ResponseBody } from './useAxios';
import { authAxios } from './authAxios';
import { FERMI_REFRESH_TOKEN } from '../constants/cookies';

export interface LogoutData {
  detail: string;
}

export const userLogout = async (): Promise<ResponseBody<LogoutData>> => {
  const fermiRefreshToken = Cookies.get(FERMI_REFRESH_TOKEN);

  const response = await authAxios<LogoutData>({
    path: 'logout',
    method: RequestTypes.Post,
    data: {
      refresh: fermiRefreshToken,
    },
  });

  return response;
};