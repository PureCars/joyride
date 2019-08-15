import React, { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import VehicleList from '../../components/VehicleList'
import { ListToolbar } from '../../components/ListToolbar'
import omit from 'lodash/omit'
const queryString = require('query-string')

function SearchForm() {
  return (
    <form>
      <TextField />
    </form>
  )
}

async function getVehicleResults({ year, make, model }) {
  console.log(`YMM: ${year} ${make} ${model}`)
  const response = await fetch(
    'https://apix.purecars.com/joyride/public/search/results',
    {
      method: 'POST',
      body: JSON.stringify({
        'criteria-gui': [
          {
            'widget-data': {
              criterion: 'year',
              'selected-values': [year]
            }
          },
          {
            'widget-data': {
              criterion: 'make',
              'selected-values': [make]
            }
          },
          {
            'widget-data': {
              criterion: 'model',
              'selected-values': [model]
            }
          },
          {
            'widget-data': {
              criterion: 'distance',
              'selected-values': ['30316', '50 Miles']
            }
          }
        ]
      })
    }
  )

  const responseJson = await response.json()

  return responseJson.map(result => ({
    imageUrl: result.photo.url.thumb,
    title: result.title,
    details: [result.subtitle],
    price: result.price.cash,
    payment: result.price.monthly
  }))
}

export default function SearchResultsLoadable(props) {
  const [queryParams, setQueryParams] = useState(
    queryString.parse(props.queryParams)
  )
  const [vehicles, setVehicles] = useState()
  useEffect(() => {
    async function fetchData() {
      const results = await getVehicleResults(queryParams)
      setVehicles(results)
    }
    fetchData()
  }, [queryParams])

  function handleChipDelete(key) {
    setQueryParams(omit(queryParams, key))
  }

  function handleResetFilters() {
    setQueryParams({})
  }

  return (
    <div>
      <SearchForm />
      {vehicles ? (
        <div>
          <ListToolbar
            itemCount={vehicles.length}
            chips={Object.keys(queryParams).map(key => ({
              key: key,
              value: queryParams[key]
            }))}
            onResetFilters={handleResetFilters}
            onDeleteChip={key => handleChipDelete(key)}
            onChangeSort={() => console.log('sort changed')}
          />
          <VehicleList vehicles={vehicles} />
        </div>
      ) : (
        'loading...'
      )}
    </div>
  )
}
