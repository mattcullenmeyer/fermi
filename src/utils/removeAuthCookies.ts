import Cookies from 'js-cookie'
import { FERMI_ACCESS_TOKEN, FERMI_REFRESH_TOKEN } from '../constants/cookies'

export const removeAuthCookies = () => {
  Cookies.remove(FERMI_ACCESS_TOKEN);
  Cookies.remove(FERMI_REFRESH_TOKEN);
};