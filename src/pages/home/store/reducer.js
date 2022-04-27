import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  banner: [],
  couponList: [],
  userCouponList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER_LIST:
      return state.set("banner", action.banner);
    case actionTypes.CHANGE_COUPON_LIST:
      return state.set("couponList", action.couponList);
    case actionTypes.CHANGE_USER_COUPON:
      return state.set("userCouponList", action.userCouponList);
    default:
      return state;
  }
}

export default reducer;
