import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { mui } from '../../themes'
import { LoadableProvider } from '../../utils/loadable'
import HomeView from '../Home'
import SearchView from '../Search'
import VehicleView from '../Vehicle'

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={mui}>
        <ThemeProvider theme={{ mui }}>
          <LoadableProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/search" component={SearchView} />
                <Route
                  exact
                  path="/vehicle/:vehicleId"
                  component={VehicleView}
                />
              </Switch>
            </Router>
          </LoadableProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App
