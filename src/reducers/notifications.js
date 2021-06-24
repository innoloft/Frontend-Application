/**
 * Forms reducer
 * @author Douglasacost
 */

export default (state = {
    items: []
}, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            state.items.push(action.payload)
            return {...state}
        case 'DELETE_NOTIFICATION':
            if(action.payload.id > -1) {
                if(state.items.length === 1) return { items: [] }
                state.items.splice(action.payload.id, 1)
                return {...state}
            }
            state.items.shift()
            return {...state}
        default:
            return state
    }
}