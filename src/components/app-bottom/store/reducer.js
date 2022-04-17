import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  isVisible: true, // 底部导航
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BOTTOM_CONTENT:
      return state.set("isVisible", action.isVisible);
    default:
      return state;
  }
}

export default reducer;
