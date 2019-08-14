import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const VehicleImage = styled.img`
  overflow: hidden;
  width: 100%;
`

export const Title = styled(Typography)`
  padding-left: ${({ theme }) => theme.mui.spacing(1)}px;
  padding-right: ${({ theme }) => theme.mui.spacing(1)}px;
`

export const Details = styled(Typography)`
padding-left: ${({ theme }) => theme.mui.spacing(1)}px;
padding-right: ${({ theme }) => theme.mui.spacing(1)}px;
`

export const PriceLine = styled(Typography)`
  padding-left: ${({ theme }) => theme.mui.spacing(1)}px;
  padding-right: ${({ theme }) => theme.mui.spacing(1)}px;
  display: flex;
  justify-content: space-between;
` 