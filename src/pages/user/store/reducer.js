import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  locationList: [],
  curLocation: {},
  couponList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_LOCATION:
      return state.set("locationList", action.locationList);
    case actionTypes.CHANGE_CUR_LOCATION:
      return state.set("curLocation", action.curLocation);
    case actionTypes.CHANGE_COUPON_LIST:
      return state.set("couponList", action.couponList);
    default:
      return state;
  }
}

export default reducer;
