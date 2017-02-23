import React from 'react'
import Section from 'grommet/components/Section'

import { SearchBox } from '../containers/searchBox'
import { SearchResults } from '../containers/searchResults'

export default () => (
  <Section>
    <Section >
      <SearchBox colorIndex='neutral-1' />
    </Section>
    <Section>
      <SearchResults />
    </Section>
  </Section>
)
