import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    FETCH_CONFIGURATION_FAILURE,
    FETCH_CONFIGURATION_PENDING,
    FETCH_CONFIGURATION_SUCCESS,
} from "../actionTypes";

export const fetchConfigurationPending = () => ({
    type: FETCH_CONFIGURATION_PENDING,
    payload: {
        status: "fetchConfigurationPending",
        error: null,
        configuration: {},
    },
});

export const fetchConfigurationFailure = (error: string) => ({
    type: FETCH_CONFIGURATION_FAILURE,
    payload: {
        status: "fetchConfigurationFailure",
        error,
        configuration: {},
    },
});

export const fetchConfigurationSuccess = (configuration: {}) => ({
    type: FETCH_CONFIGURATION_SUCCESS,
    payload: {
        status: "fetchConfigurationSuccess",
        error: null,
        configuration,
    },
});

export const fetchConfigurationAction = (
    props: StoreActionPropsDefs
): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchConfigurationPending());
        const response = await axiosCall(props);
        dispatch(fetchConfigurationSuccess(response?.data));
    } catch (error) {
        dispatch(fetchConfigurationFailure(error ?? ""));
    }
};
