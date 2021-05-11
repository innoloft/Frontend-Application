import actionTypes from "../actionTypes";
import { trl as initialState } from "../index";
import { FetchTrlStateDef, FetchTrlActionTypeDefs } from "../types";

const fetchTrlTypes = [...actionTypes];

export const fetchTrlReducer = (
    state = initialState,
    fetchTrlProps: FetchTrlActionTypeDefs
): FetchTrlStateDef => {
    return fetchTrlTypes.includes(fetchTrlProps.type)
        ? { ...state, ...fetchTrlProps.payload }
        : state;
};
