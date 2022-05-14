import { TopNav } from './index';
import { useLoginStatus } from '../../hooks/useLoginStatus';

export const TopNavContainer = () => {
  const isLoggedIn = useLoginStatus();

  return <TopNav isLoggedIn={isLoggedIn} />;
};
