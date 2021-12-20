import { RequestTypes, ResponseBody } from './useAxios';
import { authAxios } from './authAxios';

export interface LogoutData {
  detail: string;
}

export const userLogout = async (): Promise<ResponseBody<LogoutData>> => {
  const response = await authAxios<LogoutData>({
    path: 'dj-rest-auth/logout',
    method: RequestTypes.Post,
  });

  return response;
};