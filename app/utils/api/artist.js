import { httpGet } from '../http'

const API_BASE = '/api'
const ARTIST = API_BASE + '/artist'
const ARTIST_SEARCH = API_BASE + '/search/artist'

export function search (q) {
  return httpGet(ARTIST_SEARCH, { q })
}

export function fetch (artistId) {
  return httpGet(`${ARTIST}/${artistId}`)
}

export function fetchAlbums (artistId) {
  return httpGet(`${ARTIST}/${artistId}/albums`)
}
