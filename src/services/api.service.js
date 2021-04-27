import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1'

const request = ({ url, method, data = {} }) => {
  const response = axios[method](`${API_URL}/${url}`, data)
  return response
}

export { request }
