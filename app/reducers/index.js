import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const middlewares = process.env.NODE_ENV === 'development' ? [createLogger(), thunkMiddleware] : [thunkMiddleware]

import artist from './artist'
import search from './search'
import album from './album'

export default createStore(
  combineReducers({
    routing: routerReducer,
    artist,
    album,
    search
  }),
  applyMiddleware(...middlewares)
)
