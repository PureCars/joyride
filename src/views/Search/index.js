import React from 'react'
import styled from 'styled-components'
import SearchResultsLoadable from '../../loadables/SearchResults'
import SearchForm from '../../loadables/SearchForm'
import NavBar from '../../loadables/NavBar'

const PageWrapper = styled.div`
  padding: 50px 16px 16px 16px;
`

export default function SearchView(props) {
  const {
    location: { search },
    history
  } = props
  return (
    <>
      <NavBar variant="filled">
        <SearchForm
          variant="lite"
          onSubmit={search => history.push(`/search?${search}`)}
        />
      </NavBar>
      <PageWrapper>
        <SearchResultsLoadable queryParams={search} history={history} />
      </PageWrapper>
    </>
  )
}
