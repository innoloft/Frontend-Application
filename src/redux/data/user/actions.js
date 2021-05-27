import * as types from "./actionTypes";

export const updateMainInfo = (params) =>
{
    return {
        type: types.ACTION_DATA_User_UpdateMainInfo,
        data:params
    };
};
export const updateAdditionalInfo = (params) =>
{
    return {
        type: types.ACTION_DATA_User_UpdateAdditionalInfo,
        data:params
    };
};

export const clearUpdates = () =>
{
    return {
        type: types.ACTION_DATA_User_ClearUpdates,
    };
};

