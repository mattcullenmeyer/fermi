import { RequestTypes, ResponseBody, useAxios } from './useAxios';
import { DjRestAuthData } from '../types/authentication';

export interface SignupParameters {
  email: string;
  username: string;
  password: string;
}

export const userSignup = async ({
  email,
  username,
  password,
}: SignupParameters): Promise<ResponseBody<DjRestAuthData>> => {
  const response = await useAxios<DjRestAuthData>({
    path: 'signup',
    method: RequestTypes.Post,
    data: {
      email,
      username,
      password1: password,
      password2: password,
    },
  });

  return response;
};