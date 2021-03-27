import viewProductsInitialState from '../../store/initialState';
import viewProductsReducer from './viewProductsReducer';

export default (state = viewProductsInitialState, action) => {
  const viewProducts = viewProductsReducer(state, action);
  return (viewProducts || state);
};
