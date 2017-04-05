import { SET_SEARCH_TERM, SET_RATING_MIN } from './actions'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function setRatingMin (ratingMin) {
  return { type: SET_RATING_MIN, ratingMin }
}
