import axios from 'axios';
import { GET_HOME_LIST_FAILURE, GET_HOME_LIST_SUCCESS } from './actionType';

const serect = 'M5s2sPneDE';

function getHomeListSuccess(data) {
  return {
    type: GET_HOME_LIST_SUCCESS,
    payload: data,
  };
}

function getHomeListFailure() {
  return {
    type: GET_HOME_LIST_FAILURE,
    payload: null,
  };
}

function getHomeList() {
  return dispatch => axios.get(`/api/news.json?secret=${serect}`)
    .then((res) => {
      const { data: { success = false, data = [] } } = res;
      if (success) {
        return dispatch(getHomeListSuccess(data));
      }
      return dispatch(getHomeListFailure());
    });
}

export default getHomeList;
