import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Account } from '../pages/Account';
import { Home } from '../pages/Home';
import { LoginContainer as Login } from '../pages/Login/Container';
import { Logout } from '../pages/Logout';
import { Signup } from '../pages/Signup';
import { CryptoContainer as Crypto } from '../pages/Crypto/Container';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/account" exact component={Account} />
      <Route path="/crypto" exact>
        <Redirect to="/crypto/BTC" />
      </Route>
      <Route path="/crypto/:coin" exact component={Crypto} />
    </BrowserRouter>
  );
};

export default Routes;
