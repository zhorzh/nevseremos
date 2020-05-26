import React, {Component, Fragment} from 'react'
import {
  withStyles,
  Snackbar,
  SnackbarContent,
  IconButton,
  Icon,
  Slide,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const styles = theme => ({
  success: {
    backgroundColor: theme.palette.success,
  },
  error: {
    backgroundColor: theme.palette.error,
  },
  info: {
    backgroundColor: theme.palette.info,
  },
  warning: {
    backgroundColor: theme.palette.warning,
  },
})

const AuthSnackbar = ({classes}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      {({snackbar, actions}) =>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          open={snackbar.isOpen}
          ContentProps={{'aria-describedby': 'message-id'}}
          TransitionComponent={Slide}
          autoHideDuration={3000}
          onClose={event => actions.closeSnackbar()}
        >
          <SnackbarContent
            className={classes[snackbar.variant]}
            variant={snackbar.variant}
            message={<span id='message-id'>{snackbar.message}</span>}
            action={[
              <IconButton
                key='close'
                aria-label='Close'
                color='inherit'
                onClick={event => actions.closeSnackbar()} >
                <Icon>close</Icon>
              </IconButton>,
            ]}
          />
        </Snackbar>
      }
    </AuthContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(AuthSnackbar)
