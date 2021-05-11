import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchConfigurationReducer } from "./configuration/reducer";
import { fetchProductReducer } from "./product/reducer";
import { fetchTrlReducer } from "./trl/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchConfigurationReducer,
    fetchProductReducer,
    fetchTrlReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
