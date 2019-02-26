import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

export default (preloadedState) => {
  const middlewares = [];

  if (process.env === 'development') {
    middlewares.push(logger);
  }

  const composed = compose(applyMiddleware(...middlewares));

  return createStore(rootReducer, preloadedState, composed);
};
