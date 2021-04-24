import { getConfigurations } from '../../services/Configuration';

export const FETCH_CONFIGURATION_PENDING = 'FETCH_CONFIGURATION_PENDING';
export const FETCH_CONFIGURATION_SUCCESS = 'FETCH_CONFIGURATION_SUCCESS';
export const FETCH_CONFIGURATION_ERROR = 'FETCH_CONFIGURATION_ERROR';


export const fetchConfigurationPending = () => {
    return {
        type: FETCH_CONFIGURATION_PENDING
    }
}

export const fetchConfigurationSuccess = (configuration) => {
    return {
        type: FETCH_CONFIGURATION_SUCCESS,
        configuration
    }
}

export const fetchConfigurationError = (error) => {
    return {
        type: FETCH_CONFIGURATION_ERROR,
        error: error
    }
}


export const fetchConfiguration = (params) => {
    return dispatch => {
        dispatch(fetchConfigurationPending());
        getConfigurations(params)
        .then(res => {
            if(res && res.data) {
                dispatch(fetchConfigurationSuccess(res.data));
                return res.data;
            }
        })
        .catch(error => {
            dispatch(fetchConfigurationError(error));
        })
    }
};


export const getConfigurationState = state => state.configuration;
export const getConfigurationPending = state => state.pending;
export const getConfigurationError = state => state.error;