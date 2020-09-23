import React, {Component, Fragment} from 'react'
import {
  withStyles,
  LinearProgress,
  TextField,
  Button,
  Grid,
  Typography,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const styles = theme => ({
  container: {
    minHeight: 'calc(100vh - 112px)'
  },
  input: {
    margin: theme.spacing(1),
    width: '300px'
  },
  submitButton: {
    marginTop: '28px'
  }
})


const AdminDetails = ({userId, classes}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      {({selectedAdmin, actions}) =>
        <form>
          <Grid container
                className={classes.container}
                direction="column"
                alignItems="center"
                justify = "center">
            <Typography variant='h6' color='inherit'>Edit admin</Typography>
            <Grid item>
              <TextField id='user-email'
                         label='email'
                         defaultValue={selectedAdmin.email}
                         onChange={event => actions.changeSelectedAdminEmail(event.target.value)}
                         className={classes.input} />
            </Grid>

            <Grid item className={classes.submitButton}>
              <Button variant='contained'
                      color='secondary'
                      onClick={event => actions.updateSelectedAdmin(
                        selectedAdmin.id,
                        selectedAdmin.email
                      )}
                      className={classes.input} >
                save changes
              </Button>
            </Grid>
          </Grid>
        </form>
      }
    </AuthContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(AdminDetails)
