import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'grommet/components/Table'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'

import { fetchTracks } from '../actions/album'
import { TrackListItem } from '../components/TrackListItem'

export class TrackListField extends Component {

  componentDidMount () {
    this.props.fetchTracks()
  }

  render () {
    const { albums, id } = this.props
    if (!albums || !albums[id]) return null
    const { tracks, title } = albums[id]
    return (
      <Box>
        <Heading>{title}</Heading>
        <Table>
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            { tracks.map((t, i) => <TrackListItem {...t} key={i} />)}
          </tbody>
        </Table>
      </Box>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  albums: state.album.albums
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTracks: () => dispatch(fetchTracks(ownProps.id))
})

export const TrackList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackListField)
