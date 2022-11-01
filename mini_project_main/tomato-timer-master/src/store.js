import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';
import { loadState } from './localStorage';

const persistedState = loadState();
const enhancers = [];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, persistedState, composedEnhancers);

export default store;
