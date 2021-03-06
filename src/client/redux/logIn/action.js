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

function getLogStatusSuccess(data) {
  return {
    type: actionType.LOGIN_STATUS_SUCCESS,
    payload: data,
  };
}

function getLogStatusFailure() {
  return {
    type: actionType.LOGIN_STATUS_FAILURE,
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
  return (dispatch, getState, axiosIstance) => axiosIstance.get(`/api/isLogin.json?secret=${serect}`)
    .then((res) => {
      const { data: { success = false, data: logInData } } = res;
      if (success) {
        return dispatch(getLogStatusSuccess(logInData));
      }
      return dispatch(getLogStatusFailure());
    });
}
