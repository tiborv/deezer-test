import * as api from '../utils/api/album'

export const TRACKS_FETCH = 'ALBUM.TRACKS_FETCH'
export const TRACKS_FETCH_SUCCESS = 'ALBUM.TRACKS_FETCH_SUCCESS'
export const fetchTracks = (albumId) => (dispatch) => {
  dispatch({ type: TRACKS_FETCH })
  api
    .fetchTracks(albumId)
    .then((data) => dispatch({
      type: TRACKS_FETCH_SUCCESS,
      data
    }))
}
