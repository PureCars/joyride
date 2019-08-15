import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  align-items: center;

  ${({ variant }) =>
    variant === 'filled'
      ? `
    background-color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  `
      : ''}
`

const Logo = styled(Link)`
  padding: 0 32px 0 16px;
`

export default function NavBar({ children, variant }) {
  return (
    <Wrapper variant={variant}>
      <Logo to="/">
        <img src={logo} />
      </Logo>
      {children}
    </Wrapper>
  )
}
