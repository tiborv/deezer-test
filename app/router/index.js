import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from '../views/root'
import SearchPage from '../views/search'
import ArtistPage from '../views/artist'

export default ({ store }) => {
  const history = syncHistoryWithStore(browserHistory, store)
  return (
    <Router history={history}>
      <Route component={Root}>
        <Route path='/' component={SearchPage} />
        <Route path='/artist/:id' component={ArtistPage} />
      </Route>
    </Router>
  )
}
