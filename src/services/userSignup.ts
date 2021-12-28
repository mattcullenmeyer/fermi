import { RequestTypes, ResponseBody, useAxios } from './useAxios';

export interface SignupData {
  access_token: string;
  refresh_token: string;
}

export interface SignupParameters {
  email: string;
  username: string;
  password: string;
}

export const userSignup = async ({
  email,
  username,
  password,
}: SignupParameters): Promise<ResponseBody<SignupData>> => {
  const response = await useAxios<SignupData>({
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