import setErrors from './errors';
import setFetching from './fetching';
import { SET_TRL } from './types';
import API from '../api/get';

const setTrl = trl => ({
  type: SET_TRL,
  trl,
});

const fetchTrl = () => async dispatch => {
  try {
    dispatch(setFetching(true));
    const trl = await API.get('https://api-test.innoloft.com/trl/');
    if (trl.status === 200) {
      dispatch(setFetching(false));
      dispatch(setTrl(trl.data));
    }
    return trl;
  } catch(err) {
    dispatch(setFetching(false));
    dispatch(setErrors(err));
  }
}

export default fetchTrl;
