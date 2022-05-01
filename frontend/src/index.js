import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Bodie from './Bodie'
import { Provider } from 'react-redux';
import {store} from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Bodie />
  </Provider>
);
reportWebVitals();