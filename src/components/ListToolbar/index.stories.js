import React from 'react'
import { storiesOf } from '@storybook/react'
import { ListToolbar } from './index'

storiesOf('Components|ListToolbar', module)
  .add('default', () => (
    <ListToolbar
      resultCount={42}
      chips={[]}
    />
  ))