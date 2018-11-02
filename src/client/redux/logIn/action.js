import * as actionType from './actionType';

const serect = 'M5s2sPneDE';

function logInSuccess() {
  return {
    type: actionType.LOGIN_SUCCESS,
    payload: { login: true },
  };
}

function logInFailure() {
  return {
    type: actionType.LOGIN_SUCCESS,
    payload: { login: false },
  };
}

function logOutSuccess() {
  return {
    type: actionType.LOGOUT_SUCCESS,
    payload: { login: false },
  };
}

function logOutFailure() {
  return {
    type: actionType.LOGOUT_SUCCESS,
    payload: null,
  };
}

export function logIn() {
  return (dispatch, getState, axiosIstance) => axiosIstance.get(`/api/login.json?secret=${serect}`)
    .then((res) => {
      const { data: { success = false } } = res;
      if (success) {
        return dispatch(logInSuccess());
      }
      return dispatch(logInFailure());
    });
}

export function logOut() {
  return (dispatch, getState, axiosIstance) => axiosIstance.get(`/api/logout.json?secret=${serect}`)
    .then((res) => {
      const { data: { success = false } } = res;
      if (success) {
        return dispatch(logOutSuccess());
      }
      return dispatch(logOutFailure());
    });
}

export function getLogStatus() {
  return {
    type: actionType.LOG_STATUS,
    payload: null,
  };
}
