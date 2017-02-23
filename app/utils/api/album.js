import { httpGet } from '../http'

const API_BASE = '/api'
const ALBUM = API_BASE + '/album'

export function fetchTracks (albumId) {
  return httpGet(`${ALBUM}/${albumId}`)
}
