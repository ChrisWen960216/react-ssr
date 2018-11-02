import { combineReducers } from 'redux';

import home from './redux/home/reducer';
import login from './redux/logIn/reducer';

const reducer = combineReducers({ login, home });

export default reducer;
