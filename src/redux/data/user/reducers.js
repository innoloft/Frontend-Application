import * as Types from "./actionTypes";

let initState = {
    mainInfo: {
        Password: "",
        ConfirmPassword: "",
        Email: "",
        successUpdate: false
    },
    additionalInfo: {
        FirstName: "",
        LastName: "",
        Address: "",
        Country: "",
        successUpdate: false
    }
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.ACTION_DATA_User_UpdateMainInfo_Success:
            return {
                ...state,
                mainInfo: {...action.data,successUpdate: true}
            };
        case Types.ACTION_DATA_User_UpdateAdditionalInfo_Success:
            return {
                ...state,
                additionalInfo: {...action.data,successUpdate: true}
            };

        case Types.ACTION_DATA_User_ClearUpdates:
            let mainInfo = state.mainInfo;
            let additionalInfo = state.additionalInfo;
            mainInfo = {...mainInfo, successUpdate: false};
            additionalInfo = {...additionalInfo, successUpdate: false};
            return {
                ...state,
                mainInfo: mainInfo,
                additionalInfo: additionalInfo
            };

        default:
            return state;
    }
};
export default userReducer;
