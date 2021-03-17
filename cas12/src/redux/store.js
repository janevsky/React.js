// vednor imports
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
// reducers
import reducers from './ducks/users';

export default createStore(reducers, applyMiddleware(createLogger()));