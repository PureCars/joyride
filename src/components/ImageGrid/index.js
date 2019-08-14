import React from 'react'
import styled from '@emotion/styled/macro'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-context: space-between;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const ImageGrid = ({ imageUrls }) => {
  return (
    <Wrapper>
      {imageUrls.map(imageUrl => <Image src={imageUrl}/>)}
    </Wrapper>
  )
}