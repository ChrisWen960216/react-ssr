import { GET_HOME_LIST_FAILURE, GET_HOME_LIST_SUCCESS } from './actionType';

const initState = { homeList: [] };

function home(state = initState, action) {
  switch (action.type) {
    case GET_HOME_LIST_SUCCESS: return { ...state, homeList: action.payload };
    case GET_HOME_LIST_FAILURE: return { ...state, homeList: initState.homeList };
    default: return { ...state };
  }
}

export default home;
