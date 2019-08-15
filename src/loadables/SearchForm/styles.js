import InputBase from '@material-ui/core/InputBase'
import Icon from '@material-ui/icons/Search'
import styled from 'styled-components'

export const FormBase = styled.form`
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

export const FormLite = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  ${SearchIcon} {
    font-size: 32px;
    color: #9e9e9e;
    margin-right: 8px;
  }

  ${SearchField} {
    border-bottom: none;
    font-size: 16px;
    input {
      color: #212121;
      font-size: 16px;
      padding: 0;
    }
  }
`
