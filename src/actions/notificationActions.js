/**
 * Redux test Action
 * @author Douglasacost
 */

 /**
  * 
  * @param {number} id 
  */
export const deleteNotification = (id) => dispatch => {
    dispatch({
        type: 'DELETE_NOTIFICATION',
        payload: {
            id
        }
    })
}

/**
 * 
 * @param {'success' | 'danger'} type 
 * @param {String} message 
 */
export const addNotification = (type, message) => dispatch => {
    dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
            type,
            message
        }
    })
}