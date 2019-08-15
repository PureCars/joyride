import styled from 'styled-components'

export const SummaryBanner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.mui.spacing(1)}px;
`

export const Button = styled.div`
  cursor: pointer;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.mui.palette.primary.main};
  padding: 12px;
  padding-left: 50px;
  padding-right: 50px;
  text-decoration: none;
  span {
    color: #fafafa !important;
  }
`
