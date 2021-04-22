import setErrors from './errors';
import setFetching from './fetching';
import { SET_PRODUCT } from './types';
import API from '../api/get';

export const setProduct = product => ({
  type: SET_PRODUCT,
  product,
});

const fetchProduct = () => async dispatch => {
  try {
    dispatch(setFetching(true));
    const product = await API.get('/product/6781/');
    if (product.status === 200) {
      dispatch(setFetching(false));
      dispatch(setProduct(product.data));
    }
    return product;
  } catch(err) {
    dispatch(setFetching(false));
    dispatch(setErrors(err));
  }
}

export default fetchProduct;
