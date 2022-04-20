// https://redux.js.org/usage/writing-tests
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import { BrowserRouter } from 'react-router-dom';

const render = (ui: any) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
