import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from './store'

import './index.css';
// https://bootswatch.com/lux/
// import './bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
