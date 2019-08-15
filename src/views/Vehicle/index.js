import React from 'react'
import VehicleDetails from '../../loadables/VehicleDetails'

export default function VehicleView({ match }) {
  return <VehicleDetails id={match.params.vehicleId} />
}
