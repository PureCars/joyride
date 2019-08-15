import React from 'react'
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { LoadableProvider } from '../../utils/loadable'
import Page from '../../components/Page'
import PricesView from '../Prices'

const muiTheme = createMuiTheme()
function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <LoadableProvider>
            <Page>
              <Router>
                <Switch>
                  <Route path="/prices" component={PricesView} />
                  <Redirect exact from="/" to="/prices" />
                </Switch>
              </Router>
            </Page>
          </LoadableProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App
