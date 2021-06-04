import { request } from './api.service'

const getCities = () => request({ url: 'city', method: 'get' })
const createCity = (data) => request({ url: 'city', method: 'post', data })
const deleteCity = (id) => request({ url: `city/${id}`, method: 'delete' })

export { getCities, createCity, deleteCity }
