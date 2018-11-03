import * as actionType from './actionType';

const initState = { trans: [] };

function trans(state = initState, action) {
  switch (action.type) {
    case actionType.GET_TRANSILATION_LIST_SUCCESS:
      return { ...state, trans: action.payload };
    case actionType.GET_TRANSILATION_LIST_FAILURE:
      return { ...state, trans: initState.trans };
    default:
      return { ...state };
  }
}

export default trans;
