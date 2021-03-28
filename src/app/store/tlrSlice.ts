import { RootState } from '.';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import api from '../api';

interface ProductState {
	loading: boolean,
  failed: {
    value: boolean;
    reason?: string;
  },
  tlr?: any;
}

const initialState: ProductState = {
	loading: true,
	failed: {
    value: false,
    reason: ''
  },
  tlr: null
}

export const tlrSlice = createSlice({
  name: 'tlr',
  initialState,
  reducers: {
    getTlr: (state, {payload}) => {
      state.tlr = payload
      state.loading = false
    },
    getTlrFailure: (state, {payload}) => {
      state.loading = false;
			state.failed = {
        value: true,
        reason: payload
      }
    }
  }
})

export const {getTlr, getTlrFailure} = tlrSlice.actions


export const fetchTlr = () => async (dispatch: Dispatch) => {
  try {
    const tlrList = await api.getTlr()
    dispatch(getTlr(tlrList))
  } catch (err) {
    console.error(err.message)
    dispatch(getTlrFailure(err.message))
  }
}

export const selectTlr = (state: RootState) => state.tlr

export default tlrSlice.reducer;
