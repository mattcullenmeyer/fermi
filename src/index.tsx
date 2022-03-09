import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { App } from './App';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.querySelector('#root')
);
