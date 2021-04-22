import { GET_CONFIGURATION_ERROR, GET_CONFIGURATION_REQUEST, GET_CONFIGURATION_SUCCESS } from "./configurationTypes";

const initialState = {
  loading: false,
  configurationData: {},
  error: "",
};

const configurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONFIGURATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CONFIGURATION_SUCCESS:
      return {
        ...state,
        loading: false,
        configurationData: action.payload,
      };
    case GET_CONFIGURATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default configurationReducer;
