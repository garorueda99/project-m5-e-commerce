import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { CurrentUserProvider } from './components/CurrentUserContext';

import App from './components/App';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CurrentUserProvider>
  </React.StrictMode>,
  rootElement
);
