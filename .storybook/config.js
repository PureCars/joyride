import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import { configure, addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'
import { ThemeProvider } from 'styled-components'
import { light, mui } from '../src/themes'
import 'storybook-chromatic'

addDecorator(storyFn => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={mui}>
      <ThemeProvider theme={{ ...light, mui }}>{storyFn()}</ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
))

const req = requireContext('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
