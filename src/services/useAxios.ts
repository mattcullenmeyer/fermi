import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000';

export enum RequestTypes {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delte = 'delete',
}

export interface ResponseBody<T> {
  status?: number;
  data?: T;
  error?: string;
}

export interface RequestParameters {
  path: string;
  method: RequestTypes;
  data?: any;
  headers?: any;
  params?: any;
  withCredentials?: boolean;
}

export const useAxios = async<T>({
  path,
  method,
  data = {},
  headers = {},
  params = {},
  withCredentials = false,
}: RequestParameters): Promise<ResponseBody<T>> => {
  try {
    const response = await axios({
      method,
      url: `${baseUrl}/${path}/`,
      data,
      headers,
      params,
      withCredentials, 
    });
    return {
      status: response.status,
      data: response.data as T,
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        error: error.message,
      }
    }
    return {};
  }
};

export default useAxios;