import React from 'react'
import TextField from '@material-ui/core/TextField'
import LandingBanner from '../../components/LandingBanner'

function SearchForm() {
  return (
    <form>
      <TextField />
    </form>
  )
}

export default function HomeSearchLoadable() {
  return (
    <LandingBanner
      form={SearchForm}
      title="Discover, drive, and buy with Joyride."
      image="https://firebasestorage.googleapis.com/v0/b/joyride-hacked.appspot.com/o/images%2Fvehicle.png?alt=media&token=319e2953-b093-4cd1-b2cb-2b1ee703ad04"
    />
  )
}
