import { viewProductsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case viewProductsTypes.VIEW_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case viewProductsTypes.VIEW_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};
