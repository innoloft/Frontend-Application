import {combineReducers} from 'redux';

const productReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_PRODUCT':
            return action.payload;
        case 'ERROR_PRODUCT':
            return action.payload;
        case 'UPDATE_CATEGORY':
            return action.payload;
        case 'UPDATE_BUSINESS_MODEL':
            return action.payload;
        case 'UPDATE_TRL':
            return action.payload;
        default:
            return state;
    }
}

const switchReducer = (state = 'desc', action) => {
    switch(action.type) {
        case 'SWITCH':
            return action.payload
        default:
            return state;
    }
}

const trlReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_TRL':
            return action.payload;
        case 'ERROR_TRL':
            return action.payload;
        default:
            return state;
    }
}

const saveReducer = (state = true, action) => {
    switch(action.type) {
        case 'SAVE_ATTRIBUTES':
            return true;
        case 'ERROR_ATTRIBUTES':
            return false;
        case 'UPDATE_CATEGORY':
            return false;
        case 'UPDATE_BUSINESS_MODEL':
            return false;
        case 'UPDATE_TRL':
            return false;
        default:
            return state;
    }
}

const allReducers = combineReducers({
    product: productReducer,
    switchTo: switchReducer,
    trl: trlReducer,
    save: saveReducer
});

export default allReducers;