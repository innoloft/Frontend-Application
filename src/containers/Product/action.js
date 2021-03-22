import { GET_ALL_INFO, SET_ALL_INFO, UPDATE_INFO } from "./constants";

export function getAllInfo(payload) {
  return {
    type: GET_ALL_INFO,
    payload,
  };
}

export function setAllInfo(payload) {
  return {
    type: SET_ALL_INFO,
    payload,
  };
}

export function updateInfo(payload) {
  return {
    type: UPDATE_INFO,
    payload,
  };
}
