import styled from 'styled-components'
import CardBase from '@material-ui/core/Card'
import Typography from '../Typography'

export const Card = styled(CardBase)`
  max-width: 260px;
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 174px;
  width: 260px;
`

export const VehicleInfo = styled.div`
  padding: ${({ theme }) => theme.mui.spacing(1.5)}px;
`
export const Title = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const PriceLine = styled(Typography)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`
