import { combineReducers } from "redux";
import { userReducer } from "./user/reducers";

export const dataReducer = combineReducers({
  user: userReducer,
});
