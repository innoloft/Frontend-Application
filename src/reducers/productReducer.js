// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
   switch (action.type) {
      case 'FETCH_PRODUCT':
         return Object.assign({}, action.payload);
      case 'ADD_ATTRIBUTE':
         return Object.assign({}, action.payload);
      default:
         return state;
   }
}