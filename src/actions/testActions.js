/**
 * Redux test Action
 * @author Douglasacost
 */

export const testAction = () => dispatch => {
    dispatch({
        type: 'TEST_ACTION',
        payload: 'this is a test'
    })
}