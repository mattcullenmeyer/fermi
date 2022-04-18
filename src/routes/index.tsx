import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { TopNavContainer as TopNav } from '../components/TopNav/Container';
import { Store } from '../pages/Store';
import { Library } from '../pages/Library';
import { LoginContainer as Login } from '../pages/Login/Container';
import { SignupContainer as Signup } from '../pages/Signup/Container';
import { Profile } from '../pages/Profile';
import { CryptoContainer as Crypto } from '../pages/Crypto/Container';
import { PageNotFound } from '../pages/PageNotFound';

export const Routes = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route path="/" exact component={Store} />
        <Route path="/library" exact component={Library} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/crypto" exact>
          <Redirect to="/crypto/bitcoin" />
        </Route>
        <Route path="/crypto/:slug" exact component={Crypto} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
