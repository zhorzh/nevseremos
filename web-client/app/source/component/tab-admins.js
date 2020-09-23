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
  Typography,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const styles = theme => ({
  list: {
    backgroundColor: theme.palette.background.main,
    height: '100vh'
  },
  typography: {
    // color: theme.palette.textSecondary.main,
  },
})

const AdminsTab = ({classes}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      {({admins, actions}) =>
        <List className={classes.list}
              component='nav'
              subheader={<ListSubheader component='div'>
                           Admins list
                         </ListSubheader>} >
          {admins.map(admin =>
            <ListItem key={admin.id}
                      button
                      onClick={event => actions.selectAdmin(admin.id,
                                                            admin.email)} >
              <ListItemAvatar>
                <Avatar>
                  <Icon>account_circle</Icon>
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary={
                <Typography color="secondary">
                  {admin.email}
                </Typography>
              }>
              </ListItemText>

              <ListItemSecondaryAction>
                <Switch edge="start"
                        checked={admin.is_active}
                        inputProps={{ 'aria-labelledby': admin.id }} />

                <IconButton edge="end"
                            color="primary"
                            aria-label="delete"
                            onClick={event => actions.deleteUser(admin.id)} >
                  <Icon>delete</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      }
    </AuthContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(AdminsTab)
