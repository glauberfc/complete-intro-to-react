// @flow

import { combineReducers } from 'redux'
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions'

function searchTerm(state: string = '', action: setSearchTermAction): string {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload
  }
  return state
}

function apiData(state = {}, action: addApiDataAction) {
  if (action.type === ADD_API_DATA) {
    return { ...state, [action.payload.imdbID]: action.payload }
  }
  return state
}

export default combineReducers({ searchTerm, apiData })
