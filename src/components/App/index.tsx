import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Login } from '../Login';
import { Logout } from '../Logout';
import { Registration } from '../Registration';

export const App = () => {

  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/registration" exact component={Registration} />
    </BrowserRouter>
  );
};
