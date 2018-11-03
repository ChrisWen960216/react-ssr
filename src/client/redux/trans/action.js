// translations.json
import * as actionType from './actionType';

const serect = 'M5s2sPneDE';

function getTransListSuccess(data) {
  return {
    type: actionType.GET_TRANSILATION_LIST_SUCCESS,
    payload: data,
  };
}

function getTransListFailure() {
  return {
    type: actionType.GET_TRANSILATION_LIST_FAILURE,
    payload: [],
  };
}

function getTransList() {
  return (dispatch, getState, axiosIstance) => axiosIstance.get(`/api/translations.json?secret=${serect}`)
    .then((res) => {
      const { data: { success = false, data = [] } } = res;
      if (success) {
        return dispatch(getTransListSuccess(data));
      }
      return dispatch(getTransListFailure());
    });
}

export default getTransList;
