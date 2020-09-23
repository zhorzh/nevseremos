import axios from 'axios'

export default class AppAPI {
  headers = (token) => (token ?
    {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }}
    :
    {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }}
  )

  createAdmin = (email, password) => {
    return axios.post(
      process.env.API_URL + '/user', {
        'email': email,
        'password': password,
        'is_admin': true,
      },
      this.headers()
    )
  }

  createUser = (email, password) => {
    return axios.post(
      process.env.API_URL + '/user', {
        'email': email,
        'password': password,
        'is_admin': false,
      },
      this.headers()
    )
  }

  deleteUser = (id) => {
    return axios.delete(
      process.env.API_URL + '/user/' + id,
      // {},
      this.headers()
    )
  }

  updateAdmin = (id, email) => {
    return axios.patch(
      process.env.API_URL + '/user/' + id,
      {'email': email},
      this.headers()
    )
  }

  getAllAdmins = () => {
    return axios.get(
      process.env.HOST_URL + '/api/users',
      {params: {is_admin: true}},
      this.headers()
    )
  }

  getAllUsers = () => {
    return axios.get(
      process.env.HOST_URL + '/api/users',
      {params: {is_admin: false}},
      this.headers()
    )
  }

  getAPIStatus = () => {
    return axios.get(
      process.env.HOST_URL + '/api/status',
      this.headers()
    )
  }

}
