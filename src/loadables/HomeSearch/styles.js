import InputBase from '@material-ui/core/InputBase'
import Icon from '@material-ui/icons/Search'
import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`

export const SearchIcon = styled(Icon)`
  font-size: 42px;
  color: white;
  margin-right: 12px;
`

export const SearchField = styled(InputBase)`
  input {
    font-size: 24px;
    color: white;
  }
  flex: 1;
  max-width: 350px;

  border: none;
  border-radius: 0;
  border-bottom: 2px solid white;
`

export const SearchButton = styled.button`
  border-radius: 32px;
  padding: 16px 32px;
  background: black;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 12px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.1s linear;
  &:disabled {
    background: #464646;
    color: #8c8c8c;
    cursor: default;
    transition: background-color 0.1s linear;
  }
`
