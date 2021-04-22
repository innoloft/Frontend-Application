import axios from 'axios';
import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  FETCH_TRL_FAIL,
  FETCH_TRL_SUCCESS,
} from '../constants/productConstants';

const url = process.env.REACT_APP_URL;
const productQuery = process.env.REACT_APP_PROD_QUERY;
const trlQuery = process.env.REACT_APP_TRL_QUERY;
const id = process.env.REACT_APP_ID;

export const getProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_REQUEST,
    });

    const { data } = await axios.get(`${url}${productQuery}${id}`);

    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: err,
    });
  }
};

export const getTrl = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${url}${trlQuery}`);
    dispatch({ type: FETCH_TRL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_TRL_FAIL, payload: err });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    await axios.put(`${url}${productQuery}${product.id}`, product);

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: err,
    });
  }
};
