import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CardLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.mui.spacing(1)}px;
  text-decoration: none;
`

export const CardWrapper = styled.div`
  padding: ${({ theme }) => theme.mui.spacing(1)}px;
`
