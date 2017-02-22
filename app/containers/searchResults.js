import React from 'react'
import { connect } from 'react-redux'
import Tiles from 'grommet/components/Tiles'
import Animate from 'grommet/components/Animate'

import { ArtistTile } from '../components/artistTile'

export const SearchResultsList = ({ results, searching }) => results ? (
  <Animate leave={{'animation': 'slide-up', 'duration': 300, 'delay': 0}} visible={!searching}>
    <Tiles flush={false} fill>
      { results.map((r, i) => <ArtistTile {...r} key={i} index={i} />) }
    </Tiles>
  </Animate>
) : null

const mapStateToProps = (state, ownProps) => ({
  results: state.search.results,
  searching: state.search.searching
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsList)
