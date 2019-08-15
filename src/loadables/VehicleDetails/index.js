import React, { useEffect, useState } from 'react'
import VehicleImagesBanner from '../../components/VehicleImagesBanner'
import VehicleSummary from '../../components/VehicleSummary'
import Page from '../../components/Page'
import { ImageGrid } from '../../components/ImageGrid'

async function getVehicleDetails(vehicleId) {
  const response = await fetch(
    `https://apix.purecars.com/joyride/public/vehicles/${vehicleId}`
  )

  const responseJson = await response.json()

  return responseJson
}

export default function VehicleDetailsLoadable({ id: vehicleId }) {
  const [vehicleDetails, setVehicleDetails] = useState()
  useEffect(() => {
    async function fetchData() {
      const results = await getVehicleDetails(vehicleId)
      setVehicleDetails(results)
    }
    fetchData()
  }, [vehicleId])

  return vehicleDetails ? (
    <>
      <VehicleImagesBanner vehicle={vehicleDetails}></VehicleImagesBanner>
      <Page>
        <VehicleSummary vehicle={vehicleDetails}></VehicleSummary>
        <ImageGrid
          imageUrls={vehicleDetails.features
            .filter(feature => feature.imageUrl)
            .map(feature => feature.imageUrl)}
        ></ImageGrid>
      </Page>
    </>
  ) : (
    'loading...'
  )
}
