// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";

import { reducer as loginReducer } from "@/pages/login/store";
import { reducer as ucenterReducer } from "@/pages/user/store";
import { reducer as foodReducer } from "@/pages/food/store";
import { reducer as orderReducer } from "@/pages/order/store";
import { reducer as homeReducer } from "@/pages/home/store";
const appReducer = combineReducers({
  loginState: loginReducer,
  userState: ucenterReducer,
  foodState: foodReducer,
  orderState: orderReducer,
  homeState: homeReducer,
});

const cReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default cReducer;
