import { ARTIST_SEARCH, ARTIST_SEARCH_SUCCESS } from '../actions/artist'

export default (state = [], action) => {
  switch (action.type) {
    case ARTIST_SEARCH:
      return { ...state, searching: true, query: action.query }
    case ARTIST_SEARCH_SUCCESS:
      return { ...state, results: action.results, searching: false }
    default:
      return state
  }
}
