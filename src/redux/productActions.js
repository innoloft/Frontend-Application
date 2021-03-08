import axios from "axios";
import { productActionTypes } from "./productActionTypes";

export const fetchProductStart = () => ({
  type: productActionTypes.FETCH_PRODUCT_START,
});
export const fetchProductSuccess = (product) => ({
  type: productActionTypes.FETCH_PRODUCT_SUCCESS,
  payload: product,
});
export const fetchProductFailure = (error) => ({
  type: productActionTypes.FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchProducStartAsnyc = () => async (dispatch) => {
  dispatch(fetchProductStart());

  try {
    const res = await axios.get("https://api-test.innoloft.com/product/6781/");
    dispatch(fetchProductSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(fetchProductFailure(error.message));
  }
};
