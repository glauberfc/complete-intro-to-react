import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: ''
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }

    default:
      return state
  }
}

export default rootReducer
