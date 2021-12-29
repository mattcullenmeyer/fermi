import { RequestTypes, ResponseBody, useAxios } from './useAxios';
import { DjRestAuthData } from '../types/authentication';

export interface LoginParameters {
  email: string;
  username: string;
  password: string;
}

export const userLogin = async ({
  email,
  username,
  password,
}: LoginParameters): Promise<ResponseBody<DjRestAuthData>> => {
  const response = await useAxios<DjRestAuthData>({
    path: 'login',
    method: RequestTypes.Post,
    data: {
      email,
      username,
      password,
    },
  });

  return response;
};