import React, {Component, Fragment} from 'react'

import ErrorBoundary from './error-boundary'
import LoginAdminForm from './form-login-admin'
import AuthSnackbar from './auth-snackbar'


const LoginAdminTab = () =>
  <Fragment>
    <LoginAdminForm />
    <AuthSnackbar />
  </Fragment>

export default LoginAdminTab
