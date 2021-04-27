import {
  getToures,
  getTore,
  deleteToure,
  createToure,
  updateToure,
} from '../services/toures'

const mutations = {
  SET_TOURES(state, payload) {
    state.toures = payload
  },

  SET_TOURE(state, payload) {
    state.toure = payload
  },

  DELETE_TOURE(state, payload) {
    state.toures = payload
  },

  CREATE_TOURE(state, payload) {
    state.toures = payload
  },

  UPDATE_TOURE(state, payload) {
    state.toures = payload
  },
}
const actions = {
  async fetchToures({ commit }) {
    try {
      const items = await getToures()
      commit('SET_TOURES', items.data)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchToure({ commit }, id) {
    try {
      const item = await getTore(id)
      commit('SET_TOURE', item.data)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchDeleteToure({ commit }, id) {
    try {
      const items = await deleteToure(id)
      commit('DELETE_TOURE', items.data)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchCreateToure({ commit }, data) {
    try {
      const items = await createToure(data)
      commit('CREATE_TOURE', items.data)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchUpdateToure({ commit }, { id, data }) {
    try {
      const items = await updateToure(id, data)
      commit('UPDATE_TOURE', items.data)
    } catch (error) {
      console.log(error)
    }
  },
}
const getters = {
  toures: ({ toures }) => toures,
  toure: ({ toure }) => toure,
}
const state = () => ({
  toures: [],
  toure: {},
})

export default {
  mutations,
  actions,
  getters,
  state,
}
