import { combineReducers } from "redux-immutable";

import { reducer as foodReaucer } from "../pages/foods/store";

const cReducer = combineReducers({
  food: foodReaucer,
});

export default cReducer;
