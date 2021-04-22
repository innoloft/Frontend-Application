import { combineReducers } from 'redux';
import product from './product';
import trl from './trl';
import fetching from './fetching';
import errors from './errors';

export default combineReducers({
  product,
  trl,
  fetching,
  errors,
});
