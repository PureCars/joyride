import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Wrapper, Information } from './styles'

export function LandingBanner({ title, form: Form, image }) {
  return (
    <Wrapper>
      <Information>
        <Typography variant="h3">{title}</Typography>
        <Form />
      </Information>
      <img src={image} />
    </Wrapper>
  )
}
