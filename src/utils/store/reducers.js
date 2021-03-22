/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "utils/history";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const appReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  return rootReducer;
}
