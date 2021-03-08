import { useDispatch } from "react-redux";
import { PRODUCT_ACTION } from "../redux/actions";
import { Api_endpoint } from "../config";
import React from "react";

const useGetProduct = () => {
  const dispatch = useDispatch();
  const getProduct = React.useCallback(
    async () => {
      try {
        dispatch({
          type: PRODUCT_ACTION.LOADING
        });
        const response = await fetch(`${Api_endpoint}/product/6781/`);
        const data = await response.json();
        if (data) {
          dispatch({
            type: PRODUCT_ACTION.FETCH_PRODUCT,
            payload: data
          });
        }
      } catch (error) {
        throw error;
      }
    },
    [dispatch]
  );
  React.useEffect(() => {
    getProduct();
  }, []);
};

const getTRLList = async () => {
  try {
    const res = await fetch(`${Api_endpoint}/trl/`);
    return await res.json(); 
  } catch (error) {
    throw error;
  }
};

export { useGetProduct, getTRLList };
