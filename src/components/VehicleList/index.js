import React from 'react'
import VehicleCard from '../VehicleCard'
import { ListWrapper, CardWrapper } from './styles'

const VehicleList = ({ vehicles }) => (
  <ListWrapper>
    {vehicles.map(i => (
      <CardWrapper>
        <VehicleCard
          imageUrl={i.imageUrl}
          title={i.title}
          details={i.details}
          price={i.price}
          payment={i.payment}
        />
      </CardWrapper>
    ))}
  </ListWrapper>
)

export default VehicleList
