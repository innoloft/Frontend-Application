import axios from "axios";
import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PUT_PRODUCT_REQUEST,
  PUT_PRODUCT_SUCCESS,
  PUT_PRODUCT_ERROR,
} from "./productTypes";

const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

const getProductSuccess = (result) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: result,
  };
};

const getProductError = (error) => {
  return {
    type: GET_PRODUCT_ERROR,
    payload: error,
  };
};

export const handleGetProduct = () => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios
      .get("https://api-test.innoloft.com/product/6781/")
      .then((res) => {
        dispatch(getProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductError(err));
      });
  };
};

const putProductRequest = () => {
  return {
    type: PUT_PRODUCT_REQUEST,
  };
};

const putProductSuccess = (result) => {
  return {
    type: PUT_PRODUCT_SUCCESS,
    payload: result,
  };
};

const putProductError = (error) => {
  return {
    type: PUT_PRODUCT_ERROR,
    payload: error,
  };
};

export const handlePutProduct = (product) => {
  return (dispatch) => {
    dispatch(putProductRequest());
    axios
      .put("https://api-test.innoloft.com/product/6781/", product)
      .then((res) => {
        console.log(res.data);
        alert("Product Saved!");
        putProductSuccess(res.data);
      })
      .catch((err) => {
        console.log(err);
        putProductError(err);
      });
  };
};
