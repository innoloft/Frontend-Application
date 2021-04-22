import { SET_ERRORS } from "./types";

const setErrors = errors => ({
  type: SET_ERRORS,
  payload: errors,
});

export default setErrors;
