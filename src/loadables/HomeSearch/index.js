import React, { useState } from 'react'
import { Redirect } from 'react-router'
import queryString from 'query-string'
import TextField from '@material-ui/core/TextField'
import LandingBanner from '../../components/LandingBanner'

function parseQuery(query) {
  const [year, make, model] = query.split(' ')
  return queryString.stringify({ year, make, model })
}

function SearchForm() {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(parseQuery(query))
  }

  return search ? (
    <Redirect
      to={{
        pathname: '/search',
        search: `?${search}`
      }}
    />
  ) : (
    <form onSubmit={handleSubmit}>
      <TextField value={query} onChange={e => setQuery(e.target.value)} />
    </form>
  )
}

export default function HomeSearchLoadable() {
  return (
    <LandingBanner
      form={SearchForm}
      title="Discover, drive, and buy with Joyride."
      image="https://firebasestorage.googleapis.com/v0/b/joyride-hacked.appspot.com/o/images%2Fvehicle.png?alt=media&token=319e2953-b093-4cd1-b2cb-2b1ee703ad04"
    />
  )
}
