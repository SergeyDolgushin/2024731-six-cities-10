import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import App from './components/app/app';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import { store } from './store';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ToastContainer autoClose={2000} limit={1} />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
