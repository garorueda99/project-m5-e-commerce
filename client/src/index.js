import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Modal from './components/modal';

import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
