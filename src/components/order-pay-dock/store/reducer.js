import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  isDock: false,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DOCK_VISIABLE:
      return state.set("isDock", action.isDock);
    default:
      return state;
  }
}

export default reducer;
