import styled from 'styled-components'
import Typography from '../Typography'

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 174px;
  width: 260px;
`

export const VehicleInfo = styled.div`
  padding: ${({ theme }) => theme.mui.spacing(1.5)}px;
`

export const PriceLine = styled(Typography)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`
