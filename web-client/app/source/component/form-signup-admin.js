import React, {Component} from 'react'
import {
  withStyles,
  Typography,
  TextField,
  Button,
  Grid,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AuthContextConsumer} from './../context/auth-context'


const styles = theme => ({
  container: {
    minHeight: 'calc(100vh - 112px)'
  },
  input: {
    margin: theme.spacing(1),
    width: '300px',
    color: theme.palette.primary.main
  },
  submitButton: {
    marginTop: '28px',
  },
})

const FormSignupAdmin = ({classes}) =>
  <ErrorBoundary>
    <AuthContextConsumer>
      {({signupForm, actions}) =>
        <form>
          <Grid container
                className={classes.container}
                direction="column"
                alignItems="center"
                justify = "center">
            <Typography variant='h6' color='primary'>Signup</Typography>
            <Grid item>
              <TextField id='user-email'
                         label='email'
                         defaultValue={signupForm.email}
                         onChange={event => actions.changeUserEmail(event.target.value)}
                         className={classes.input} />
            </Grid>

            <Grid item>
              <TextField id='user-password'
                         type='password'
                         label='password'
                         defaultValue={signupForm.password}
                         onChange={event => actions.changeUserPassword(event.target.value)}
                         className={classes.input} />
            </Grid>

            <Grid item className={classes.submitButton}>
              <Button variant='contained'
                      color='secondary'
                      onClick={event => actions.registerAdmin(
                        signupForm.email,
                        signupForm.password
                      )}
                      className={classes.input} >
                signup
              </Button>
            </Grid>
          </Grid>
        </form>
      }
    </AuthContextConsumer>
  </ErrorBoundary>

export default withStyles(styles)(FormSignupAdmin)
