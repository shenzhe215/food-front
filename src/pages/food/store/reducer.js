import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  foodList: [],
  typeList: [],
  currentType: "",
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FOOD_LIST:
      return state.set("foodList", action.foodList);
    case actionTypes.CHANGE_TYPE_LIST:
      return state.set("typeList", action.typeList);
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    default:
      return state;
  }
}

export default reducer;
