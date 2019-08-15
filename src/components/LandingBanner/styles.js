import styled from 'styled-components'

export const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  padding: ${({ theme }) => theme.mui.spacing(10)}px;
  align-items: center;
  justify-content: space-between;
  height: 600px;
  background-color: #fafafa;
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 100vh;

  :before {
    z-index: 0;
    content: '';
    position: absolute;
    right: 35%;
    width: 100%;
    height: 300%;
    top: -100%
    background-color: ${({ theme }) => theme.mui.palette.primary.main};
    transform: rotate(30deg);
  }
`

export const Information = styled.div`
  width: 500px;
  z-index: 1;
`

export const FormWrapper = styled.div`
  margin-top: ${({ theme }) => theme.mui.spacing(4)}px;
  z-index: 1;
`

export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 1;
`
export const Image = styled.img`
  width: 100%;
  z-index: 1;
`
