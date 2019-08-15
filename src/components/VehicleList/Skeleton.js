import React from 'react'
import times from 'lodash/times'
import { ListWrapper, CardWrapper } from './styles'
import VehicleCardSkeleton from '../VehicleCard/Skeleton'

export default function VehicleListSkeleton() {
  return (
    <ListWrapper>
      {times(12, i => (
        <CardWrapper key={i}>
          <VehicleCardSkeleton variant="h1" />
        </CardWrapper>
      ))}
    </ListWrapper>
  )
}
