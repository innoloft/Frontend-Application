import { ConfigActionTypes } from './config.types';

export const fetchConfigStart = () => ({
    type: ConfigActionTypes.FETCH_CONFIG_START
});

export const fetchConfigSuccess = (config) => ({
    type: ConfigActionTypes.FETCH_CONFIG_SUCCESS,
    payload: config
});

export const fetchConfigFailure = (errorMessage) => ({
    type: ConfigActionTypes.FETCH_CONFIG_FAILURE,
    payload: errorMessage
});

export const fetchConfig = (appId) => {
    return dispatch => {
        dispatch(fetchConfigStart());

        fetch(`https://api-test.innoloft.com/configuration/${appId}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(fetchConfigSuccess(data));
            }).catch((error) => dispatch(fetchConfigFailure(error.message)));
    }
}