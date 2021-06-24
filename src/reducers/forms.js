/**
 * Forms reducer
 * @author Douglasacost
 */

import STATIC_MAP_SITE from "../const"

/**
 * 
 * @param {Object} state
 * @param {Object} state.userInformation
 * @param {Object} state.accountSettingd
 * @param {Object} action 
 * @returns {Object}
 */
const forms = (state = STATIC_MAP_SITE.FORMS, action) => {
    switch (action.type) {
        case 'UPDATE_FORM':
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

export default forms