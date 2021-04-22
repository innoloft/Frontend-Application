import { combineReducers } from 'redux';
import { getConfigReducer } from './config';
import {
  getProductReducer,
  getTrlReducer,
  updateProductReducer,
} from './productReducer';

const rootReducer = combineReducers({
  product: getProductReducer,
  trl: getTrlReducer,
  updateProduct: updateProductReducer,
  getConfig: getConfigReducer,
});

export default rootReducer;
