import actionTypes from "../actionTypes";
import { appDropDown as initialState } from "../index";
import { SetDropDownActionTypeDef, SetDropDownState } from "../types";

const dropDownTypes = actionTypes;

export const dropDownReducer = (
    state = initialState,
    dropDownProps: SetDropDownActionTypeDef
): SetDropDownState => {
    return dropDownTypes.includes(dropDownProps.type)
        ? { ...state, ...dropDownProps.payload }
        : state;
};

export default dropDownReducer;
