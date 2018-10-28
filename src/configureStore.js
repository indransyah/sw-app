import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

let middleware = [thunkMiddleware];
// if (process.env.NODE_ENV !== 'production') {
if (false) {
  const { logger } = require('redux-logger');
  middleware = [...middleware, logger];
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
}
