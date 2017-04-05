import { SET_SEARCH_TERM, SET_RATING_MIN } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  ratingMin: 0
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const setRatingMin = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {ratingMin: action.ratingMin})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case SET_RATING_MIN:
      return setRatingMin(state, action)
    default:
      return state
  }
}

export default rootReducer
