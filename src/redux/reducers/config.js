import { CONFIG_ACTIONS } from "../actions";

const initialState = {
  config: {},
  loading: true
};

const configReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONFIG_ACTIONS.LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case CONFIG_ACTIONS.CONFIGURATION_LOADED: {
      return {
        ...state,
        config: action.payload,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default configReducer
