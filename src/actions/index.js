export const loadProduct = (data) => {
    return {
        type: 'LOAD_PRODUCT',
        payload: data 
    };
};

export const errorProduct = (data) => {
    return {
        type: 'ERROR_PRODUCT',
        payload: data
    };
};

export const loadTrl = (data) => {
    return {
        type: 'LOAD_TRL',
        payload: data 
    };
};

export const errorTrl = (data) => {
    return {
        type: 'ERROR_TRL',
        payload: data
    };
};

export const updateCategory = (data) => {
    return {
        type: 'UPDATE_CATEGORY',
        payload: data
    };
};

export const updateBusinessModel = (data) => {
    return {
        type: 'UPDATE_BUSINESS_MODEL',
        payload: data
    };
};

export const updateTrl = (data) => {
    return {
        type: 'UPDATE_TRL',
        payload: data
    };
};

export const saveAttributes = () => {
    return {
        type: 'SAVE_ATTRIBUTES'
    };
};

export const errorAttributes = () => {
    return {
        type: 'ERROR_ATTRIBUTES'
    };
};

export const switchTo = (data) => {
    return {
        type: 'SWITCH',
        payload: data
    }
}