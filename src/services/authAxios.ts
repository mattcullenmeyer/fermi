import Cookies from 'js-cookie';
import { FERMI_ACCESS_TOKEN } from '../constants/cookies';
import { useAxios, RequestParameters, ResponseBody } from './useAxios';

export const authAxios = async<T> ({
  path,
  method,
  data = {},
  params = {},
}: Omit<RequestParameters, 'headers'>): Promise<ResponseBody<T>> => {
  const fermiAuthToken = Cookies.get(FERMI_ACCESS_TOKEN); 
  
  const response = await useAxios<T>({
    method,
    path,
    data,
    headers: {
      Authorization: `Bearer ${fermiAuthToken}`
    },
    params,
  });
  return response;
};