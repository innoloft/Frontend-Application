import { UPDATE_ACCOUNT_INFO, UPDATE_USER_INFO } from "./types";
// import axios from "axios";

export function updateAccountInfo(email, password) {
  // await axios.post("/fakeApi/account", { email, password });

  return {
    type: UPDATE_ACCOUNT_INFO,
    payload: { email, password },
  };
}

export function updateUserInfo(firstName, lastName, address, country) {
  // await axios.post("/fakeApi/user", {firstName, lastName, address, country})
  return {
    type: UPDATE_USER_INFO,
    payload: { firstName, lastName, address, country },
  };
}
