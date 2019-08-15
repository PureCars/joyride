import React from 'react'
import Typography from '../Typography'
import { Features, Feature } from './styles'

const VehicleFeatures = ({ vehicle }) => (
  <>
    <Typography variant="h3">Features</Typography>
    <Features>
      {vehicle.features
        .filter(f => f.imageUrl)
        .map(f => (
          <Feature src={f.imageUrl} alt="Feature" />
        ))}
    </Features>
  </>
)

export default VehicleFeatures
