import {
  ARTIST_FETCH,
  ARTIST_FETCH_SUCCESS,
  ALBUMS_FETCH,
  ALBUMS_FETCH_SUCCESS
} from '../actions/artist'

export default (state = {}, action) => {
  switch (action.type) {
    case ALBUMS_FETCH:
      return { ...state, fetchingAlbums: true }
    case ARTIST_FETCH:
      return { ...state, fetching: true, profile: {} }
    case ARTIST_FETCH_SUCCESS:
      return { ...state, profile: action.artist }
    case ALBUMS_FETCH_SUCCESS:
      return { ...state, albums: action.albums, fetchingAlbums: false }
    default:
      return state
  }
}
