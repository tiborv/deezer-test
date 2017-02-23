import 'grommet/scss/vanilla'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Router from './router'
import store from './reducers'

const container = document.createElement('div')
document.body.appendChild(container)

render(
  <Provider store={store}>
    <Router store={store} />
  </Provider>,
  container
)
