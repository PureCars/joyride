import React from 'react'
import LandingBanner from '../../components/LandingBanner'

export default function HomeSearchLoadable() {
  return (
    <LandingBanner
      form={() => 'fake form'}
      title="Discover, drive, and buy with Joyride."
      image="https://firebasestorage.googleapis.com/v0/b/joyride-hacked.appspot.com/o/images%2Fvehicle.png?alt=media&token=319e2953-b093-4cd1-b2cb-2b1ee703ad04"
    />
  )
}
