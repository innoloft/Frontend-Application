import { SET_FETCHING } from "./types";

const setFetching = state => ({
  type: SET_FETCHING,
  payload: state,
});

export default setFetching;
