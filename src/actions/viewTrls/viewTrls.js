import axios from 'axios';
import { apiList } from '../../helpers';
import { viewTrlsTypes } from '../../actionTypes';

export const viewTrls = () => (dispatch) => axios.get(`${apiList.VEIW_TRLS_API}`)
  .then((response) => {
    dispatch({
      type: viewTrlsTypes.VIEW_TRLS_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: viewTrlsTypes.VIEW_TRLS_FAILURE,
      payload: error.response.data
    });
  });
