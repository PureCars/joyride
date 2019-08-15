import styled from 'styled-components'
import background from './background.svg'

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  padding: ${({ theme }) => theme.mui.spacing(10)}px;
  align-items: center;
  justify-content: space-between;
`

export const Information = styled.div`
  width: 500px;
`

export const FormWrapper = styled.div`
  margin-top: ${({ theme }) => theme.mui.spacing(4)}px;
`

export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 500px;
`
export const Image = styled.img`
  width: 100%;
`
