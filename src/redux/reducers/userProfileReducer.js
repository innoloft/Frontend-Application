import {
  UPDATE_ACCOUNT_INFO,
  UPDATE_USER_INFO,
} from "../actions/UserProfile/types";

const initialState = {
  email: "johndoe@mail.com",
  password: "johndoe",

  firstName: "John",
  lastName: "Doe",
  address: "Jülicher Straße 72a c/o digitalHUB, 52070 Aachen",
  country: "Germany",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_ACCOUNT_INFO:
      return {
        ...state,
        email: payload.email,
        password: payload.password,
      };

    case UPDATE_USER_INFO:
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        address: payload.address,
        country: payload.country,
      };

    default:
      return state;
  }
}
