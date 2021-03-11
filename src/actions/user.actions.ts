import { Dispatch } from "redux";
import { axiosBasic } from "../config/axios.config";
import { UserAccountSettingType, UserProfileType, UserType } from "../types";
import { ActionTypes } from "./action.types";
import { SuccessNotification, Messages } from "../utills"
import { config } from "../config/api.end.points";

const { ProfileSuccess } = Messages;
const { REST_API } = config;
const { Account } = REST_API;
const { USER_TYPES: {
  SET_USER_ACCOUNT_SETTING,
  SET_USER_INFORMATION,
  CLEAR_USER_ACCOUNT_SETTING,
  CLEAR_USER_INFORMATION } } = ActionTypes;

export const setUserAccountSetting = (data: UserAccountSettingType) => ({
  type: SET_USER_ACCOUNT_SETTING,
  payload: data,
})
export const setUserInformation = (data: UserProfileType) => ({
  type: SET_USER_INFORMATION,
  payload: data,
})
export const clearUserAccountSetting = () => ({
  type: CLEAR_USER_ACCOUNT_SETTING,
})
export const clearUserInformation = () => ({
  type: CLEAR_USER_INFORMATION,
})



// Save user profile
export const saveUserProfile = (data: UserType
) => async (dispatch: Dispatch) => {
  try {
    // POST call to save record
    // const response = await axiosBasic.post(`${Account.Save}`, data);
    //  const { data } = response;
    SuccessNotification(ProfileSuccess);
    console.log(data)
  } catch (error) {
    console.log("error");
  }
};



