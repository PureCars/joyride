import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import { configure, addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'
import { ThemeProvider } from 'emotion-theming'
import { light, mui } from '../src/themes'
import 'storybook-chromatic'

addDecorator(storyFn => (
  <StylesProvider injectFirst>
    <MuiThemeProvider them={mui}>
      <ThemeProvider theme={light}>{storyFn()}</ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
))

const req = requireContext('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
