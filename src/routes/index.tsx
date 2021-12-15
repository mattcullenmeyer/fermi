import { BrowserRouter, Route } from 'react-router-dom';
import { Account } from '../pages/Account';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import { Registration } from '../pages/Registration';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/account" exact component={Account} />
    </BrowserRouter>
  );
};

export default Routes;
