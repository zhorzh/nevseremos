import React, {Component, Fragment} from 'react'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const UserDetails = ({userId}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      {({users, actions}) =>
        <span>UserDetails {userId}</span>
      }
    </AuthContextConsumer>
  </ErrorBoundary>

export default UserDetails
