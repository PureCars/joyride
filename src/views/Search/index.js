import React from 'react'
import SearchResultsLoadable from '../../loadables/SearchResults'
import SearchForm from '../../loadables/SearchForm'

export default function SearchView(props) {
  const {
    location: { search },
    history
  } = props
  return (
    <>
      <SearchForm
        variant="lite"
        onSubmit={search => history.push(`/search?${search}`)}
      />
      <SearchResultsLoadable queryParams={search} history={history} />
    </>
  )
}
