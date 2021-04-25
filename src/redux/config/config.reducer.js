import { ConfigActionTypes } from './config.types';

const INITIAL_STATE = {
    config: null,
    appId: null,
    isFetchingConfig: false,
    errorMessage: null
}

const configReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ConfigActionTypes.FETCH_CONFIG_START:
            return {
                ...state,
                isFetchingConfig: true
            }
        case ConfigActionTypes.FETCH_CONFIG_SUCCESS:
            return {
                ...state,
                config: action.payload,
                isFetchingConfig: false
            }
        case ConfigActionTypes.FETCH_CONFIG_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetchingConfig: false
            }
        default:
            return state
    }
}

export default configReducer;