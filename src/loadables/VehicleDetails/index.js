import React, { useEffect, useState } from 'react'
import VehicleImagesBanner from '../../components/VehicleImagesBanner'
import VehicleSummary from '../../components/VehicleSummary'
import { ImageGrid } from '../../components/ImageGrid'

async function getVehicleDetails(vehicleId) {
  const response = await fetch(
    `https://apix.purecars.com/joyride/public/vehicles/${vehicleId}`
  )

  const responseJson = await response.json()

  console.log(responseJson)

  return responseJson

  // return responseJson.map(result => ({
  //   id: result.id,
  //   imageUrl: result.photo.url.thumb,
  //   title: result.title,
  //   details: [result.subtitle],
  //   price: formatString('Currency')(result.price.cash),
  //   payment: `${formatString('Currency')(result.price.monthly)}/month`
  // }))
}

export default function VehicleDetailsLoadable({ id: vehicleId }) {
  const [vehicleDetails, setVehicleDetails] = useState()
  useEffect(() => {
    async function fetchData() {
      const results = await getVehicleDetails(vehicleId)
      console.log(results)
      setVehicleDetails(results)
    }
    fetchData()
  }, [vehicleId])

  getVehicleDetails(vehicleId)
  return vehicleDetails ? (
    <>
      <VehicleImagesBanner vehicle={vehicleDetails}></VehicleImagesBanner>
      <VehicleSummary vehicle={vehicleDetails}></VehicleSummary>
      <ImageGrid
        imageUrls={vehicleDetails.features
          .filter(feature => feature.imageUrl)
          .map(feature => feature.imageUrl)}
      ></ImageGrid>
    </>
  ) : (
    'loading...'
  )
}
