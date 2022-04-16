import { combineReducers } from "redux-immutable";

// import { reducer as foodReaucer } from "../pages/foods/store";
import { reducer as loginReducer } from "@/pages/login/store";
import { reducer as ucenterReducer } from "@/pages/user/store";

const cReducer = combineReducers({
  loginState: loginReducer,
  userState: ucenterReducer,
});

export default cReducer;
