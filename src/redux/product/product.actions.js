import { ProductActionTypes } from './product.types';

export const fetchProductStart = () => ({
    type: ProductActionTypes.FETCH_PRODUCT_START
});

export const fetchProductSuccess = (product) => ({
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: product
});

export const fetchProductFailure = (errorMessage) => ({
    type: ProductActionTypes.FETCH_PRODUCT_FAILURE,
    payload: errorMessage
});

export const fetchTrlSuccess = (trl) => ({
    type: ProductActionTypes.FETCH_TRL_SUCCESS,
    payload: trl
});

export const fetchTrlFailure = (errorMessage) => ({
    type: ProductActionTypes.FETCH_TRL_FAILURE,
    payload: errorMessage
});

export const fetchProduct = (productId) => {
    return dispatch => {
        dispatch(fetchProductStart());

        fetch(`https://api-test.innoloft.com/product/${productId}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(fetchProductSuccess(data));
            }).catch((error) => dispatch(fetchProductFailure(error.message)));
    }
}

export const fetchTrl = () => {
    return dispatch => {
        fetch(`https://api-test.innoloft.com/trl/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(fetchTrlSuccess(data));
            }).catch((error) => dispatch(fetchTrlFailure(error.message)));
    }
}

export const updateProduct = (product) => {
    return dispatch => {
        fetch('https://api-test.innoloft.com/product/6781/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const updateTrl = (trl) => ({
    type: ProductActionTypes.UPDATE_TRL,
    payload: trl
});

export const updateCategories = (categories) => ({
    type: ProductActionTypes.UPDATE_CATEGORIES,
    payload: categories
});

export const updateBusinessModels = (bms) => ({
    type: ProductActionTypes.UPDATE_BUSINESS_MODELS,
    payload: bms
});

export const setActiveTab = (activeTab) => ({
    type: ProductActionTypes.SET_ACTIVE_TAB,
    payload: activeTab
});