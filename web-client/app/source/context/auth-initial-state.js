export let initial_state = {
  user: {
    id: null,
    email: null,
    token: null,
  },
  token: null,
  snackbar: {isOpen: false, message: ''},
  signupForm: {name: '', email: ''},
  users: [],
  admins: [],
  selectedUser: null,
  selectedAdmin: null,
}
