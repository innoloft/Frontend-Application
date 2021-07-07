import productActionTypes from "./product.types";
import axios from "../helpers/axios-client";

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

export const fetchProducts = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(fetchProductStart());
      try {
        const response = await axios.get("/product/6781/");
        const { data } = response;
        dispatch(fetchProductSuccess(data));
      } catch (error) {
        dispatch(fetchProductFailure(error));
        reject(error);
      }
    });
  };
};
