import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

// Making a store
export default createStore(reducer, applyMiddleware(thunk))
