import viewTrlsInitialState from '../../store/initialState';
import viewTrlsReducer from './viewTrlsReducer';

export default (state = viewTrlsInitialState, action) => {
  const viewTrls = viewTrlsReducer(state, action);
  return (viewTrls || state);
};
