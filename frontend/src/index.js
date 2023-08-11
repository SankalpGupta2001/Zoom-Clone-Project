import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

import * as process from 'process';

(window).global = window;
(window).process = process;
(window).Buffer = [];

ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);







