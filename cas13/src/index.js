// vendor imports 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// components
import App from './components/App';
// redux store
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);