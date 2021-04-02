import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./ProductTypes";
import axios from "axios";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest);
    return () => {
      axios
        .get("https://api-test.innoloft.com/product/6781/")
        .then((res) => {
          const products = res.data;
          dispatch(fetchProductsSuccess(products));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchProductsFailure(errorMsg));
        });
    };
  };
};
