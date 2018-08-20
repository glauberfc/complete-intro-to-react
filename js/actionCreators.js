// @flow

import { SET_SEARCH_TERM } from './actions'

export default function setSearchTerm(searchTerm: string): setSearchTermAction {
  return { type: SET_SEARCH_TERM, payload: searchTerm }
}
