import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    FETCH_TRL_FAILURE,
    FETCH_TRL_PENDING,
    FETCH_TRL_SUCCESS,
} from "../actionTypes";

export const fetchTrlPending = () => ({
    type: FETCH_TRL_PENDING,
    payload: {
        status: "fetchTrlPending",
        error: null,
        trl: [],
    },
});

export const fetchTrlFailure = (error: string) => ({
    type: FETCH_TRL_FAILURE,
    payload: {
        status: "fetchTrlFailure",
        error,
        trl: [],
    },
});

export const fetchTrlSuccess = (trl: []) => ({
    type: FETCH_TRL_SUCCESS,
    payload: {
        status: "fetchTrlSuccess",
        error: null,
        trl,
    },
});

export const fetchTrlAction = (props: StoreActionPropsDefs): AppThunk => async (
    dispatch
) => {
    try {
        dispatch(fetchTrlPending());
        const response = await axiosCall(props);
        dispatch(fetchTrlSuccess(response?.data));
    } catch (error) {
        dispatch(fetchTrlFailure(error ?? ""));
    }
};
