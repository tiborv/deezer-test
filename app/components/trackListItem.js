import React from 'react'
import TableRow from 'grommet/components/TableRow'

import { secToMinSec } from '../utils/time'

export const TrackListItem = ({ duration, title }) => (
  <TableRow>
    <td>{title}</td>
    <td>{secToMinSec(duration)}</td>
  </TableRow>
)
