import { useAppSelector } from '../state/store';
import { RequestStatus } from '../state/requestStatusTypes';

export const useLoginStatus = () => {
  const { user } = useAppSelector((state) => state);
  const isLoggedIn = user.status === RequestStatus.Success;

  return isLoggedIn;
};
