// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
   switch (action.type) {
      case 'FETCH_TRL':
         return Object.assign({}, action.payload);
      default:
         return state;
   }
}