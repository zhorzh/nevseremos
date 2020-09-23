import React, {Component} from 'react'
import {
  withStyles
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const styles = theme => ({
})

const ProfileTab = ({classes}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      <span>profile</span>
    </AuthContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(ProfileTab)
