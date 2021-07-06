import { Reducer } from "redux";
import { InitialRootReducer, RootActionEnums } from "./types";

const initRootState: InitialRootReducer = {
  userProfile: {
    firstName: "Mukul",
    lastName: "Kumar Jha",
    email: "jmickeyji@gmail.com",
    password: "myStrongPassword@123",
    address: {
      street: "Kelsenstrase 47",
      houseNumber: "1657 Kandlschlag",
      postalCode: "3033",
    },
    country: "Austria",
  },
  popupMessage: "",
  popupType: undefined,
};

const rootReducer: Reducer<InitialRootReducer, any> = (
  state: InitialRootReducer = initRootState,
  { type, payload }
) => {
  switch (type) {
    case RootActionEnums.UPDATE_MAIN_INFO: {
      return {
        userProfile: {
          ...state.userProfile,
          email: payload.email,
          password: payload.password,
        },
        popupMessage: "User's main info updated successfully!",
        popupType: "success",
      };
    }
    case RootActionEnums.UPDATE_ADDITIONAL_INFO: {
      return {
        userProfile: {
          ...state.userProfile,
          firstName: payload.firstName,
          lastName: payload.lastName,
          address: payload.address,
          country: payload.country,
        },
        popupMessage: "User's additional info updated successfully!",
        popupType: "success",
      };
    }
    case RootActionEnums.SHOW_ERROR_POPUP: {
      return {
        ...state,
        popupMessage: payload,
        popupType: "error",
      };
    }
    case RootActionEnums.CLOSE_POPUP: {
      return {
        ...state,
        popupMessage: "",
        popupType: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;

export { initRootState };
