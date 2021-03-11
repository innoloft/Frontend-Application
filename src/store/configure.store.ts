import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "../reducer/root.reducer";

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
