import React from 'react'
import VehicleCard from '../VehicleCard'
import { ListWrapper, CardLink } from './styles'

const VehicleList = ({ vehicles }) => (
  <ListWrapper>
    {vehicles.map(i => (
      <CardLink>
        <VehicleCard
          imageUrl={i.imageUrl}
          title={i.title}
          details={i.details}
          price={i.price}
          payment={i.payment}
        />
      </CardLink>
    ))}
  </ListWrapper>
)

export default VehicleList
