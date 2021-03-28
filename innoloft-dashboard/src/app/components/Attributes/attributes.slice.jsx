import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  trl: {},
};

const trlSlice = createSlice({
  name: "Trl",
  initialState,
  reducers: {
    getTrl: (state) => {
      state.loading = true;
    },
    getTrlSuccess: (state, { payload }) => {
      state.trl = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTrlFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export function fetchTrl() {
  return async (dispatch) => {
    dispatch(getTrl());

    try {
      const response = await fetch(
        `https://api-test.innoloft.com/trl/`
      );
      const data = await response.json();

      dispatch(getTrlSuccess(data));
    } catch (error) {
      dispatch(getTrlFailure());
    }
  };
}

export const {
  getTrl,
  getTrlSuccess,
  getTrlFailure,
} = trlSlice.actions;
export const trlSelector = (state) => state.trl;
export default trlSlice.reducer;