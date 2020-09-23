export let events = {
  uiNotification: (message) => ({
    variant: 'info',
    type: 'UI_NOTIFICATION',
    message: message
  }),

  uiError: (message) => ({
    variant: 'error',
    type: 'UI_ERROR',
    message: message
  }),

  responseError: (message) => ({
    variant: 'error',
    type: 'RESPONSE_ERROR',
    message: message
  }),

  adminLoggedOut: () => ({
    type: 'ADMIN_LOGGED_OUT',
    message: 'Admin is logged out'
  }),

  adminSelected: (id) => ({
    type: 'ADMIN_SELECTED',
    id: id
  }),

  adminLoggedIn: () => ({
   type: 'ADMIN_LOGGED_IN',
   message: 'Admin is logged in'
  }),

  adminRegistered: (email, password) => ({
    type: 'SIGNUP_FORM_ADMIN_REGISTERED',
    email: email,
    password: password
  }),

  userLoggedOut: () => ({
    variant: 'success',
    type: 'USER_LOGGED_OUT',
    message: 'User is logged out'
  }),

  userLoggedIn: () => ({
    variant: 'success',
    type: 'USER_LOGGED_IN',
    message: 'User is logged in'
  }),

  userPasswordChanged: (password) => ({
    type: 'SIGNUP_FORM_USER_PASSWORD_CHANGED',
    password: password
  }),

  userEmailChanged: (email) => ({
    type: 'SIGNUP_FORM_USER_EMAIL_CHANGED',
    email: email
  }),

  selectedAdminEmailChanged: (email) => ({
    type: 'SELECTED_ADMIN_EMAIL_CHANGED',
    email: email
  }),

  userRegistered: (email, password) => ({
    type: 'SIGNUP_FORM_USER_REGISTERED',
    email: email,
    password: password
  }),

  userDeleted: (id) => ({
    type: 'USER_DELETED',
    id: id
  }),

  allUsersReceived: (users) => ({
    type: 'ALL_USERS_RECEIVED',
    users: users
  }),

  allAdminsReceived: (admins) => ({
    type: 'ALL_ADMINS_RECEIVED',
    admins: admins
  }),

  snackbarClosed: () => ({
    type: 'SNACKBAR_CLOSED'
  }),
}
