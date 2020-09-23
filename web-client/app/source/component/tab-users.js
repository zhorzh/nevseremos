import React, {Component, Fragment} from 'react'
import {
  withStyles,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Icon,
  IconButton,
  Switch,
  LinearProgress,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const styles = theme => ({
  list: {
    backgroundColor: theme.palette.background.main,
    height: '100vh'
  },
})


const UsersTab = ({classes}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      {({users, actions}) =>
        <List className={classes.list}
              component='nav'
              subheader={
                <ListSubheader component='div'>Users list</ListSubheader>
              }
        >
          {users.map(user =>
            <ListItem key={user.id}
                      button
                      onClick={event => actions.selectUser(user.id,
                                                           user.email)}
            >
              <ListItemAvatar>
                <Avatar>
                  <Icon>account_circle</Icon>
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary={user.email}></ListItemText>

              <ListItemSecondaryAction>
                <Switch
                  edge="start"
                  checked={user.is_active}
                  inputProps={{ 'aria-labelledby': user.id }}
                />

                <IconButton edge="end"
                            aria-label="delete"
                            onClick={event => actions.deleteUser(user.id)}
                >
                  <Icon>delete</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      }
    </AuthContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(UsersTab)
