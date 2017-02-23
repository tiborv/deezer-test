import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetch } from '../actions/artist'
import { ArtistHero } from '../components/artistHero'
import { AlbumList } from './albumList'

export class ArtistProfileField extends Component {

  componentDidMount () {
    this.props.fetch()
  }

  render () {
    return (
      <ArtistHero {...this.props.profile} children={<AlbumList id={this.props.id} />} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  profile: state.artist.profile
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetch: () => dispatch(fetch(ownProps.id))
})

export const ArtistProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistProfileField)
