import React from 'react'
import { Banner, Photo } from './styles'

const VehicleImagesBanner = ({ vehicle }) => (
  <Banner>
    {vehicle.photos.map(p => (
      <Photo src={p.url.lg} alt="Vehicle" />
    ))}
  </Banner>
)

export default VehicleImagesBanner
