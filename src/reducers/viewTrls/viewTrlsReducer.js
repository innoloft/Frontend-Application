import { viewTrlsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case viewTrlsTypes.VIEW_TRLS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case viewTrlsTypes.VIEW_TRLS_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};
