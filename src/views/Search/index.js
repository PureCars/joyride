import React from 'react'
import SearchResultsLoadable from '../../loadables/SearchResults'

export default function SearchView(props) {
  return <SearchResultsLoadable queryParams={props.location.search} />
}
