import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '../Typography'
import IdealImage from 'react-ideal-image'
import { ImageWrapper, VehicleInfo, PriceLine } from './styles'

const VehicleCard = ({
  className,
  imageUrl,
  title,
  details,
  price,
  payment
}) => {
  return (
    <Card className={className}>
      <ImageWrapper>
        <IdealImage
          placeholder={{ color: '#d8d8d8' }}
          alt="vehicle-photo"
          srcSet={[{ src: imageUrl, width: 260 }]}
          width={260}
          height={174}
        />
      </ImageWrapper>
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
}

export default VehicleCard
