import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

const store = configureStore();

const appComponent = (
  <Provider store={store}>
    <div />
  </Provider>
);
ReactDOM.render(
  appComponent,
  document.getElementById('root'),
);

serviceWorker.unregister();
