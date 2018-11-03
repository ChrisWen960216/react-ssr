import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import clientRequest from './request';
import serverRequest from '../server/request';

function generateStore(req) {
  const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverRequest(req))),
  );
  return store;
}

function getClientStore() {
  const defaultState = window.context.state;
  const store = createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientRequest)),
  );
  return store;
}

export { generateStore, getClientStore };
