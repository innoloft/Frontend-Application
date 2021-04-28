import { FetchProductRequest, UpdateProductRequest } from '../utils/api';

export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';
export const FETCH_PRODUCT_LOADING = 'FETCH_PRODUCT_LOADING';

export const fetchProductSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFailure = error => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchProduct = id => async dispatch => {
  const method = 'get';
  const path = `/product/${id}/`;
  try {
    dispatch({ type: FETCH_PRODUCT_LOADING });
    const response = await FetchProductRequest(method, path);
    console.log(response.data);
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};

export const updateProduct = data => async dispatch => {
  const method = 'put';
  const path = `/product/${data.id}/`;
  console.log(data, 'detailed data values');
  try {
    const response = await UpdateProductRequest(method, path, data);
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
    console.log(error.message);
  }
};
