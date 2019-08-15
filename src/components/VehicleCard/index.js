import React from 'react'
import Typography from '../Typography'
import IdealImage from 'react-ideal-image'
import DirectionsCar from '@material-ui/icons/DirectionsCar'
import { Card, Title, ImageWrapper, VehicleInfo, PriceLine } from './styles'

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
          icons={{ error: () => <DirectionsCar style={{ fontSize: 64 }} /> }}
        />
      </ImageWrapper>
      <VehicleInfo>
        <Title variant="h7">{title}</Title>
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
