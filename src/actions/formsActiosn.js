/**
 * Redux test Action
 * @author Douglasacost
 */

 /**
  * 
  * @param {'userInformation' | 'accountSettings'} formName 
  * @param {Object} data 
  */
export const updateForm = (formName, data) => dispatch => {
    dispatch({
        type: 'UPDATE_FORM',
        payload: {
            [formName]: data
        }
    })
}