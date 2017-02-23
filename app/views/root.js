import React from 'react'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Columns from 'grommet/components/Columns'
import Header from 'grommet/components/Header'

export default ({ children }) => (
  <App centered >
    <Header>
      <Columns justify='center'>
        <Heading align='center'>TIBAL</Heading>
      </Columns>
    </Header>
    <Box>
      { children }
    </Box>
  </App>
)
