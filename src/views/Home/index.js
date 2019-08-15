import React from 'react'
import HomeSearch from '../../loadables/HomeSearch'
import NavBar from '../../loadables/NavBar'

export default function HomeView({ history }) {
  return (
    <>
      <NavBar />
      <HomeSearch history={history} />
    </>
  )
}
