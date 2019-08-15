import React from 'react'
import Typography from '../Typography'
import { SummaryBanner, Button } from './styles'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const VehicleSummary = ({ vehicle }) => (
  <SummaryBanner>
    <div>
      <Typography variant="h3">{vehicle.title}</Typography>
      <Typography variant="h4">
        {vehicle.subtitle} | {numberWithCommas(vehicle.mileage)} miles
      </Typography>
    </div>
    <div>
      <Typography variant="h3">
        ${numberWithCommas(vehicle.price.cash)}
      </Typography>
      <Typography variant="h4">
        ${numberWithCommas(Math.round(vehicle.price.monthly))}/month
      </Typography>
    </div>
    <div>
      <Button href="#">
        <Typography variant="h5" component="span">
          Start Purchase
        </Typography>
      </Button>
    </div>
  </SummaryBanner>
)

export default VehicleSummary
