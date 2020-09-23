import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {
  withStyles,
  Divider,
  Tabs,
  Tab,
  ListItemIcon,
  Icon,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from 'material-ui'

import {AppContextConsumer} from './../context/app-context'
import {AuthContextConsumer} from './../context/auth-context'
import AuthSnackbar from './auth-snackbar'
import ErrorBoundary from './error-boundary'
import {theme} from './../theme'


const styles = theme => ({
  drawer: {
    width: 250,
    height: '100%',
    backgroundColor: theme.palette.error.main,
    color: theme.palette.secondary
  },
  icon: {
    color: theme.palette.secondary
  },
  tabs: {
    // color: theme.palette.secondary
  }
})

const NavTabs = ({classes}) =>
  <ErrorBoundary>
    <Fragment>
      <AppContextConsumer>
        {({dispatch, user}) => (
          <Tabs
            // className={classes.tabs}
            // textColor="secondary"
            scrollButtons="on"
            variant="scrollable"
            value={location.pathname}
            onChange={(event, value) => dispatch({type: 'SET_ACTIVE_TAB', tab: value})
          }>
            <Tab value='/admin' label='users' component={Link} to='/admin' />
            <Tab value='/admin/admins' label='admins' component={Link} to='/admin/admins' />
            <Tab value='/admin/pages' label='pages' component={Link} to='/admin/pages' />
          </Tabs>
        )}
      </AppContextConsumer>

      <AuthSnackbar />

      <AppContextConsumer>
        {({dispatch, drawer, actions}) => (
          <SwipeableDrawer
            open={drawer.isOpen}
            onClose={event => actions.closeDrawer()}
            onOpen={event => actions.openDrawer()}
          >
            <div
              className={classes.drawer}
              tabIndex={0}
              role="button"
              onClick={event => actions.closeDrawer()}
              onKeyDown={event => actions.closeDrawer()}
            >
              <AuthContextConsumer>
                {({user, actions}) =>
                  <Fragment>
                    <List>
                      <ListItem onClick={event => actions.to_profile()} button key='profile'>
                        <ListItemIcon>
                          <Icon className={classes.icon}>face</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Profile' />
                      </ListItem>
                    </List>
                    <Divider />
                    <List>
                      {['Settings', 'Mail templates'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>
                            <Icon className={classes.icon}>mail</Icon>
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                  </Fragment>
                }
              </AuthContextConsumer>
            </div>
          </SwipeableDrawer>
        )}
      </AppContextConsumer>
    </Fragment>
  </ErrorBoundary>

export default withStyles(styles)(NavTabs)
