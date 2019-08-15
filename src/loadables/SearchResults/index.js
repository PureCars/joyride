import React, { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import VehicleList from '../../components/VehicleList'
import { ListToolbar } from '../../components/ListToolbar'
import omit from 'lodash/omit'
import formatString from '../../utils/getStringFormatter'
const queryString = require('query-string')

function SearchForm() {
  return (
    <form>
      <TextField />
    </form>
  )
}

function getApiQuery(queryParams) {
  const queryFilters = Object.keys(queryParams).map(key => ({
    'widget-data': {
      criterion: key,
      'selected-values': [queryParams[key]]
    }
  }))

  queryFilters.push({
    'widget-data': {
      criterion: 'distance',
      'selected-values': ['30316', '50 Miles']
    }
  })

  return {
    'criteria-gui': queryFilters
  }
}

async function getVehicleResults(queryParams) {
  const response = await fetch(
    'https://apix.purecars.com/joyride/public/search/results',
    {
      method: 'POST',
      body: JSON.stringify(getApiQuery(queryParams))
    }
  )

  const responseJson = await response.json()

  return responseJson.map(result => ({
    id: result.id,
    imageUrl: result.photo.url.thumb,
    title: result.title,
    details: [result.subtitle],
    price: formatString('Currency')(result.price.cash),
    payment: `${formatString('Currency')(result.price.monthly)}/month`
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
