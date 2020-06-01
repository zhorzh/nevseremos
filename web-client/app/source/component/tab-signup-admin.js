import React, {Component, Fragment} from 'react'
import {
  withStyles,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import FormSignupAdmin from './form-signup-admin'
import AuthSnackbar from './auth-snackbar'


const styles = theme => ({})

const SignupAdminTab = ({classes}) =>
  <Fragment>
    <FormSignupAdmin />
    <AuthSnackbar />
  </Fragment>

export default withStyles(styles)(SignupAdminTab)
