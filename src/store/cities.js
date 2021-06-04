import { getCities, createCity, deleteCity } from '../services/cities'

const mutations = {
  SET_CITIES(state, payload) {
    state.cities = payload
  },
  CREATE_CITY(state, payload) {
    state.cities = payload
  },
  DELETE_CITY(state, payload) {
    state.cities = payload
  },
}
const actions = {
  async fetchCities({ commit }) {
    try {
      const items = await getCities()
      commit('SET_CITIES', items.data)
    } catch (error) {
      console.log(error)
    }
  },
  async fetchCreateCity({ commit }, data) {
    try {
      const items = await createCity(data)
      commit('CREATE_CITY', items.data)
    } catch (error) {
      console.log(error)
    }
  },
  async fetchDeleteCity({ commit }, id) {
    try {
      const items = await deleteCity(id)
      commit('DELETE_CITY', items.data)
    } catch (error) {
      console.log(error)
    }
  },
}
const getters = {
  cities: ({ cities }) => cities,
}
const state = () => ({
  cities: [],
})

export default {
  mutations,
  actions,
  getters,
  state,
}
