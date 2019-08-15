import React, { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import VehicleList from '../../components/VehicleList'
// import ListToolbar from '../../components/ListToolbar'
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
  console.log(responseJson)

  return responseJson.map(result => ({
    imageUrl: result.photo.url.thumb,
    title: result.title,
    details: [result.subtitle],
    price: result.price.cash,
    payment: result.price.monthly
  }))
}

export default function SearchResultsLoadable(props) {
  const queryParams = queryString.parse(props.queryParams)
  const [vehicles, setVehicles] = useState()
  useEffect(() => {
    async function fetchData() {
      const results = await getVehicleResults(queryParams)
      console.log(results)
      setVehicles(results)
    }
    fetchData()
  }, Object.values(queryParams))

  return (
    <div>
      <SearchForm />
      {vehicles ? <VehicleList vehicles={vehicles} /> : 'loading...'}
    </div>
  )
}
