import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '../Typography'
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
      <Typography variant="h7">{title}</Typography>
      <Typography variant="body3">{details.join(' | ')}</Typography>
      <PriceLine>
        <Typography variant="h6">{price}</Typography>
        <Typography variant="body3">{payment}</Typography>
      </PriceLine>
    </VehicleInfo>
  </Card>
)

export default VehicleCard
