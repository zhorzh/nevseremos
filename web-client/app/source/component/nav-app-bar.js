import React, {Component, Fragment} from 'react'
import {
  withStyles,
  Avatar,
  AppBar,
  Toolbar,
  Icon,
  IconButton,
  Typography
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from '../context/auth-context'
import {AppContextConsumer} from './../context/app-context'
import NavTabs from './nav-tabs'
import LogoutAdminButton from './button-logout-admin'
import LoginAdminButton from './button-login-admin'
import SignupAdminButton from './button-signup-admin'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const NavAppBar = ({classes}) =>
  <ErrorBoundary>
    <AppBar position='sticky'>
      <Toolbar color='primary'>
        <AppContextConsumer>
          {({dispatch, drawer, actions}) => (
            <IconButton onClick={event => actions.openDrawer()} color='secondary'>
              <Icon>menu</Icon>
            </IconButton>
          )}
        </AppContextConsumer>

        <Typography className={classes.grow} variant='h6' color="secondary">
          Market
        </Typography>

        <AuthContextConsumer>
          {({user}) =>
            <Fragment>
              <LoginAdminButton />
              <SignupAdminButton />
            </Fragment>
          }
        </AuthContextConsumer>
      </Toolbar>
      <NavTabs />
    </AppBar>
  </ErrorBoundary>

export default withStyles(styles)(NavAppBar)
