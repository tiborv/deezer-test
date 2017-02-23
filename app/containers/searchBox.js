import { connect } from 'react-redux'

import { SearchField } from '../components/searchField'
import { search } from '../actions/artist'

const mapStateToProps = (state, ownProps) => ({
  query: state.search.query
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  executeSearch: (term) => dispatch(search(term))
})

export const SearchBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField)
