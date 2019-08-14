import React from 'react'
import { storiesOf } from '@storybook/react'
import { LandingBanner } from './index'

storiesOf('Components|LandingBanner', module).add('default', () => (
  <LandingBanner
    title="Discover, drive, and buy with Joyride."
    form={() => <div>Nice Form</div>}
    image={
      'https://firebasestorage.googleapis.com/v0/b/joyride-hacked.appspot.com/o/images%2Fvehicle.png?alt=media&token=319e2953-b093-4cd1-b2cb-2b1ee703ad04'
    }
  />
))
