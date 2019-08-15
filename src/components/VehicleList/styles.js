import styled from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CardLink = styled.a`
  display: block;
  padding: ${({ theme }) => theme.mui.spacing(1)}px;
`
