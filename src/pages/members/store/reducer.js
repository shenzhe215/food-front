import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  memberList: [
    {
      "name": "有何不可",
      "id": 167876
    }
  ]
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MEMBER_LIST:
      return state.set("memberList", action.memberList);
    default:
      return state;
  }
}

export default reducer;

