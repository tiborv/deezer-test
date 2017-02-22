import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tiles from 'grommet/components/Tiles'

import { fetchAlbums } from '../actions/artist'
import { AlbumTile } from '../components/albumTile'
import { TrackList } from './trackList'

export class AlbumListField extends Component {

  componentDidMount () {
    this.props.fetchAlbums()
  }

  render () {
    return this.props.albums ? (
      <Tiles flush={false} fill>
        { this.props.albums.map((a, i) => <AlbumTile {...a}
          key={i}
          index={i}
          trackList={<TrackList id={a.id} />}
        />) }
      </Tiles>
    ) : null
  }
}

const mapStateToProps = (state, ownProps) => ({
  albums: state.artist.albums
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAlbums: () => dispatch(fetchAlbums(ownProps.id))
})

export const AlbumList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumListField)
