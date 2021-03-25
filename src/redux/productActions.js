import axios from "axios";
import { productActionTypes } from "./productActionTypes";

// fetch Product start
export const fetchProductStart = () => ({
  type: productActionTypes.FETCH_PRODUCT_START,
});

// fetch Product success
export const fetchProductSuccess = (product) => ({
  type: productActionTypes.FETCH_PRODUCT_SUCCESS,
  payload: product,
});

// fetch Product failure
export const fetchProductFailure = (error) => ({
  type: productActionTypes.FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchProducStartAsnyc = () => async (dispatch) => {
  dispatch(fetchProductStart());

  try {
    // Product API call
    let url = "https://api-test.innoloft.com/product/6781/"
    const res = await axios.get(url);
    dispatch(fetchProductSuccess(res.data));
  } catch (error) {
    // fetch Proudct API error
    dispatch(fetchProductFailure(error.message));
  }
};
