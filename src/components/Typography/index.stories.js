import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from './index'

storiesOf('Components|Typography', module)
  .add('variants', () => (
    <>
      <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="h7" gutterBottom>
        h7. Heading
      </Typography>
      <Typography variant="body1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body3" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body4" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </>
  ))
  .add('colors', () => (
    <>
      <Typography color="textPrimary" gutterBottom>
        textPrimary
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        textSecondary
      </Typography>
      <Typography color="disabled" gutterBottom>
        disabled
      </Typography>
      <Typography color="primary" gutterBottom>
        primary
      </Typography>
      <Typography color="error" gutterBottom>
        error
      </Typography>
    </>
  ))
