import { RequestTypes, ResponseBody, useAxios } from './useAxios';

export interface LoginData {
  access_token: string;
  refresh_token: string;
}

export interface LoginParameters {
  email: string;
  username: string;
  password: string;
}

export const userLogin = async ({
  email,
  username,
  password,
}: LoginParameters): Promise<ResponseBody<LoginData>> => {
  const response = await useAxios<LoginData>({
    path: 'dj-rest-auth/login',
    method: RequestTypes.Post,
    data: {
      email,
      username,
      password,
    },
  });

  return response;
};