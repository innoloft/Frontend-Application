import { combineReducers } from "redux";
import userProfileReducer from "./userProfileReducer";

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
});

export default rootReducer;
