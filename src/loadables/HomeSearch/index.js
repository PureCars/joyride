import React, { useState } from 'react'
import { Redirect } from 'react-router'
import queryString from 'query-string'
import TextField from '@material-ui/core/TextField'
import LandingBanner from '../../components/LandingBanner'

function parseQuery(query) {
  const [year, make, model] = query.split(' ')
  return queryString.stringify({ year, make, model })
}

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(parseQuery(query))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={query} onChange={e => setQuery(e.target.value)} />
    </form>
  )
}

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
