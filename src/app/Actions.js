
export const actions = {
    ADD_TO_USER_INFO: '@ALL_ORDERS_STATE/ADD_TO_USER_INFO',
    UPDATE_USER_INFO: '@ALL_ORDERS_STATE/UPDATE_USER_INFO',
}

export const setUserInfo = (userInfo) => ({
    type: actions.ADD_TO_USER_INFO,
    payload: userInfo,
})

export const updateUserInfo = (userInfo) => ({
    type: actions.UPDATE_USER_INFO,
    payload: userInfo,
})
