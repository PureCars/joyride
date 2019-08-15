import React, { useState } from 'react'
import queryString from 'query-string'
import LandingBanner from '../../components/LandingBanner'
import SearchForm from '../SearchForm'

export default function HomeSearchLoadable({ history }) {
  return (
    <LandingBanner
      form={() => (
        <SearchForm onSubmit={search => history.push(`/search?${search}`)} />
      )}
      title="Discover, drive, and buy with Joyride."
      image="https://firebasestorage.googleapis.com/v0/b/joyride-hacked.appspot.com/o/images%2Fvehicle.png?alt=media&token=319e2953-b093-4cd1-b2cb-2b1ee703ad04"
    />
  )
}
