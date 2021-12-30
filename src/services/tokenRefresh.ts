import Cookies from "js-cookie";
import { FERMI_REFRESH_TOKEN } from "../constants/cookies";
import { DjRestAuthData } from "../types/authentication";
import { useAxios, RequestTypes, ResponseBody } from "./useAxios";

export const tokenRefresh = async (): Promise<ResponseBody<DjRestAuthData>> => {
  const fermiRefreshToken = Cookies.get(FERMI_REFRESH_TOKEN);
  
  const response = await useAxios<DjRestAuthData>({
    path: 'token/refresh',
    method: RequestTypes.Post,
    data: {
      refresh: fermiRefreshToken,
    },
  });

  return response;
};