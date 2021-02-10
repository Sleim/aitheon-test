import axios from 'axios'

const request = axios.create({
  baseURL: 'There will be a proccess.env.API_URL',
  timeout: 600000,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token',
  }
})

export default request
