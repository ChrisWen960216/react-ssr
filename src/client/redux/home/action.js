import { GET_HOME_LIST_FAILURE, GET_HOME_LIST_SUCCESS } from './actionType';

import clientRequest from '../../request';
import serverRequest from '../../../server/request';

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

function getHomeList(server) {
  const request = server ? serverRequest : clientRequest;

  return dispatch => request.get(`/api/news.json?secret=${serect}`)
    .then((res) => {
      const { data: { success = false, data = [] } } = res;
      if (success) {
        return dispatch(getHomeListSuccess(data));
      }
      return dispatch(getHomeListFailure());
    });
}

export default getHomeList;
