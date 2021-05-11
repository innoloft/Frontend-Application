import { AppThunk } from "../../types";
import { SET_CLOSE_DROPDOWN, SET_DISPLAY_DROPDOWN } from "../actionTypes";

export const setDropDownDisplay = () => ({
    type: SET_DISPLAY_DROPDOWN,
    payload: {
        display: true,
    },
});

export const setDropDownClose = () => {
    return {
        type: SET_CLOSE_DROPDOWN,
        payload: {
            display: false,
        },
    };
};

export const setDropDownAction = (close: boolean): AppThunk => async (
    dispatch
) => {
    if (close) {
        dispatch(setDropDownClose());
    } else {
        dispatch(setDropDownDisplay());
    }
};
