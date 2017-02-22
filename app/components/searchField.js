import React, { Component } from 'react'
import Search from 'grommet/components/Search'
import throttle from 'lodash.throttle'

const THROTTLE_TIMEOUT = 5000

export class SearchField extends Component {

  search (searchTerm) {
    this.props.executeSearch(searchTerm)
  }

  render () {
    return <Search
      placeHolder={this.props.query || 'Search for an artist'}
      inline
      onDOMChange={throttle(e => this.search(e.target.value), THROTTLE_TIMEOUT)} />
  }
}
