import React from 'react'
import VehicleCard from '../VehicleCard'
import { ListWrapper, CardLink } from './styles'

const VehicleList = ({ vehicles }) => {
  return (
    <ListWrapper>
      {vehicles.map(i => (
        <CardLink key={i.id} to={`/vehicle/${i.id}`}>
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
}

export default VehicleList
