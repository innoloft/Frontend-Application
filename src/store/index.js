import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import combineReducers from './reducers'

const middlewares = applyMiddleware(thunk)

const store = createStore(combineReducers, composeWithDevTools(middlewares))

export default store
