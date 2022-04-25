import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  orderList: [],
  orderNo:"",
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ORDER_LIST:
      return state.set("orderList", action.orderList);
    default:
      return state;
  }
}

export default reducer;
