import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import home from './redux/home/reducer';

const name = (state = { name: 'christianWen' }) => state;

const reducer = combineReducers({ name, home }, applyMiddleware(thunk));

export default reducer;
