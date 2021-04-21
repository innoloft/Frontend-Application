import {SET_DATA, SET_LOADING, SET_CONFIGURATION, SET_CONFIG_LOADING} from "../types";


const initialState = {
    configuration:{
        hasUserSection: false,
        id: 1,
        logo: "https://img.innoloft.de/logo.svg",
        mainColor: "#272e71"
    },
    loading: false,
    configLoading: false,
    data:{}
}
const dataReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            case SET_CONFIG_LOADING:
            return {
                ...state,
                configLoading: true
            }
        case SET_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            case SET_CONFIGURATION:
            return {
                ...state,
                configLoading: false,
                configuration: action.payload
            }
        default:
            return {
                initialState
            }
    }
}

export default dataReducer;