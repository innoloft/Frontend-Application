import axios from "axios";
import { GET_CONFIGURATION_ERROR, GET_CONFIGURATION_REQUEST, GET_CONFIGURATION_SUCCESS } from "./configurationTypes";

const APP_ID = process.env.REACT_APP_ID || 1;

const getConfigurationRequest = () => {
  return {
    type: GET_CONFIGURATION_REQUEST,
  };
};

const getConfigurationSuccess = (result) => {
  return {
    type: GET_CONFIGURATION_SUCCESS,
    payload: result,
  };
};

const getConfigurationError = (error) => {
  return {
    type: GET_CONFIGURATION_ERROR,
    payload: error,
  };
};

export const handleGetConfiguration = () => {
  return (dispatch) => {
    dispatch(getConfigurationRequest());
    axios
      .get(`https://api-test.innoloft.com/configuration/${APP_ID}/`)
      .then((res) => dispatch(getConfigurationSuccess(res.data)))
      .catch((err) => dispatch(getConfigurationError(err)));
  };
};
