/**
 * Test reducer
 * @author Douglasacost
 */

export default (state = {}, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}