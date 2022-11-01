import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'emotion';

import { saveState } from './localStorage';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './App.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';cd 

const target = document.querySelector('#root');

store.subscribe(
  throttle(() => {
    saveState({ settings: store.getState().settings });
  }, 1000),
);

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  padding-top: 15px;
  overflow: hidden;
}`;

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  target,
);
registerServiceWorker();
