import axios from 'axios';
// import { GET_HOME_LIST_FAILURE, GET_HOME_LIST_SUCCESS } from './actionType';

const serect = 'M5s2sPneDE';

// function getHomeListSuccess(data) {
//   return {
//     type: GET_HOME_LIST_SUCCESS,
//     payload: data,
//   };
// }

// function getHomeListFailure() {
//   return {
//     type: GET_HOME_LIST_FAILURE,
//     payload: null,
//   };
// }

function getHomeList() {
  return () => {
    axios.get(`http://47.95.113.63/ssr/api/news.json?secret=${serect}`)
      .then(res => console.log(res));
  };
}

export default getHomeList;
