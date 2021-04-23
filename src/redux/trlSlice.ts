import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getData from '../api/getData'
import { TRLProps } from '../types'

export const getTRL = createAsyncThunk<TRLProps[]>(
  'trl/getTRL',
  async () => {
    return await getData('https://api-test.innoloft.com/trl/')
  }
)


interface initialStateProps{
    item: TRLProps[] | null
    status: 'loading' | 'success' | 'failed'
}

const initialState: initialStateProps = {
    item: null,
    status: 'loading',
}

const trlSlice = createSlice({
    name: 'trl',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getTRL.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getTRL.rejected, (state) => {
            state.status = 'failed'
        })
        builder.addCase(getTRL.fulfilled, (state, { payload })  => {
            state.item = payload
            state.status = 'success'
        })
      },
  })
  


export default trlSlice.reducer