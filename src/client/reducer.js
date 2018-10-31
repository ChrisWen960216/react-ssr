import { combineReducers } from 'redux';

import home from './redux/home/reducer';

const name = (state = { name: 'christianWen' }) => state;

const reducer = combineReducers({ name, home });

export default reducer;
