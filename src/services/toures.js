import { request } from './api.service'

const getToures = () => request({ url: 'toure', method: 'get' })
const getTore = (id) => request({ url: `toure/${id}`, method: 'get' })
const createToure = (data) => request({ url: 'toure', method: 'post', data })
const updateToure = (id, data) =>
  request({ url: `toure/${id}`, method: 'put', data })
const deleteToure = (id) => request({ url: `toure/${id}`, method: 'delete' })

export { getTore, getToures, createToure, updateToure, deleteToure }
