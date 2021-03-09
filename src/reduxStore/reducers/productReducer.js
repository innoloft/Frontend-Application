export default (state = {}, action) => {
    let initial
    switch (action.type) {
        case 'ALL_PRODUCT':
            return {
                ...state,
                result: action.payload
            }
        case 'TRL_PRODUCT':
            return {
                ...state,
                trl: action.payload
            }
        default:
            return state
    }
}