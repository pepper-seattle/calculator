import { combineReducers } from "redux";
import { reducer } from "./reducers";

const rootReducer = combineReducers({
  calculator: reducer,
});

export default rootReducer;