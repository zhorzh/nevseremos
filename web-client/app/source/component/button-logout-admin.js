import React, {Component} from 'react'
import {
  withStyles,
  Button
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const styles = theme => ({
  input: {
    margin: theme.spacing(1),
  },
})

const LogoutButton = ({classes}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      {({actions}) =>
        <Button variant='contained'
                color='secondary'
                onClick={event => actions.logout()}
                className={classes.input} >
          logout
        </Button>
      }
    </AuthContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(LogoutButton)
