import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  foodList: [],
  typeList: [],
  currentType: "",
  orderInfo: [],
  curFood: {},
  orderMoney: 0,
  foodCount: 0,
  total: 0,
  orderList: [],
  foodOrderCount: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FOOD_LIST:
      return state.set("foodList", action.foodList);
    case actionTypes.CHANGE_TYPE_LIST:
      return state.set("typeList", action.typeList);
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    case actionTypes.CHANGE_CUR_FOOD:
      return state.set("curFood", action.curFood);
    case actionTypes.CHANGE_ORDER_MONEY:
      return state.set("orderMoney", action.orderMoney);
    case actionTypes.CHANGE_ORDER_COUNT:
      return state.set("foodCount", action.foodCount);
    case actionTypes.CHANGE_FOOD_ORDER_COUNT:
      return state.set("foodOrderCount", action.foodOrderCount);
    case actionTypes.CHANGE_ORDER_LIST:
      return state.set("orderList", action.orderList);
    case actionTypes.CHANGE_FOOD_LIST_TOTAL:
      return state.set("total", action.total);
    default:
      return state;
  }
}
export default reducer;
