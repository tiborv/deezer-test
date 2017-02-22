import React from 'react'
import { Link } from 'react-router'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import Columns from 'grommet/components/Columns'
import Section from 'grommet/components/Section'
import CloseIcon from 'grommet/components/icons/base/Close'

import { ArtistProfile } from '../containers/artistProfile'

export default ({ params }) => (
  <Section>
    <Header>
      <Columns justify='center'>
        <Heading align='center'>
          <Link to='/'>
            <CloseIcon />
          </Link>
        </Heading>
      </Columns>
    </Header>
    <Section>
      <ArtistProfile {...params} />
    </Section>
  </Section>
)
