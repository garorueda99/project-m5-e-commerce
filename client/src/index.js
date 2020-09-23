// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Components
import App from './components/App';
import Modal from './components/modal';
import { CurrentUserProvider } from './components/CurrentUserContext';
// Store
import configureStore from './store';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CurrentUserProvider>
        <App />
        <Modal />
      </CurrentUserProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
