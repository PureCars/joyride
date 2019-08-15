import React from 'react'
import { Card, ImageWrapper, VehicleInfo, PriceLine } from './styles'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Skeleton = styled.div`
  height: 20px;
  width: ${({ width }) => width}px;
  background-color: #d8d8d8;
  border-radius: 10px;
  margin-bottom: 8px;
`

const ImageSkeleton = styled.div`
  height: 100%;
  width: 100%;
  background-color: #d8d8d8;
`
export default function VehicleCardSkeleton() {
  return (
    <Card>
      <ImageWrapper>
        <ImageSkeleton />
      </ImageWrapper>
      <VehicleInfo>
        <Skeleton width={150} />
        <Skeleton width={170} />
        <PriceLine>
          <Skeleton width={80} />
          <Skeleton width={60} />
        </PriceLine>
      </VehicleInfo>
    </Card>
  )
}
