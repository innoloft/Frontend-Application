import { 
    FETCH_CONFIGURATION_ERROR, 
    FETCH_CONFIGURATION_SUCCESS, 
    FETCH_CONFIGURATION_PENDING 
} from '../action/index';

export const configurationReducer = (state= {}, action) => {
    switch(action.type){
        case FETCH_CONFIGURATION_SUCCESS: 
            return {
                ...state,
                pending: false,
                ...action.configuration
            }

        case FETCH_CONFIGURATION_PENDING:
            return {
                ...state,
                pending: true
            }

        case FETCH_CONFIGURATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
            
        default:
            return state;
    }
}

