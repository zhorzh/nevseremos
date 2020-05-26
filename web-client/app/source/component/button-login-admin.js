import React, {Component} from 'react'
import {
  withStyles,
  Button
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AppContextConsumer} from './../context/app-context'


const styles = theme => ({
  input: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main
  },
})

const LoginButton = ({classes}) =>
  <ErrorBoundary>
    <AppContextConsumer>
      {({actions}) =>
        <Button variant='contained'
                color='secondary'
                onClick={event => actions.to_login()}
                className={classes.input} >
          login
        </Button>
      }
    </AppContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(LoginButton)
