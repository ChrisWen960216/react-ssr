import { combineReducers } from 'redux';

import home from './redux/home/reducer';
import login from './redux/logIn/reducer';
import trans from './redux/trans/reducer';

const reducer = combineReducers({ login, home, trans });

export default reducer;
