import * as actionType from './actionType';

const initState = { login: false };

function logIn(state = initState, action) {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return { ...state, login: true };
    case actionType.LOGOUT_SUCCESS:
      return { ...state, login: false };
    case actionType.LOGIN_STATUS_SUCCESS:
      return { ...state, ...action.payload };
    case actionType.LOGIN_STATUS_FAILURE:
    case actionType.LOGIN_FAILURE:
    case actionType.LOGOUT_FAILURE:
    default:
      return state;
  }
}

export default logIn;
