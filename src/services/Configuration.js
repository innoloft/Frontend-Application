import API from '../utils/Api';

/**
 * Fetch App Configurations (GET)
 */ 
export const getConfigurations = (params) => {
    return API.get(`/configuration/${params}/`);
}
/*--------------*/ 
