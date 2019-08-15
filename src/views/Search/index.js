import React from 'react'
import styled from 'styled-components'
import SearchResultsLoadable from '../../loadables/SearchResults'
import SearchForm from '../../loadables/SearchForm'
import FilterForm from '../../loadables/FilterForm'
import NavBar from '../../loadables/NavBar'

const PageWrapper = styled.div`
  padding: 75px 16px 16px 300px;
  background: #fafafa;
`

const Sidenav = styled.aside`
  background: white;
  position: fixed;
  left: 0;
  top: 50px;
  height: calc(100vh - 50px);
  width: 270px;
  border-right: 1px solid #e1e1e1;
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
      <Sidenav>
        <FilterForm />
      </Sidenav>
      <PageWrapper>
        <SearchResultsLoadable queryParams={search} history={history} />
      </PageWrapper>
    </>
  )
}
