import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
    },
  },
});

export function fetchProduct() {
  return async (dispatch) => {
    dispatch(getProduct());

    try {
      const response = await fetch(
        `https://api-test.innoloft.com/product/6781/`
      );
      const data = await response.json();

      dispatch(getProductSuccess(data));
    } catch (error) {
      dispatch(getProductFailure(error));
    }
  };
}

export const {
  getProduct,
  getProductSuccess,
  getProductFailure,
} = productSlice.actions;
export const productSelector = (state) => state.product;
export default productSlice.reducer;
