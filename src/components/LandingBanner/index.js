import React from 'react'
import Typography from '@material-ui/core/Typography'
import {
  Wrapper,
  Information,
  FormWrapper,
  Image,
  ImageWrapper
} from './styles'

export function LandingBanner({ title, form: Form, image }) {
  return (
    <Wrapper>
      <Information>
        <Typography variant="h3">{title}</Typography>
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
