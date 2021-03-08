import { actions } from "./Actions"


const initialState = {}

const userInfoState = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TO_USER_INFO: {
            return { ...state, ...action.payload }
        }
        case actions.UPDATE_USER_INFO: {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export default userInfoState;
