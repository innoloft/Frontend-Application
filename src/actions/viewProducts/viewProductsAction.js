import axios from 'axios';
import { apiList } from '../../helpers';
import { viewProductsTypes } from '../../actionTypes';

export const viewProduct = (productId) => (dispatch) => axios.get(`${apiList.VEIW_PRODUCT_DETAILS_API}/${productId}`)
  .then((response) => {
    dispatch({
      type: viewProductsTypes.VIEW_PRODUCT_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: viewProductsTypes.VIEW_PRODUCT_FAILURE,
      payload: error.response.data
    });
  });
