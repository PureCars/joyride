import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const VehicleImage = styled.img`
  overflow: hidden;
  width: 100%;
`

export const VehicleInfo = styled.div`
  padding: ${({ theme }) => theme.mui.spacing(1.5)}px;
`

export const Title = styled(Typography)``

export const Details = styled(Typography)``

export const PriceLine = styled(Typography)`
  display: flex;
  justify-content: space-between;
`
