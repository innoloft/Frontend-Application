const initialState = {
    loading: true,
    product: {}, 
    listOfTrl: {},
}
function product(state= initialState, action) {
    switch (action.type) {
        case "FETCH_PRODUCT":
            return {
                ...state,
               product: action.payload,
               loading: false,

            }; 
        case "FETCH_TRL_LIST": 
            return {
                ...state,
                listOfTrl: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export { product };