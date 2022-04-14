import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  foodList: [],
  typeList: [],
  foodInfo: {
    title: "",
    typeId: "",
    price: 0.0,
    cover: "",
    isOut: 1,
    isChara: 0,
    status: "",
    description: "",
  },
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_FOOD_LIST:
      return state.set("foodList", action.foodList);
    case actionTypes.GET_TYPE_LIST:
      return state.set("typeList", action.typeList);
    case actionTypes.UPDATE_FOOD:
      return state.set("foodInfo", action.foodInfo);
    case actionTypes.CHANGE_FOOD_INFO:
      return state.set("foodInfo", action.foodInfo);
    default:
      return state;
  }
}

export default reducer;
