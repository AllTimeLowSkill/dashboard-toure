import Vue from 'vue'
import Vuex from 'vuex'

import Toures from './toures'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Toures,
  },
})
