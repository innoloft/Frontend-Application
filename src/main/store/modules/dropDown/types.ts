import { SET_CLOSE_DROPDOWN, SET_DISPLAY_DROPDOWN } from "./actionTypes";

export interface SetDropDownState {
    readonly display: boolean | undefined;
}

export interface SetDisplayDropDownActionDef {
    type: typeof SET_DISPLAY_DROPDOWN;
    payload: SetDropDownState;
}

export interface SetCloseDropDownActionDef {
    type: typeof SET_CLOSE_DROPDOWN;
    payload: SetDropDownState;
}

export type SetDropDownActionTypeDef =
    | SetDisplayDropDownActionDef
    | SetCloseDropDownActionDef;
