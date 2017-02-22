import React, { Component } from 'react'
import Card from 'grommet/components/Card'
import Tile from 'grommet/components/Tile'
import Animate from 'grommet/components/Animate'

/* eslint-disable camelcase */

export class AlbumTile extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      init: true
    }
  }
  render () {
    const { cover_medium, title, index, trackList } = this.props
    const { open, init } = this.state
    return open ? (
      <Tile size='small' colorIndex='neutral-1' onClick={() => this.setState({open: !open, init: false})} >
        <Animate enter={{'animation': 'fade', 'duration': 300}}>
          { trackList }
        </Animate>
      </Tile>
    ) : (
      <Animate enter={{'animation': 'slide-up', 'duration': 300, 'delay': init ? index * 200 : 0}}
        leave={{'animation': 'slide-down', 'duration': 300}}>
        <Tile size='small' onClick={() => this.setState({open: !open})} >
          <Card textAlign='center' colorIndex='neutral-1' thumbnail={cover_medium} label={title} />
        </Tile>
      </Animate>
    )
  }
}
