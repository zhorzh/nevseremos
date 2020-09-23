import {initial_state} from './auth-initial-state'

export const reduce = (event, state) => {
  console.log('-----------------------------------------------------------')
  console.log('event data: ', event)
  console.log('previous state: ', state)
  let nextState
  switch (event.type) {
    case 'SIGNUP_FORM_USER_PASSWORD_CHANGED':
      nextState = {
        ...state,
        signupForm: {...state.signupForm, password: event.password}
      }
      console.log('next state: ', nextState)
      return nextState

    case 'SIGNUP_FORM_USER_EMAIL_CHANGED':
      nextState = {
        ...state,
        signupForm: {...state.signupForm, email: event.email}
      }
      console.log('next state: ', nextState)
      return nextState

    case 'SELECTED_ADMIN_EMAIL_CHANGED':
      nextState = {
        ...state,
        selectedAdmin: {
          ...state.selectedAdmin,
          email: event.email
        }
      }
      console.log('next state: ', nextState)
      return nextState

    // case 'ANONYMOUS_WORKER_ACCOUNT_CREATED':
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       account: event.data,
    //       isAnonymous: true,
    //       isWorker: true,
    //     },
    //     snackbar: {isOpen: true, message: 'Worker account created'}
    //   }

    // case 'WORKER_PROFILE_UPDATED':
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       profile: event.data,
    //       isAnonymous: false,
    //       isWorker: true,
    //     },
    //     formProfile: {
    //       email: event.data.email,
    //       bio: event.data.bio,
    //       avatar: event.data.avatar,
    //       name: event.data.name,
    //     },
    //     snackbar: {isOpen: true, message: 'Worker profile updated'}
    //   }

    case 'UI_NOTIFICATION':
      nextState = {
        ...state,
        snackbar: {
          variant: event.variant,
          isOpen: true,
          message: event.message
        }
      }
      console.log('next state: ', nextState)
      return nextState

    case 'RESPONSE_ERROR':
      nextState = {
        ...state,
        snackbar: {
          variant: event.variant,
          isOpen: true,
          message: event.message}
      }
      console.log('next state: ', nextState)
      return nextState

    case 'UI_ERROR':
      nextState = {
        ...state,
        snackbar: {
          variant: event.variant,
          isOpen: true,
          message: event.message
        }
      }
      console.log('next state: ', nextState)
      return nextState

    case 'SNACKBAR_CLOSED':
      return {
        ...state,
        snackbar: {...state.snackbar, isOpen: false}
      }

    case 'ALL_USERS_RECEIVED':
      nextState = {
        ...state,
        users: event.users
      }
      console.log('next state: ', nextState)
      return nextState

    case 'ALL_ADMINS_RECEIVED':
      nextState = {
        ...state,
        admins: event.admins
      }
      console.log('next state: ', nextState)
      return nextState

    case 'ADMIN_SELECTED':
      console.log(state.admins.find(admin => admin.id === event.id))
      nextState = {
        ...state,
        selectedAdmin: state.admins.find(admin => admin.id === event.id)
      }
      console.log('next state: ', nextState)
      return nextState

    case 'USER_SELECTED':
      console.log(state.users.find(user => user.id === event.id))
      nextState = {
        ...state,
        selectedAdmin: state.users.find(user => user.id === event.id)
      }
      console.log('next state: ', nextState)
      return nextState

    // case 'USER_LOGGED_IN':
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       account: {
    //         id: event.data.id,
    //         channel: event.data.channel,
    //       },
    //       profile: {
    //         avatar: event.data.avatar,
    //         email: event.data.email,
    //         name: event.data.name,
    //         bio: event.data.bio,
    //       },
    //       isAnonymous: event.data.is_anonymous,
    //       isWorker: event.data.is_worker,
    //       isEmployer: event.data.is_employer,
    //     },
    //     channel: event.data.channel,
    //     token: event.data.token,
    //   }

    // case 'USER_LOGGED_OUT':
    //   console.log('*', initial_state)
    //   return {
    //     ...initial_state,
    //     snackbar: {isOpen: true, message: event.message}
    //   }

    // case 'RESTORE_USER_PROFILE':
    //   return {
    //     ...state,
    //     user: {...state.user, profile: event.data.profile}
    //   }

    // case 'RESTORE_USER_ACCOUNT':
    //   return {
    //     ...state,
    //     user: {...state.user, account: event.data.account}
    //   }

    // case 'RESTORE_USER_STATUS':
    //   return {
    //     ...state,
    //     user: {...state.user,
    //       isAnonymous: event.data.isAnonymous,
    //       isWorker: event.data.isWorker,
    //       isEmployer: event.data.isEmployer,
    //     }
    //   }
  }
}
