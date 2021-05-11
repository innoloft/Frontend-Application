import actionTypes from "../actionTypes";
import { configuration as initialState } from "../index";
import {
    FetchConfigrationStateDef,
    FetchConfigurationActionTypeDefs,
} from "../types";

const fetchConfigurationTypes = [...actionTypes];

export const fetchConfigurationReducer = (
    state = initialState,
    fetchConfigurationProps: FetchConfigurationActionTypeDefs
): FetchConfigrationStateDef => {
    return fetchConfigurationTypes.includes(fetchConfigurationProps.type)
        ? { ...state, ...fetchConfigurationProps.payload }
        : state;
};
