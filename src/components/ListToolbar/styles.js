import styled from 'styled-components'
import { Typography, Chip } from '@material-ui/core'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
`

export const Chips = styled.div`
  margin: 0 ${({ theme }) => theme.mui.spacing()}px 0
    ${({ theme }) => theme.mui.spacing()}px;
`

export const FilterInfo = styled.div`
  display: flex;
  align-items: baseline;
`

export const SortSelect = styled.div`
  display: flex;
  align-items: baseline;
`

export const LinkTypography = styled(Typography)`
  color: ${({ theme }) => theme.mui.palette.primary.main};
  &:hover {
    color: pink;
    cursor: pointer;
  }
`

export const StyledChip = styled(Chip)`
  margin: 0 ${({ theme }) => theme.mui.spacing()}px 0
    ${({ theme }) => theme.mui.spacing()}px;
`
