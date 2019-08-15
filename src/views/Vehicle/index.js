import React from 'react'
import styled from 'styled-components'
import VehicleDetails from '../../loadables/VehicleDetails'
import SearchForm from '../../loadables/SearchForm'
import NavBar from '../../loadables/NavBar'

const PageWrapper = styled.div`
  padding: 50px 0;
`

export default function VehicleView({ match, history }) {
  return (
    <>
      <NavBar variant="filled">
        <SearchForm
          variant="lite"
          onSubmit={search => history.push(`/search?${search}`)}
        />
      </NavBar>
      <PageWrapper>
        <VehicleDetails id={match.params.vehicleId} />
      </PageWrapper>
    </>
  )
}
