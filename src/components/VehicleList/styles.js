import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CardLink = styled.a`
  display: block;
  padding: ${({ theme }) => theme.mui.spacing(1)}px;
  width: 260px;
`
