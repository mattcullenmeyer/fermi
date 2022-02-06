import { BrowserRouter, Route } from 'react-router-dom';
import { Account } from '../pages/Account';
import { Home } from '../pages/Home';
import { LoginContainer as Login } from '../pages/Login/Container';
import { Logout } from '../pages/Logout';
import { Signup } from '../pages/Signup';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/account" exact component={Account} />
    </BrowserRouter>
  );
};

export default Routes;
