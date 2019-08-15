import React from 'react'
import { Wrapper, Image } from './styles'

export const ImageGrid = ({ imageUrls }) => {
  return (
    <Wrapper>
      {imageUrls.map(imageUrl => <Image src={imageUrl}/>)}
    </Wrapper>
  )
}