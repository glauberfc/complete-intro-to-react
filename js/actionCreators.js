import { SET_SEARCH_TERM } from './actions'

export default function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm }
}
