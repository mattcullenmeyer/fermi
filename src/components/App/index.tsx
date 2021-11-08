import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Login } from '../Login';

export const App = () => {

  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
};
