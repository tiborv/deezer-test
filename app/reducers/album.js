import {
  TRACKS_FETCH,
  TRACKS_FETCH_SUCCESS
} from '../actions/album'

export default (state = { albums: {} }, action) => {
  switch (action.type) {
    case TRACKS_FETCH:
      return { ...state, fetchingTracks: true }
    case TRACKS_FETCH_SUCCESS:
      const nextState = { ...state, fetchingTracks: false }
      nextState.albums = { ...state.albums }
      nextState.albums[action.data.id] = {
        tracks: action.data.tracks.data,
        title: action.data.title
      }
      return nextState
    default:
      return state
  }
}
