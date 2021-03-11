import { UserType, UserAccountSettingType, UserProfileType } from "../types";
import { DeepCopyObj } from "../utills";

export const InitUserAccountState: UserAccountSettingType = {
    email: "",
    password: "",
    confirmPassword: ""
}
export const InitUserProfileState: UserProfileType = {
    firstName: "",
    lastName: "",
    address: {
        street: "",
        houseNo: "",
        postalCode: ""
    },
    country: ""
}
export const InitUserState: UserType = {
    account: { ...InitUserAccountState },
    profile: { ...DeepCopyObj(InitUserProfileState) }
}