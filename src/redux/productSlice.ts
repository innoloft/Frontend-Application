import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import getData from '../api/getData'
import putData from '../api/putData'
import { ProductProps, TRLProps, IDName } from '../types'
import { RootState } from './store'

export const getProduct = createAsyncThunk<ProductProps>(
  'product/getProduct',
  async () => {
    return await getData('https://api-test.innoloft.com/product/6781/')
  }
)
export const putProduct = createAsyncThunk(
  'product/putProduct',
  async (_, { getState }) => {
    const {product} = getState()  as RootState;
    console.log(product)
    await putData(`https://api-test.innoloft.com/product/6781/`, product)
  }
)

interface initialStateProps{
    item: ProductProps | null
    status: 'loading' | 'success' | 'failed'
}

const initialState: initialStateProps = {
    item: null,
    status: 'loading',
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateTRL: (state ,action: PayloadAction<TRLProps>) => {
            if(state.item) state.item.trl = action.payload
        },
        updateCategories: (state ,action: PayloadAction<IDName[]>) => {
            if(state.item) state.item.categories = action.payload
        },
        updateBusinessModels: (state ,action: PayloadAction<IDName[]>) => {
            if(state.item) state.item.businessModels = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getProduct.rejected, (state) => {
            state.status = 'failed'
        })
        builder.addCase(getProduct.fulfilled, (state, { payload })  => {
            state.item = payload
            state.status = 'success'
        })
      },
  })
  

export const {updateTRL,updateCategories,updateBusinessModels} = productSlice.actions
export default productSlice.reducer