import React, { useState } from 'react'
import queryString from 'query-string'
import {
  FormBase,
  FormLite,
  SearchField,
  SearchIcon,
  SearchButton
} from './styles'

function parseQuery(query) {
  const [year, make, model] = query.split(' ')
  return queryString.stringify({ year, make, model })
}

export default function SearchForm({ onSubmit, variant }) {
  const [query, setQuery] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(parseQuery(query))
  }

  const Form = variant === 'lite' ? FormLite : FormBase

  return (
    <Form onSubmit={handleSubmit}>
      <SearchIcon />
      <SearchField
        autoFocus
        placeholder="Search by year, make, model"
        variant="outlined"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {variant !== 'lite' && (
        <SearchButton type="submit" disabled={!query}>
          Search
        </SearchButton>
      )}
    </Form>
  )
}
