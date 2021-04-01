import axios from "axios";

export function fetchProducts() {
  return (dispatch) => {
    return axios
      .get("https://api-test.innoloft.com/product/6781/")
      .then((res) => {
        dispatch(getData(res.data));
      });
  };
}

export const FETCH_DATA = "FETCH_DATA";

export function getData(data) {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
}
