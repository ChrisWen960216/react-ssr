import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

function generateStore() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
}

function getClientStore() {
  const defaultState = window.context.state;
  const store = createStore(reducer, defaultState, applyMiddleware(thunk));
  return store;
}

export { generateStore, getClientStore };
