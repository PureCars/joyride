import styled from 'styled-components'
import Typography from '../Typography'

export const VehicleImage = styled.img`
  overflow: hidden;
  width: 100%;
`

export const VehicleInfo = styled.div`
  padding: ${({ theme }) => theme.mui.spacing(1.5)}px;
`

export const PriceLine = styled(Typography)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`
