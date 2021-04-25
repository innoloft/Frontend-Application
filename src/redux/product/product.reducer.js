import { ProductActionTypes } from './product.types';
import { setProductTrl, setProductCategories, setProductBusinessModels } from './product.utils';

import { TABS } from '../../components/tabs/tabs.component';

const INITIAL_STATE = {
    product: null,
    isFetching: false,
    errorMessage: null,
    trl: null,
    activeTab: TABS.DESCRIPTION
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT_START:
            return {
                ...state,
                isFetching: true
            }
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                product: action.payload
            }
        case ProductActionTypes.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case ProductActionTypes.FETCH_TRL_SUCCESS:
            return {
                ...state,
                trl: action.payload
            }
        case ProductActionTypes.FETCH_TRL_FAILURE:
            return state
        case ProductActionTypes.UPDATE_TRL:
            return {
                ...state,
                product: setProductTrl(state.product, action.payload)
            }
        case ProductActionTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                product: setProductCategories(state.product, action.payload)
            }
        case ProductActionTypes.UPDATE_BUSINESS_MODELS:
            return {
                ...state,
                product: setProductBusinessModels(state.product, action.payload)
            }
        case ProductActionTypes.SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload
            }
        default:
            return state;
    }
};

export default productReducer;