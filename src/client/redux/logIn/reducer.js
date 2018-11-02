import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from './actionType';

const initState = { login: false };

function logIn(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, login: true };
    case LOGOUT_SUCCESS:
      return { ...state, login: false };
    case LOGIN_FAILURE:
    case LOGOUT_FAILURE:
    default:
      return state;
  }
}

export default logIn;
