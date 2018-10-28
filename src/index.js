import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
import configureStore from './configureStore';

const App = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
