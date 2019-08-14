import React from 'react'
import Card from '@material-ui/core/Card'
import { VehicleImage, VehicleInfo, Title, Details, PriceLine } from './styles'

const VehicleCard = ({
  className,
  imageUrl,
  title,
  details,
  price,
  payment
}) => (
  <Card className={className}>
    <VehicleImage alt="vehicle-photo" src={imageUrl} />
    <VehicleInfo>
      <Title>{title}</Title>
      <Details>{details.join(' | ')}</Details>
      <PriceLine>
        <div>{price}</div>
        <div>{payment}</div>
      </PriceLine>
    </VehicleInfo>
  </Card>
)

export default VehicleCard
