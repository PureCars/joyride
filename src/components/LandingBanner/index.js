import React from 'react'
import Typography from '../Typography'
import {
  Wrapper,
  Information,
  FormWrapper,
  Image,
  ImageWrapper
} from './styles'

export default function LandingBanner({ title, form: Form, image }) {
  return (
    <Wrapper>
      <Information>
        <Typography variant="h1">{title}</Typography>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </Information>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
    </Wrapper>
  )
}
