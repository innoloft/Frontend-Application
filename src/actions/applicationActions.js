/**
 * Redux loader Action
 * @author Douglasacost
 */


 /**
  * 
  * @param {Boolean} payload 
  */
export const setIsLoading = (payload) => dispatch => {
    dispatch({
        type: 'UPDATE_IS_LOADING',
        payload
    })
}

 /**
  * 
  * @param {Boolean} payload 
  */
export const setIsMenuOpen = (payload) => dispatch => {
    dispatch({
        type: 'UPDATE_IS_MENU_OPEN',
        payload
    })
}