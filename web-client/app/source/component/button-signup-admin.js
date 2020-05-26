import React, {Component} from 'react'
import {
  withStyles,
  Button,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AppContextConsumer} from './../context/app-context'


const styles = theme => ({
  input: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main
  },
})

const SignupButton = ({classes}) =>
  <ErrorBoundary>
    <AppContextConsumer>
      {({actions}) =>
        <Button variant='contained'
                color='secondary'
                onClick={event => actions.to_signup()}
                className={classes.input} >
          signup
        </Button>
      }
    </AppContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(SignupButton)
