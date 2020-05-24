import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  CssBaseline,
  MuiThemeProvider
} from 'material-ui'

import {AppContextProvider} from './context/app-context'
import ErrorBoundary from './component/error-boundary'
import NavRouter from './component/nav-router'
import {theme} from './theme'


class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <AppContextProvider>
          <CssBaseline>
            <MuiThemeProvider theme={theme}>
              <NavRouter />
            </MuiThemeProvider>
          </CssBaseline>
        </AppContextProvider>
      </ErrorBoundary>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
