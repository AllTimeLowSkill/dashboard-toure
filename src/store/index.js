import Vue from 'vue'
import Vuex from 'vuex'

import Toures from './toures'
import Cities from './cities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Toures,
    Cities,
  },
})
