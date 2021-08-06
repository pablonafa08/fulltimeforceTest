import Axios from 'axios'

const instance = Axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: status => status <= 503,
})

export const HttpClient = instance
