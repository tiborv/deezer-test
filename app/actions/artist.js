import * as api from '../utils/api/artist'

export const ARTIST_SEARCH = 'ARTIST.SEARCH'
export const ARTIST_SEARCH_SUCCESS = 'ARTIST.SEARCH_SUCCESS'
export const search = (query) => (dispatch) => {
  dispatch({ type: ARTIST_SEARCH, query })
  api
    .search(query)
    .then(({ data }) => dispatch({
      type: ARTIST_SEARCH_SUCCESS,
      results: data
    }))
}

export const ARTIST_FETCH = 'ARTIST.FETCH'
export const ARTIST_FETCH_SUCCESS = 'ARTIST.FETCH_SUCCESS'
export const fetch = (artistId) => (dispatch) => {
  dispatch({ type: ARTIST_FETCH })
  api
    .fetch(artistId)
    .then(artist => dispatch({
      type: ARTIST_FETCH_SUCCESS,
      artist
    }))
}

export const ALBUMS_FETCH = 'ARTIST.ALBUMS_FETCH'
export const ALBUMS_FETCH_SUCCESS = 'ARTIST.ALBUMS_FETCH_SUCCESS'
export const fetchAlbums = (artistId) => (dispatch) => {
  dispatch({ type: ALBUMS_FETCH })
  api
    .fetchAlbums(artistId)
    .then(({ data }) => dispatch({
      type: ALBUMS_FETCH_SUCCESS,
      albums: data
    }))
}
