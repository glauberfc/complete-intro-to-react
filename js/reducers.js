// @flow

import { combineReducers } from 'redux'
import { SET_SEARCH_TERM } from './actions'

function searchTerm(state: string = '', action: Action): string {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload
  }
  return state
}

export default combineReducers({ searchTerm })
