import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  orderList: [],
  orderNo: "",
  total: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ORDER_LIST:
      return state.set("orderList", action.orderList);
    case actionTypes.CHANGE_ORDER_NO:
      return state.set("orderNo", action.orderNo);
    case actionTypes.CHANGE_ORDER_TOTAL:
      return state.set("total", action.total);
    default:
      return state;
  }
}

export default reducer;
