import { createStore } from 'redux';
import reducer from './reducer';

function generateStore() {
  const store = createStore(reducer);
  return store;
}

export default generateStore;
