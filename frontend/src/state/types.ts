export type IAddress = {
  street: string;
  houseNumber: string;
  postalCode: string;
};

export type Countries = "Germany" | "Austria" | "Switzerland";

export type UserMainInfo = {
  email: string;
  password: string;
};

export type UserAdditonalInfo = {
  firstName: string;
  lastName: string;
  address: IAddress;
  country: Countries;
};

export type PopupTypes = "error" | "success" | undefined;

export type InitialRootReducer = {
  userProfile: UserAdditonalInfo & UserMainInfo;
  popupMessage: string;
  popupType: PopupTypes;
};

export enum RootActionEnums {
  UPDATE_MAIN_INFO = "UPDATE_MAIN_INFO",
  UPDATE_ADDITIONAL_INFO = "UPDATE_ADDITIONAL_INFO",
  CLOSE_POPUP = "CLOSE_POPUP",
  SHOW_ERROR_POPUP = "SHOW_ERROR_POPUP",
}
