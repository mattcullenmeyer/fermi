import { TopNav } from './index';
import { useAppSelector } from '../../state/store';
import { RequestStatus } from '../../state/requestStatusTypes';

export const TopNavContainer = () => {
  const { user } = useAppSelector((state) => state);
  const isLoggedIn = user.status === RequestStatus.Success;

  return <TopNav isLoggedIn={isLoggedIn} />;
};
