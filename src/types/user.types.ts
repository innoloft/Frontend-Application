//#region Address type

interface Address {
  street: string
  houseNo: string
  postalCode: string
}

//#endregion

//#region user types
export interface UserAccountSettingType {
  email: string
  password: string
  confirmPassword: string
}
export interface UserProfileType {
  firstName: string
  lastName: string
  address: Address
  country: string
}
export interface UserType {
  id?: number
  account: UserAccountSettingType
  profile: UserProfileType
}
//#endregion

