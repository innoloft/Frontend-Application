import {
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_FAIL,
} from '../constants/productConstants';
import axios from 'axios';

const url = process.env.REACT_APP_URL;
const configQuery = process.env.REACT_APP_CONFIG_QUERY;
const id = process.env.REACT_APP_APP_ID;

export const fetchConfig = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${url}${configQuery}${id}`);
    // const { data } = await axios.get(
    //   `https://api-test.innoloft.com/configuration/2`
    // );
    console.log(data);
    dispatch({
      type: FETCH_CONFIG_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_CONFIG_FAIL,
      payload: err,
    });
  }
};
