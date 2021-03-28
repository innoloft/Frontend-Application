import { RootState } from '.';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import api from '../api';

interface ConfigurationState {
  config: {
    id: number,
    logo: string,
    mainColor: string,
    hasUserSection: boolean
  },
  failed: {
    value: boolean;
    reason?: string;
  },
}

const initialState: ConfigurationState = {
	config: {
    id: 1,
    logo: '/images/logo.svg',
    mainColor: '#272e71',
    hasUserSection: true,
  },
  failed: {
    value: false,
    reason: undefined
  },
}

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    getConfig: (state, {payload}) => {
      if(payload){
        state.config = payload
      }
    },
    getConfigFailure: (state, {payload}) => {
      state.failed = payload
    }
  }
})

export const {getConfig, getConfigFailure} = configurationSlice.actions

export const fetchConfiguration = () => async (dispatch: Dispatch) =>  {
  try {
    const config = await api.getConfiguration()
    dispatch(getConfig(config))
  } catch (err) {
    console.error(err.message)
    dispatch(getConfigFailure({value: true, reason: err.message}))
  }
}


export const selectConfig = (state: RootState) => state.configuration

export default configurationSlice.reducer;
