import React from 'react'
import { storiesOf } from '@storybook/react'
import { LandingBanner } from './index'

storiesOf('Components|LandingBanner', module).add('default', () => (
  <LandingBanner
    title="Discover, drive, and buy with Joyride."
    form={() => <div>Nice Form</div>}
    image={
      'https://di-uploads-pod16.dealerinspire.com/josephtoyotaofcincinnati/uploads/2018/10/toyota_camry2019_grey.png'
    }
  />
))
