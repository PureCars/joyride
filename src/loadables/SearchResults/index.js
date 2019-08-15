import React, { useEffect, useState } from 'react'
import VehicleList from '../../components/VehicleList'
import VehicleListSkeleton from '../../components/VehicleList/Skeleton'
import { ListToolbar } from '../../components/ListToolbar'
import omit from 'lodash/omit'
import formatString from '../../utils/getStringFormatter'
const queryString = require('query-string')

function getApiQuery(queryParams) {
  const queryFilters = Object.keys(queryParams).map(key => ({
    'widget-data': {
      criterion: key,
      'selected-values': [
        queryParams[key].charAt(0).toUpperCase() + queryParams[key].slice(1)
      ]
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
  const history = props.history
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
    const queryParamString = queryString.stringify(omit(queryParams, key))
    history.push(`/search?${queryParamString}`)
    setQueryParams(omit(queryParams, key))
  }

  function handleResetFilters() {
    history.push(`/search`)
    setQueryParams({})
  }

  return vehicles ? (
    <>
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
    </>
  ) : (
    <VehicleListSkeleton />
  )
}
