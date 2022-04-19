import { combineReducers } from "redux-immutable";

import { reducer as loginReducer } from "@/pages/login/store";
import { reducer as ucenterReducer } from "@/pages/user/store";
import { reducer as foodReducer } from "@/pages/food/store";
import { reducer as bottomReducer } from "@/components/app-bottom/store";
import { reducer as dockReducer } from "../components/shopping-dock/store";
const cReducer = combineReducers({
  loginState: loginReducer,
  userState: ucenterReducer,
  bottomState: bottomReducer,
  foodState: foodReducer,
  dockState: dockReducer,
});

export default cReducer;
