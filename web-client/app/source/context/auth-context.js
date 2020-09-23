import React, {Component, createContext} from 'react'
import AppAPI from './../api/appAPI'
import history from './../history'
import {initial_state} from './auth-initial-state'
import {events} from './auth-events'
import {reduce} from './auth-reduce'
// import {uiNotification} from './../event'
import * as eventos from './../event'

const AuthContext = createContext()
let appAPI = new AppAPI

export class AuthContextProvider extends Component {
  state = {
    ...initial_state,
    dispatch: event => {this.setState((state) => reduce(event, state))},
    actions: {
      to_profile: () => {
        history.push('/admin/profile')
      },

      login: (email, password) => {
        console.log('Not implemented')
      },

      logoutAdmin: () => {
        localStorage.clear()
        history.push('/admin')
      },

      registerAdmin: (email, password) => {
        if (email && password) {
          appAPI.createAdmin(email, password)
            .then(response => {
              console.log(response)
              this.state.dispatch(events.adminRegistered(email, password))
              localStorage.setItem('token', response.data.token)
              localStorage.setItem('user', response.data.user)
              history.push('/admin/admins')
              this.state.actions.getAllAdmins()
            })
            .catch(error => {
              if (error.response) {
                this.state.dispatch(eventos.uiNotification(error.response.data.message))
              }
            })
        } else {
          this.state.dispatch(events.uiError('All fields required!'))
        }
      },

      selectUser: (userId, userEmail) => {
          history.push('/admin/user/' + userId)
      },

      selectAdmin: (userId, userEmail) => {
          this.state.dispatch(events.adminSelected(userId))
          history.push('/admin/admin/' + userId)
      },

      deleteUser: (id) => {
        appAPI.deleteUser(id)
          .then(response => {
            console.log(response)
            this.state.dispatch(events.uiNotification('user deleted'))
            this.state.actions.getAllUsers()
            this.state.actions.getAllAdmins()
          })
          .catch(error => {
            console.log(error)
            alert('error')
            this.state.dispatch(events.userDeleted(id))
          })
      },

      getAllUsers: () => {
        appAPI.getAllUsers()
          .then(response => {
            this.state.dispatch(events.allUsersReceived(response.data.users))
          })
          .catch(error => {console.log(error)})
      },

      getAllAdmins: () => {
        appAPI.getAllAdmins()
          .then(response => {
            this.state.dispatch(events.allAdminsReceived(response.data.users))
          })
          .catch(error => {console.log(error)})
      },

      closeSnackbar: () => {
        this.state.dispatch(events.snackbarClosed())
      },

      changeUserPassword: (password) => {
        this.state.dispatch(events.userPasswordChanged(password))
      },

      changeUserEmail: (email) => {
        this.state.dispatch(events.userEmailChanged(email))
      },

      changeSelectedAdminEmail: (email) => {
        this.state.dispatch(events.selectedAdminEmailChanged(email))
      },

      updateSelectedAdmin: (id, email) => {
        appAPI.updateAdmin(id, email)
          .then(response => {
            console.log(response)
            this.state.dispatch(events.uiNotification('Selected admin updated'))
            this.state.actions.getAllAdmins()
            history.push('/admin/admins')
          })
          .catch(error => {
            console.log(error)
            this.state.dispatch(events.uiError('error'))
          })
      },
    }
  }

  componentDidMount = () => {
    this.state.actions.getAllUsers()
    this.state.actions.getAllAdmins()
  }

  render = () => {
    const {state, props: {children}} = this
    return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
  }
}

export const AuthContextConsumer = AuthContext.Consumer
