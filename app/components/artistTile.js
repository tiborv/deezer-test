import React from 'react'
import { Link } from 'react-router'
import Card from 'grommet/components/Card'
import Tile from 'grommet/components/Tile'
import Animate from 'grommet/components/Animate'

/* eslint-disable camelcase */

export const ArtistTile = ({ picture_medium, name, id, index }) => (
  <Animate enter={{'animation': 'slide-up', 'duration': 300, 'delay': index * 200}}>
    <Link to={`/artist/${id}`}>
      <Tile size='small' >
        <Card textAlign='center' colorIndex='neutral-1' thumbnail={picture_medium} label={name} />
      </Tile>
    </Link>
  </Animate>
)
